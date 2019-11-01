// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function TabComponent(input){

    const mainDiv = document.createElement('div');

    mainDiv.classList.add('tab');

    mainDiv.textContent = input;

    return mainDiv;
}


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response.data.topics);

    const connection = document.querySelector('.topics');
    response.data.topics.map(topics => {
        connection.append(TabComponent(topics));
    })
})
.catch(error => {
    console.log(error);
});







