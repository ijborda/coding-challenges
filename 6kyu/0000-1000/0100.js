// Who has the most money?

function mostMoney(students) {
  let totalMoney = students.map(a => 5 * a.fives + 10 * a.tens + 20 * a.twenties)
  let isAll = totalMoney.every((a, i, arr) => {
    if (i === 0 || arr[i] === arr[i - 1]) {
      return true;
    } else {
      return false
    }
  })
  if (students.length !== 1 && isAll) {
    return 'all'
  } else {
    return students[totalMoney.indexOf(Math.max(...totalMoney))].name;
  }
}

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}

const andy = new Student("Andy", 0, 0, 2);
const stephen = new Student("Stephen", 0, 4, 0);
const eric = new Student("Eric", 8, 1, 0);
const david = new Student("David", 2, 0, 1);
const phil = new Student("Phil", 0, 2, 1);
const cam = new Student("Cameron", 2, 2, 0);
const geoff = new Student("Geoff", 0, 3, 0);

// "What happens if one student has the most money?"
console.log(mostMoney([andy, stephen, eric, david, phil])) // "Eric")
console.log(mostMoney([cam, geoff, andy, stephen, eric, david, phil])) // "Eric")

// "What happens if there is only one student?"
console.log(mostMoney([andy])) // "Andy")
console.log(mostMoney([stephen])) // "Stephen")

// "What happens if all students have the same amount of money?"
console.log(mostMoney([cam, geoff])) // "all")
console.log(mostMoney([david, cam, geoff])) // "all")