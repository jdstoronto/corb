import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { isMobile } from "react-device-detect";
import LeaderLine from "leader-line-new";

const Section = (props) => {
    React.useEffect(() => {
        props.contents.map(content =>{
            var myLine = new LeaderLine(
                document.getElementById(`${content.Name}endpt1`),
                document.getElementById(`${content.Name}stpt1`),
                {color: 'grey', size: 2}
              );
            return myLine
        })
        
    })

    return(
    <div key={`section_${props.section.title}`} id={props.section.title} className= "descriptionContainer">
        {props.section.title}
        {props.contents.map(content =>{
            return <div>
                        <div className='start pt' id={`${content.Name}stpt1`} style={{top:`${content.Top}%`, left:`${content.Left}%`}} ></div>
                        <div className='leaderTitle'>
                            <div className='end pt' id={`${content.Name}endpt1`}>{content.Number}</div>
                            <div className='endTitle'>{content.Name}</div>
                        </div>
                    </div>
        })}

        <div className="sectionDescription"> 
            <h5>Camera</h5>
            more description about camera hopefully this works as plan will also be adding a for loop
        </div>
    </div>
    )

}

export default Section