// Are there any arrows left?

function anyArrows(arrows){
    return arrows.every( a => a.damaged === true ) ? false : true
}