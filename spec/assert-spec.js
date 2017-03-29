var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
    else{ console.log("%cTest Passed", 'color:green; font-weight:bold;')}
  }
};

var allTests = [];

function runTwoTests(firstTest, secondTest){
firstTest;
secondTest;
};

function runOneTest(oneTest){
oneTest;
};
