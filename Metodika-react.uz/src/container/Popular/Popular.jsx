import React from "react";
import axios from "axios";
import PopularItem from "../../components/popular-item/popular-item";
import { Component } from "react";

class Popular extends Component{
    constructor(props){
        super(props);
        this.state = {popularItemApis: []};
    }

    popularApi = async() => {
        const {data} = await axios.get('http://localhost:3000/newsApi');
        this.setState({popularItemApis: data});
        console.log(data);
    }

    componentDidMount(){
        this.popularApi();
    }

    renderList = () => {
        return (
            <div className="page-wrapper">
		        <div id="page-wrapper">
			        <div className="post-slider">
                        <div className="relative-container">
                            <h1 className="slider-titel">
						        <div>Popular</div>
                            </h1>
					        <i className="fas fa-chevron-left next"></i>
					        <i className="fas fa-chevron-right prev"></i>
					            <div className="post-wrapper">
                                {this.state.popularItemApis.map((popularItemApi, index) => (
                                        <PopularItem title={popularItemApi.title} image={popularItemApi.image} description={popularItemApi.description} key={index} />
                                    ))}

                                </div>
				        </div>
			        </div>
		        </div>
	        </div>
        )
    }

    render (){
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}


export default Popular