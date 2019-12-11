import { Link } from "gatsby"
import React, { Fragment } from "react"
import {MenuUI, SmallDeviceMenuUI} from "./menuUI"
import Typography from "../typography/typography"


const
    menuItemList = [
        { text: "About Me", uri: "" },
        { text: "Work", uri: "/work" }
    ]


export const Menu = () => {
    return <MenuUI {...{ menuItemList }} />
}

export const SmallDeviceMenu = () => {
    return <SmallDeviceMenuUI {...{ menuItemList }} />
}
