import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";

export default class Search extends Component{

    render() {
        return (
            <Row>
                <Col xs={12} md={12} lg={12} className="Search-Box">
                    <input type="text" placeholder="Type to Search..." onChange={e => this.props.onChange(e)} />
                    <Button onClick={this.props.searchResult}>
                        Search
                    </Button>   
                </Col>
                
            </Row>
        )
    }
}