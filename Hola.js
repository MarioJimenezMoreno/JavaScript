const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const progressImage = document.getElementById('progress-image');
const maxHappiness = 100;
let happiness = 100;

function drawProgress() {
    const width = progressImage.width;
    const height = progressImage.height;
    const clipWidth = (width / maxHappiness) * happiness;

    // Set canvas size to match image dimensions
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw progress image with clipping
    ctx.drawImage(progressImage, 0, 0, clipWidth, height, 0, 0, clipWidth, height);
}

function updateProgress() {
    if (happiness > 0) {
        happiness--;
        console.log(happiness);
        drawProgress();
    } else {
        clearInterval(intervalHappiness);
    }
}

// Set canvas size based on progress image size
progressImage.onload = function () {
    drawProgress();
};

let intervalHappiness = setInterval(updateProgress, 100);
