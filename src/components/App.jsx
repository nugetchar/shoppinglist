// Root component
import React from 'react';
import Form from './Form.jsx';
import ItemList from './ItemList.jsx';
import {connect} from 'react-redux';

// class based component
class App extends React.Component {

	state = {
		articles: []
	}

	render() {
		// return JSX (not HTML)
		return (
			<div>
				<h3>Liste de courses</h3>
				<Form formTitle="Ajouter un article" addItem={this.props.addArticle}/>
				<ItemList listTitle="Liste de courses" items={this.props.articles} updateItem={this.props.updateArticle}/>
			</div>
		);
	}
}

const addArticleActionCreator = (article) => ({type: 'ADD_ARTICLE', payload: article});
const updateArticleActionCreator = (article) => ({type: 'UPDATE_ARTICLE', payload: article});
const removeArticleActionCreator = (idArticle) => ({type: 'REMOVE_ARTICLE', payload: idArticle});
const emptyBasketActionCreator = (article) => ({type: 'EMPTY_BASKET', payload: article});

const mapStateToProps = (state) => ({articles: state.articles})

const mapDispatchToProps = (dispatch) => (
	{
		addArticle: (article) => dispatch(addArticleActionCreator(article)),
		updateArticle: (article) => dispatch(updateArticleActionCreator(article)),
		removeArticle: (idArticle) => dispatch(removeArticleActionCreator(idArticle)),
		emptyBasket: () => dispatch(emptyBasketActionCreator())
	}
);


// if not specifying the mapDispatchToProps, the dispatch method is 
// directly binded to the component props
export default connect(mapStateToProps, mapDispatchToProps)(App);