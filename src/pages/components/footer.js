import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { isMobile } from "react-device-detect";
import  instaIcon from "../../images/I_Icon.svg";
import  emailIcon from "../../images/E_Icon.svg";
import  twitterIcon from "../../images/T_Icon.svg";

const icons = [instaIcon,emailIcon,twitterIcon]



const Icon = (props) =>{
  return(
    <div className="icons">
      <a href="https://www.instagram.com/justinxtoronto/">
                <img className = 'icon' src={props.image} alt="tag" />
      </a>
    </div>
  )
}

const Footer = (props) => {
  
  React.useEffect(() => {
  });

  return(
      <div id="footer" className="siteFooter">
        <div className="footerTab mx-auto">
          {icons.map((icon, i)=>(<Icon image={icon}/>))}
        </div> 
      </div>
    )
  }


export default Footer