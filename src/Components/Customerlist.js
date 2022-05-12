import React, { useEffect }  from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { AgGridReact } from 'ag-grid-react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import AddTraining from './AddTraining';
import { CSVLink, CSVDownload } from "react-csv";


import AddCustomer from './AddCustomer';

import EditCustomer from './EditCustomer';

function Customerlist() {
    const [customers, setCustomers] = React.useState([]);
    const [trainings, setTrainings] = React.useState([]);

    const deleteCustomer = (link) => {
        if (window.confirm('Are you sure?'))

        fetch(link, { method: 'DELETE'})
            .then(response => {
                if(response.ok) {
                    fetchCustomers();
                }
            })
    }

    const addCustomer = (customer) => {
        console.log("customerlistin addcustomer funktio");
        fetch("https://customerrest.herokuapp.com/api/customers", {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(customer)
            })
            .then(response => {
                if(response.ok) {
                    fetchCustomers();
                } else {
                    alert("Something went wrong!");
                }
            })
            .catch(err => console.error(err))
    }

    const fetchCustomers = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
            .then(response => response.json())
            .then(data => setCustomers(data.content))
    }

    const editCustomer = (editCustomer, link) => {
        
        fetch(link, {
            method: 'PUT',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(editCustomer)
        })
        .then(response => {
            if(response.ok) {
                console.log("onnistui");
                fetchCustomers();
            } else {
                alert('Something went wrong');
            }
        })
        .catch(err => console.error(err))
    }

    useEffect(() => {
        fetchTrainings();
      }, []);

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

    const columns = [
       { field: "firstname" , sortable: true , filter: true, floatingFilter: true },
       { field: "lastname" , sortable: true , filter: true, floatingFilter: true },
       { field: "streetaddress" , sortable: true , filter: true, floatingFilter: true },
       { field: "postcode" , sortable: true , filter: true, floatingFilter: true },
       { field: "city" , sortable: true , filter: true, floatingFilter: true },
       { field: "email" , sortable: true , filter: true, floatingFilter: true},
       { field: "phone" , sortable: true , filter: true, floatingFilter: true},
       {
        headerName: 'Add training' ,
        width: 100 ,
        field: 'links.0.href' ,
        cellRenderer: params => 
         <AddTraining addTraining={addTraining} params={params}
         />
         
         
    },
       {
           headerName: 'Edit' ,
           width: 100 ,
           field: 'links.0.href' ,
           cellRenderer: params =>
            <EditCustomer editCustomer={editCustomer} params={params} />
       }, {
           headerName: 'Delete' ,
           width: 100 ,
           field: 'links.0.href' ,
           cellRenderer: params => 
            <IconButton onClick={() => deleteCustomer(params.value)}>
                <DeleteIcon />
            </IconButton>
       },

    ]

    useEffect( () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
            .then(response => response.json())
            .then(data => setCustomers(data.content))
    }, [])

    return (
        <div className="ag-theme-material" style={{height: 600, width: '90'}}>
            <CSVLink data={customers} >Lataa CSV-tiedosto asiakkaista</CSVLink>
            <AddCustomer addCustomer={addCustomer} />
            <AgGridReact
                rowData={customers}
                paginationPageSize={11}
                pagination={true}
                columnDefs={columns}>
            </AgGridReact>

      
        </div>
    );
}

export default Customerlist