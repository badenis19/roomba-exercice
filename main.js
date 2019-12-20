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
        console.log("dirtPatches:");
        console.log(dirtPatches);

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
    
        // dirt patches 

        // driving instructions
        console.log(drivingIInstruction);
        // putting each instruction in indexed a array to then iterate over it
        let instructionsArray = drivingIInstruction[0].split("");
        
        // Hoover position needs to be updated according to the instructions below
        // N = Y + 1 
        // S = Y - 1 
        // E = X + 1 
        // W = X + 1

        let a = ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W' ];

        // TO remember hoover needs to move and if hoover position is equal to dirt patch position then increase clean-up counter
        // if statement to define movement of hoover
        // create a check against dirt patch method that will increment the clean-up counter
        for (let i in a) {
            // console.log(a[i]);
            if (a[i] === "N"){
                console.log("GO UP")
                hooverPositionY++;
                console.log(hooverPositionY);
            } else if (a[i] === "S"){
                console.log("GO DOWN")
                hooverPositionY--;
            } else if (a[i] === "E"){
                console.log("GO RIGHT")
                hooverPositionX++;
            } else if (a[i] === "W"){
                console.log("GO LEFT")
                hooverPositionX--;
            }
        }

        console.log(hooverPositionX + " " + hooverPositionY);
        


        


        return array;
    }) 

    // const array1 = [1, 4, 9, 16];

    // // pass a function to map
    // const map1 = array1.map((x) => {
    //     return x * 2
    // });

    // console.log(map1);




