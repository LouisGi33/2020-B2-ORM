const datasets = require("./datasets.json")
const reset = '\x1b[0m'
const bright = '\x1b[1m'

exports = module.exports = {
  name: "Déménagement",
  datasets,
  algo: function (input) {
    // YOUR CODE BETWEEN HERE
    let poids = 0
    let passage = 1
    for (let i = 1; i < input.length; i++) {
      const test =poids + input[i]
      if ( test > 100) {
        poids = input[i]
        passage += 1
      } else if (test == 100) {
        poids = 0
        if ( input[i+1] != undefined ) {
          passage +=1
        }
      } else {
        poids = poids + input[i]
      }
    }
    return passage
    

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