import { breakpoint } from "../types/layout";

export const DetermineBreakpoint = (): breakpoint => (
    typeof window !== "undefined" && window.innerWidth > 767 ? "large" : "small"
)
