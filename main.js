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
        
        //console.log("<<<<" , dirtPatches)

        dirtPatches.forEach((el) => {
            dirts = {}
            dirts["position"] = el.split(" ");
            dirts["cleaned"] = false;
            dirtPatchesArray.push(dirts);
        })

        // console.log(">>>" , dirtPatchesArray)

    //    dirtPatchPositionX = dirtPatchesArray[0].position[0] // X
    //    dirtPatchPositionY = dirtPatchesArray[0].position[1] // Y 
    //    dirtPatchPositionStatus = dirtPatchesArray[0].cleaned // false/true 
      
        // counter will increment each time there is a clean up
        let cleanupCounter = 0;

        // console.log(instructionsArray)

        const updateHooverPosition = instruction => {
            if (instruction === 'N') {
                hooverPositionY++;

                dirtPatchesArray.forEach((el) => {
                    console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el.position[0] + " " + el.position[1])
                    if ( hooverPositionX === Number(el.position[0]) && hooverPositionY === Number(el.position[1]) && el.cleaned === false){
                        cleanupCounter++;
                        el.dirtPatchPositionStatus = true;
                        console.log("Dirt cleaned")
                    } 
                })
            

                
            } else if (instruction === 'S') {
                hooverPositionY--;

                dirtPatchesArray.forEach((el) => {
                    console.log(">>> " + el.cleaned)
                    console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el.position[0] + " " + el.position[1])
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
                    console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el.position[0] + " " + el.position[1])
                    if (hooverPositionY === Number(el.position[1]) && hooverPositionX === Number(el.position[0]) && el.cleaned === false ){
                        cleanupCounter++;
                        el.dirtPatchPositionStatus = true;
                        console.log("Dirt cleaned")
                        
                    } 
                })
            } else if (instruction === 'W') {
                hooverPositionX--;

                dirtPatchesArray.forEach((el) => {
                    console.log("Hoover position " + hooverPositionX + " " + hooverPositionY + " || Dirt Position " + el.position[0] + " " + el.position[1])
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
            updateHooverPosition(instruction); // what does this return 
            // updateDirtPatches(instruction); // what does this return 
        }
       
        console.log("Final hoover position:")
        console.log(hooverPositionX + " " + hooverPositionY);
        
        console.log("Patches cleaned up:")
        console.log(cleanupCounter);
    }) 
