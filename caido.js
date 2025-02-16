function changeColor() {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    document.querySelector(".resume-container").style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
}
