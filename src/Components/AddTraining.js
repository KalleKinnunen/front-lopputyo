import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, TextField } from '@mui/material';

function AddTraining( {addTraining} ) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '',
        duration: '',
        activity: '',
 
    })

    const handleClose = () => {
        console.log("suljettiin ikkuna");
        addTraining(training);
        setOpen(false);
    }

    const handleOpen = () => {
        console.log("Add nappia painettu");
        setOpen(true);
    }

    const inputChanged = (event) => {
        setTraining({...training, [event.target.name]: event.target.value});
        console.log("Muutos tapahtunut" + training)
    }

    const handleCancel = () => {
        console.log("Cancel nappia painettu");
        setOpen(false);
    }

    return(
        <div>
            <Button onClick={handleOpen} variant="outlined">Harjoitus</Button>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Uusi harjoitus</DialogTitle>
                <DialogContent>
                    <TextField
                        name="date"
                        value={training.date}
                        margin="dense"
                        label="Date"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="duration"
                        value={training.duration}
                        margin="dense"
                        label="Duration"
                        fullWidth={true}
                        onChange={inputChanged}
                    />
                    <TextField
                        name="activity"
                        value={training.activity}
                        margin="dense"
                        label="Activity"
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

export default AddTraining