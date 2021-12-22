import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { isMobile } from "react-device-detect";

const Section = (props) => {

    return(
    <div key={props.section.title} id={props.section.title} className= "descriptionContainer">
        {props.section.title}
        <div className='start pt' id={`${props.section.title}stpt1`} >locate</div>
        <div className='leaderTitle'>
            <div className='end pt' id={`${props.section.title}endpt1`}>1</div>
            <div className='endTitle'>Camera</div>
        </div>
    </div>
    )

}

export default Section