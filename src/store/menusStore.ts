import { create } from "zustand";

interface StoreState {
  showSiteMenu: boolean;
  toggleSiteMenu: () => void;
  closeSiteMenu: () => void;
  showAppMenu: boolean;
  toggleAppMenu: () => void;
  closeAppMenu: () => void;
  navCategory: number | string;
  setNavCategory: (category: number | string) => void; // Updated type to accept a number
  setNavCategoryDesktop: (category: number | string) => void; // Updated type to accept a number
}

const useStore = create<StoreState>((set, get) => ({
  showSiteMenu: false,
  toggleSiteMenu: () => set((state) => ({ showSiteMenu: !state.showSiteMenu })),
  closeSiteMenu: () => set((state) => ({ showSiteMenu: false })),
  showAppMenu: false,
  toggleAppMenu: () => set((state) => ({ showAppMenu: !state.showAppMenu })),
  closeAppMenu: () => set((state) => ({ showAppMenu: false })),
  navCategory: "unset",
  setNavCategory: (category: number | string) => {
    set((state) => ({
      navCategory: state.navCategory === category ? "unset" : category,
    }));
  },
  setNavCategoryDesktop: (category: number | string) => {
    set((state) => ({
      navCategory: category,
    }));
  },
}));

export default useStore;
