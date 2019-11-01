// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



function MakingTheTab(input){
    
    // Create Element
    const area = document.createElement('div');

    // Append

    // Add Classes

    area.classList.add('tab');


    // Add Content

    area.textContent = input.topics;

    return MakingTheTab;
}



axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    console.log(response);

    const result = document.querySelector('.topics');
    // result.append(MakingTheTab(response));

    response.forEach(item => {
        result.append(MakingTheTab(item.input));
    })
}).catch(error => {
    console.log(error);
})




