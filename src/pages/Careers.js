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
  marginTop: 80,
  marginBottom: 50,
}

const JobPosting = (props) => {
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
const CareersPage = ({data}) => {
  
 
  const postSections = data.allWpPost.edges.map(edge =>edge.node)
  var contentArray = data.wpPage.content.split("\n")
  contentArray = contentArray.filter(Boolean)
  
  console.log(postSections)
  
  React.useEffect(() => {});

  return (
    <main style={pageStyles} >
      <Header sections ={postSections.map(section=>(section.title))}/>
      <title>About</title>
      <div className="supportIntro mx-auto">
        <h4 style={headingStyles} dangerouslySetInnerHTML={{__html:contentArray[0]}} />
      </div>
      <div className="container"><h2> Positions </h2></div>
      <div className="career container">
        {(postSections.length)?
        ("exist"):
        ("no positions currently available")}
        <div className="row" style={{width:`100%`}}>
            {/* {postSections.map(section=>(<JobPosting section ={section} />))} */}
        </div>
      </div>
    </main>
  )
}

export default CareersPage

export const careerQuery = graphql`
query CareersQuery {
  wpPage(title: {eq: "Careers"}) {
    id
    content
  }
  allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Job Posts"}}}}}
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