// Well of Ideas - Easy Version

function well(x){
    let goodCount = x.reduce( (sum, idea) => idea === "good" ? sum += 1 : sum += 0, 0 )
    return goodCount > 2 ? "I smell a series!" : goodCount >= 1 ? "Publish!" : "Fail!"
}