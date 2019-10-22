import { breakpoint } from "../types/layout";

export const DetermineBreakpoint = (): breakpoint => (
    window.innerWidth > 767 ? "large" : "small"
) 