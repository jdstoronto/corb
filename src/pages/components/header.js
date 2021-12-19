import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { isMobile } from "react-device-detect";

const Header = (props) => {
  const data = useStaticQuery(
    graphql`
    query HeadingQuery {
      allWpPage{
        edges {
          node {
            title
          }
        }
      }
      allWpMediaItem {
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
  

  const postSections = props.sections
  console.log(data)

  const pages = data.allWpPage.edges.map(edge =>edge.node.title)
  const logoURL = data.allWpMediaItem.edges.find(edge => edge.node.title === "Logo").node.sourceUrl

  return(
        <div id="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header-top">
            <div className="container">
              <div className="row" style={{width:`100%`}}>
                <div className="col-4">
                  <div className="navbar-nav">
                    {pages.map(title => (<a key={`nav${title}`} className="nav-item nav-link" href={`/${title.replace(' ', '')}`}>{title}</a>))}
                  </div>
                </div>
                <div className="col-4">
                  <a className="navbar-logo" href="/Home">
                  <img src={logoURL}/ >
                  </a>
                </div>
                <div className="col-4">
                </div>
              </div>
            </div>
          </nav>
        {(postSections) &&
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto">
              <div className="navblock-left bg-light"></div>
              {postSections.map(title => (<a key={title} className="nav-item nav-link bg-light" href={`#${title}`}>{title}</a>))}
              <div className="navblock-right bg-light"></div>
            </div>
          </div>
        </nav>
        }
      </div>
    )
  }


export default Header