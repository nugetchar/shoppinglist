import React from 'react';

 class Form extends React.Component {
     state = {
         name: '',
         quantity: 0,
     };

     DEFAULT_STATE = {
         name: '',
         quantity: 0
     };

     render() {
         return (
             <div>
                 <h3>{this.props.formTitle}</h3>
                 <form onSubmit={this.handleSubmit}>
                     <input type="text" 
                     placeholder="Nom de l'article" 
                     value={this.state.name} 
                     onChange={this.handleChangeName}/>
                     <input type="number" 
                     placeholder="Quantité" 
                     value={this.state.quantity} 
                     onChange={this.handleChangeQuantity} />
                     <button type="submit">Ajouter</button>
                 </form>
             </div>
         );
     }

     handleSubmit = (event) => {
         this.props.addArticle(this.state);
         this.setState({...this.DEFAULT_STATE});
         event.preventDefault();
     };

     handleChangeQuantity = (event) => {
         this.setState({quantity: event.target.value});
     }
     handleChangeName = (event) => {
         this.setState({name: event.target.value});
     }
}


export default  Form;