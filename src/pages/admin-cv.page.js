import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import Spinner from 'react-bootstrap/Spinner';

import AdminHeaderComponent from '../components/admin-header.component';
import CvService from '../services/cv.service';

function AdminCVPage() {

    const columns = [
            {
                name: 'CV',
                sortable: true,
                cell: row => <a className="w-50" href={row.cv}>CV</a>
            },
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
            },
            {
                name: 'Email',
                selector: 'email',
                sortable: true,
                right: true,
            }
        ];

    const [cvList, setCvList] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const cvService = new CvService();
    
    useEffect(() => {
        cvService.getAll().then(res => 
            { 
                setCvList(res);
                setIsLoading(false);
            }
         );
    }, [])

    return (
       <div>
           <AdminHeaderComponent />
            <div className="container mt-md-4">
              <div className="row">
                <div className="col-12">
                { cvList ?  <DataTable
                    title="CV List"
                    columns={columns}
                    data={cvList}
                    />: null }
                </div>
              </div>
              <div className="row">
                    <div className="col-md-6 offset-md-6 mt-md-5 py-5">
                        {isLoading ? (<Spinner animation="border" />): null}
                    </div>
              </div>
            </div>
       </div>
    )
}

export default AdminCVPage
