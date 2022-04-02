// isReallyNaN

const isReallyNaN = (val) => {
    return isNaN(val) && typeof val === 'number'
};