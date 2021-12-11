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

const AboutPost = (props) => {
  var contentArray = props.section.content.split("\n")
  contentArray = contentArray.filter(Boolean)
  console.log(contentArray)
  //Description is the last element in the post
  var descriptionHTML = contentArray[contentArray.length-1]
  

  return(
    <div className="col-4">
    <h2>{props.section.title}</h2>
    {props.section.featuredImage?<img src={props.section.featuredImage.node.sourceUrl}/>:null}
    <div id= "contactForm" dangerouslySetInnerHTML={{__html:descriptionHTML }}></div>
    </div>
  )
}

// markup
const AboutPage = ({data}) => {
  console.log("about data")
  console.log(data)
 
  const postSections = data.allWpPost.edges.map(edge =>edge.node)

  React.useEffect(() => {});

  return (
    <main style={pageStyles} >
      <Header sections ={postSections.map(section=>(section.title))}/>
      <title>About</title>
      <div className="container">
          <div className="row" style={{width:`100%`}}>
              {postSections.map(section=>(<AboutPost section ={section} />))}
        </div>
      </div>
    </main>
  )
}

export default AboutPage

export const aboutQuery = graphql`
query AboutQuery {
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "About Posts"}}}}}
  ) {
    edges {
      node {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
      }
    }
  }
}
`