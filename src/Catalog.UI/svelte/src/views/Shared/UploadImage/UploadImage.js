import { get, writable } from "svelte/store";
import ImageController from "../../../../domain/controllers/ImageController";

const imageController = new ImageController();

const initialState = {
  src: "",
  image: "",
  data: {},
};

export const state = writable({ ...initialState });

// Actions
export const changeImage = (event) => {
  const image = event.target.files[0];
  const formData = new FormData();
  formData.append("image", image);
  const reader = new FileReader();

  if (!image) return;

  reader.readAsDataURL(image);
  reader.onloadend = () => {
    updateSRC(reader.result);
    updateImage(`/resources/images/${image.name}`);
    updateData(formData);
  };
};

export const upload = () => {
  const image = get(state).data;
  imageController
    .upload(image)
    .catch(({ response }) => {
      console.error(response);
    });
};

export const resetState = () => state.set({ ...initialState });

// Reducers
const updateSRC = (src) => state.update((v) => ({ ...v, src }));
const updateImage = (image) => state.update((v) => ({ ...v, image }));
const updateData = (data) => state.update((v) => ({ ...v, data }));
