import Item from './Item'

// stateless functional component

const ItemList = (props) => {
    
    return (
        <div>
            <h3>{props.listTitle}</h3>
            {props.articles.map(article => <Item item={article} key={article.id}/>)}
        </div>
    );

}

export default ItemList;