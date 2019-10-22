

import React, { FunctionComponent } from "react"
import { layout } from "../../types/layout"
import Header from "../header/header"
import css from "./layout.module.css"
import Context from "../context/context"
import { SmallDeviceMenu } from "../menu/menu"

const LayoutUI: FunctionComponent<layout> = ({ title, children }) => (

    <Context.Consumer>
        {(value: { isMenuVisible: boolean; })  => {
            const mainClass = value.isMenuVisible ? css.menuOpen : "";
            return <main className={mainClass}>
                <div className={css.layout}>
                    <Header title={title} />
                    {value.isMenuVisible ? <SmallDeviceMenu /> : children}
                </div>
            </main>
        }}
    </Context.Consumer>

)


export default LayoutUI 