

import React from "react"
import headerStyles from "./header.module.css"
import { header } from "../../types/layout"
import {Menu} from "../menu/menu"

export default ({ title }: header) => (
    <header className={headerStyles.header}>
        <div className={headerStyles.header__title}>{title}</div>
        <Menu />
    </header>
)