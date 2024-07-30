import { create } from "zustand";

interface StoreState {
  showSiteMenu: boolean;
  toggleSiteMenu: () => void;
  closeSiteMenu: () => void;
  showAppMenu: boolean;
  toggleAppMenu: () => void;
  closeAppMenu: () => void;
  navCategory: number;
  setNavCategory: (category: number) => void; // Updated type to accept a number
}

const useStore = create<StoreState>((set, get) => ({
  showSiteMenu: false,
  toggleSiteMenu: () => set((state) => ({ showSiteMenu: !state.showSiteMenu })),
  closeSiteMenu: () => set((state) => ({ showSiteMenu: false })),
  showAppMenu: false,
  toggleAppMenu: () => set((state) => ({ showAppMenu: !state.showAppMenu })),
  closeAppMenu: () => set((state) => ({ showAppMenu: false })),
  navCategory: 10,
  setNavCategory: (category: number) => set(() => ({ navCategory: category })), // Fixed implementation
}));

export default useStore;
