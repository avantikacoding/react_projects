import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  // console.log(props.removeTour,'idid')
  return (
    <div className='container'>
      <h2>tours component</h2>
      {props.data.map((tour) => <Tour data={tour} key={tour.id} removeTour={props.removeTour} />)}
      {/* <Tour/> */}
    </div>
  )
};

export default Tours;
