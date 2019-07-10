import { getFromDB } from "./api.js";
//This is not a test
const test = document.querySelector("#container");
test.innerHTML = "<h1>Is this Working</h1>";
//creating the form to add new places
const locationForm = document.querySelector("#container4");
locationForm.innerHTML = `
    <section id="placesContainer">
    <input type="text" id="placeName" placeholder="Name">
    <input type="checkbox" id="visaReq" name="visa" value="visaReq">
    <label for="visaReq">Visa Required?</label>
    <button id="savePlace">Save</button>`;
console.log(locationForm);
//Putting the places into the DOM
function postToDom(places) {
  const placesList = document.querySelector("#container2");
  places.forEach(place => {
    placesList.innerHTML += `<li>${place.id} ${place.name} ${
      place.visa_required
    }
    <button id="editBtn">Edit</button>
    <button id="deleteBtn">Delete</button></li>`;
  });
}
//Putting comments to DOM
function postComToDom(comments) {
  //getFromDB("com;ments")
  const commentList = document.querySelector("#container3");
  comments.forEach(comment => {
    commentList.innerHTML = `<div>${comment.id} ${comment.body} ${
      comment.postId
    } </div>`;
  });
}
export { postToDom, postComToDom };
