import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import JobsService from '../services/jobs.service';

function WorkAtAccPage() {
  const jobsService = new JobsService();
  const [jobs, setJobs] = useState();
  const [selectedJob, setSelectedJob] = useState();
  useEffect(() => {
    jobsService.getAll().then(res => {
      setJobs(res);
      setSelectedJob(res[0]);
    });
  }, []);
  return (
    <div style={{ background: '#fff' }}>
      <HeaderComponent />
      <main style={{ background: '#fff' }} className="mb-md-4 mt-md-4">
        <div className="container">
          <div className="row contactUs-text-container">
            <div className="col-md-4 col-sm-12">
              <div className="contactUs-text">
                <h3 className="h3-responsive font-weight-bold">
                  We are always looking for
                  <br />
                  new talents
                </h3>
                <p
                  className="color-red"
                  data-toggle="modal"
                  data-target="#myModal"
                  style={{ cursor: 'pointer' }}
                >
                  Jobs and pre-requistes
                </p>
                <form method="post" action="#" enctype="multipart/form-data">
                  <div className="form-group">
                    <label for="fullname">Full Name</label>
                    <input
                      className="form-control  form-control-lg"
                      id="fullname"
                      name="fullname"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control  form-control-lg"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="curriculumvita">curriculum (CV)</label>
                    <div className="file-upload-wrapper">
                      <div className="card card-body file-upload">
                        <div className="card-text file-upload-message">
                          <p>
                            Drop Your Curriculum Here
                            <br />
                            or
                          </p>
                          <p>
                            <span>Choose A File</span>
                          </p>
                        </div>
                        <input type="file" id="input-file-now" className="file_upload" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-md btn-danger">
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-1 col-sm-12"></div>
            <div className="col-md-7 col-sm-12">
              <img src="/contact-us-banner.png" className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 box" style={{ marginTop: '100px' }}>
              <div className="inner" style={{ height: '374px', background: '#FFFDFD' }}>
                <h6>Team</h6>
                <h3 className="h3-responsive font-weight-bold">Get to know us a little</h3>
                <p>
                  Get the know the team of professionals behind
                  <br />
                  those great works
                </p>
                <Link to="/team">Meet our team</Link>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 p-0" style={{ marginTop: '100px' }}>
              <img src="/banner13.gif" className="img-fluid" />
            </div>
          </div>
          <div id="myModal" class="modal fade">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <img src="/small-logo.png" class="" />
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                  </button>
                </div>
                <div class="modal-body">
                  <h6>
                    <span class="TextColor">We would love to have you on board,</span> We just need
                    to make sure that you have
                  </h6>
                  <div class="card mt-3 tab-card">
                    <div class="card-header tab-card-header">
                      <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                        {jobs
                          ? jobs.map(job => (
                              <li class="nav-item">
                                <a
                                  class="nav-link active"
                                  id={job.id}
                                  data-toggle="tab"
                                  href={'#' + job.id}
                                  role="tab"
                                  aria-controls="One"
                                  aria-selected="true"
                                  onClick={() => setSelectedJob(job)}
                                >
                                  {job.title}
                                </a>
                              </li>
                            ))
                          : null}
                        {/* <li class="nav-item">
											<a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">JUNIOR ENGINEER</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">SENIOR ENGINEER</a>
										</li> */}
                      </ul>
                    </div>
                    <div class="tab-content" id="myTabContent">
                      {selectedJob ? (
                        <div
                          className="tab-pane fade show active p-3"
                          id={selectedJob.id}
                          role="tabpanel"
                          aria-labelledby={selectedJob.id}
                        >
                          <p>{selectedJob.description}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default WorkAtAccPage;
