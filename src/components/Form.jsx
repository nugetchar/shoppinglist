import React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../validators/TextValidator';

ValidatorForm.addValidationRule('gtThanZero', (value) => {
    if (parseInt(value) <= 0) {
        return false;
    }
    return true;
});


 class Form extends React.Component {
    DEFAULT_STATE = {
        article: {
            name: '',
            quantity: 1
        }
    };

    constructor(props) {
        super(props);
        this.state = this.DEFAULT_STATE;

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     render() {
         return (
             <div>
                 <h3>{this.props.formTitle}</h3>
                 <ValidatorForm 
                 onSubmit={this.handleSubmit}
                 className="form-group">
                    
                    <TextValidator
                        onChange={this.handleChangeName}
                        type="text"
                        name="itemName"
                        placeholder="Nom de l'article" 
                        className="form-control"
                        value={this.state.article.name} 
                        validators={['required']}
                        errorMessages={['Veuillez saisir un nom d\'article']}
                    />

                    <TextValidator
                        type="number" 
                        placeholder="Quantité" 
                        className="form-control"
                        name="itemQuantity"
                        value={this.state.article.quantity} 
                        onChange={this.handleChangeQuantity}
                        validators={['required', 'gtThanZero']}
                        errorMessages={['Veuillez saisir une quantité', 'La valeur doit-être supérieure à 0']}
                    />
                     <button type="submit" className="btn btn-secondary">Ajouter</button>
                 </ValidatorForm>
             </div>
         );
     }

     handleSubmit(event) {
        event.preventDefault();
        this.props.addArticle(this.state.article);
        this.setState({...this.DEFAULT_STATE});
    
     }
    
     handleChangeQuantity(event) {
         this.setState(
             {
                 ...this.state, 
                 article: {
                     ...this.state.article, 
                     quantity: event.target.value
                    }
            }
        );
     }

     handleChangeName(event){
        this.setState(
            {
                ...this.state, 
                article: {
                    ...this.state.article, 
                    name: event.target.value
                   }
           }
       );
     }
}


export default  Form;