import React, { useState, useEffect } from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import contactService from '../services/front/contact.service';

const ContactUsPage = () => {
	const [contact, setContact] = useState();

	useEffect(() => {
		contactService.getAll().then(res => setContact(res[0]));
	}, []);	
    return (
        <div style={{ background: '#fff' }}>
            <HeaderComponent style={{ background: "#fff" }} topClass={"relative-top"}></HeaderComponent>
        	<main style={{background: "#fff"}} className="mt-5 mb-4">
    	<div class="container">
    		<div class="row contactUs-text-container">
    			<div class="col-md-6 col-sm-12 contactInfo">
    			    <h3 class="h3-responsive font-weight-bold aboutus">Contact Us</h3>
    			    <p>INQUIRIES<br />
    			     <a href="mailto:project@advanceconstruction.com.sa" class="contactEmail">{contact ? contact.email: null}</a>
    			    </p>
    			    <p>PHONE NUMBERS</p>
					{contact ? contact.phone.map(cell => (<p>{cell}</p>)) : null}
    			    <p>ADDRESS<br />
					{contact ? contact.address: null}
    			    </p>
    			</div>
    			
    			<div class="col-md-6 col-sm-12">
    			    <img src="/Untitled-1.png" class="img-fluid" />
    			</div>
    		</div>
    	
    	</div>
    </main>
        <FooterComponent>
			<hr />
		</FooterComponent>
        </div>
    );
};

export default ContactUsPage;