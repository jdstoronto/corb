import * as React from "react"
import { StaticQuery, graphql, useStaticQuery, Link } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(
    graphql`
    query HeadingQuery {
      allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Homepage Sections"}}}}}) {
        edges {
          node {
            title
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
  )
  
  //console.log(data)
  const postSections = data.allWpPost.edges.map(edge =>edge.node.title)
  const logoURL = data.allWpMediaItem.edges.find(edge => edge.node.title === "Logo").node.sourceUrl

  return(
        <div id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="row" style={{width:`100%`}}>
            <div className="col-4">
              <div className="navbar-nav">
                {postSections.map(title => (<a key={`nav${title}`} className="nav-item nav-link" href={`#${title}`}>{title}</a>))}
              </div>
            </div>
            <div className="col-4 mx-auto">
              <a className="navbar-logo" href="#">
              <img src={logoURL}/>
              </a>
            </div>
          </div>
        </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <a className="nav-item nav-link active" href="#">Home</a>
              
              {postSections.map(title => (<a key={title} className="nav-item nav-link" href={`#${title}`}>{title}</a>))}
            </div>
          </div>
        </nav>
      </div>
  )
  }


export default Header