

import React from "react"
import { header } from "../types/layout"
import LayoutUI from "./layoutUI"

export default ({ title }: header) => (
    <header><div>{title}</div></header>
)