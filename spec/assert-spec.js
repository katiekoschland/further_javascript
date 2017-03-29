var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else{ console.log("Test Passed")}
  }
};

function runTwoTests(firstTest, secondTest){
firstTest;
secondTest;
};

function runOneTest(oneTest){
oneTest;
};
