const rpg = require("rpg")
                                      // > '=TM;:XUv78M['
rpg({length: 16})                                   // > '&[(OF~Kk,-8TNF0H'
rpg({length: 16, set: 'lud'})                       // > '1G7elTEr6kU5dWBP'
rpg({length: 16, set: 'lud', exclude: '123456789'}) // > 'dgomcPCg0RJsYWrx'

console.log("1. (8) " + rpg({length: 8, set: 'lud'}) + " - " + "2. (16) " + rpg({length: 16, set: 'lud'})+ " - " + "3. (32) " + rpg({length: 32, set: 'lud'}))