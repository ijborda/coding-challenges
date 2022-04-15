// 2D Cellular Neighbourhood

function get_neighbourhood(type, arr, [m, n]){
    let neighbors = []
    if (m < 0 || n < 0 || m >= arr[0].length || n >= arr.length) {
        return neighbors
    }
    if (type === 'moore') {
        for (let i = -1; i <= 1; i++){
            for (let j = -1; j <= 1; j++) { 
                if (m+i >= 0 && 
                    n+j >= 0 && 
                    arr[m+i] !== undefined &&
                    arr[m+i][n+j] !== undefined && 
                    !(i === 0 && j === 0)) {
                    neighbors.push(arr[m+i][n+j])
                }
            } 
        } 
        return neighbors
    }
    if (type === 'von_neumann') {
        for (let i = -1; i <= 1; i++){
            for (let j = -1; j <= 1; j++) { 
                if (m+i >= 0 && 
                    n+j >= 0 && 
                    arr[m+i] !== undefined &&
                    arr[m+i][n+j] !== undefined && 
                    !(i === 0 && j === 0) && 
                    (Math.abs((m+n+i+j) - (m+n)) === 1)) {
                    neighbors.push(arr[m+i][n+j])
                }
            } 
        } 
        return neighbors   
    }
}