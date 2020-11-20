import React from 'react';
import ItemList from '../itemList';
import GotService from "../../services/gotService";


const BooksPage = () => {

    const gotService = new GotService();

    return (
            <ItemList
                getFullData = {gotService.getAllBooks}
                getPersonalData = {gotService.getBook}
                showInfo = {['numberOfPages', 'publisher', 'released']}/>
    
    )

}

export default BooksPage;