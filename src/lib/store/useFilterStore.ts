import { create } from "zustand";

type state = {
    equipmentId: string | undefined;
};

type action = {
    setEquipmentId: (equipmentId: string | undefined) => void;
};

const useFilterStore = create<state & action>((set) => ({
    equipmentId: undefined,
    setEquipmentId: (equipmentId: string | undefined) => set({ equipmentId }),
}));

export default useFilterStore;