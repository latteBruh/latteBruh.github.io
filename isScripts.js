function sayHey() {
    alert("Hey Cara");
}

function rateName() {
    let name = document.getElementById("textarea").value;

    if (name === 'Camden') {
        document.getElementById("rating").innerHTML = "Rating: 5/5";
    } else if (name === 'Cara') {
        document.getElementById("rating").innerHTML = "Rating: 0/5";
    } else
        document.getElementById("rating").innerHTML = "Rating: 3/5";
}
