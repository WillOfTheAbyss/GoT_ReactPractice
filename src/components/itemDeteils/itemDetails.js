import React, {useState, useEffect} from 'react';
import ErrorMessage from '../errorMessage';
import Spinner from '../spinner';
import { Alert } from 'reactstrap';
import './itemDetails.css';

const ItemDetails = (props) => {

    const [error, updateError] = useState(false);
    const [loading, updateLoading] = useState(false);
    const [itemDetals, updateItemDetals] = useState({});

    useEffect(() => {
        if(!props.selectedItemId){
            return
        }
        updateLoading(true);
        const {getData} = props;
        getData(props.selectedItemId)
            .then(data =>{ 
                updateItemDetals(data);
                updateLoading(false);
                updateError(false)
            })
            .catch(() => {
                updateLoading(false);
                updateError(true);
            });

        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.selectedItemId]);
    
    const InfoField = props.showInfo ? props.showInfo.map(item => {
        return (
            <li 
                key = {item}
                className="list-group-item d-flex justify-content-between">
                    <span className="term">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                    <span>{itemDetals[item]}</span>
            </li>
        )
    }) : null; 

    if(!props.selectedItemId){
        return (
            <Alert color = 'primary'>Please select a character</Alert>
        )
    }

    if (loading){
        return (
            <Spinner />
        )
    }

    if(error){
        return (
            <ErrorMessage />
        )
    }

    return (
        <div className="char-details rounded">
            <h4>{itemDetals.name}</h4>
            <ul className="list-group list-group-flush">
                {InfoField}
            </ul>
        </div>
    );
    
}

export default ItemDetails;