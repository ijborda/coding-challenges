function present(l, w, h) {
  if (l > 0 && w > 0 && h > 0) {
    let dim = [l, w, h];
    let min = +Math.min(l, w, h);
    let ind = dim.indexOf(min);
    delete dim[ind];
    dim = dim.filter(a => a !== undefined)
    return min * 4 + 2*(dim[0] + dim[1]) + 20;
  } else {
    return -1;
  }
}

console.log((present(35, 35, 35))) // 300
console.log(present(250, 150, 450)) // 2020