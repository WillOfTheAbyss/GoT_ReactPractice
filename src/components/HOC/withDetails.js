import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ItemDetails from '../itemDeteils/';

const withDetails = (ListComponent) => {

    class WithDetailsComponent extends Component {
        
        state = {
            selectedItemId: null
        }

        getSelectedItem = (id) => {
            if(id !== this.props.selectedItemId){
                this.setState({
                    selectedItemId: id
                })
            }
        }

        render() {
            return (
                <Row>
                    <Col md='6'>
                        <ListComponent 
                        {...this.props}
                        getSelectedItem = {this.getSelectedItem}
                        />
                    </Col>
                    <Col md='6'>
                        <ItemDetails 
                            selectedItemId = {this.state.selectedItemId}
                            getData = {this.props.getPersonalData} 
                            showInfo = {this.props.showInfo}/>
                    </Col>
                </Row>
            )
        }
    }

    return WithDetailsComponent;

}
export default withDetails;