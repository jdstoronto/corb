import * as React from "react"
import { useEffect } from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"

// styles
const pageStyles = {
  color: "#484849",
  fontFamily: "sans-serif, serif",
}
const headingStyles = {
  marginTop: 80,
  marginBottom: 50,
}

// markup
const SupportPage = ({data}) => {
  console.log(data)
  var contentArray = data.wpPage.content.split("\n")
  var products = data.allWcProducts.nodes
  contentArray = contentArray.filter(Boolean)
  console.log(products)

  useEffect(() => {console.log("test")});

  return (
    <main style={pageStyles} >
      <Header />
      <title>Home Page</title>
      <div className="supportIntro mx-auto">
        <h4 style={headingStyles} dangerouslySetInnerHTML={{__html:contentArray[0]}} />
      </div>
      <div className="mx-auto" style={{textAlign:"center"}}><h1>SHOP</h1></div>
      <div className="about container">
          <div className="row" style={{width:`100%`}}>
            {products.map(product => (<ProductDiv info={product}/>))}
          </div>
      </div>
      <Footer />
    </main>
  )

}

const ProductDiv = (props) =>{
  return(
    <div className = "product col-sm-4">
      <img src={props.info.images[0].src}></img>
      <div className="profileHead">
        <h2>{props.info.name}</h2>
        {props.info.price}
      </div>
    </div>
  )
}

export default SupportPage

export const supportQuery = graphql`
query SupportQuery {
  wpPage(title: {eq: "Support"}) {
    id
    content
  }
  allWcProducts {
    nodes {
      name
      images {
        src
      }
      price
    }
  }
}
`