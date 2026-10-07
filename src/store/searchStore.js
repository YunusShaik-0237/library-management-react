import { create } from "zustand";

const useSearchStore = create((set) => ({
  selectedItem: null,

  highlightedId: null,

  setSelectedItem: (item) =>
    set({
      selectedItem: item,
      highlightedId: item.id,
    }),

  clearSelectedItem: () =>
    set({
      selectedItem: null,
      highlightedId: null,
    }),
}));

export default useSearchStore;