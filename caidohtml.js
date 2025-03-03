function animateBox(day) {
    let box = document.getElementById("box");
    box.classList.remove("hidden");

    let colors = {
        "Monday": "red",
        "Tuesday": "blue",
        "Wednesday": "green",
        "Thursday": "yellow",
        "Friday": "purple",
        "Saturday": "orange",
        "Sunday": "pink"
    };

    box.style.backgroundColor = colors[day] || "black";
    box.style.transform = "translateY(50px)";

    setTimeout(() => {
        box.style.transform = "translateY(100px)";
    }, 500);
}
