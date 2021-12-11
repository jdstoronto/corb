import * as React from "react"
import { useEffect } from 'react';
import Header from "./components/header"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 50,
  marginBottom: 64,
  maxWidth: 600,
  position: "fixed",
}

// markup
const SupportPage = ({data}) => {
  console.log(data)

  useEffect(() => {console.log("test")});

  return (
    <main style={pageStyles} >
      <Header />
      <title>Home Page</title>
      <h3 style={headingStyles} dangerouslySetInnerHTML={{__html:data.wpPage.content}} />
      <div id="products">
        products
      </div>
    </main>
  )

}

export default SupportPage

export const supportQuery = graphql`
query SupportQuery{
  wpPage(title: {eq: "Support"}) {
    id
    content
  }
}
`