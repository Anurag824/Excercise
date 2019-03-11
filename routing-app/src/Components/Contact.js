import React from 'react';
import ColorChanger from '../HOC/ColorChanger';

const Contact = (props) => {
  console.log(props);
  // setTimeout(()=>{
  //   props.history.push('./About');
  // }, 2000);
  return(
    <div className='center'>
      <h4 className='container center'>Contactpage</h4>
      <p> This is Contact Page</p>
    </div>
  )
}

export default ColorChanger(Contact);
