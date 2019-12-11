
import React from 'react'
// @ts-ignore
import { RichText } from 'prismic-reactjs'

interface IProps {
  render: any;
}

const Richtext = ({ render }: IProps) => {
  if (!render) {
    return null
  }

  return (
    <div className="richtext">
      <RichText render={render} />
    </div>
  )
}

export default Richtext;