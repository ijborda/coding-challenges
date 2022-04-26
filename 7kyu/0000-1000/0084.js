// Ce*s*r*d Strings

function uncensor(infected, [...discovered]) {
    return infected.replace(/\*/g, a => discovered.splice(0, 1));
}

// Test
let x = uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") 
console.log(x) // "This is very strange"