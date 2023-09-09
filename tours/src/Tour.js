import { useState } from 'react';

import ReadMore from './ReadMore';

const Tour = (props) => {

  const [isVisible , setIsVisible] = useState(true)
  // function deleteHandler() {
  //   setIsVisible(!isVisible);
  // }
  console.log(props)
  return (
    <article className={isVisible ? 'singleTour' : 'd-none'}>
      <img src={props.data.image}/>
      <footer>
        <div className='tourInfo'>
          <h4 className='tourTitle'> 
            {props.data.name}
          </h4>
          <div className='tourPrice'>
            {props.data.price}
          </div>
        </div>
        <ReadMore text={props.data.info} maxLength={'300'} buttonClass={"readMoreBtn"} textClass={"textClass"} ellipse={"textClass"}/>
        <button className='deleteBtn' onClick={() => props.removeTour(props.data.id)} >Not Interested</button>
      </footer>
    </article>

  )
};

export default Tour;
