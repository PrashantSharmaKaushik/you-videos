import React, { Component } from "react";
import ReactPlayer from 'react-player';
import { Row, Col } from "react-bootstrap";

export default class ViewVideo extends Component{
    render(){
        return (
            <Row>
                <Col className="Video-player">
                    <ReactPlayer url={`${this.props.url}`} playing />
                </Col>
            </Row>
        )
    }
}