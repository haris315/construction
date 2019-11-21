import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { useHistory } from 'react-router-dom'
import { Spinner, Modal, Button, Form, Col, Row } from 'react-bootstrap';

import AdminHeaderComponent from '../components/admin-header.component';
import TeamService from '../services/team.service';

function AdminTeamPage() {
    let history = useHistory();

    
    const [teams, setTeams] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState();
    const [showEditTeam, setShowEditTeam] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [designation, setDesignation] = useState('');
    const [teamImage, setTeamImage] = useState();
    const [selectedImage, setSelectedImage] = useState();
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditClose = () => setShowEditTeam(false);
    const handleEditShow = () => setShowEditTeam(true);
    
    const columns = [
            {
                name: 'Image',
                sortable: true,
                cell: row => <img className="w-50" src={row.image}/>
            },
            {
                name: 'Name',
                selector: 'id',
                sortable: true,
            },
            {
                name: 'Designation',
                selector: 'designation',
                sortable: true,
                right: true,
            },
            {
                name: 'Description',
                selector: 'description',
                sortable: true,
                right: true,
            }, 
            {
                name: 'Delete',
                right: true,
                cell: row => <button class="btn btn-danger" onClick={() => onSelectTeam(row.id)}><i class="fas fa-trash-alt"></i></button>
            },
            {
                name: 'Update',
                right: true,
                cell: row => <button class="btn btn-info" onClick={() => onSelectEditTeam(row)}><i class="fas fa-pencil-alt"></i></button>
            }
        ];
    const teamService = new TeamService();
    useEffect(() => {
        teamService.getAll().then(res => 
            { 
                setTeams(res);
                setIsLoading(false);
            }
        );
    }, []);

    const confirmDelete = () => {
        teamService.delete(selectedTeam);
        handleClose();
    }

    const onSelectTeam = (id) => {
        setSelectedTeam(id);
        handleShow();
    }

    const onSelectEditTeam = (row) => {
        console.log('row ', row);
        setName(row.name);
        setDescription(row.description);
        setDesignation(row.designation);
        setTeamImage(row.image)
        setSelectedTeam(row.id);
        handleEditShow();
    }

    const confirmEditTeam = async () => {
        let dataImage = new FormData();
        dataImage.append('image', selectedImage);

        const data = {
            id: selectedTeam,
            image: selectedTeam,
            name,
            designation,
            description,
            image: teamImage
        }
        if (selectedImage) {
            const image = await teamService.uploadImage(dataImage, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });
            data.image = image;
        }

        console.log('team service update ', data);
        teamService.updateTeamMember(data).then(res => {
            if (res.status === 200) {
                setShowEditTeam(false);
            }
        });
        handleEditClose();
    }

    return (
       <div>
           <AdminHeaderComponent />
            <div className="container mt-md-4">
              <div className="row ">
                  <div className="col-md-12">
                    <div>
                        <button  type="button" className="btn btn-primary btn-lg float-right" onClick={() => history.push("/admin/add-team")}>Add Teams</button>
                    { teams ?  <DataTable
                        title="Team List"
                        columns={columns}
                        data={teams}
                        />: null }
                    </div>
                </div>
              </div>
              <div className="row">
                    <div className="col-md-6 offset-md-6 mt-md-5 py-5">
                        {isLoading ? (<Spinner animation="border" />): null}
                    </div>
              </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Delete Team</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete team</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={confirmDelete}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal size="lg" show={showEditTeam} onHide={handleEditClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update Team</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control value={designation} onChange={e => setDesignation(e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={description} onChange={e => setDescription(e.target.value)} as="textarea" rows="3" />
                    </Form.Group>

                    <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupFileAddon01">
                                Upload
                                </span>
                            </div>
                            <div className="custom-file">
                                <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile01"
                                aria-describedby="inputGroupFileAddon01"
                                onChange={e => setSelectedImage(e.target.files[0])}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile01">
                                Choose file
                                </label>
                            </div>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleEditClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={confirmEditTeam}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
       </div>
    )
}

export default AdminTeamPage
