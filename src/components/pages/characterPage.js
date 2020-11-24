import React from 'react';
import ItemList from '../itemList';
import GotService from "../../services/gotService";
import { withForm, withDetails } from '../HOC/';



const CharacterPage = () => {

    const gotService = new GotService();

    const View = withForm(withDetails(ItemList));

    return (
            <View 
                getFullData = {gotService.getAllCharacters}
                getPersonalData = {gotService.getCharacter}
                showInfo = {['gender', 'born', 'died', 'culture']}/>
    )

}

export default CharacterPage;