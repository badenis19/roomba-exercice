const fs = require('fs');

// input path
const input = 'input.txt';
 
fs.readFile(input, (err, data) => { 
        if (err) throw err; 
        
        // splitting the text by lines
        var array = data.toString().split("\n");
        console.log(array);

        // grabbing the 2 first elements of the array and removing it from the original array 
        // storing the room dimension and hoover position
        let roomAndHooverPosition = array.splice(0,2);

        // grabbing the last element of the array and removing it from the original array 
        // storing the driving instruction
        let drivingIInstruction = array.splice(-1);

        // storing the patches of dirt
        let dirtPatches = array
        // console.log("dirtPatches:");
        // console.log(dirtPatches);

        // get x and y of room dimension
        let roomDimension = roomAndHooverPosition[0];
        
        // turning string to array of integers
        roomDimension = roomDimension.split(" ").map((el) => {
            return Number(el)
        })

        let roomDimensionX = roomDimension[0];
        let roomDimensionY = roomDimension[1];

        console.log("Room dimensions:")
        console.log(`X = ${roomDimensionX} Y = ${roomDimensionY}`)

        // get x and y of hoover position 
        let hooverPosition = roomAndHooverPosition[1];
        // console.log("hoo" , hooverPosition )

        // turning string to array of integers
        hooverPosition = hooverPosition.split(" ").map((el) => {
            return Number(el)
        })

        let hooverPositionX = hooverPosition[0];
        let hooverPositionY = hooverPosition[1];
        console.log("Hoover position:")
        console.log(`X = ${hooverPositionX} Y = ${hooverPositionY}`)
    
        // putting each instruction in indexed a array to then iterate over it
        let instructionsArray = drivingIInstruction[0].split("");
        
        // Hoover position needs to be updated according to the instructions below
        // N = Y + 1 
        // S = Y - 1 
        // E = X + 1 
        // W = X + 1

        // make dirt arrray accessible
        console.log("dirtPatches: " + dirtPatches);

        // array that will old the dirt patch positions
        dirtPatchesArray= [];

        dirtPatches.forEach((el) => {
            dirtPatchesArray.push(el.split(" "))
        })

       dirtPatchPositionX = dirtPatchesArray[0][0]
       dirtPatchPositionY = dirtPatchesArray[0][1]

        // counter will increment each time there is a clean up
        let cleanupCounter = 0;
        // console.log(instructionsArray)
        for (let i in instructionsArray) {
            if (instructionsArray[i] === "N"){
                hooverPositionY++;
                console.log("UP " + hooverPositionY)

                dirtPatchesArray.forEach((el) => {
                    console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el[0] + " " + el[1])
                    if ( hooverPositionX === Number(el[0]) && hooverPositionY === Number(el[1])){
                        cleanupCounter++;

                        console.log("Dirt cleaned")
                    } 
                })
                
            } else if (instructionsArray[i] === "S"){
                hooverPositionY--;
                console.log("DOWN " + hooverPositionY)
                dirtPatchesArray.forEach((el) => {
                    console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + Number(el[0]) + " " + Number(el[1]))
                    if (hooverPositionX === Number(el[0]) && hooverPositionY === Number(el[1])){
                        cleanupCounter++;
                        console.log("Dirt cleaned")
                    } 
                })

            } else if (instructionsArray[i] === "E"){
                hooverPositionX++;
                console.log("RIGHT " + hooverPositionY)
                dirtPatchesArray.forEach((el) => {
                    console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + Number(el[0]) + " " + Number(el[1]))
                    if (hooverPositionY === Number(el[1]) && hooverPositionX === Number(el[0]) ){
                        cleanupCounter++;
                        console.log("Dirt cleaned")
                        
                    } 
                })

            } else if (instructionsArray[i] === "W"){
                hooverPositionX--;
                console.log("LEFT " + hooverPositionX)
                dirtPatchesArray.forEach((el) => {
                    console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + Number(el[0]) + " " + Number(el[1]))
                    if (hooverPositionY === Number(el[1]) && hooverPositionX === Number(el[0]) ){
                        cleanupCounter++;
                        console.log("Dirt cleaned")
                    } 
                })
            }
        }
       
        console.log("Final hoover position:")
        console.log(hooverPositionX + " " + hooverPositionY);
        
        console.log("Patches cleaned up:")
        console.log(cleanupCounter);

    }) 
