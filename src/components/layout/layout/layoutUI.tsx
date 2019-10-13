

import React, { FunctionComponent } from "react"
import { layout } from "../../../types/layout"
import Header from "../header/header"
import css from "./layout.module.css"


const LayoutUI: FunctionComponent<layout> = ({ title, children }) => (
    <div className={css.layout}>
        <Header title={title} />
        {children}
    </div>
)

export default LayoutUI 