import * as React from "react"
import Header from "../components/header"
import Footer from '../components/footer'
import { graphql, Link } from 'gatsby'
import { Helmet } from "react-helmet"


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
const ContactPage = ({data}) => {
  var contentArray = data.wpPage.content.split("\n")
  contentArray = contentArray.filter(Boolean)
  //console.log(contentArray)
  var form = contentArray[2].replace("/graph","/Contact/")
  //console.log(form)
  
  React.useEffect(() => {console.log("Contact Us")});

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <main style={pageStyles} >
      <Helmet>
        <script src='http://pre-corb.com/wp-content/plugins/wpforms-lite/assets/js/jquery.validate.min.js?ver=1.19.3' type="text/javascript"></script>
        <script src='http://pre-corb.com/wp-content/plugins/wpforms-lite/assets/js/mailcheck.min.js?ver=1.1.2' type="text/javascript"></script>
        <script src='http://pre-corb.com/wp-content/plugins/wpforms-lite/assets/js/punycode.min.js?ver=1.0.0' type="text/javascript"></script>
        <script src='http://pre-corb.com/wp-content/plugins/wpforms-lite/assets/js/wpforms.min.js?ver=1.7.2' type="text/javascript"></script>
      </Helmet>
      <Header />
      <title>Home Page</title>
      <div className="container contact">
        <div className="row">
          <div className="col-md-5">
            <div dangerouslySetInnerHTML={{__html:contentArray[0]}}/>
            <div dangerouslySetInnerHTML={{__html:contentArray[1]}}/>
          </div>
          <div className="col-lg-7">
            {/* <div id= "contactForm" dangerouslySetInnerHTML={{__html:form}} /> */}
            <div className="wpforms-container wpforms-container-full">
              <form className="wpforms-validate wpforms-form" method="post" action="https://getform.io/f/5e9ba88b-1c9e-4ed2-be68-94b057f3eda2">
                <div className="wpforms-field-container">
                  <label className="wpforms-field-label">
                    Name
                    <span className="wpforms-required-label">*</span>
                  </label>
                  <div className="wpforms-field-row wpforms-field-medium">
                    <div className="wpforms-field-row-block wpforms-first wpforms-one-half">
                      <input type="text" className="wpforms-field-name-first wpforms-field-required" name="firstName"/>
                      <label>First</label>
                    </div>
                    <div className="wpforms-field-row-block wpforms-one-half">
                      <input type="text" className="wpforms-field-name-last wpforms-field-required"  name="lastName"/>
                      <label>Last</label>
                    </div>
                  </div>
                  <div className="wpforms-field wpforms-field-email">
                    <label className="wpforms-field-label">
                      Email
                      <span className="wpforms-required-label">*</span>
                    </label>
                    <input type="email" className="wpforms-field-medium wpforms-field-required" name="email">
                    </input>
                  </div>
                  <div className="wpforms-field wpforms-field-textarea">
                    <label className="wpforms-field-label">
                      Comment or Message
                      <span className="wpforms-required-label">*</span>
                    </label>
                    <textarea className="wpforms-field-medium wpforms-field-required" name="message">
                    </textarea>             
                  </div>
                </div>
                <div className="wpforms-submit-container">
                  <button className="wpforms-submit" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )

}

export default ContactPage

export const query = graphql`
query ContactQuery{
  wpPage(title: {eq: "Contact"}) {
    id
    content
  }
}
`