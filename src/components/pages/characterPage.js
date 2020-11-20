import React from 'react';
import ItemList from '../itemList';
import GotService from "../../services/gotService";
import withForm from '../HOC/withForm';


const CharacterPage = () => {

    const gotService = new GotService();

    const View = withForm(ItemList);

    return (
            <View 
                getFullData = {gotService.getAllCharacters}
                getPersonalData = {gotService.getCharacter}
                showInfo = {['gender', 'born', 'died', 'culture']}/>
    
    )

}

export default CharacterPage;