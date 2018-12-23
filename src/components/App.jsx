// Root component
import React from 'react';
import Form from './Form.jsx';
import ItemList from './ItemList.jsx';
const uuidv4 = require('uuid/v4');

// class based component
class App extends React.Component {

	state = {
		articles: []
	}

	addArticle = (article) => {
		article.id = uuidv4();
		this.setState({articles: [...this.state.articles, article]});
	};

	render() {
		// return JSX (not HTML)
		return (
			<div>
				<h3>Liste de courses</h3>
				<Form formTitle="Ajouter un article" addArticle={this.addArticle}/>
				<ItemList listTitle="Liste de courses" articles={this.state.articles}/>
			</div>
		);
	}
}

export default App;