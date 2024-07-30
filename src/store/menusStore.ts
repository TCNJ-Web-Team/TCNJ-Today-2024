import { create } from "zustand";

interface StoreState {
  showSiteMenu: boolean;
  toggleSiteMenu: () => void;
  showAppMenu: boolean;
  toggleAppMenu: () => void;
}

const useStore = create<StoreState>((set, get) => ({
  showSiteMenu: false,
  toggleSiteMenu: () => set((state) => ({ showSiteMenu: !state.showSiteMenu })),
  showAppMenu: false,
  toggleAppMenu: () => set((state) => ({ showAppMenu: !state.showAppMenu })),
}));

export default useStore;
