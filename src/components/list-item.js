import React from 'react';

const ListItem = (props) => {
  return (
    <div>
      <img src={props.item.image} alt='Not Available' />
      <h4>{props.item.name.replace("_", " ")}</h4>
    </div>
  )
}

export default ListItem;
