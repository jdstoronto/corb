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
const AboutPage = ({data}) => {
  console.log(data)
  const imageRes = data.allWpPage.edges.find(edge =>edge.node.title.includes(`Home`)).node.featuredImage.node.sourceUrl
  const postSections = data.allWpPost.edges.map(edge =>edge.node.title)
  const videoURL = data.allWpMediaItem.edges.find(edge => edge.node.title.includes("Video")).node.mediaItemUrl
  
  

  var frameNumber = 0; // start video at frame 0
  // lower numbers = faster playback
  var playbackConst = 1000;
  var frameDuration = 1;
  // get page height from video duration

    React.useEffect(() => {});

  return (
    <main style={pageStyles} >
      <Header sections ={postSections}/>
      <title>About</title>
      <div></div>
    </main>
  )

}

export default AboutPage

export const query = graphql`
query AboutQuery{
  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "About Posts"}}}}}) {
    edges {
      node {
        title
      }
    }
  }
    site {
      siteMetadata {
        title
      }
    }
    allWpPage {
      edges {
        node {
          title
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
        }
      }
    }
    allWpMediaItem(filter: {author: {node: {pages: {nodes: {elemMatch: {title: {glob: "*Home*"}}}}}}}) {
      edges {
        node {
          id
          mediaType
          sourceUrl
          title
          link
          mediaItemUrl
        }
      }
    }
  }

`