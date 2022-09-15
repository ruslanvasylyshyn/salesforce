const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];

// Implement a logic that finds difference between "first" and "secord" lists
// and prints the result to the console:
// [1, 2, 4]

function bagContains(arr1, arr2) {
    arr1 = [...new Set(arr1)];
    arr2 = [...new Set(arr2)];
    var o = {}
    var result = [];

    // Count all the objects in first array
    for(var i=0; i < arr1.length; i++) {
        if(!o[arr1[i]]) {
            o[arr1[i]] = 0;
        }
        o[arr1[i]]++;
    }
 
    // Count all the objects in second array
    for(var i=0; i < arr2.length; i++) {
        if(!o[arr2[i]]) {
            o[arr2[i]] = 0;
        }

        o[arr2[i]]++;
    }

    // Create final array
    for(let key in o){
      if (o[key] == 1) {
        result.push(key)
      }
    }
    return result;
  }

  console.log(bagContains(first, second))