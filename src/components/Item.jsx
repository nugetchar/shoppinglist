import React from 'react';

export class Item extends React.Component {
        state = {
                isEditing: false
        }
        render() {
                const {item} = this.props;
                console.log('{article}', item)
                return (
                        <div>
                                {!this.state.isEditing ? 
                                   <span>{item.name} - {item.quantity}</span> : 
                                   <span>
                                        <input type="text" value={item.name} onChange={(event) => this.handleChangeName(event, item)}/>
                                        <input type="number" />
                                   </span>
                                }
                                <button className="btn btn-warning btn-xs" onClick={this.toggleEditMode}>
                                   {!this.state.isEditing ? <span>Editer</span> : <span>Enregistrer</span>}
                                </button>

                        </div>
                );
        }
        
        toggleEditMode = () => {
                this.setState({isEditing: !this.state.isEditing});
                if (this.state.isEditing) {
                        this.props.updateItem(this.props.item);
                }
        }

        handleChangeQuantity = (event, item) => {
                item.quantity = event.target.value;
                this.props.updateItem(item);
        }
       
        handleChangeName = (event, item) => {
                item.name = event.target.value;
                this.props.updateItem(item);
        }
}

export default Item;