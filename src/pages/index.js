import * as React from "react"
import Header from "./components/header"
import Section from "./components/section"
import { graphql, Link } from 'gatsby'
import { isMobile } from "react-device-detect";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif",
}

// markup
const IndexPage = ({data}) => {
  //console.log(data)
  const imageRes = data.allWpPage.edges.find(edge =>edge.node.title.includes(`Home`)).node.featuredImage.node.sourceUrl
  const allSections = data.allWpPost.edges.map(edge =>edge.node)
  const videoURL = data.allWpMediaItem.edges.find(edge => edge.node.title.includes("Video")).node.mediaItemUrl
  allSections.sort(function(a, b){return a.slug[0] - b.slug[0]});
  const postSections = [...allSections]
  postSections.shift()

  var frameNumber = 0; // start video at frame 0
  // lower numbers = faster playback
  var playbackConst = 1000;
  var frameDuration = 1;
  // get page height from video duration


  React.useEffect(() => {
    var setHeight = document.getElementById("scrollingPage"); 
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
    //console.log(window.pageYOffset);
    var frameNumber  = (window.pageYOffset/(setHeight.clientHeight-window.innerHeight))*frameDuration;
    vid.currentTime  = frameNumber;
    });
  });

  return (
    <main style={pageStyles} >
      <Header sections ={allSections.map(section=>{return section.title})}/>
      <h1 className="tagLine">Better Than You Came</h1>
      <div id= "featureVideoContainer">
        <video id="featureVideo" tabIndex="0" preload="true">
          <source  src={videoURL}></source>
        </video>
      </div>
      <div id="scrollingPage">
        <div className ="featureImage" id={allSections[0].title}>   
          <img src={imageRes} alt='feature CORB unit'/> 
        </div>
        {postSections.map(section => (<Section section={section}/>))}
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
        slug
        content
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