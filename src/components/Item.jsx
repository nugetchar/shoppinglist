import React from 'react';

export const Item = (props) => (
        <div>{props.item.name} - {props.item.quantity}</div>
);

export default Item;