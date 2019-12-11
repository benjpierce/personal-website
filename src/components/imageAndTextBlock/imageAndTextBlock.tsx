import React from "react";
import { ImageAndText } from "../../types/slices";
import Richtext from "../richtext/richtext"
import styles from "./imageAndTextBlock.module.css"

const ImageAndTextBlock = ({ text, image }: ImageAndText) => {

    return (
        <div className={styles.imageAndTextBlock}>
            <div className={styles.imageAndTextBlockImage}>
                <img src={image.url} alt={image.alt} />
            </div>
            <div className={styles.flexCol}/>
            <div className={styles.imageAndTextBlockText}>
                <Richtext render={text} />
            </div>
        </div >
    )
}

export default ImageAndTextBlock;