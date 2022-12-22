import { writable } from "svelte/store";

const initialState = {
  folder: {
    path: "/",
    name: "",
  },
  loading: false,
  folders: [],
  errors: [],
};

export const state = writable({ ...initialState });

// Actions

// Reducers
const resetFolder = () => st;
