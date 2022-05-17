function sayHey() {
    alert("Hey Cara");
}

function rateName() {
    let name = document.getElementById("textarea").value.replace(/\s+/g, '').toLowerCase();

    if (name === 'camden' || name === 'cam') {
        document.getElementById("rating").innerHTML = "Rating: 5/5";
    } else if (name === 'cara') {
        document.getElementById("rating").innerHTML = "Rating: 0/5";
    } else
        document.getElementById("rating").innerHTML = "Rating: 3/5";
}
