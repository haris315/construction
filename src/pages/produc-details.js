import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import  HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import '../product-detail.css';
import axios from 'axios';

function ProductDetails() {
   const [product, setProduct] = useState();
   let { id } = useParams();
   useEffect(() => {
	   axios.get('https://adv-construction.herokuapp.com/front/projectPage?id=' + id).then(res => {
		   console.log('res ', res.data[0]);
		   setProduct(res.data[0]);
	   })
   }, [])
   return (
        <div>
        <HeaderComponent topclassName={"relative-top"}></HeaderComponent>
        {product ? <main style={{background: "#fff"}}>
    	    <div className="container">
    		<div className="row">
    			<div className="col-md-12 col-sm-12">
    				<div className="two-heding">
    					<h6>Ongoing project</h6>
    					<h3 className="h3-responsive font-weight-bold">{product.name}</h3>
    				</div>
    				<img src={product.image} className="img-fluid" />
    			</div>
    			
    		</div>
    		<div className="row" style={{marginTop: "20px"}}>
    			<div className="col-md-6 col-sm-12">
    				<img src={product.mini_image1} className="img-fluid" />
    			</div>
    			<div className="col-md-6 col-sm-12">
    				<img src={product.mini_image2} className="img-fluid" />
    			</div>
    		</div>

    		<div className="row" style={{marginTop: "30px"}}>
    			<div className="col-md-4 col-sm-12">
    				<div className="content content1">
    					<h6>{product.total_price}</h6>
    					<p>
    						<strong>million</strong>
    					</p>
    				</div>
    				<p className="text-center">
    					<strong>TOTAL PRICE</strong>
    				</p>
    			</div>
    			<div className="col-md-4 col-sm-12">
    				<div className="content content1">
    					<h6>{product.length + ' K'} </h6>
    					<p>
    						<strong>Kilometers</strong>
    					</p>
    				</div>	
    				<p className="text-center">
    					<strong>LENGTH OF THE<br />CONSTRUCTION</strong>
    				</p>
    				<hr style={{marginTop: "30px", width: "60%"}} />
    			</div>
    			<div className="col-md-4 col-sm-12">
    				<div className="content content2">
    					<h6>{product.completion_date}</h6>
    				</div>	
    				<p className="text-center">
    					<strong>COMPLETION</strong>
    				</p>
    			</div>
    		</div>

    		<div className="row" style={{marginTop: "30px"}}>
    			<div className="col-md-12 col-sm-12">
    				<p className="text-center" style={{color:"#000", lineHeight: "1.7"}}>
						{product.long_description}
    				</p>
    				<hr style={{marginTop: "40px"}} />
    			</div>
    		</div>

    		<div className="row" style={{marginTop: "30px"}}>
    			<div className="col-md-6 col-sm-12">
    				<div className="inner"> 
              			<h6>Building</h6>
              			<h3 className="h3-responsive font-weight-bold">Observation</h3>
              			<a href="#">Next Project</a>
            		</div>	
    			</div>
    			<div className="col-md-6 col-sm-12">
    				<img src="/image4.jpg" className="img-fluid" />
    			</div>
    		</div>
			
    	</div>
    </main>: null}
        <FooterComponent></FooterComponent>
    </div>

   );
}

export default ProductDetails;