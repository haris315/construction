import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import projectService from '../services/front/project.service';
import CitiesService from '../services/cities.service';

export default function ProjectsPage() {
  const [projectList, setProjectList] = useState();
  const [cityFilteredProjects, setCityFilteredProjects] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [cities, setCitites] = useState();
  const ciitesService = new CitiesService();
  const [projectType, setProjectType] = useState();

  useEffect(() => {
    Promise.all([projectService.getAll(), ciitesService.getAll()]).then(res => {
      console.log('res ', res);
      setProjectList(res[0]);
	  setCitites(res[1]);
	  setSelectedCity(res[1][0].name);
      setCityFilteredProjects(res[0].filter(project => project.city === res[1][0].name));
    });
  }, []);

  const onChangeCity = city => {
    setCityFilteredProjects(projectList.filter(project => project.city === city && projectType && projectType === project.type ));
    // console.log('filtered city ', projects.filter(project => project.city === city));
  };

  const onChangeProjectType = (type) => {
	console.log('type ', type);
	setProjectType(type);
	setCityFilteredProjects(projectList.filter(project => project.type === type))
  }

  return (
    <div style={{ background: '#fff' }}>
      <HeaderComponent
        style={{ background: '#fff' }}
        topclassName={'relative-top'}
      ></HeaderComponent>
      <main style={{ background: '#fff' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="two-heding">
                <h3 className="h3-responsive font-weight-bold" style={{ marginTop: '30px' }}>
                  We have pride in our portfolio
                </h3>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 text-center p-0 portfolio">
              <div className="card mt-3 tab-card">
                <div className="card-header tab-card-header portfolio-nav">
                  <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
				  <li className="nav-item" onClick={() => setCityFilteredProjects(projectList)}>
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
                    {cities
                      ? cities.map(city => (
                          <li className="nav-item" key={city.id}>
                            <a
                              className={selectedCity === city.name ? 'nav-link active': 'nav-link'} 
                              id="one-tab"
                              data-toggle="tab"
                              href="#one"
                              role="tab"
                              aria-controls={city.id}
                              aria-selected="true"
                              onClick={() => onChangeCity(city.name)}
                            >
                              {city.name}
                            </a>
                          </li>
                        ))
                      : null}
                  </ul>
                  <ul className="d-flex mt-md-3" style={{ listStyle: 'none' }}>
                    <li className="nav-item mx-md-3" onClick={() => onChangeProjectType('resort')}>
                      <img
                        src="/icon0-40x40.gif"
                      />
                    </li>
                    <li className="nav-item" onClick={() => onChangeProjectType('building')}>
                      <img
                        src="/icon1-40x40.gif"
                      />
                    </li>
                    <li className="nav-item" onClick={() => onChangeProjectType('road')}>
                      <img
					  	style={{ width: '40', height: 40 }}
                        src="/building.png"
                      />
                    </li>
                    <li
                      className="nav-item" onClick={() => onChangeProjectType('bridge')}>
                      <img
                        src="/icon-40x40.gif"
                      />
                    </li>
                    {/* <li className="nav-item" >
                      <img src="/icon3-40x40.gif" />
                    </li> */}
                  </ul>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active p-3"
                    id="one"
                    role="tabpanel"
                    aria-labelledby="one-tab"
                  >
                    <div className="container">
                      <div className="row">
                        {cityFilteredProjects
                          ? cityFilteredProjects.map(project => (
                              <div className="col-md-6 col-sm-6" key={project.id}>
                                <img
                                  style={{ height: '395px' }}
                                  src={project.image}
                                  className="img-fluid"
                                />
                                <h6>{project.name}</h6>
                              </div>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                  {/* 
		                	<div className="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
		                  		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div>

		                	<div className="tab-pane fade p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
		                  		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div>

		                	<div className="tab-pane fade p-3" id="four" role="tabpanel" aria-labelledby="four-tab">
		                  		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div>

		                	<div className="tab-pane fade p-3" id="five" role="tabpanel" aria-labelledby="five-tab">
		                		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div>

		                	<div className="tab-pane fade p-3" id="six" role="tabpanel" aria-labelledby="six-tab">
		                  		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div>
		                 
		                	<div className="tab-pane fade p-3" id="serven" role="tabpanel" aria-labelledby="serven-tab">
		                  		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div>

		                 	<div className="tab-pane fade p-3" id="eight" role="tabpanel" aria-labelledby="eight-tab">
		                  		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div>

		                	<div className="tab-pane fade p-3" id="nine" role="tabpanel" aria-labelledby="nine-tab">
		                  		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div>

		                	<div className="tab-pane fade p-3" id="ten" role="tabpanel" aria-labelledby="ten-tab">
		                 		<div className="container">
		                			<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>

									<div className="row">
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                 	 			</div>
		                  				<div className="col-md-6 col-sm-6">
		                  					<img src="http://via.placeholder.com/600x400" className="img-fluid" />
		                  					<h6>Bridge at AbdelAziz with Ismial Abu Dawood Street</h6>
		                  				</div>
									</div>
								</div>
		                	</div> */}
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-md-3">
              <button className="btn btn-block">Load more</button>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
}
