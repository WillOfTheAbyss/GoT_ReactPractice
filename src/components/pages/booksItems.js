import React, {Component} from 'react';
import GotService from "../../services/gotService";
import ItemDetails  from '../itemDeteils/';

export default class BooksItems extends Component {
    
    gotService = new GotService();

    render () {
        return (
            <ItemDetails
                selectedItemId={this.props.bookId}
                getData={this.gotService.getBook} 
                showInfo = {['numberOfPages', 'publisher', 'released']}>
            </ItemDetails>
        )
    }
}