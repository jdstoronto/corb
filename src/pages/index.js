import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Section from "../components/section"
import { graphql, Link } from 'gatsby'
import { isMobile } from "react-device-detect";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif",
}

function objectFromArray(arr){
  var result = [];
  var i, j;
  for (i = 1; i < arr.length; i++) {
    let object = {} 
    let items
    items = arr[i]
      for (j = 0; j < items.length; j++) {
        let objName = arr[0][j]
        let objValue = items[j]
        //console.log(objName)
        //console.log(objValue)
        object[objName] = objValue
      }
    result.push(object)
  }

  return result;
}

function objectFromTable(table){
  var results = []
  var contents = table.slice(table.indexOf("<tbody>")+7,table.lastIndexOf("</tbody>")).split(`<tr>`)
  contents.map(content=>{
    let raw_items = content.split(`<td>`)
    let items = []
    raw_items.map(item=>{
      if(item){
        item = item.slice(0,item.indexOf(`<`))
        items.push(item)
      }
    })
    if(items.length){
      results.push(items);
    }
  })

  var objects = objectFromArray(results)
  return objects
  //console.log(objects)
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
      <div className="tagLine" dangerouslySetInnerHTML={{__html:allSections[0].content}}></div>
      <div id= "featureVideoContainer">
        <video id="featureVideo" tabIndex="0" preload="true">
          <source  src={videoURL}></source>
        </video>
      </div>
      <div id="scrollingPage">
        <div className ="featureImage" id={allSections[0].title}>   
          <img src={imageRes} alt='feature CORB unit'/> 
        </div>
        {postSections.map(section => {
          let contents = objectFromTable(section.content)
          return <Section key={section.title} section={section} contents={contents}/>
        })}
      </div>
      <Footer />
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