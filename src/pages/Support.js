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
  marginTop: 50,
  marginBottom: 64,
  maxWidth: 600,
  position: "fixed",
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
      <h3 style={headingStyles} dangerouslySetInnerHTML={{__html:contentArray[0]}} />
      <div data-block-name="woocommerce/all-products" data-columns="3" data-rows="3" data-align-buttons="false" data-content-visibility="{&quot;orderBy&quot;:true}" data-orderby="date" data-layout-config="[[&quot;woocommerce\/product-image&quot;],[&quot;woocommerce\/product-title&quot;],[&quot;woocommerce\/product-price&quot;],[&quot;woocommerce\/product-rating&quot;],[&quot;woocommerce\/product-button&quot;]]" className="wp-block-woocommerce-all-products wc-block-all-products" data-attributes="{&quot;alignButtons&quot;:false,&quot;columns&quot;:3,&quot;contentVisibility&quot;:{&quot;orderBy&quot;:true},&quot;isPreview&quot;:false,&quot;layoutConfig&quot;:[[&quot;woocommerce/product-image&quot;],[&quot;woocommerce/product-title&quot;],[&quot;woocommerce/product-price&quot;],[&quot;woocommerce/product-rating&quot;],[&quot;woocommerce/product-button&quot;]],&quot;orderby&quot;:&quot;date&quot;,&quot;rows&quot;:3}"></div>
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