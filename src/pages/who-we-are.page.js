import React, { useEffect, useState } from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import whoWeAreService from '../services/front/who-we-are.service';

function WhoWeArePage() {
	const [whoWeAre, setWhoWeAre] = useState();
	useEffect(() => {
		whoWeAreService.getAll().then(res => setWhoWeAre(res[0]));
	}, [])
    return (
        <div style={{background: "#fff"}}>
           <HeaderComponent topclassNameName={"relative-top"} />
           <main style={{background: "#fff"}}>
    	{whoWeAre ? <div className="container">
    		<div className="row contactUs-text-container">
    			<div className="col-md-12 col-sm-12">
    			    <img src={whoWeAre.banner_image} className="img-fluid" />
    			     <h3 className="h3-responsive aboutus">{whoWeAre.primary_title}</h3>
    			     <p>
    			         {whoWeAre.primary_description}
    			     </p>

    			</div>
    		</div>
 			<div  className="row">
 				<div className="col-md-5 col-sm-12 box tex-box" style={{marginTop: "50px"}}>
            		<div className="inner"> 
              			<h4>{whoWeAre.ceo_message}</h4>
              		    <a href="#">CEO</a>
            		</div> 
          		</div>
          		<div className="col-md-7 col-sm-12 p-0" style={{marginTop: "50px"}}>
            		<img src={whoWeAre.ceo_message_image} className="img-fluid" />
            	</div>
 			</div>
 			
 			<div className="row contactUs-text-container">
    			<div className="col-md-12 col-sm-12">
    			     <h3 className="h3-responsive aboutus">{whoWeAre.secondary_title}</h3>
    			     <p>
    			        {whoWeAre.secondary_description}
    			     </p>

    			</div>
    		</div>
    		
    		<div className="row">
    		    <div className="col-md-6 col-sm-12 box" style={{marginTop: "100px"}}>
                    <img src={whoWeAre.work_with_us_image} className="img-fluid" />    
                </div>
                
                <div className="col-md-6 col-sm-12 p-0" style={{marginTop: "100px"}}>
                    <div className="inner">
                        <h6>Work With Us</h6>
                        <h3 className="h3-responsive font-weight-bold">{whoWeAre.work_with_us_title}</h3>
                        <a href="#">Apply now</a>
                    </div> 
                </div>
    		</div>
 			
	</div> : null}
    </main>
           <FooterComponent />
        </div>
    )
}

export default WhoWeArePage
