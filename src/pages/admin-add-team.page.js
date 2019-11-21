import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TeamService from '../services/team.service';
import AdminHeaderComponent from '../components/admin-header.component';

function AdminAddTeamPage() {
    let history = useHistory();
    const [selectedImage, setSelectedImage] = useState();
    const [name, setName]= useState('');
    const [description, setDescription] = useState('');
    const [designation, setDesignation]= useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('image', selectedImage);
        data.append('name', name);
        data.append('designation', designation);
        data.append('description', description);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        const teamService = new TeamService();
        teamService.create(data, config).then(res => {
            if (res.status === 200) {
                history.push('/admin/teams');
            }
        });
    }

    return (
        <div className="bg-light">
        <AdminHeaderComponent />
        <div className="container mt-md-3 pb-md-3 pb-3 bg-light">
        <form className="ml-md-5 mt-md-5" onSubmit={(e) => onSubmit(e)}>
        <div classNmae="row">
            <div className="col-md-12">
                <div class="form-group ">
                    <label for="exampleFormControlFile1">Upload Project Image</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={e => setSelectedImage(e.target.files[0])} />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input 
                            className="form-control w-100" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                        </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <label for="short_description">Designation</label>
                    <input 
                        className="form-control" 
                        id="short_description"
                        value={designation}
                        onChange={e => setDesignation(e.target.value)} />
                </div>
            </div>
        </div>
       <div className="row">
         <div className="col-md-8">
            <div className="form-group">
                    <label for="comment">Description:</label>
                    <textarea 
                        className="form-control" 
                        rows="5" 
                        id="comment"
                        value={description}
                        onChange={e => setDescription(e.target.value)}></textarea>
            </div>
         </div>
       </div>
       <div className="row">
            <div className="col-auto ml-auto">
                <button type="submit" className="btn btn-primary" >Submit</button>
            </div>
       </div>
        </form>
        </div>
        </div>
    )
}

export default AdminAddTeamPage
