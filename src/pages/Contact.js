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
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  position: "fixed",
}

// markup
const ContactPage = ({data}) => {

    React.useEffect(() => {console.log("Contact Us")});

  return (
    <main style={pageStyles} >
      <Header />
      <title>Home Page</title>
      <div id= "contactForm" dangerouslySetInnerHTML={{__html:data.wpPage.content}}>

      </div>
    </main>
  )

}

export default ContactPage

export const query = graphql`
query ContactQuery{
  wpPage(title: {eq: "Contact"}) {
    id
    content
  }
}
`