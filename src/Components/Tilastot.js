import React, { useState, useEffect } from "react";
import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
  } from 'devextreme-react/chart';

function Tilastot() {

    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
     }, []);

    const fetchTrainings = () => {
        fetch("https://customerrest.herokuapp.com/api/trainings")
        .then(response => response.json())
        .then(data => setTrainings(data.content))
    }

    const training = trainings.map(training => ({arg: training.activity, val: training.duration}))

    return(
            <Chart
                title="Aktiviteetit miinutteina"
                dataSource={training}
                id="chart"
                >

                <ArgumentAxis tickInterval={10}>
                <Label format="decimal" />
                </ArgumentAxis>

                <Series
                type="bar"
                />

                <Legend
                visible={false}
                />

            </Chart>
    )
}

export default Tilastot;