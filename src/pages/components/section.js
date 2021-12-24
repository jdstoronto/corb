import * as React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import { isMobile } from "react-device-detect";
import LeaderLine from "leader-line-new";

const Section = (props) => {
    const [highlightNum, setHighlightNum] = React.useState(1);
    const [selectNum, setSelectNum] = React.useState(1);

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

    const highlight =(num)=>{
        setHighlightNum(num)
    }

    const unhighlight =()=>{
        setHighlightNum(null)
    }

    return(
    <div key={`section_${props.section.title}`} id={props.section.title} className= "descriptionContainer">
        {props.contents.map((content, i) =>{
            return <div>
                        <div className='start pt' id={`${content.Name}stpt1`} style={{top:`${content.Top}%`, left:`${content.Left}%`}} onMouseEnter={()=>highlight(content.Number)} onMouseLeave={()=>unhighlight()} onClick={()=>setSelectNum(content.Number)}>
                        </div>
                        <div className='leaderTitle'>
                            <div className={` ${(content.Number==selectNum)?`selected`:``} end pt`} id={`${content.Name}endpt1`} value={content.Number} onMouseEnter={()=>highlight(content.Number)} onMouseLeave={()=>unhighlight()} onClick={()=>setSelectNum(content.Number)}>
                                {content.Number}
                            </div>
                            <div className='endTitle'>{content.Name}</div>
                        </div>
                    </div>
        })}

        <div className="sectionDescription"> 
            <h5>{props.contents[(highlightNum?highlightNum-1:selectNum-1)].Name}</h5>
            {props.contents[(highlightNum?highlightNum-1:selectNum-1)].Description}
        </div>
    </div>
    )

}

export default Section