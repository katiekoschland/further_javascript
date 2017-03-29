var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else{ console.log("Test Passed")}
  }
};
var allTests = []

function pushArrayOfAllTests(test) {
  allTests.push(test)
};

function runAllTests(allTests) {
  var allTestsLength = allTests.length
  for (var i = 0; i < allTestsLength; i++)
  allTests[i]();
};
