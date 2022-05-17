function sayHey() {
    alert("Hey Cara");
}

function rateName() {
    let name = document.getElementById("textarea").value.replace(/\s+/g, '').toLowerCase();

    if (name === 'camden' || name === 'cam' || name === 'camdenconrad' || name === 'camconrad') {
        document.getElementById("rating").innerHTML = "Rating: 5/5";
    } else if (name === 'cara' || name === 'caralamb') {
        document.getElementById("rating").innerHTML = "Rating: 0/5";
    } else if (name.includes('cara')) {
        document.getElementById("rating").innerHTML = "Rating: 0/5";
    } else if (name.includes('camden')) {
        document.getElementById("rating").innerHTML = "Rating: 5/5";
    }
    else
        document.getElementById("rating").innerHTML = "Rating: 3/5";
}
