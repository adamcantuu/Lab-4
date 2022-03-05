console.log(theJSON.data);
let topLeft = theJSON.data[2];
let topRight = theJSON.data[0];
let bottomLeft = theJSON.data[3];
let bottomRight = theJSON.data[1];

function Run5(){
    console.log(theJSON);

    let boundingBox = {
        topLeft: topLeft,
        topRight: topRight,
        bottomLeft: bottomLeft,
        bottomRight: bottomRight,
    }

    console.log ("Bounding box computed for adamcantuu@tamu.edu: ")
    console.log(boundingBox);
}

