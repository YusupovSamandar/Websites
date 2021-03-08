import React, {useState, useEffect} from "react";

const Footer = () =>{
    return (
        <div id="footer">
		<p>Copyright &copy;
            <span>
				{(new Date().getFullYear())}
			</span> All rights reserved | This site is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a
				href="https://opus.uz" target="_blank">Codemy</a></p>
	</div>
    );
}


export default Footer