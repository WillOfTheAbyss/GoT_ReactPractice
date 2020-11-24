import React from 'react';
import ItemList from '../itemList';
import GotService from "../../services/gotService";
import { withRouter } from 'react-router-dom';


const BooksPage = (props) => {

    const gotService = new GotService();

    return (
            <ItemList
                getFullData = {gotService.getAllBooks}
                getSelectedItem = {(itemId) => {
                    props.history.push(itemId.toString());
                }} 
            />
    
    )

}

export default withRouter(BooksPage);