import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { DialogActions, DialogContent, TextField } from '@mui/material';
import Traininglist from "./Traininglist";

function EditTraining({editTraining, params}) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: "",
        duration: '',
        activity: '',
    });

    const handleOpen = () => {
        console.log(params.value);
        setOpen(true);
        setTraining({
            date: params.data.date,
            duration: params.data.duration,
            acitivity: params.data.activity,
         
        })
    }

    const handleSave = () => {
        console.log("tallennus");
        editTraining(training, params.value);
        setOpen(false)
    }

    const handleClose = () => {
        console.log("close")
        setOpen(false)
    }

    const inputChanged = (event) => {
        setTraining({...training, [event.target.name] : event.target.value})
    }

    return (
        
        <div>
            <IconButton onClick={handleOpen}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Muokkaa harjoitusta</DialogTitle>
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
                    <Button onClick={handleSave}>Tallenna </Button>
                    <Button onClick={handleClose}>Peruuta</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditTraining