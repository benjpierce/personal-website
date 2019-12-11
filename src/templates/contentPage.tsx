import React, { Fragment } from "react"
import { IContentPageProps } from "../types/templates"
import { SliceList } from "../components/sliceList/sliceList"

const ContentPage = ({ sliceList }: IContentPageProps) => (
    <SliceList {...{ sliceList }} />
)

export default ContentPage

