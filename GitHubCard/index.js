//import {axios} from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// let array = [
//   {
//     name: "menubar",
//     you: "melanie",
//     dami: 2,
//   }
// ]
// console.log(array[0].name);
let resArray = [];
axios
 .get(`https://api.github.com/users/adelazalewski`)
 .then((res) => {
   console.log('you did it: ', res.data);
   resArray.push(res.data);
   console.log(resArray);
   cards.appendChild(gitProfileCardsMaker(resArray));
   //const cards = document.querySelector('.cards');
 })
 .catch((err) => {
   console.log('this didnt work:', err);
 });
 
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
let eachUsersArray = [];
console.log(eachUsersArray);

let followersArray = ["https://api.github.com/users/melaniechele", "https://api.github.com/users/mrjoshuamartinez", "https://api.github.com/users/markrogo", "https://api.github.com/users/sathyaganesan", "https://api.github.com/users/gitnubl33t"];
followersArray.forEach((url) => {axios.get(url).then((res) => {
  console.log('users res: ', res.data); 
  eachUsersArray.push(res.data);
  let manipulateArray = eachUsersArray.splice(0, 1);
  console.log(manipulateArray);
  // console.log(eachUsersArray); - this is now emplty after the splice...
  cards.appendChild(gitProfileCardsMaker(manipulateArray));
 }).catch((err) => {
    console.log('this is error: ', err);});
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function gitProfileCardsMaker(array) {
  const divCard = document.createElement('div');
  const img = document.createElement('img');
  const divCardInfo =  document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location =  document.createElement('p');
  const profile =  document.createElement('p');
  const anchorLink =  document.createElement('a');
  const followers =  document.createElement('p');
  const following =  document.createElement('p');
  const bio =  document.createElement('p');

  divCard.classList.add('card');
  //console.log(array);
  img.src = array[0].avatar_url;
  divCardInfo.classList.add('card-info');
  name.classList.add('name');
  name.textContent = array[0].name;
  userName.classList.add('username');
  location.textContent = array[0].location;
  profile.textContent = 'Profile: ';
  anchorLink.href = array[0].html_url;
  anchorLink.textContent = array[0].name;
  followers.textContent = `Followers: ${array[0].followers}`;
  following.textContent = `Following: ${array[0].following}`;
  bio.textContent = array[0].bio;

  divCard.appendChild(img);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(name);
  divCardInfo.appendChild(userName);
  divCardInfo.appendChild(location);
  divCardInfo.appendChild(profile);
  profile.appendChild(anchorLink);
  divCardInfo.appendChild(followers);
  divCardInfo.appendChild(following);
  divCardInfo.appendChild(bio);

  return divCard;
};
const cards = document.querySelector('.cards');
//cards.appendChild(gitProfileCardsMaker(resArray));

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
 