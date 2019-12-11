export type slice = {
    type: sliceType;
    content: sliceContent;
}

export type sliceType = "image_and_text_block";

export type ImageAndText = {
    text: [],
    image: {
        alt: string;
        url: string;
    }
}

export type sliceContent = ImageAndText;
