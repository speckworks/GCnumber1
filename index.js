//test case given for assignment part 1
let a = [1,7,7,3,9,9,9,4,9]
//extra text case b
let b = [1,16,16,5,3,3,3,3,3,4,7,6,8]


function longestRow (arr){
    var i,
      temp,
      stretch,
      longestStretchValue,
      length = arr.length,
      longestStretch = 0;

    for(i = 0; i < length; i++) {
        // check the value of the current value against the last
        if(temp != null && temp == arr[i]) {
            // it's a match! add 1 to the stretch
            stretch++;
        } else {
            // it's not a match, start stretch from 1 again
            stretch = 1;
        }
        // set current value of the array being inspected for recurrence
        temp = arr[i];

       // set the length of the longest stretch and the Value in stretch
      if(stretch > longestStretch) {
        longestStretch = stretch;
        longestStretchValue = temp;
      }
    }

    console.log("the length of the longest continuous stretch is:", longestStretch, "That Value is:", longestStretchValue);
}

longestRow(a)
longestRow(b)
