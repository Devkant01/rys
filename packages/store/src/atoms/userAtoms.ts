import { atom } from "recoil";

export const topHeader = atom<boolean>({
    key: "topHeader",
    default: true
});