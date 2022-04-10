// Simple Change Machine

function changeMe(moneyIn){
    let convert = {
      '20p': 20,
      '50p': 50,
      '£1':  100,
      '£2':  200,
      '£5':  500
    }
    
    if (!(Object.keys(convert).includes(moneyIn))) return moneyIn
    if (moneyIn === '20p') return '10p 10p'
    
    let isThere10 = convert[moneyIn] % 20
    let num20 = Math.floor(convert[moneyIn] / 20)
    
    let change = '20p '.repeat(num20)
    isThere10 ? change += '10p' : change = change.slice(0, -1)
    
    return change
}