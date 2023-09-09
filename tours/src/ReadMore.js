import { useState } from 'react';

function ReadMore({text, maxLength= text.length, buttonClass, textClass, ellipse}) {
    const [readMore, setReadMore] = useState(true)
    function readHandler() {
        setReadMore(!readMore)
    }
    
    // console.log(text,'jdjd')
    return (
        <>
        <div className={textClass}>
            {/* {text} */}
            {readMore ? text.slice(0, maxLength): text} 
            
            {text.length > maxLength ? <>
                <span className={ellipse}>...</span>
                <button className={buttonClass} onClick={readHandler}>{readMore ? ' read more' : 'read less'}</button>
            </>  : '' }
            
        </div>
        </>
    )
}
export default ReadMore;