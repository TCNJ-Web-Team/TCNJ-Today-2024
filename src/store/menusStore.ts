import { create } from "zustand";

interface StoreState {
  showSiteMenu: boolean;
  toggleSiteMenu: () => void;
  closeSiteMenu: () => void;
  showAppMenu: boolean;
  toggleAppMenu: () => void;
  closeAppMenu: () => void;
}

const useStore = create<StoreState>((set, get) => ({
  showSiteMenu: false,
  toggleSiteMenu: () => set((state) => ({ showSiteMenu: !state.showSiteMenu })),
  closeSiteMenu: () => set((state) => ({ showSiteMenu: false })),
  showAppMenu: false,
  toggleAppMenu: () => set((state) => ({ showAppMenu: !state.showAppMenu })),
  closeAppMenu: () => set((state) => ({ showAppMenu: false })),
}));

export default useStore;
