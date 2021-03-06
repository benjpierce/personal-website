

import React, { FunctionComponent, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { layout, breakpoint, ILayoutContext } from "../../types/layout"
import { get } from "lodash"
import LayoutUI from "./layoutUI"
import Context from "../context/context"
import { DetermineBreakpoint } from "../../utils/layout";

const Layout: FunctionComponent = ({ children }) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        prismic {
          allSite_datas {
            edges {
              node {
                title
              }
            }
          }
        }
      }`
    )

    console.log(data);

    const layoutData: layout = get(data, "prismic.allSite_datas.edges[0].node")

    if (layoutData === undefined) {
        return null;
    }

    const initialBreakpoint = DetermineBreakpoint();

    const [isMenuVisible, toggleMenu] = useState(false);
    const [breakpoint, setBreakpoint] = useState(initialBreakpoint);

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(DetermineBreakpoint())
        }
        if (window) {
            window.addEventListener("resize", handleResize)
            return () => { window.removeEventListener("resize", handleResize) }
        }
    }, [])

    return (
        <Context.Provider
            value={{
                isMenuVisible: isMenuVisible && breakpoint === "small",
                toggleMenu,
                breakpoint
            }}

        >
            <LayoutUI {...layoutData}>{children}</LayoutUI>
        </Context.Provider>
    )
}

export default Layout