/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { create } from "zustand";
import UsersService from "../services";
import { GetAllUsersInput } from "../services/graphql";

type State = {
  getAllUsersLoading: boolean;
  getAllUsersResponse: any | null;
  getAllUsersError: string | null;
  fetchGetAllUsers: (args: GetAllUsersInput) => Promise<void>;
  resetGetAllUsers: () => void;
};

export const useGetAllUsersStore = create<State>((set) => ({
  getAllUsersLoading: false,
  getAllUsersResponse: null,
  getAllUsersError: null,

  fetchGetAllUsers: async (args: GetAllUsersInput) => {
    try {
      set({ getAllUsersLoading: true, getAllUsersError: null });
      const res = await UsersService.getAllUsersAPI(args);
      set({ getAllUsersResponse: res });
    } catch (err: any) {
      set({ getAllUsersError: err?.message });
    } finally {
      set({ getAllUsersLoading: false });
    }
  },

  resetGetAllUsers: () => {
    set({
      getAllUsersLoading: false,
      getAllUsersResponse: null,
      getAllUsersError: null,
    });
  },
}));
