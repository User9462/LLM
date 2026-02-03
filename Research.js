const page = "a";
const list = [page];

function checkValue(userResearch) {
    if (list.includes(userResearch)) {
        return "Value found in array: " + userResearch;
    } else {
        return "Value NOT found in array";
    }
}
