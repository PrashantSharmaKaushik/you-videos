import React, { Component } from "react";
import { Row, Col, Carousel, Card } from "react-bootstrap";
import getThumb from 'video-thumbnail-url';

export default class VideoList extends Component{

    state = {
        videosInformation : []
    }

    createThumbnail = (props) => {
        let { list = [] } = props;
        let videosInformation = []
        list.map(item => {
            let result = {}
            getThumb(`https://www.youtube.com/watch?v=${item.id.videoId}`).then(thumb_url => {
                result = { ...result, thumbnail: thumb_url, video: item.id.videoId };
                videosInformation.push(result);
                this.setState({ videosInformation: videosInformation }, () => {
                })
            });
        })
    }

    componentWillReceiveProps = (prevProps, nextProps) => {
        this.createThumbnail(prevProps);
    }

    render() {
        const { videosInformation } = this.state;
        return (
            <Row>
                <Col xs={12} lg={12}>
                        <Carousel style={{ width: '17rem' }}>
                                {this.props.list && this.props.list.map((item,index) => {
                                    return <Carousel.Item onClick={e => this.props.playThisVideo(videosInformation[index].video)}>
                                        <img
                                            className="d-block w-100"
                                            src={`${videosInformation && videosInformation[index] && videosInformation[index].thumbnail}`}
                                            alt="First slide"
                                        />
                                    </Carousel.Item>
                                    })
                            }
                        </Carousel>
                            {this.props.list && this.props.list.map((item, index) => {
                                return <Card style={{ width: '17rem' }} className="Card-Play" onClick={e => this.props.playThisVideo(videosInformation[index].video)}>
                                        <Card.Img variant="top" src={`${videosInformation && videosInformation[index] && videosInformation[index].thumbnail}`} />
                                    </Card>
                                })
                            }   
            </Col>
            </Row>
        )
    }
}