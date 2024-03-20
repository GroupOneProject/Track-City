import React from 'react';

import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";

import { Line } from "react-chartjs-2"

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function MultiAxisLineChart() {
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Annoying Kid 1',
                borderColor: 'rgb(255, 99, 132)',
                // this data value needs to be changed to the tab1's value
                data: [30, 55, 232, 444, 378, 43, 932],
                fill: true,
                yAxisID: 'y-axis-1'
            },
            {
                label: 'Annoying Kid 2',
                borderColor: 'rgb(54, 162, 235)',
                // this data value needs to be changed to the tab2's value
                data: [20, 30, 40, 50, 60, 70, 80],
                fill: true,
                yAxisID: 'y-axis-1'
            },
            {
                label: 'Annoying Kid 3',
                borderColor: 'rgb(75, 192, 192)',
                // this data value needs to be changed to the tab3's value
                data: [330, 420, 50, 330, 793, 828, 1000],
                fill: true,
                yAxisID: 'y-axis-1'
            }
        ]
    }
    
    const options = {
    scales: {
        yAxisID: [
            {
                id: 'y-axis-1',
                type: 'linear',
                position: 'left'
            },
            {
                id: 'y-axis-2',
                type: 'linear',
                position: 'right',
                display: false
            }
        ]
    }
    }
    
    return (
        <div className="Chart">
        <div style={
            {width: "100%", display: "none"}}>
            <Line
            data={data}
            options={options}
            />
        </div>
        </div>
    );
    }
    
    export default MultiAxisLineChart;
