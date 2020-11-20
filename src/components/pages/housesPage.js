import React from 'react';
import ItemList from '../itemList';
import GotService from "../../services/gotService";
import withForm from '../HOC/withForm';


const HousesPage = () => {

    const gotService = new GotService();

    const View = withForm(ItemList);

    return (
            <View 
            getFullData = {gotService.getAllHouses}
            getPersonalData = {gotService.getHouse}
            showInfo = {['region', 'words', 'titles', 'overlord', 'ancestralWeapons']}/>
    
    )

}

export default HousesPage;