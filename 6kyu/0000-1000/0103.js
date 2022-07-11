// Handshake problem

function getParticipants(handshakes){
  let ans = 0;
  if (handshakes === 0) {
    ans = 0;
  } else if (handshakes === 1) {
    ans = 2;
  } else {
    Array.from(new Array(handshakes - 1)).map((_, i) => i + 2).every(a => {
      if (combinations(a, 2) >= handshakes) {
        ans = a;
        return false;
      } else {
        return true;
      }
    })
  }
  return ans;
}

function product_Range(a,b) {
  var prd = a,i = a;
 
  while (i++< b) {
    prd*=i;
  }
  return prd;
}

function combinations(n, r) 
{
  if (n==r || r==0) 
  {
    return 1;
  } 
  else 
  {
    r=(r < n-r) ? n-r : r;
    return product_Range(r+1, n)/product_Range(1,n-r);
  }
}

// Test
console.log(getParticipants(0)) // 0
console.log(getParticipants(1)) // 2
console.log(getParticipants(3)) // 3
console.log(getParticipants(6)) // 4
console.log(getParticipants(7)) // 5