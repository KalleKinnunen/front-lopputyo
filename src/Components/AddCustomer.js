import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, TextField } from '@mui/material';

function AddCustomer( {addCustomer} ) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    })

    const handleClose = () => {
        console.log("suljettiin ikkuna");
        addCustomer(customer);
        setOpen(false);
    }

    const handleOpen = () => {
        console.log("Add nappia painettu");
        setOpen(true);
    }

    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});
        console.log("Muutos tapahtunut" + customer)
    }

    const handleCancel = () => {
        console.log("Cancel nappia painettu");
        setOpen(false);
    }

    return(
        <div>
            <Button onClick={handleOpen} variant="outlined">Lisää asiakas</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Uusi asiakas</DialogTitle>
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
                    <Button onClick={handleClose}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCustomer