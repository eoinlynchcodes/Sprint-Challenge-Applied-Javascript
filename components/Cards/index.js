// // STEP 3: Create Article cards.
// // -----------------------
// // Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// // Study the response data you get back, closely.
// // You will be creating a component for each 'article' in the list.
// // This won't be as easy as just iterating over an array though.
// // Create a function that will programmatically create the following DOM component:
// //
// // <div class="card">
// //   <div class="headline">{Headline of article}</div>
// //   <div class="author">
// //     <div class="img-container">
// //       <img src={url of authors image} />
// //     </div>
// //     <span>By {authors name}</span>
// //   </div>
// // </div>
// //
// // Create a card for each of the articles and add the card to the DOM.

function createCard(input) {
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorsName = document.createElement('span');

    cardDiv.append(headlineDiv);
    cardDiv.append(authorDiv);
    authorDiv.append(imageContainer);
    imageContainer.append(image);
    imageContainer.append(authorsName);

    // Add Classnames

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imageContainer.classList.add('img-container');

    // Adding Content
    // headlineDiv.textContent = input.articles.headline;
    // image.setAttribute('src', input.articles.authorPhoto);
    // authorsName.textContent = 'By ' + input.articles.authorName;

    console.log(input.articles);

    return cardDiv;
}



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data);

    const result = document.querySelector('.cards-container');
    result.append(createCard(response.data));
})
.catch(error => {
    console.log(error);
})

