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
  contentArray = contentArray.filter(Boolean)
  console.log(contentArray)

  useEffect(() => {console.log("test")});

  return (
    <main style={pageStyles} >
      <Header />
      <title>Home Page</title>
      <div className="supportIntro mx-auto">
        <h4 style={headingStyles} dangerouslySetInnerHTML={{__html:contentArray[0]}} />
      </div>
      <div className="mx-auto" style={{textAlign:"center"}}><h1>SHOP</h1></div>
      <div data-block-name="woocommerce/all-products" data-columns="3" data-rows="3" data-align-buttons="false" data-content-visibility="{&quot;orderBy&quot;:true}" data-orderby="date" data-layout-config="[[&quot;woocommerce\/product-image&quot;],[&quot;woocommerce\/product-title&quot;],[&quot;woocommerce\/product-price&quot;],[&quot;woocommerce\/product-rating&quot;],[&quot;woocommerce\/product-button&quot;]]" className="wp-block-woocommerce-all-products wc-block-all-products" data-attributes="{&quot;alignButtons&quot;:false,&quot;columns&quot;:3,&quot;contentVisibility&quot;:{&quot;orderBy&quot;:true},&quot;isPreview&quot;:false,&quot;layoutConfig&quot;:[[&quot;woocommerce/product-image&quot;],[&quot;woocommerce/product-title&quot;],[&quot;woocommerce/product-price&quot;],[&quot;woocommerce/product-rating&quot;],[&quot;woocommerce/product-button&quot;]],&quot;orderby&quot;:&quot;date&quot;,&quot;rows&quot;:3}"></div>
      <Footer />
    </main>
  )

}

export default SupportPage

export const supportQuery = graphql`
query SupportQuery{
  wpPage(title: {eq: "Support"}) {
    id
    content
  }
}
`