// Reversed sequence

const reverseSeq = n => {
    return Array.from(new Array(n), (_,i) => 1+i).reverse()
};