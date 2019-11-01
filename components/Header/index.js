// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

todayInfo ={
    date: '1 Nov 2019', 
    heading: 'Lambda Days',
    temperature: '98°'
};

// Reminder: What goes into the header()??? Don't forget this.
function Header(inputObject) {

    // Create HTML Elements
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const headerText = document.createElement('h1');
    const tempSpan = document.createElement('span');

    // Append Items
    headerDiv.append(dateSpan);
    headerDiv.append(headerText);
    headerDiv.append(tempSpan);


    // Add Class names here. Notes: No need in this instance.


    // Add Content Here

    dateSpan.textContent = inputObject.date;
    headerText.textContent = inputObject.heading;
    tempSpan.textContent = inputObject.temperature;

    return Header;
}



const connect = document.querySelector('.header-container');
connect.append(Header(todayInfo));