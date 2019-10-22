import { Dispatch, SetStateAction } from "react";

export interface layout {
    title: string;
}

export interface header {
    title: string;
}

export interface link {
    text: string;
    uri: string;
}

export interface ILayoutContext {
    isMenuVisible: boolean;
    toggleMenu: Dispatch<SetStateAction<boolean>>;
    breakpoint: breakpoint;
}

export type breakpoint = "small" | "large";