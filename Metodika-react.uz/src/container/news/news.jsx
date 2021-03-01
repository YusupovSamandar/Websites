/* eslint-disable */
import React, { Component } from "react";
import axios from "axios";
import NewsItem from "../../components/news-item/news-item";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = { newssApis: [] };
    }

    newsApi = async () => {
        const { data } = await axios.get('http://localhost:3000/newsApi');
        this.setState({ newssApis: data });
        console.log(data);
    }

    componentDidMount() {
        this.newsApi();
    }

    renderList = () => {
        return (
            <section className="ftco-section testimony-section ftco-no-pb" id="testimonial-section">
            		<div className="img img-bg border" style={{backgroundImage: 'url(bg_4.jpg)'}}>
                    </div>
            		<div className="overlay">
                    </div>
            	    <div className="containerNews">
            		    <div className="row justify-content-center mb-5">
            		        <div className="col-md-12 text-center heading-section heading-section-white ftco-animate">						  
            			        <h2 className="mb-3">NEWS</h2>
            		        </div>
            		    </div>
            		    <div className="row ftco-animate">
            		        <div className="col-md-12">
            			        <div className="carousel-testimony owl-carousel ftco-owl">
                                    {this.state.newssApis.map((newssApi, index) => (
                                        <NewsItem title={newssApi.title} image={newssApi.image} description={newssApi.description} text={newssApi.text} key={index} />
                                    ))}
            			        </div>
            		        </div>
            		    </div>
            	    </div>
            </section>
        )
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}
export default News
