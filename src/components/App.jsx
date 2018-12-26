// Root component
import React from 'react';
import Form from './Form.jsx';
import ItemList from './ItemList.jsx';
import {connect} from 'react-redux';
const uuidv4 = require('uuid/v4');

// class based component
class App extends React.Component {

	state = {
		articles: []
	}

	// addArticle = (article) => {
	// 	article.id = uuidv4();
	// 	this.setState({articles: [...this.state.articles, article]});
	// };

	addArticle = (article) => {
		article.id = uuidv4();
		this.props.addArticle(article);
	}

	render() {
		// return JSX (not HTML)
		return (
			<div>
				<h3>Liste de courses</h3>
				<Form formTitle="Ajouter un article" addArticle={this.addArticle}/>
				<ItemList listTitle="Liste de courses" articles={this.props.articles}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		articles: state.articles
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addArticle: (article) => {
			dispatch({type: 'ADD_ARTICLE', payload: article});			
		},
		updateArticle: (article) => {
			dispatch({type: 'UPDATE_ARTICLE', payload: article});
		},
		removeArticle: (idArticle) => {
			dispatch({type: 'REMOVE_ARTICLE', payload: idArticle});
		},
		emptyBasket: () => {
			dispatch({type: 'EMPTY_BASKET'});
		}
	};
}


// if not specifying the mapDispatchToProps, the dispatch method is 
// directly binded to the component props
export default connect(mapStateToProps, mapDispatchToProps)(App);