/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import CarouselItem from '../../components/carousel-item/carousel-item';
import './Carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { imageUrls: [] };
    }

    carouselApi = async () => {
        const { data } = await axios.get('http://localhost:3000/imagesUrl');
        this.setState({ imageUrls: data });
        console.log(this.state.imageUrls)
    }

    componentDidMount() {
        this.carouselApi();
    }

    renderList = () => {
        return (
            <div id="banner-wrapper">
                <div id="banner">
                    <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-2" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-2" data-slide-to="1" className=""></li>
                            <li data-target="#carousel-example-2" data-slide-to="2" className=""></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="view">
                                    <img className="d-block w-100" src={this.state.imageUrls[0]} alt="img" />
                                    <div className="mask rgba-black-strong"></div>
                                </div>
                            </div>
                            {this.state.imageUrls.slice(1).map((url, index) => (
                                <CarouselItem imageUrl={url} key={index} />
                            ))}
                        </div>

                        <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

export default Carousel;