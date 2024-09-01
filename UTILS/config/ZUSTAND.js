/** @format */

import { create } from "zustand";

const useStore = create((set) => ({
  access: [],
  user: {},
  task: [],
  translate: [],
  detail_translate: {},
  publish: [],
  setAccess: (data) => set(() => ({ access: data })),
  setUser: (data) => set(() => ({ user: data })),
  setTask: (data) => set(() => ({ task: data })),
  setDetailTranslate: (data) => set(() => ({ detail_translate: data })),
  setTranslate: (data) => set(() => ({ translate: data })),
  setPublish: (data) => set(() => ({ publish: data })),
}));

export default useStore;
