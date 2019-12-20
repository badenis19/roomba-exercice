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
    


        


        return array;
    }) 

    // const array1 = [1, 4, 9, 16];

    // // pass a function to map
    // const map1 = array1.map((x) => {
    //     return x * 2
    // });

    // console.log(map1);




