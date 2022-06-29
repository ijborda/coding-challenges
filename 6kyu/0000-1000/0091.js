// first character that repeats

function firstDup (s) {
  let firstDup = undefined;
  let record = s.split('').reduce((acc, a) => {
    if (a in acc) {
      acc[a] += 1;
    } else {
      acc[a] = 1;
    }
    return acc;
  }, {});
  s.split('').every(a => {
    if (record[a] > 1) {
      firstDup = a;
      return false;
    } else {
      return true;
    }
  })
  return firstDup;
}

// Test
console.log(firstDup('tweet'))// 't');
console.log(firstDup('Ode to Joy'))// ' ');
console.log(firstDup('ode to joy'))// 'o');
console.log(firstDup('bar'))// undefined);
console.log(firstDup('123123'))// '1');
console.log(firstDup('!@#$!@#$'))// '!');