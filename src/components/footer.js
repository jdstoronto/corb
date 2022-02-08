import * as React from "react"
import  instaIcon from "../images/I_Icon.svg";
import  emailIcon from "../images/E_Icon.svg";
import  twitterIcon from "../images/T_Icon.svg";

const icons = [instaIcon,emailIcon,twitterIcon]
const iconObjects = [
  {
    name: "instagram",
    image: instaIcon,
    link: "https://www.instagram.com/justinxtoronto/"
  },
  {
    name: "email",
    image: emailIcon,
    link: "mailto:info@pre-corb.com"
  },
  {
    name: "twitter",
    image: twitterIcon,
    link: "mailto:info@pre-corb.com"
  }
]



const Icon = (props) =>{
  return(
    <div className="icons">
      <a href={props.obj.link}>
        <img className = 'icon' src={props.obj.image} alt="tag" />
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
          {iconObjects.map((icon, i)=>(<Icon key={`icon_${icon.name}`} obj={icon}/>))}
        </div> 
      </div>
    )
  }


export default Footer