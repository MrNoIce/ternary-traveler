import {getFromDB} from "./api.js"
import {postToDom, postComToDom} from "./api.js"


console.log("Your Webpack application is set up and ready to go. Please start writing code.")
getFromDB("places")
getFromDB("comments")
//postToDom()
