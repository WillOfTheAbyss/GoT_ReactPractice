import React, { Component } from 'react';

const withForm = (ListFunc) => {


    class ItemListWithForm extends Component {
        
        state = {
            inputValue: 'default',
        }

        changeInputValue = (value) => {
            this.setState({
                inputValue: value
            })
        }

        render() {
            return (
                    <>
                        <form 
                            className = 'bottom-panel d-flex'>
                            <input 
                                type = 'text'
                                placeholder = 'Введите номер страницы'
                                className = 'form-control new-post-label'
                                onInput = {(e) => this.changeInputValue(e.target.value)}
                            />
                        </form>
                        <ListFunc {...this.props} inputValue = {this.state.inputValue}/> 
                    </>
            )
        }
    }

    return ItemListWithForm;
         
}

export default withForm;