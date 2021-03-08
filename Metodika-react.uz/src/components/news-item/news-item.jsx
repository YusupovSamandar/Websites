/* eslint-disable */
import React from "react";

const NewsItem =(props)=>{
    return (	
        <div className="item">
			<div className="testimony-wrap py-4">
				<div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left"></span>
                </div>
				<div className="text">
                    <p className="mb-4">{props.text}</p>
					<div className="d-flex align-items-center">
						<div className="user-img" style={{backgroundImage: 'url('+props.image+')'}}>
                        </div>
						<div className="pl-3">
                            <p className="name">{props.title}</p>
                            <span className="position">{props.description}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
    )

}

export default NewsItem