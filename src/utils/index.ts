/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { ApolloError } from "@apollo/client";
import axios from "axios";
import { ACCESS_CONTROL_MANAGEMENT } from "../config";
import { config } from "../config";

let currentUser: any = null;

const USER_SCOPED_KEYS = new Set(["cartProducts", "totalPrice"]);

const getScopedStorage = (key: string): Storage =>
  USER_SCOPED_KEYS.has(key) ? sessionStorage : localStorage;

const getScopedStorageKey = (key: string): string => {
  if (!USER_SCOPED_KEYS.has(key)) {
    return key;
  }

  const userId = currentUser?.id || "guest";
  return `${key}:${userId}`;
};

const sanitizeCartProducts = (value: any): any[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item) => item && item.id)
    .map((item) => ({
      id: String(item.id),
      quantity: Math.max(1, Number(item.quantity || 1)),
      price: Math.max(0, Number(item.price || 0)),
    }));
};

export const setUserDetails = (user: any): void => {
  currentUser = user;
  window.dispatchEvent(
    new CustomEvent("user-updated", {
      detail: user,
    })
  );
};

export const getGraphqlError = (err: any): string => {
  let msg = "";

  if (err instanceof ApolloError) {
    if (err.graphQLErrors?.length > 0) {
      msg = err.graphQLErrors[0].message;
    } else if (err.networkError) {
      const networkErr: any = err.networkError;

      if (networkErr.result?.errors?.length > 0) {
        msg = networkErr.result.errors[0].message;
      } else if (networkErr.bodyText) {
        try {
          const parsed = JSON.parse(networkErr.bodyText);
          if (parsed.errors?.length > 0) {
            msg = parsed.errors[0].message;
          }
        } catch (_) {
          msg = networkErr.message;
        }
      } else {
        msg = networkErr.message;
      }
    }
  } else if (err?.message) {
    msg = err.message;
  }

  return msg;
};

export const setItemInLocalStorage = (key: string, value: any): void => {
  try {
    const storage = getScopedStorage(key);
    const storageKey = getScopedStorageKey(key);

    if (
      (key === "token" || key === "signInToken") &&
      typeof value === "string"
    ) {
      storage.setItem(storageKey, value);
    } else {
      const normalizedValue =
        key === "cartProducts" ? sanitizeCartProducts(value) : value;
      storage.setItem(storageKey, JSON.stringify(normalizedValue));
    }
  } catch (err) {
    console.error(`Error setting item in localStorage with key "${key}":`, err);
    throw err;
  }
};

export const getItemInLocalStorage = (key: string): any => {
  try {
    const storage = getScopedStorage(key);
    const storageKey = getScopedStorageKey(key);
    const item = storage.getItem(storageKey);
    if (!item) return undefined;
    if (key === "token" || key === "signInToken") {
      return item;
    }
    const parsedItem = JSON.parse(item);
    return key === "cartProducts"
      ? sanitizeCartProducts(parsedItem)
      : parsedItem;
  } catch (err) {
    console.error(
      `Error getting or parsing item from localStorage with key "${key}":`,
      err
    );
    return undefined;
  }
};

export const removeItemInLocalStorage = (key: string): any => {
  try {
    const storage = getScopedStorage(key);
    const storageKey = getScopedStorageKey(key);
    const item = storage.getItem(storageKey);
    if (item) {
      storage.removeItem(storageKey);
    }
  } catch (err) {
    console.error(
      `Error removing item from localStorage with key "${key}":`,
      err
    );
    throw err;
  }
};

export const fetchSessionUser = async (): Promise<any | null> => {
  try {
    const res = await axios.get(`${config.restBaseURL}/session`, {
      withCredentials: true,
    });

    const user = res?.data?.user
      ? {
          ...res.data.user,
          role: res.data.role,
        }
      : null;

    setUserDetails(user);
    return user;
  } catch (_) {
    setUserDetails(null);
    return null;
  }
};

export const logoutUser = async (): Promise<void> => {
  try {
    await axios.post(
      `${config.restBaseURL}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
  } catch (_) {
  } finally {
    setUserDetails(null);
  }
};

export const checkAccessControl = (pageName: string): boolean => {
  const userData = getUserDetails();

  return (
    userData?.role &&
    userData?.role.length > 0 &&
    ACCESS_CONTROL_MANAGEMENT.roles[userData?.role].includes(pageName)
  );
};

export const getUserDetails = (): any => {
  return currentUser;
};

export const convertFileToBase64 = (
  file: File | string,
  maxWidth = 150,
  maxHeight = 150,
  quality = 0.3
): Promise<string> =>
  new Promise((resolve, reject) => {
    if (typeof file === "string") {
      return resolve(file);
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth || height > maxHeight) {
          const ratio = width / height;
          if (width > height) {
            width = maxWidth;
            height = Math.round(maxWidth / ratio);
          } else {
            height = maxHeight;
            width = Math.round(maxHeight * ratio);
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas context not available"));

        ctx.drawImage(img, 0, 0, width, height);

        const mime = ["image/png", "image/gif", "image/webp"].includes(
          file.type
        )
          ? file.type
          : "image/jpeg";

        const base64 =
          mime === "image/jpeg"
            ? canvas.toDataURL(mime, quality)
            : canvas.toDataURL(mime);

        resolve(base64);
      };

      if (e.target?.result) img.src = e.target.result as string;
    };

    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
