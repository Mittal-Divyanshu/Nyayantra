const canvas = document.getElementById('wheel');
const context = canvas.getContext('2d');
const spinButton = document.getElementById('spin-button');
const resultDiv = document.getElementById('result');

// Constitutional segments with shortened titles for better fit
const segments = [
    "Article 14\nEquality",
    "Article 19\nFreedom",
    "Article 21\nRight to Life",
    "Article 32\nRemedies",
    "Amendment 42\nEnvironment",
    "Amendment 73\nLocal Govt",
    "Amendment 86\nEducation",
    "Article 51A\nDuties"
];

// Color for each segment with improved contrast
const segmentColors = ["#FF4500", "#FFFFFF", "#1E90FF", "#FFD700", "#32CD32", "#FF4500", "#1E90FF", "#FFD700"];

let startAngle = 0;
let spinAngle = 0;
let spinTime = 0;
let spinTimeTotal = 0;

// Draw the wheel with filled colors
function drawWheel() {
    const outsideRadius = 200;
    const textRadius = 150;
    const insideRadius = 50;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    for (let i = 0; i < segments.length; i++) {
        const angle = startAngle + (i * 2 * Math.PI / segments.length);
        context.fillStyle = segmentColors[i];

        // Create one continuous arc for the entire segment (from center to outer edge)
        context.beginPath();
        context.moveTo(canvas.width / 2, canvas.height / 2);  // Move to center of the wheel
        context.arc(canvas.width / 2, canvas.height / 2, outsideRadius, angle, angle + 2 * Math.PI / segments.length, false);
        context.lineTo(canvas.width / 2, canvas.height / 2);  // Draw line back to center
        context.fill();
        context.save();

        // Draw the text inside the segment
        context.fillStyle = "#000"; // Black text for better contrast
        context.translate(canvas.width / 2 + Math.cos(angle + Math.PI / segments.length) * textRadius,
                          canvas.height / 2 + Math.sin(angle + Math.PI / segments.length) * textRadius);
        context.rotate(angle + Math.PI / segments.length);

        const text = segments[i];
        context.font = "bold 12px Arial";
        context.fillText(text, -context.measureText(text).width / 2, 0);

        context.restore();
    }

    // Draw the arrow at the top
    context.fillStyle = "#000";
    context.beginPath();
    context.moveTo(canvas.width / 2 - 5, canvas.height / 2 - (outsideRadius + 10));
    context.lineTo(canvas.width / 2 + 5, canvas.height / 2 - (outsideRadius + 10));
    context.lineTo(canvas.width / 2, canvas.height / 2 - (outsideRadius + 20));
    context.fill();
}

// Spin animation and mechanics
function rotateWheel() {
    spinAngle = Math.random() * 10 + 10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3000 + 4000;
    rotateAnimation();
}

function rotateAnimation() {
    spinTime += 30;
    if (spinTime >= spinTimeTotal) {
        stopRotateWheel();
        return;
    }
    const spinAngleChange = spinAngle - (easeOut(spinTime, 0, spinAngle, spinTimeTotal));
    startAngle += (spinAngleChange * Math.PI / 180);
    drawWheel();
    requestAnimationFrame(rotateAnimation);
}

function stopRotateWheel() {
    const degrees = startAngle * 180 / Math.PI + 90;
    const arcd = 360 / segments.length;
    const index = Math.floor((360 - degrees % 360) / arcd);
    resultDiv.innerText = `You landed on: ${segments[index]}`;
}

function easeOut(t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
}

spinButton.addEventListener('click', rotateWheel);

drawWheel();
