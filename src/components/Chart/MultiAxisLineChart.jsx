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

    // Initialize accumulated points for each title
    const accumulatedPoints = {};

    // Initialize labels for the days of the week
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Iterate over stored titles to accumulate points for each day of the week
    storedTitles.forEach((item, index) => {
        accumulatedPoints[item.title] = [0, 0, 0, 0, 0, 0, 0]; // Initialize points for each day of the week
        const pointsData = JSON.parse(localStorage.getItem(item.storageKey));
        pointsData.forEach(data => {
            const date = new Date(data.startDate);
            const dayOfWeek = date.getDay(); // Get day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
            accumulatedPoints[item.title][dayOfWeek] += data.points; // Accumulate points for the corresponding day of the week
        });
    });

    // Create datasets for each title
    const datasets = storedTitles.map((item, index) => ({
        label: item.title,
        data: accumulatedPoints[item.title],
        fill: false,
        borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
        yAxisID: 'y-axis-1'
    }));

    const data = {
        labels: labels,
        datasets: datasets
    };

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
