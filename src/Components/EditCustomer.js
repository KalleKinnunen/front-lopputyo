import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { DialogActions, DialogContent, TextField } from '@mui/material';
import Customerlist from "./Customerlist";

function EditCustomer({editCustomer, params}) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    });

    const handleOpen = () => {
        console.log(params.value);
        setOpen(true);
        setCustomer({
            firstname: params.data.firstname,
            lastname: params.data.lastname,
            streetaddress: params.data.streetaddress,
            postcode: params.data.postcode,
            city: params.data.city,
            email: params.data.email,
            phone: params.data.phone,
        })
    }

    const handleSave = () => {
        console.log("tallennus");
        editCustomer(customer, params.value);
        setOpen(false)
    }

    const handleClose = () => {
        console.log("close")
        setOpen(false)
    }

    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name] : event.target.value})
    }

    return (
        <div>
            <IconButton onClick={handleOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Muokkaa asiakasta</DialogTitle>
                <DialogContent>
                <TextField
                        name="firstname"
                        value={customer.firstname}
                        margin="dense"
                        label="Firstname"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="lastname"
                        value={customer.lastname}
                        margin="dense"
                        label="Lastname"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="streetaddress"
                        value={customer.streetaddress}
                        margin="dense"
                        label="Streetaddress"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="postcode"
                        value={customer.postcode}
                        margin="dense"
                        label="Postcode"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="city"
                        value={customer.city}
                        margin="dense"
                        label="City"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="email"
                        value={customer.email}
                        margin="dense"
                        label="Email"
                        fullWidth={true}
                        onChange={inputChanged}
                    />

                    <TextField
                        name="phone"
                        value={customer.phone}
                        margin="dense"
                        label="Phone"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSave}>Tallenna </Button>
                    <Button onClick={handleClose}>Peruuta</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCustomer