// Numericals of a String

function numericals(s){
  let num = {};
  let str = '';
  s.split('').forEach(char => {
    if (char in num) {
      num[char] += 1;
    } else {
      num[char] = 1;
    }
    str += num[char]
  });
  return  str
}

// Test
console.log(numericals("Hello, World!")) // , "1112111121311");
console.log(numericals("Hello, World! It's me, JomoPipi!")) // , "11121111213112111131224132411122");
console.log(numericals("hello hello")) // , "11121122342");
console.log(numericals("Hello")) // , "11121");
console.log(numericals("aaaaaaaaaaaa")) // ,"123456789101112");