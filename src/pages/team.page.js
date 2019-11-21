import React, { useState, useEffect } from 'react'

import HeaderComponent from '../components/header.js';
import FooterComponent from '../components/footer.js';
import teamService from '../services/front/team.service';

function TeamPage() {
    const [teams, setTeam] = useState();
    useEffect(() => {
        teamService.getAll().then(res => setTeam(res));
    }, []);
    return (
        <div style={{background: "#F7F7F7"}}>
            <HeaderComponent />
                    <main style={{background: "#F7F7F7"}}>
                <div className="container">
                    <div className="contactUs-text-container aboutPresident">
                         { teams ? teams.map(team => (
                         <div key={team.id} className="d-flex">
                             <div className="col-md-6 col-sm-12">
                            <div className="inner" style={{background: "#FFFDFD"}}> 
                                <h6>{team.designation}</h6>
                                <h3 className="h3-responsive font-weight-bold">{team.name}</h3>
                                <p>{team.description}</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                        <img src={team.image} className="img-fluid w-100" />
                         </div>
                         </div>)): null} 
                    </div>
                </div>
                <section>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-md-6 col-sm-12" style={{marginTop: "20px"}}>
                            <div className="inner"> 
                                <h6>Team</h6>
                                <h3 className="h3-responsive">Delivering agile solutions to<br />complex projects</h3>
                                <a href="#">Learn about our work</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12" style={{ marginTop: "20px"}}>
                        <img src="/main-background-small.png" className="img-fluid" />
                        </div>
                    </div>
                </div>    
                </section>
            </main>
            <FooterComponent />
        </div>
    )
}

export default TeamPage
