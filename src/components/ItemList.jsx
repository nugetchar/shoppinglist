import React from 'react';

// stateless functional component

const ItemList = (props) => {
    
    return (
        <div>
            <h3>{props.listTitle}</h3>
            {props.articles.map(article => <div key={article.id}>{article.name} - {article.quantity}</div>)}
        </div>
    );

}

export default ItemList;