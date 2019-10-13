

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { layout } from "../../../types/layout"
import { get } from "lodash"
import LayoutUI from "./layoutUI"

export default ({ children }) => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
        prismicSiteData {
            data {
              title
            }
          }
        }`
    )

    const layoutData: layout = get(data, "prismicSiteData.data")

    if (layoutData === undefined) {
        return null;
    }

    return (
        <LayoutUI {...layoutData}>{children}</LayoutUI>
    )
}