import React from 'react';

const ListItem = (props) => {
  return (
    <div>
      <img src={props.item.image} alt='Not Available' />
      <h4>{props.item.name}</h4>
    </div>
  )
}
