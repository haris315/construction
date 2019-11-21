import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Spinner from 'react-bootstrap/Spinner';

import AdminHeaderComponent from '../components/admin-header.component';
import JobsService from '../services/jobs.service';


function AdminJobPage() {
    const jobsService = new JobsService();
    const columns = [
        {
            name: 'Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Description',
            selector: 'description',
            sortable: true,
            right: true,
        }
    ];
    const [jobs, setJobs] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        jobsService.getAll().then(res => setJobs(res));
    }, [])

    const addJob = () => {
        jobsService.create({ title, description }).then(res => console.log('create ', res))
    }

    return (
        <div>
        <AdminHeaderComponent />
         <div className="container mt-md-4">
           <div className="row justify-content-md-center">
             <div className="col-8 col-offset-2">
                 <button  type="button" className="btn btn-primary btn-lg float-right" data-toggle="modal" data-target="#myModal">Add Job</button>
             { jobs ?  <DataTable
                 title="Jobs List"
                 columns={columns}
                 data={jobs}
                 />: null }
             </div>
           </div>
           <div className="row">
                 <div className="col-md-6 offset-md-6 mt-md-5 py-5">
                     {isLoading ? (<Spinner animation="border" />): null}
                 </div>
           </div>
           <div className="modal fade" id="myModal" role="dialog">
                 <div className="modal-dialog">
                 
                 <div className="modal-content">
                     <div className="modal-header">
                     <button type="button" className="close" data-dismiss="modal">&times;</button>
                     {/* <h4 className="modal-title float-left">Add City</h4> */}
                     </div>
                     <div className="modal-body">
                         <div className="form-group">
                             <label htmlFor="exampleInputEmail1" className="mt-md-2">Title</label>
                             <input
                                 className="form-control w-75 float-right" 
                                 id="exampleInputEmail1" 
                                 aria-describedby="emailHelp" 
                                 placeholder="Enter Title"
                                 value={title}
                                 onChange={(e) => setTitle(e.target.value)} />
                         </div>
                         <div className="form-group">
                             <label htmlFor="exampleInputDescription" className="mt-md-2">Description</label>
                             <textarea 
                                className="form-control" 
                                rows="5" 
                                id="exampleInputDescription" 
                                value={description} onChange={(e) => setDescription(e.target.value)} />
                         </div>
                     </div>
                     <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => addJob()} >Save</button>
                     </div>
                 </div>
                 
                 </div>
             </div>
         </div>
    </div>
    )
}

export default AdminJobPage
