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


// let objectThisDay = {
//     date: 'MARCH 28, 2019',
//     heading: 'Lambda Times',
//     temperature: '98°' 
// };

function CreateComponent(input){

    // Create HTML Elements 

    const mainDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const headerText = document.createElement('h1');
    const tempSpan = document.createElement('span');

    // Add Classes to Elements

    mainDiv.classList.add('header');
    dateSpan.classList.add('date');
    headerText.classList.add('h1');
    tempSpan.classList.add('temp');

    // Add Content

    dateSpan.textContent = 'MARCH 20, 2019';
    headerText.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';

    // Append Elements Where necessary

    mainDiv.append(dateSpan, headerText, tempSpan);

    // Return the main component.

    return mainDiv;
}

const makeItWork = document.querySelector('.header-container');
makeItWork.append(CreateComponent());


// console.log(objectThisDay);