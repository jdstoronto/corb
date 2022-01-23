import * as React from "react"
import { isMobile } from "react-device-detect";
//import LeaderLine from "leader-line-new";

const Section = (props) => {
    const [highlightNum, setHighlightNum] = React.useState(1);
    const [selectNum, setSelectNum] = React.useState(1);
    var renderedLeader = false;
    //console.log(props)

    React.useEffect(() => {
        if(!renderedLeader && document.getElementById(`${props.contents[0].Name}endpt1`)){
            const LeaderLine = require("leader-line-new")
             let container = document.getElementById(props.section.title)
            //console.log(container.style.height)
            //console.log(window.innerHeight)
            container.style.height = `${window.innerHeight}px`
            //container.style.color = "#ff0000";
            //console.log(container.style.height)
            props.contents.map(content =>{
                if(document.getElementById(`${content.Name}endpt1`) && document.getElementById(`${content.Name}stpt1`)){
                    var myLine = new LeaderLine(
                        document.getElementById(`${content.Name}endpt1`),
                        document.getElementById(`${content.Name}stpt1`),
                        {color: 'grey', size: 2}
                    );
                    //return myLine
                }
            })
            renderedLeader=true;
            
        }
        return ()=>{
            /*
            console.log("we out")
            let elements = document.getElementsByClassName("leader-line")
            while (elements.length > 0) elements[0].remove();
            */
        }
    })

    const highlight =(num)=>{
        setHighlightNum(num)
    }

    const unhighlight =()=>{
        setHighlightNum(null)
    }

    return(
    <div id={props.section.title} className= "descriptionContainer">
        {props.contents.map((content, i) =>{
            return <div key={`section_${props.section.title}_${content.Name}`} >
                        <div role = "button" tabIndex={i} className='start pt' id={`${content.Name}stpt1`} style={{top:`${content.Top}%`, left:`${content.Left}%`}} onMouseEnter={()=>highlight(content.Number)} onMouseLeave={()=>unhighlight()} onClick={()=>setSelectNum(content.Number)}>
                        </div>
                        <div className='leaderTitle'>
                            <div role = "button" tabIndex={i} className={` ${(content.Number===selectNum)?`selected`:``} end pt`} id={`${content.Name}endpt1`} value={content.Number} onMouseEnter={()=>highlight(content.Number)} onMouseLeave={()=>unhighlight()} onClick={()=>setSelectNum(content.Number)}>
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