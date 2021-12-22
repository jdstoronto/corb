import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { isMobile } from "react-device-detect";
import LeaderLine from "leader-line-new";

const Section = (props) => {
    React.useEffect(() => {
        const myLine = new LeaderLine(
            document.getElementById(`${props.section.title}endpt1`),
            document.getElementById(`${props.section.title}stpt1`),
            {color: 'grey', size: 2}
            
          );
    })

    return(
    <div key={props.section.title} id={props.section.title} className= "descriptionContainer">
        {props.section.title}
        <div className='start pt' id={`${props.section.title}stpt1`} ></div>
        <div className='leaderTitle'>
            <div className='end pt' id={`${props.section.title}endpt1`}>1</div>
            <div className='endTitle'>Camera</div>
        </div>
        <div className="sectionDescription"> 
            <h5>Camera</h5>
            more description about camera hopefully this works as plan will also be adding a for loop
        </div>
    </div>
    )

}

export default Section