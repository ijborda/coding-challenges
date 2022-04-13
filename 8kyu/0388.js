// Find the force of gravity between two objects

let solution = (arr_val, arr_unit) => {
    let m1 = convertMassToKg(arr_val[0], arr_unit[0])
    let m2 = convertMassToKg(arr_val[1], arr_unit[1])
    let r  = convertMassToMt(arr_val[2], arr_unit[2])
    return 6.67 * Math.pow(10, -11) * m1 * m2 / Math.pow(r, 2)
}

let convertMassToKg = (val, unit) => {
    return unit === 'kg' ? val :
        unit === 'g'  ? val / 1000 :
        unit === 'mg' ? val / 1000000 : 
        unit === 'μg' ? val / 1000000000 : val * 0.453592
}

let convertMassToMt = (val, unit) => {
    return unit === 'm'  ? val :
           unit === 'cm' ? val / 100 :
           unit === 'mm' ? val / 1000 : 
           unit === 'μm' ? val / 1000000 : val * 0.3048
}