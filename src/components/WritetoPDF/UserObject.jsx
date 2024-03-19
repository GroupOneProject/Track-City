import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './UserObject.css'
// import Designer from '../../../public/Designer-1.png'
import Designer from '/src/assets/Designer-1.png'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'

// these values are hard coded for the time being, but will eventually pull from variables, populated via user input.
const userInput = [
    {
        Title: 'Vaccuum the Stairs',
        Description: 'You need to make sure that the stairs are vaccuumed and shake and vacced for freshness!',
        Duedate: 'Friday, 15th March',
        Points: 10,
        Completed: false
    },

    {
        Title: 'Dishes',
        Description: 'Make sure that the dishes are all washed on Tuesday, as we have a big event on Wednesday!',
        Duedate: 'Saturday, 16th March',
        Points: 30,
        Completed: true
    },

    {
        Title: 'Laundry',
        Description: 'All laundry from every bedroom needs to be separated and washed. No mixing whites and colours!',
        Duedate: 'Sunday, 17th March',
        Points: 80,
        Completed: false
    },

    {
        Title: 'Pack school bags',
        Description: 'Make sure the kids have their bags packed before 7.30am each day.',
        Duedate: '',
        Points: 80,
        Completed: false
    }
]



function DownloadTasks() {
    const userArray = ['Aimee', 'Marcus', 'Tonya'];
    const [selectedName, setSelectedName] = useState(userArray[0]); 

    const downloadPdfDocument = () => {
        const tasks = [userInput[0], userInput[1], userInput[2]]; 

        const tasksHtml = tasks.map((task, index) => `<div>
        <p>${index + 1}. ${task.Title}
        <p class='pdf-text'>${task.Description}<br/>
        This is due on ${task.Duedate}<br/>
        There are ${task.Points} points available!</p>
        </div>`).join('');

        const containerHTML = `<img src=${Designer} class='pdf-logo' width='100' height='100'>
        <h4 class='pdf-title'>${selectedName}, here are your tasks for the week. Thank you very much for all of the help.</h4><hr>`;

        const element = document.createElement('div');
        element.innerHTML = tasksHtml;

        const pdfContainer = document.createElement('div');
        pdfContainer.classList.add('pdf');
        pdfContainer.innerHTML = containerHTML;
        pdfContainer.appendChild(element);
        document.body.appendChild(pdfContainer); 

        html2canvas(pdfContainer).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 10, 10);
            pdf.save(`${selectedName} tasks.pdf`);
            document.body.removeChild(pdfContainer); 
        });
    };

    const handleDropdownClick = (name) => {
        setSelectedName(name); 
    };

    return (

        <section className='pdf-download-section'>
        <h5>You can download anyone's schedule and send it around to make sure they stay on track! Select a user from the dropdown below and click <strong>Download PDF</strong> to get a personalised schedule.</h5>
        <div className="dropdown">
            <button className="btn btn-info dropdown-toggle dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedName}
            </button>
            <ul className="dropdown-menu">
                {userArray.map((user, index) => (
                    <li key={index} onClick={() => handleDropdownClick(user)}>
                        <a className="dropdown-item" href="#">{user}</a>
                    </li>
                ))}
            </ul>
            <button onClick={downloadPdfDocument} className="btn btn-secondary">Download PDF</button>
        </div>
        </section>
    );
}

export default DownloadTasks;