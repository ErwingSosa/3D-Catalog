import { writable } from "svelte/store";

const initialState = {
  list: ["Inicio"],
};

export const state = writable({ ...initialState });

// Actions

// Reducers
