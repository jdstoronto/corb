import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { isMobile } from "react-device-detect";

const Header = (props) => {
  const [collapseMain, setCollapseMain] = React.useState(false);
  
  const data = useStaticQuery(
    graphql`
    query HeadingQuery {
      allWpPage{
        edges {
          node {
            title
            menuOrder
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
  
  React.useEffect(() => {
    var header = document.getElementById('header'); 

    window.addEventListener('scroll', (event) => {
      if (window.pageYOffset>50 && !collapseMain){
        //console.log(header.classList.contains('siteHeader-squash'))
        if ( !header.classList.contains('siteHeader-squash') ){
          header.classList.add('siteHeader-squash')
        }   
      }else{
        header.classList.remove('siteHeader-squash')
      }
    });
  });

  const postSections = props.sections

  const pages = data.allWpPage.edges.map(edge =>edge.node)
  const pagesIndex = data.allWpPage.edges.map(edge =>edge.node.menuOrder)

  pages.sort((a,b)=>a.menuOrder-b.menuOrder);

  const logoURL = data.allWpMediaItem.edges.find(edge => edge.node.title === "Logo").node.sourceUrl

  return(
        <div id="header" className="siteHeader">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header-top">
            <div className="container">
              <div className="row" style={{width:`100%`}}>
                <div className="col-4">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setCollapseMain(!collapseMain)}>
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className={`navbar-nav navbar-collapse ${collapseMain?``:`collapse`}`}id="navbarTogglerDemo01">
                    {pages.map(page => {
                      let title = page.title;
                      return <a key={`nav${title}`} className="nav-item nav-link" href={`/${title.replace(' ', '')}`}>{title}</a>})
                    }
                  </div>
                </div>
                <div className="col-4">
                  <a className="navbar-logo" href="/Home">
                  <img src={logoURL} alt="logo"/>
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