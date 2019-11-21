import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

import  HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import projectService from '../services/front/project.service';
import CitiesService from '../services/cities.service';
import indexPageService from '../services/front/index.service';


function MainPage() {
  let history = useHistory();
  const [city, setCity] = useState('jeddah');
  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [projects, setProjects] = useState();
  const [otherData, setOtherData] = useState();
  const [cityFilteredProjects, setCityFilteredProjects] = useState();
  const [selectedIndex, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);

  };

  const onChangeCity = (city) => {
    setCityFilteredProjects(projects.filter(project => project.city === city));
    setSelectedCity(city);
    // console.log('filtered city ', projects.filter(project => project.city === city));
  }

  useEffect(() => {
    indexPageService.getAll().then(res => { 
      console.log('index page ', res);
      setProjects(res.slider_data);
      setOtherData(res.index_page_data[0])
      setCityFilteredProjects(res.slider_data.filter(project => project.city === city));
    });

    const ciitesService = new CitiesService();
    ciitesService.getAll().then(res => setCities(res));
   
  }, [])

  return (
      <div>
      <HeaderComponent topclassName={"fixed-top-header"}>
        <div className="view" style={{ backgroundImage :"url('/banner.jpg')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
        <div className="mask rgba-gradient align-items-center">
            <div className="container">
            <div className="row header-text">
                <div className="col-md-12 white-text text-center text-md-left mt-xl-5 mb-5 wow">
                <h6>What we do</h6>
                <h1 className="h1-responsive font-weight-bold">Facing new challenges with<br />excellent and innovation</h1>
                </div>
            </div>
            </div>
        </div>
        </div>
      </HeaderComponent>
      <main>
      <div className="container">
        {(otherData && projects) ? <div className="row py-5">
          <div className="col-md-12 col-sm-12 text-center p-0">
            <div className="card mt-3 tab-card">
              <div className="card-header tab-card-header">
                <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                <li className="nav-item" onClick={() => setCityFilteredProjects(projects)}>
                  <a
                    className='nav-link'
                    id="one-tab"
                    data-toggle="tab"
                    href="#one"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    All
                  </a>
                    </li>
                  {cities ? cities.map(city => (<li className="nav-item" key={city.id}>
                    <a className={selectedCity === city.name ? 'nav-link active': 'nav-link'} id={city.id + '-tab'} data-toggle="tab" href="#one" role="tab" aria-controls={city.id}  onClick={() => onChangeCity(city.name)}>{city.name}</a>
                  </li>)) : null}
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
               <Carousel activeIndex={selectedIndex} direction={direction} onSelect={handleSelect}>
               { cityFilteredProjects ? cityFilteredProjects.map((project,index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={project.image}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{project.name}</h3>
                  </Carousel.Caption>
                </Carousel.Item> )) : null}
              </Carousel> 
              </div>
            </div>
          </div>
          {(cityFilteredProjects && cityFilteredProjects.length > 0) ? <div className="col-md-10 col-sm-12 top-margin box">
              <div className="inner">
                <h6>{(cityFilteredProjects && cityFilteredProjects.length > 0) ? cityFilteredProjects[selectedIndex].city +' ' + cityFilteredProjects[selectedIndex].type: null }</h6>
                <h3 className="h3-responsive font-weight-bold">{ (cityFilteredProjects && cityFilteredProjects.length > 0) ? cityFilteredProjects[selectedIndex].short_description: null }</h3>
                <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">See details</a>
              </div>  
          </div> : null }
          { (cityFilteredProjects && cityFilteredProjects.length > 0) ? <div className="col-md-2 col-sm-12 top-margin p-0">
            <div className="inner" style={{ padding: "42px" }}>
                <span style={{ cursor: 'pointer', color: 'red' }} onClick={() => history.push('/product-details/' + cityFilteredProjects[selectedIndex].id)}>Open Project</span>
            </div>    
            </div> : null }
          <div className="collapse w-100 mt-3" id="collapseExample">
            <div className="card card-body">
              <p>
             {(cityFilteredProjects && cityFilteredProjects.length > 0) ? cityFilteredProjects[selectedIndex].long_description : null}
              </p> 
            </div>            
          </div>
          {/* Collapse ends here */}
          <div className="col-md-6 col-sm-12 box" style={{marginTop: "100px"}}>
            <img src="/banner2.jpg" className="img-fluid" />    
          </div>
          <div className="col-md-6 col-sm-12 p-0" style={{marginTop: "100px"}}>
            <div className="inner" style={{height:"374px"}}>
              <h6>Work With Us</h6>
              <h3 className="h3-responsive font-weight-bold">Join Our Community of qualified professionals</h3>
              <Link to="/work-at-acc">Apply now</Link>
            </div> 
          </div>
          <div className="col-md-4 col-sm-12 box" style={{marginTop: "100px"}}>
            <div className="inner">
              <div className="icon">
              <img src={otherData.service_1_icon} className="img-fluid" />
              </div> 
              <h3 className="h3-responsive font-weight-bold" style={{fontSize:"20px"}}>{otherData.service_1_title}</h3>
              <p>{otherData.service_1_desc}</p>
            </div> 
          </div>
          <div className="col-md-4 col-sm-12 box" style={{marginTop: "100px"}}>
            <div className="inner">
              <div className="icon">
                <img src={otherData.service_2_icon} className="img-fluid" />
              </div>
              <h3 className="h3-responsive font-weight-bold" style={{fontSize:"20px"}}>{otherData.service_2_title}</h3>
              <p>{otherData.service_2_desc}g</p>
            </div> 
          </div>
          <div className="col-md-4 col-sm-12 p-0" style={{marginTop: "100px"}}>
            <div className="inner">
              <div className="icon">
                <img src={otherData.service_3_icon} className="img-fluid" />
              </div>
              <h3 className="h3-responsive font-weight-bold" style={{fontSize:"20px"}}>{otherData.service_3_title}</h3>
              <p>{otherData.service_3_desc}</p>
            </div> 
          </div>

          <div className="col-md-6 col-sm-12 box" style={{marginTop: "100px"}}>
            <div className="inner" style={{height:"380px"}}> 
              <h6>Team</h6>
              <h3 className="h3-responsive font-weight-bold">{otherData.team_title}</h3>
              <Link to="/team">Meet our team</Link>
            </div> 
          </div>
          <div className="col-md-6 col-sm-12 p-0" style={{marginTop: "100px"}}>
            <img src={otherData.team_image} className="img-fluid" />    
          </div>

        </div>: null}
      </div>
    </main>
      <FooterComponent></FooterComponent>
      </div>
  );
}

export default MainPage;
