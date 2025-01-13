import { useRecoilValue, useSetRecoilState } from "recoil";
import { topHeader } from "../atoms/userAtoms";

export const useTopHeader = () => {
    const value = useRecoilValue(topHeader);
    return value;
};

export const useSetTopHeader = () => {
    const setTopHeader = useSetRecoilState(topHeader);
    return setTopHeader;
}