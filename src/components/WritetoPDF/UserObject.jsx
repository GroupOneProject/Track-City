import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import './UserObject.css'

// these values are hard coded for the time being, but will eventually pull from variables, populated via user input.
const userInput = [
    {
        Title: 'Vaccuum the Stairs',
        Description: 'You need to make sure that the stairs are vaccuumed and shake and vacced for freshness!',
        Duedate: '',
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
    const downloadPdfDocument = () => {
    const selectedName = 'Toussaint'
    const tasks =  [userInput[0], userInput[1], userInput[2]]; 
    const tasksHtml = tasks.map((task, index) => `<div>
    <h4>${selectedName}, here are your pending tasks!</h4>
    <p>${index + 1}. ${task.Title}
    <p class='pdf-text'>${task.Description}</p>
    <p class='pdf-text'>This is due on ${task.Duedate}</p>
    <p class='pdf-text'>There are ${task.Points} points available!</p>
    </div>`).join('');

    const element = document.createElement('div');
    element.classList.add('pdf');
    element.innerHTML = tasksHtml;
    document.body.appendChild(element); // Temporarily add to the document

    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save("tasks.pdf");

      document.body.removeChild(element); // Clean up
    });
  };

  return (
    <button onClick={downloadPdfDocument}>Download Tasks as PDF</button>
  );
}

export default DownloadTasks;



// const UserObject = () => {
//   return (
//     <div>UserObject</div>
//   )
// }

// export default UserObject

