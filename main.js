// requiring the fs module to read the text file
const fs = require('fs');

// text file path
const input = 'input.txt';

// reading the file and storing it in the "data" variable
fs.readFile(input, (err, data) => {
    if (err) throw err;

    // turning data into a string then splitting the text by lines into an array 
    var array = data.toString().split("\n");

    // grabbing the 2 first elements of the array and removing it from the original array 
    // storing the room dimension and hoover position
    let roomAndHooverPosition = array.splice(0, 2);

    // grabbing the last element of the array and removing it from the original array 
    // storing the driving instruction
    let drivingIInstruction = array.splice(-1);

    // storing the patches of dirt
    let dirtPatches = array;

    // get X and Y axis of room dimension as a String
    let roomDimension = roomAndHooverPosition[0];

    // turning String to array of integers. From "5 5" to [ 5, 5 ] and storing into roomDimension
    roomDimension = roomDimension.split(" ").map((dimension) => {
        return Number(dimension);
    })

    // get x and y of hoover position 
    let hooverPosition = roomAndHooverPosition[1];

    // turning String to array of integers
    hooverPosition = hooverPosition.split(" ").map((el) => {
        return Number(el);
    })

    let hooverPositionX = hooverPosition[0]; // x-axis of hoover 
    let hooverPositionY = hooverPosition[1]; // y-axis of hoover 

    // storing each instruction in indexed array to then iterate over it. [ 'N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W' ]
    let instructionsArray = drivingIInstruction[0].split("");

    // Creating array that will hold the dirt patches positions and status (cleaned or not)
    dirtPatchesArray = [];

    // iterating over the array of dirt patches
    // storing each of the dirt patch in objects with the keys "position" and "cleaned"
    // pushing each object in the dirtPatchesArray to then have an array of objects
    dirtPatches.forEach((el) => {
        dirts = {};
        dirts["position"] = el.split(" ");
        dirts["cleaned"] = false;
        dirtPatchesArray.push(dirts);
    })

    // this counter will increment each time a dirt is cleaned
    let cleanupCounter = 0;

    // defining the updateHooverPosition function which takes instruction as parameters
    // according to the instruction 'N' || 'S' || 'E' || 'W' , a different action will be triggered
    const updateHooverPosition = instruction => {
        if (instruction === 'N') {
            hooverPositionY++; // increment Y axis
            dirtPatchesArray.forEach((dirt) => {
                 /* If the current hoover position is equal to one of the dirts position AND that the dirt hasn't been cleaned increase the counter + change the status 
                 the dirt to cleaned (true) */
                if (hooverPositionX === Number(dirt.position[0]) && hooverPositionY === Number(dirt.position[1]) && dirt.cleaned === false) {
                    cleanupCounter++;
                    dirt.dirtPatchPositionStatus = true;
                }
            })

        } else if (instruction === 'S') {
            hooverPositionY--; // decrement Y axis
            dirtPatchesArray.forEach((dirt) => {
                 /* If the current hoover position is equal to one of the dirts position AND that the dirt hasn't been cleaned increase the counter + change the status 
                 the dirt to cleaned (true) */
                if (hooverPositionX === Number(dirt.position[0]) && hooverPositionY === Number(dirt.position[1]) && dirt.cleaned === false) {
                    cleanupCounter++;
                    dirt.cleaned = true;
                }
            })

        } else if (instruction === 'E') {
            hooverPositionX++; // increment X axis
            dirtPatchesArray.forEach((dirt) => {
                 /* If the current hoover position is equal to one of the dirts position AND that the dirt hasn't been cleaned increase the counter + change the status 
                 the dirt to cleaned (true) */
                if (hooverPositionX === Number(dirt.position[0]) && hooverPositionY === Number(dirt.position[1]) && dirt.cleaned === false) {
                    cleanupCounter++;
                    dirt.dirtPatchPositionStatus = true;

                }
            })
        } else if (instruction === 'W') {
            hooverPositionX--; // decrement X axis
            dirtPatchesArray.forEach((dirt) => {
                 /* If the current hoover position is equal to one of the dirts position and that the dirt hasn't been cleaned increase the counter + change the status 
                 the dirt to cleaned (true) */
                if (hooverPositionX === Number(dirt.position[0]) && hooverPositionY === Number(dirt.position[1]) && dirt.cleaned === false) {
                    cleanupCounter++;
                    dirt.dirtPatchPositionStatus = true;
                }
            })
        }
    }

    // iterating over the instructions array an applying the function updateHooverPosition on each instructions
    for (let i in instructionsArray) {
        const instruction = instructionsArray[i]; // storing each instruction in a variable called "instruction"
        updateHooverPosition(instruction); // passing instruction as an argument on updateHooverPosition
    }

    // Printing the output
    console.log("Final hoover position:")
    console.log(hooverPositionX + " " + hooverPositionY);
    console.log("Number of patches cleaned up:")
    console.log(cleanupCounter);
}) 
