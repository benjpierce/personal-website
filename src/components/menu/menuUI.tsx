import menuStyles from "./menu.module.css"
import { header, link } from "../../types/layout"
import { Link } from "gatsby"
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React, { Fragment } from "react"
import Context from "../context/context"

interface IProps {
    menuItemList: link[]
}

export const MenuUI = ({ menuItemList }: IProps) => (
    <Context.Consumer>
        {value => {
            const iconClass = value.isMenuVisible ? `${menuStyles.closeIcon} ${menuStyles.navIcon}` : menuStyles.navIcon;
            return (<div>
                <div onClick={() => value.toggleMenu(!value.isMenuVisible)} className={iconClass}>
                    <div></div>
                </div>
                <ul className={menuStyles.menu}>
                    {menuItemList.map((x, index) => <MenuItem key={`menuItem${index}`} {...x} />)}
                </ul>
            </div>)
        }}
    </Context.Consumer>
)

const MenuItem = ({ text, uri }: link) => (
    <li className={menuStyles.menu__item}>
        <AniLink bg="linear-gradient(to bottom, #43c6ac, #f8ffae)" cover direction="right" activeStyle={{ color: "#111111" }} className={menuStyles.menu__link} to={uri}>{text}</AniLink>
    </li>
)

export const SmallDeviceMenuUI = ({ menuItemList }: IProps) => (

    <Context.Consumer>
        {value => (
            <ul>
                {menuItemList.map((x, index) => (
                    <li className={menuStyles.smalldevicemenu__item}>
                        <Link onClick={() => value.toggleMenu} className={menuStyles.smalldevicemenu__link} activeStyle={{ color: "#ffffff" }} to={x.uri} key={`menuItem${index}`}>{x.text}</Link>
                    </li>
                ))}
            </ul>
        )}
    </Context.Consumer>
)
