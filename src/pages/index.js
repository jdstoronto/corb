import * as React from "react"
import { useEffect } from 'react';
import Header from "./components/header"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import { isMobile } from "react-device-detect";

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
const IndexPage = ({data}) => {
  //console.log(data)
  const imageRes = data.allWpPage.edges.find(edge =>edge.node.title.includes(`Home`)).node.featuredImage.node.sourceUrl
  const postSections = data.allWpPost.edges.map(edge =>edge.node.title)
  const videoURL = data.allWpMediaItem.edges.find(edge => edge.node.title.includes("Video")).node.mediaItemUrl

  var frameNumber = 0; // start video at frame 0
  // lower numbers = faster playback
  var playbackConst = 1000;
  var frameDuration = 1;
  // get page height from video duration


    React.useEffect(() => {
      var setHeight = document.getElementById("scrollingInfo"); 
      // select video element         
      var vid = document.getElementById('featureVideo'); 
      // var vid = $('#v0')[0]; // jquery option
      if(!frameDuration){
        frameDuration = 1;
      }
      // dynamically set the page height according to video length
      vid.addEventListener('loadedmetadata', function() {
      //setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
      frameDuration = vid.duration
      });

      window.addEventListener('scroll', (event) => {
        console.log(window.pageYOffset);
        var frameNumber  = (window.pageYOffset/(setHeight.clientHeight-window.innerHeight))*frameDuration;
        vid.currentTime  = frameNumber;
      });
    });

  return (
    <main style={pageStyles} >
      <Header sections ={postSections}/>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        {data.site.siteMetadata.title}
      </h1>
      <div id= "featureVideoContainer">
        <video id="featureVideo" tabIndex="0" autoPlay preload="true">
          <source  src={videoURL}></source>
        </video>
      </div>
      <div id="scrollingInfo">
        <div id= "featureImage">
          <img src={imageRes}/>
        </div>
        {postSections.map(title => (<div key={title} id={title} className= "descriptionContainer" style={{height:` 5gpx`}}>{title}</div>))}
      </div>
    </main>
  )

}

export default IndexPage

export const indexQuery = graphql`
query HomeQuery{
  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Homepage Sections"}}}}}) {
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