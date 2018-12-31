import Item from './Item'
import React from 'react';

// stateless functional component

const ItemList = (props) => {
    
    return (
        <div>
            <h3>{props.listTitle}</h3>
            {props.items.map(it => <Item item={it} key={it.id} updateItem={props.updateItem}/>)}
        </div>
    );

}

export default ItemList;