
// SAMPLE REWARD POINTS
let points = 120;

// DEMONSTRATE EARNING POINTS
function earnPoints() {

    points += 10;

    alert("Congratulations! You earned 10 points!");

    document.querySelector("#rewards h3").textContent =
        "Your Reward Points: " + points;
}
