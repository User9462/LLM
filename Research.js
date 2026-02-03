const page = "a";
const list = [page];

function checkValue(userResearch) {
    if (list.includes(userResearch)) {
        window.location.href = "hello.html";
    } else {
        alert("Value NOT found in array");
    }
}
