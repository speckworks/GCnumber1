let a = [1,7,7,3,9,9,9,4,9]
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
        if(temp != '' && temp == arr[i]) {
            // it's a match
            stretch++;
        } else {
            // it's not a match, start stretch from 1
            stretch = 1;
        }

        // set current value for next time
        temp = arr[i];

       // set the master stretch var
      if(stretch > longestStretch) {
        longestStretch = stretch;
        longestStretchValue = temp;
      }
    }

    console.log("longest stretch:", longestStretch, "Value:", longestStretchValue);
}

longestRow(a)
longestRow(b)