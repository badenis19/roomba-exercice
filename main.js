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
        let roomAndHooverPosition = array.splice(0,2);

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
        dirtPatchesArray= [];

        // Iterating over the array of dirt patches
        // Storing each of the dirt patch in objects with the keys "position" and "cleaned"
        // pushing each objects in the dirtPatchesArray to then have an array of objects
        dirtPatches.forEach((el) => {
            dirts = {};
            dirts["position"] = el.split(" ");
            dirts["cleaned"] = false;
            dirtPatchesArray.push(dirts);
        })

        // This counter will increment each time a dirt is cleaned
        let cleanupCounter = 0;

        const updateHooverPosition = instruction => {
            if (instruction === 'N') {
                hooverPositionY++;
                dirtPatchesArray.forEach((el) => {
                    // console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el.position[0] + " " + el.position[1])
                    if ( hooverPositionX === Number(el.position[0]) && hooverPositionY === Number(el.position[1]) && el.cleaned === false){
                        cleanupCounter++;
                        el.dirtPatchPositionStatus = true;
                        console.log("Dirt cleaned")
                    } 
                })
            
            } else if (instruction === 'S') {
                hooverPositionY--;
                dirtPatchesArray.forEach((el) => {
                    // console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el.position[0] + " " + el.position[1])
                    if (hooverPositionX === Number(el.position[0]) && hooverPositionY === Number(el.position[1]) && el.cleaned === false){
                        cleanupCounter++;
                        el.cleaned = true;
                        console.log("Dirt cleaned")
                        console.log(el.cleaned)
                    } 
                })

            } else if (instruction === 'E') {
                hooverPositionX++;
                dirtPatchesArray.forEach((el) => {
                    // console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el.position[0] + " " + el.position[1])
                    if (hooverPositionY === Number(el.position[1]) && hooverPositionX === Number(el.position[0]) && el.cleaned === false ){
                        cleanupCounter++;
                        el.dirtPatchPositionStatus = true;
                        console.log("Dirt cleaned")
                        
                    } 
                })
            } else if (instruction === 'W') {
                hooverPositionX--;
                dirtPatchesArray.forEach((el) => {
                    // console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el.position[0] + " " + el.position[1])
                    if (hooverPositionY === Number(el.position[1]) && hooverPositionX === Number(el.position[0]) && el.cleaned === false ){
                        cleanupCounter++;
                        el.dirtPatchPositionStatus = true;
                        console.log("Dirt cleaned")
                    } 
                })
            }
        }

        for (let i in instructionsArray) {
            const instruction = instructionsArray[i]; // 'N' || 'S' || 'E' || 'W'
            updateHooverPosition(instruction); 
        }
       
        // Printing the output
        console.log("Final hoover position:")
        console.log(hooverPositionX + " " + hooverPositionY);
        console.log("Patches cleaned up:")
        console.log(cleanupCounter);
    }) 
