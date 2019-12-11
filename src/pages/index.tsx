import React, { FunctionComponent } from "react"
import Layout from "../components/layout/layout"
import { useStaticQuery, graphql } from "gatsby"
import { get } from "lodash"
import { slice } from "../types/slices"
import { IContentPageProps } from "../types/templates"
import ContentPage from "../templates/contentPage"

const AboutMe: FunctionComponent = ({ children }) => {
  const data = useStaticQuery(graphql`
      query AboutMeQuery {
        prismic {
          allAbout_mes {
            edges {
              node {
                sliceList: body {
                  ... on PRISMIC_About_meBodyImage_and_text_block {
                    type
                    label
                    content: primary {
                      text
                      image
                    }
                  }
                }
                title
              }
            }
          }
        }
      }
  `
  )

  console.log(data)

  const AboutMeData: IContentPageProps = get(data, "prismic.allAbout_mes.edges[0].node");

  console.log(AboutMeData)

  if (AboutMeData === undefined) {
    return <Layout></Layout>;
  }

  return (
    <Layout><ContentPage {...AboutMeData} /></Layout>
  )
}

export default AboutMe
