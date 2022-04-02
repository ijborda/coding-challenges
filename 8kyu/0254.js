// Training JS #18: Methods of String object--concat() split() and its good friend join()

function splitAndMerge(string, separator) {
    return string.split(" ").map( w => w.split("").join(separator)).join(" ")
}