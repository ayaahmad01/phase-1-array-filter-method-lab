// Code your solution here
function findMatching(array1, something) {
return array1.filter(
    (result) => result.toLowerCase() === something.toLowerCase()
)
}
function fuzzyMatch(array2, letter) {
    return array2.filter(
    (results) => results.toLowerCase().indexOf(letter.toLowerCase()) === 0
)
}
function matchName(array3, driverName) {
    return array3.filter((result3) => result3.name === driverName);
  }