import React, { ReactNode } from "react"
import { typographyVariant } from "../../types/typography"
import styles from "./typography.module.css"

interface ITypographyProps {
    variant: typographyVariant;
    children: ReactNode
}

const Typography = ({ variant, children }: ITypographyProps) => {
    switch (variant) {
        case "h1":
            return <h1>{children}</h1>
        case "h2":
            return <h2>{children}</h2>
        case "h3":
            return <h3>{children}</h3>
        case "body":
            return <p>{children}</p>
        case "largeLink":
            return <p className={styles.largeLink}>{children}</p>
        default:
            return null;
    }
}

export default Typography;