

import React, { Fragment } from "react"
import { slice } from "../../types/slices";
import ImageAndTextBlock from "../imageAndTextBlock/imageAndTextBlock";

interface ISliceListProps {
    sliceList: slice[];
}

interface ISliceProps {
    slice: slice;
}

export const SliceList = ({ sliceList }: ISliceListProps) => {
    console.log(sliceList);
    return (<Fragment>
        {sliceList.map((slice, index) => <Slice key={`slice${index}`} slice={slice} />)}
    </Fragment>)

}

export const Slice = ({ slice }: ISliceProps) => {
    console.log(slice)


    switch (slice.type) {
        case "image_and_text_block": {
            return <ImageAndTextBlock {...slice.content} />
        }
        default: {
            return null;
        }
    }

}
