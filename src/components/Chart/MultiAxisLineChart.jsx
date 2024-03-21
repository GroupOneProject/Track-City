import React from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function MultiAxisLineChart({ visible, width, height, margin }) {
    // Fetching titles from local storage
    const storedTitles = JSON.parse(localStorage.getItem("TabTitles"));

    // Generating labels for the datasets based on stored titles
    const labels = storedTitles.map(item => item.title);

    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: storedTitles.map((item, index) => ({
            label: item.title,
            borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
            data: [30, 55, 232, 444, 378, 43, 932], // Placeholder data, you can replace it with your actual data from local storage
            fill: true,
            yAxisID: 'y-axis-1'
        }))
    };

    const options = {
        scales: {
            yAxisID: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    position: 'left'
                }
            ]
        }
    };

    return (
        <div className="Chart" style={{ display: visible ? "flex" : "none", width: width, height: height, margin: margin }}>
            <Line
                data={data}
                options={options}
            />
        </div>
    );
}

export default MultiAxisLineChart;
