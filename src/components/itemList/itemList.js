import React, {useState, useEffect} from 'react';
import ErrorMessage from '../errorMessage/';
import Spinner from '../spinner/';
import './itemList.css';

const ItemList = (props) => {

    const [itemList, updateItemList] = useState([]);
    const [error, updateError] = useState(false);
    const [loading, updateLoading] = useState(false);
    // const [selectedItemId, updateSelectedItemId] = useState(null);


    // const getSelectedItem = (id) => {
    //     updateSelectedItemId(id);
    // }

    const {getFullData, inputValue = 1} = props;
    
    useEffect(() => {
        if(typeof +inputValue === 'number' && inputValue > 0){
            updateLoading(true);
            getFullData(+inputValue)
                .then(data => {
                    updateItemList(data);
                    updateLoading(false);
                    updateError(false);
                })
                .catch(() => {
                    updateLoading(false);
                    updateError(true);
                });
        }
    }, [getFullData, inputValue]);

    const ItemDisplay = () => {
    
        if(inputValue === 'default' || !inputValue){
            return null
        } else if( isNaN(+inputValue) || +inputValue < 1 || itemList.length === 0 || inputValue[0] === '0') {
            return (
                <li 
                className="list-group-item">
                    Такой страницы не существует.
                </li>
            )
        } else {
            return itemList.map(({url, name}) => 
                <li 
                key = {url} 
                className="list-group-item"
                onClick = {() => props.getSelectedItem(+url)}>
                    {name}
                </li>
            );
        }
    }

    const Spin = loading ? <Spinner /> : null;
    const ErrorMess = error ? <ErrorMessage /> : null;
    const View = (!error && !loading) ? <ItemDisplay /> : null;

    return (
        <ul className="item-list list-group">
            {Spin}
            {ErrorMess}
            {View}
        </ul>
    );
    
}

export default ItemList;