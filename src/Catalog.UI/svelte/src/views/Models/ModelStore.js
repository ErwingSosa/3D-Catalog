import { writable } from "svelte/store";

const initialState = {
  model: {
    name: "",
    model: "",
    image: "",
    resources: "",
  },
  show: false,
};

export const state = writable({ ...initialState });

// Actions
export const showDetails = (model) => {
  resetModel();
  console.log(model);
  setModel(model);
};

// Reducers
export const show = () => state.update((v) => ({ ...v, show: true }));
const resetModel = () => state.update((v) => ({ ...v, model: {} }));
const setModel = (model) => state.update((v) => ({ ...v, model }));
