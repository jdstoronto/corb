import * as React from "react"
import { useEffect } from 'react';
import Header from "../components/header"
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
  //console.log(contentArray)
  //Description is the last element in the post
  var descriptionHTML = contentArray[contentArray.length-1]
  console.log(props.section)

  return(
    <div className="profile col-sm-4">
      {props.section.featuredImage?<img src={props.section.featuredImage.node.sourceUrl} className="profilePic"/>:null}
      <div className="profileHead">
        <h2>{props.section.title}</h2>
        {props.section.tags.nodes.map(tag=><h5>{`${tag.name}`}</h5>)}
      </div>
      <div className="profileDescr" dangerouslySetInnerHTML={{__html:descriptionHTML }}></div>
    </div>
  )
}

// markup
const AboutPage = ({data}) => {
  //console.log(data)
 
  const postSections = data.allWpPost.edges.map(edge =>edge.node)

  React.useEffect(() => {});

  return (
    <main style={pageStyles} >
      <Header sections ={postSections.map(section=>(section.title))}/>
      <title>About</title>
      <div className="about container">
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
        tags {
          nodes {
            name
          }
        }
      }
    }
  }
}
`