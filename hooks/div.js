function fixDivTags(str) {
    let divCount = 0;
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + 5) === "<div>") {
            if (divCount == 0) {
                divCount++;
                result += "<div>";
                i += 4;
            }
            else {
                divCount=0;
                result += "</div>";
                i += 4;
            }
        } else {
            result += str[i];
        }
    }
    
    return result;
}

console.log(fixDivTags("<div><div><div>")); 
// Expected Output: "<div></div><div>"

console.log(fixDivTags("<div><div><p>Hello</p><div><div>")); 
// Expected Output: "<div></div><p>Hello</p><div></div>"


function customForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i); // Passing element, index, and array to callback
    }
  }

  
  
  // Example usage:
  customForEach([1, 2, 3], (num,index) => console.log(num * index));
