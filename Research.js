document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = document.getElementById("inputSearch").value;

    const list = ["a"];

    if (list.includes(userInput)) {
        alert("Value found: " + userInput);
    } else {
        alert("Value NOT found");
    }
});
