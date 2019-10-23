const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Marathon",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let finished = input[0]
    for (let i = 1; i < input.length; i++) {
      let split = input[i].split(' ')
      let losing = parseInt(split[0])
      let winning = parseInt(split[1])
      finished = finished + losing - winning
    }
    
    if (finished <= 100) {
      price = 1000
    }
    else if (100 < finished && finished <= 10000) {
      price = 100
    }
    else {
      price = "KO"
    }
    return price
    // AND HERE
  },
  verify: function (dataset, output) {
    if (dataset.output !== output) {
      throw new Error(`${bright}Got ${output} but expected ${dataset.output}${reset}`)
    } else {
      return true
    }
  }
}