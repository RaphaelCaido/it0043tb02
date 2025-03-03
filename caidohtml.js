function animateBox(day) {
    let box = document.getElementById("box");

    let colors = {
        "Monday": "purple",
        "Tuesday": "pink",
        "Wednesday": "blue",
        "Thursday": "green",
        "Friday": "yellow",
        "Saturday": "orange",
        "Sunday": "red"
    };

    box.style.backgroundColor = colors[day] || "white";
    box.style.transform = "translateY(50px)";
}
