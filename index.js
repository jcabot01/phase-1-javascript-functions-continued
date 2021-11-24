//1
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
saturdayFun()

//2
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}
mondayWork();

//3
let wrapAdjective = function(highLight = "*"){
  return function(param = "special") {
    return `You are ${highLight}${param}${highLight}!`
  }
}


/*
describe("defines wrapAdjective function according to the specification", function() {
  it("function exists", function() {
    expect(wrapAdjective).to.exist
  })
  
  it("when initialized with '*' creates a function that, when called, wraps an adjective in a highlight", function() {
    let result = wrapAdjective('*')
    let emphatic = result("a hard worker")
    expect(emphatic).to.equal("You are *a hard worker*!")
  });

  it("when initialized with '||' creates a function that, when called, wraps an adjective in a highlight", function() {
    let result = wrapAdjective("||")
    let emphatic = result("a dedicated programmer")
    expect(emphatic).to.equal("You are ||a dedicated programmer||!")
  });
})
})
*/