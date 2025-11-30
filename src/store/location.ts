import { locations } from "@/constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Location = typeof locations[keyof typeof locations];

interface LocationStore {
  activeLocation: Location;
  setActiveLocation: (location: Location) => void;
  resetActiveLocation: () => void;
}

const DEFAULT_LOCATION = locations.work;

const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (location) => {
      set((state) => {
        state.activeLocation = location;
      });
    },
    
    resetActiveLocation: () => set((state) => {
      state.activeLocation = DEFAULT_LOCATION;
    }),
  }))
);

export default useLocationStore;