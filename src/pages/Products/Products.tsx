/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useRef, useState } from "react";
import { ProductContainer, SearchBar } from "./components";
import {
  useAddCategoryStore,
  useAddProductStore,
  useGetAllCategoriesStore,
  useGetAllProductsStore,
  useAddRecentStore,
  useDeleteProductStore,
} from "./stores";
import { Id, toast } from "react-toastify";
import { CustomPagination, Loader, Error } from "../../components";
import { checkAccessControl, getUserDetails } from "../../utils";
import { ROLES } from "../../config";
import {
  AddProductInput,
  AddRecentInput,
  UpdateProductInput,
  DeleteProductInput,
} from "./services/graphql";
import { useNavigate } from "react-router-dom";
import { useUpdateProductStore } from "./stores/updateProduct.store";
import { useGetAllRecentProductsStore } from "../Recents/stores";
import * as S from "./styles";
const Products = () => {
  const [isRetailer, setIsRetailer] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>(getUserDetails()?.id);
  const mutationToastIdRef = useRef<Id | null>(null);
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    skip: 0,
    limit: 12,
    title: "",
    categoryId: "",
    orderBy: "ASC",
    productIds: [],
    isRecentProduct: false,
  });
  const [categories, setCategories] = useState([]);

  const {
    getAllProductsResponse,
    getAllProductsLoading,
    getAllProductsError,
    fetchGetAllProducts,
    resetGetAllProducts,
  } = useGetAllProductsStore();

  const { getAllCategoriesResponse, fetchGetAllCategories } =
    useGetAllCategoriesStore();

  const {
    addCategoryResponse,
    addCategoryLoading,
    addCategoryError,
    fetchAddCategory,
    resetAddCategory,
  } = useAddCategoryStore();

  const {
    addProductResponse,
    addProductError,
    addProductLoading,
    fetchAddProduct,
    resetAddProduct,
  } = useAddProductStore();

  const {
    updateProductResponse,
    updateProductError,
    updateProductLoading,
    fetchUpdateProduct,
    resetUpdateProduct,
  } = useUpdateProductStore();

  const {
    addRecentResponse,
    addRecentError,
    addRecentLoading,
    fetchAddRecent,
    resetAddRecent,
  } = useAddRecentStore();

  const {
    deleteProductResponse,
    deleteProductError,
    deleteProductLoading,
    fetchDeleteProduct,
    resetDeleteProduct,
  } = useDeleteProductStore();

  const { fetchGetAllRecentProducts } = useGetAllRecentProductsStore();

  useEffect(() => {
    const role = getUserDetails()?.role;
    setIsRetailer(role === ROLES.retailer);
  }, []);

  useEffect(() => {
    fetchGetAllCategories();
  }, [fetchGetAllCategories]);

  useEffect(() => {
    if (
      getAllCategoriesResponse &&
      Object.keys(getAllCategoriesResponse).length > 0
    ) {
      setCategories(getAllCategoriesResponse.payload.categories || []);
    }
  }, [getAllCategoriesResponse]);

  useEffect(() => {
    fetchGetAllProducts(payload);
  }, [payload.categoryId]);

  const _showPendingToast = (message: string) => {
    mutationToastIdRef.current = toast.loading(message);
  };

  const _resolvePendingToast = (type: "success" | "error", message: string) => {
    if (mutationToastIdRef.current !== null) {
      toast.update(mutationToastIdRef.current, {
        render: message,
        type,
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      mutationToastIdRef.current = null;
      return;
    }

    toast[type](message);
  };

  useEffect(() => {
    if (addCategoryResponse && Object.keys(addCategoryResponse).length > 0) {
      resetAddCategory();
      fetchGetAllCategories();
      _resolvePendingToast("success", "Category Added Successfully !!");
    }
  }, [addCategoryResponse, fetchGetAllCategories, resetAddCategory]);

  useEffect(() => {
    if (addCategoryError && Object.keys(addCategoryError).length > 0) {
      resetAddCategory();
      _resolvePendingToast("error", addCategoryError);
    }
  }, [addCategoryError, resetAddCategory]);

  useEffect(() => {
    if (addProductResponse && Object.keys(addProductResponse).length > 0) {
      resetAddProduct();
      fetchGetAllProducts(payload);
      _resolvePendingToast("success", "Product Added Successfully !!");
    }
  }, [addProductResponse, fetchGetAllProducts, resetAddProduct]);

  useEffect(() => {
    if (addProductError && Object.keys(addProductError).length > 0) {
      resetAddProduct();
      _resolvePendingToast("error", addProductError);
    }
  }, [addProductError, resetAddProduct]);

  useEffect(() => {
    if (
      updateProductResponse &&
      Object.keys(updateProductResponse).length > 0
    ) {
      resetUpdateProduct();
      fetchGetAllProducts(payload);
      _resolvePendingToast(
        "success",
        updateProductResponse?.payload?.data || "Product Updated Successfully !!",
      );
    }
  }, [updateProductResponse, fetchGetAllProducts, resetUpdateProduct]);

  useEffect(() => {
    if (updateProductError && Object.keys(updateProductError).length > 0) {
      resetUpdateProduct();
      _resolvePendingToast("error", updateProductError);
    }
  }, [updateProductError, resetUpdateProduct]);

  useEffect(() => {
    if (addRecentResponse && Object.keys(addRecentResponse).length > 0) {
      resetAddRecent();
      fetchGetAllRecentProducts(userId);
    }
  }, [addRecentResponse, fetchAddRecent, resetAddRecent]);

  useEffect(() => {
    if (addRecentError && Object.keys(addRecentError).length > 0) {
      resetAddRecent();

      setTimeout(() => {
        toast.error(addRecentError);
      }, 1000);
    }
  }, [addRecentError, resetAddRecent]);

  useEffect(() => {
    if (deleteProductResponse && Object.keys(deleteProductResponse).length > 0) {
      resetDeleteProduct();
      fetchGetAllProducts(payload);
      _resolvePendingToast(
        "success",
        deleteProductResponse?.payload?.data || "Product deleted successfully.",
      );
    }
  }, [deleteProductResponse, fetchGetAllProducts, resetDeleteProduct]);

  useEffect(() => {
    if (deleteProductError && Object.keys(deleteProductError).length > 0) {
      resetDeleteProduct();
      _resolvePendingToast("error", deleteProductError);
    }
  }, [deleteProductError, resetDeleteProduct]);

  const _onSearchPress = (payloadOverride: Record<string, any> = {}) => {
    const nextPayload = {
      ...payload,
      ...payloadOverride,
      skip: 0,
    };

    setPayload((currentPayload: any) => ({
      ...currentPayload,
      ...payloadOverride,
      skip: 0,
    }));

    resetGetAllProducts();
    fetchGetAllProducts(nextPayload);
  };

  const _onSortPress = (type: string) => {
    setPayload((payload: any) => ({
      ...payload,
      orderBy: type,
      skip: 0,
    }));

    resetGetAllProducts();
    fetchGetAllProducts({
      ...payload,
      orderBy: type,
      skip: 0,
    });

  };

  const _onPageChange = (page: number) => {
    setPayload((payload: any) => ({
      ...payload,
      skip: (page - 1) * 12,
    }));

    resetGetAllProducts();
    fetchGetAllProducts({
      ...payload,
      skip: (page - 1) * 12,
    });
  };

  const _addCategory = (name: string) => {
    _showPendingToast("Adding category...");
    return fetchAddCategory(name);
  };

  const _addProduct = (args: AddProductInput) => {
    _showPendingToast("Adding product...");
    return fetchAddProduct(args);
  };

  const _UpdateProduct = (args: UpdateProductInput) => {
    _showPendingToast("Updating product...");
    return fetchUpdateProduct(args);
  };

  const _addRecent = (args: AddRecentInput) => {
    return fetchAddRecent(args);
  };

  const _deleteProduct = (args: DeleteProductInput) => {
    _showPendingToast("Deleting product...");
    return fetchDeleteProduct(args);
  };

  const _renderLoader = () => {
    if (getAllProductsLoading || updateProductLoading || deleteProductLoading) {
      return <Loader />;
    }

    return null;
  };

  const _renderPage = () => {
    if (
      getAllProductsResponse &&
      Object.keys(getAllProductsResponse).length > 0
    ) {
      const products = getAllProductsResponse?.payload?.products;
      if (products.length > 0) {
        return (
          <S.ContentCard>
            <ProductContainer
              products={products}
              categories={categories}
              isRetailer={isRetailer}
              updateProduct={_UpdateProduct}
              deleteProduct={_deleteProduct}
              addRecent={_addRecent}
            />
            <S.PaginationWrap>
              <CustomPagination
                perPageCount={12}
                totalPageCount={getAllProductsResponse?.payload?.totalCount}
                currentPage={payload?.skip / 12 + 1}
                onPageChange={_onPageChange}
              />
            </S.PaginationWrap>
          </S.ContentCard>
        );
      }

      return (
        <Error
          subtitle="No Data Found"
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllProducts();
            fetchGetAllProducts(payload);
          }}
        />
      );
    }

    if (getAllProductsError && getAllProductsError.length > 0) {
      return (
        <Error
          subtitle={getAllProductsError}
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllProducts();
            fetchGetAllProducts(payload);
          }}
        />
      );
    }
  };

  if (checkAccessControl("products")) {
    return (
      <S.PageShell>
        <S.ToolbarSection>
          <SearchBar
            categories={categories}
            addCategory={_addCategory}
            setPayload={setPayload}
            onSearchPress={_onSearchPress}
            onSortPress={_onSortPress}
            isRetailer={isRetailer}
            addProduct={_addProduct}
          />
          {_renderPage()}
        </S.ToolbarSection>
        {_renderLoader()}
      </S.PageShell>
    );
  }

  return (
    <Error
      subtitle="Page Not Found"
      buttonTitle="Go to Home"
      onPress={() => {
        navigate("/");
      }}
    />
  );
};

export default Products;
