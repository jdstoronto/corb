import * as React from "react"
import { useEffect } from 'react';
import Header from "../components/header"
import Footer from '../components/footer'
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
  var contentArray = data.wpPage.content.split("\n")
  contentArray = contentArray.filter(Boolean)
  console.log(contentArray)
  
  React.useEffect(() => {console.log("Contact Us")});

  return (
    <main style={pageStyles} >
      <Header />
      <title>Home Page</title>
      <div className="container contact">
        <div className="row">
          <div className="col-5">
            <div dangerouslySetInnerHTML={{__html:contentArray[0]}}/>
            <div dangerouslySetInnerHTML={{__html:contentArray[1]}}/>
          </div>
          <div className="col-7">
            <div id= "contactForm" dangerouslySetInnerHTML={{__html:contentArray[2]}} />
          </div>
        </div>
      </div>
      <Footer />
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