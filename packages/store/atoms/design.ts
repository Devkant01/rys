import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const topHeader = atom({
    key: "topHeader",
    default: true,
    effects_UNSTABLE: [persistAtom]
})