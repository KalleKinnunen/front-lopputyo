import React, { useState, useEffect } from "react";
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid';


function Kalenteri() {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
     }, []);

    const fetchTrainings = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(response => response.json())
        .then(data => {
            setTrainings(data.content)
        })
    }

    const training = trainings.map(training =>
        [{activity: training.activity,
        date: training.date}])

    return (
        <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={[{title: training.activity, date: training.date}]}
     
        />
    )
}

export default Kalenteri;