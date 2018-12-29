import React from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../validators/TextValidator';
const uuidv4 = require('uuid/v4');

ValidatorForm.addValidationRule('gtThanZero', (value) => {
    if (parseInt(value) <= 0) {
        return false;
    }
    return true;
});


 class Form extends React.Component {
    DEFAULT_STATE = {
        item: {
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
                        placeholder="Nom de l'item" 
                        className="form-control"
                        value={this.state.item.name} 
                        validators={['required']}
                        errorMessages={['Veuillez saisir un nom d\'item']}
                    />

                    <TextValidator
                        type="number" 
                        placeholder="Quantité" 
                        className="form-control"
                        name="itemQuantity"
                        value={this.state.item.quantity} 
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
		this.setState({
            ...this.state,
            item: {
                ...this.state.item,
                id: uuidv4()
            }
        });
        this.props.addItem(this.state.item);
        this.setState({...this.DEFAULT_STATE});
    
     }
    
     handleChangeQuantity(event) {
         this.setState(
             {
                 ...this.state, 
                 item: {
                     ...this.state.item, 
                     quantity: event.target.value
                    }
            }
        );
     }

     handleChangeName(event){
        this.setState(
            {
                ...this.state, 
                item: {
                    ...this.state.item, 
                    name: event.target.value
                   }
           }
       );
     }
}


export default  Form;