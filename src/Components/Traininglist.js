import React, { useEffect }  from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';


import EditTraining from './EditTraining';
import AddTraining from './AddTraining';

function Traininglist() {
    const [trainings, setTrainings] = React.useState([]);

    const deleteTraining = (link) => {
        if (window.confirm('Are you sure?'))

        fetch(link, { method: 'DELETE'})
            .then(response => {
                if(response.ok) {
                    fetchTrainings();
                }
            })
    }

    const addTraining = (training) => {
        console.log("traininglistin addtraining funktio");
        fetch("https://customerrest.herokuapp.com/api/trainings", {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(training)
            })
            .then(response => {
                if(response.ok) {
                    fetchTrainings();
                } else {
                    alert("Something went wrong!");
                }
            })
            .catch(err => console.error(err))
    }

    const fetchTrainings = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
            .then(response => response.json())
            .then(data => setTrainings(data.content))
    }

    const editTraining = (editTraining, link) => {
        
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(editTraining)
        })
        .then(response => {
            if(response.ok) {
                console.log("onnistui");
                fetchTrainings();
            } else {
                alert('Something went wrong');
            }
        })
        .catch(err => console.error(err))
    }

    const columns = [
       { field: "date" , sortable: true , filter: true, floatingFilter: true },
       { field: "duration " , sortable: true , filter: true, floatingFilter: true },
       { field: "activity" , sortable: true , filter: true, floatingFilter: true },
   
       {
           headerName: 'Edit' ,
           width: 100 ,
           field: 'links.0.href' ,
           cellRenderer: params =>
            <EditTraining editTraining={editTraining} params={params} />
       }, {
           headerName: 'Delete' ,
           width: 100 ,
           field: 'links.0.href' ,
           cellRenderer: params => 
            <IconButton onClick={() => deleteTraining(params.value)}>
                <DeleteIcon />
            </IconButton>
       },
    ]

    useEffect( () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
            .then(response => response.json())
            .then(data => setTrainings(data.content))
    }, [])

    return (
        <div className="ag-theme-material" style={{height: 600, width: '90'}}>
            <AddTraining addTraining={addTraining} />

            <AgGridReact
                rowData={trainings}
                paginationPageSize={11}
                pagination={true}
                columnDefs={columns}>
            </AgGridReact>

      
        </div>
    );
}


export default Traininglist