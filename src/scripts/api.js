import { postToDom, postComToDom} from "./dom";

function getFromDB(places) {
    return fetch(`http://localhost:8088/${places}`)
    .then(data => data.json())
    .then(data => {
        console.log(data)
        postToDom(data)
        postComToDom(data)
    })
}

export {getFromDB}