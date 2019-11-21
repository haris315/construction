import React, { useState, useEffect } from 'react';

import HeaderComponent from '../components/header.js';
import FooterComponent from '../components/footer.js';
import qualityService from '../services/front/quality.service';

export default function QualityPage() {

	const [quality, setQuality] = useState();
	useEffect(() => {
		qualityService.getAll().then(res => setQuality(res[0]));
	}, []);
    return (
        <div>
            <HeaderComponent />
            <main style={{background: "#fff"}}>
    	{quality ? <div className="container">
    		<div className="row contactUs-text-container">
    			<div className="col-md-12 col-sm-12">
    			    <h3 className="h3-responsive aboutus">{quality.title}</h3>
    			    <img src={quality.banner_image} className="img-fluid" style={{marginTop: "10px", marginBottom: "40px"}} />
    			     <p className="para">
    			      {quality.description}
    			     </p>

    			</div>
    		</div>
    		
    		<div className="row" style={{marginTop: "30px"}}>
    		    <div className="col-md-4 col-sm-12">
    				<div className="content content1">
    					<h6>{quality.saudi_riyals}</h6>
    					<p>
    						<strong>Saudi Riyals</strong>
    					</p>
    				</div>
    			</div>
    			<div className="col-md-4 col-sm-12">
    				<div className="content content1">
    					<h6>{quality.projects_completed}</h6>
    					<p>
    						<strong>Projects Completed</strong>
    					</p>
    				</div>	
    				<hr style={{marginTop: "30px", width: "60%"}} />
    			</div>
    			<div className="col-md-4 col-sm-12">
    				<div className="content content2">
    					<h6>{quality.current_projects}</h6>
    					<p>
    						<strong>Current Projects</strong>
    					</p>
    				</div>	
    			</div>
    	    </div>
    	    
    	    <div className="row" style={{marginTop: "30px"}}>
    		    <div className="col-md-8">
    		        <h4 className="our-pro">{quality.message}</h4>
    		    </div>
    		    <div className="col-md-4">
    		        
    		    </div>
 		
 		
 			</div>
	</div> : null}
    </main>
            <FooterComponent />
        </div>
    )
}
