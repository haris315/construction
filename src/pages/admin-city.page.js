import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Spinner from 'react-bootstrap/Spinner';

import AdminHeaderComponent from '../components/admin-header.component';
import CitiesService from '../services/cities.service';

function AdminCityPage() {

    const columns = [
            {
                name: 'Id',
                selector: 'id',
                sortable: true,
            },
            {
                name: 'Name',
                selector: 'name',
                sortable: true,
                right: true,
            }
        ];

    const [cities, setCities] = useState();
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const citiesService = new CitiesService();
    
    useEffect(() => {
        citiesService.getAll().then(res => { 
                setCities(res);
                setIsLoading(false);
            });
    }, [])

    const addCity = () => {
        citiesService.create({ name: city }).then(res => console.log('res ', res));
    }

    return (
       <div>
           <AdminHeaderComponent />
            <div className="container mt-md-4">
              <div className="row justify-content-md-center">
                <div className="col-8 col-offset-2">
                    <button  type="button" className="btn btn-primary btn-lg float-right" data-toggle="modal" data-target="#myModal">Add City</button>
                { cities ?  <DataTable
                    title="Project List"
                    columns={columns}
                    data={cities}
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
                                <label htmlFor="exampleInputEmail1" className="mt-md-2">City</label>
                                <input 
                                    className="form-control w-75 float-right" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-default" onClick={() => addCity()} >Save</button>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
       </div>
    )
}

export default AdminCityPage
