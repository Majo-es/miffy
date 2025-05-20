const canvas = document.getElementById('miffyCanvas');
const ctx = canvas.getContext('2d');

// Set line width for all strokes
ctx.lineWidth = 3; 

// Miffy's head
ctx.fillStyle = '#FFFFFF'; // White color for Miffy
ctx.strokeStyle = '#000000'; // Black outline
ctx.beginPath();
// Adjusted ellipse parameters for a rounder head
ctx.ellipse(100, 150, 80, 80, 0, 0, 2 * Math.PI); // Equal width and height
ctx.fill();
ctx.stroke();

// Miffy's ears
// For the left ear
ctx.beginPath();
// Start the ear path from where it should connect to the head
ctx.moveTo(70, 70); // Adjusted Y to connect to the head
ctx.lineTo(70, 10); // Go up for the top of the ear
ctx.arcTo(80, 0, 90, 10, 10); // Rounded top-right corner
ctx.lineTo(90, 70); // Go down to connect to the head (adjusted Y)
ctx.closePath();
ctx.fill();
ctx.stroke();

// For the right ear
ctx.beginPath();
// Start the ear path from where it should connect to the head
ctx.moveTo(110, 70); // Adjusted Y to connect to the head
ctx.lineTo(110, 10); // Go up for the top of the ear
ctx.arcTo(120, 0, 130, 10, 10); // Rounded top-right corner
ctx.lineTo(130, 70); // Go down to connect to the head (adjusted Y)
ctx.closePath();
ctx.fill();
ctx.stroke();



// Miffy's body (blue shirt)
ctx.fillStyle = '#003366'; // Dark blue color for the shirt
ctx.beginPath();
ctx.moveTo(70, 220); // Left side of the body, just below the head
ctx.lineTo(60, 260); // Bottom-left of the body (widening)
ctx.arcTo(60, 270, 70, 270, 10); // Bottom-left curve
ctx.lineTo(130, 270); // Bottom-right straight line
ctx.arcTo(140, 270, 140, 260, 10); // Bottom-right curve
ctx.lineTo(130, 220); // Right side of the body
ctx.closePath();
ctx.fill();
ctx.stroke();

// Miffy's arms
ctx.fillStyle = '#003366'; // Blue shirt color
ctx.beginPath();
// Left arm
ctx.ellipse(60, 220, 15, 10, Math.PI / 2, 0, 2 * Math.PI); // Rounded arm
ctx.fill();
ctx.stroke();

// Right arm
ctx.beginPath();
ctx.ellipse(140, 220, 15, 10, Math.PI / 2, 0, 2 * Math.PI); // Rounded arm
ctx.fill();
ctx.stroke();

//  Miffy's feet
ctx.fillStyle = '#FFFFFF'; // White color for feet
ctx.beginPath();
// Left foot
ctx.ellipse(75, 275, 20, 10, 0, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Right foot
ctx.beginPath();
ctx.ellipse(125, 275, 20, 10, 0, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();


//  Miffy's eyes
ctx.fillStyle = '#000000'; // Black color for eyes
ctx.beginPath();
ctx.arc(80, 130, 5, 0, 2 * Math.PI); // Left eye
ctx.fill();

ctx.beginPath();
ctx.arc(120, 130, 5, 0, 2 * Math.PI); // Right eye
ctx.fill();

// Miffy's mouth 
ctx.strokeStyle = '#000000'; // Black color for mouth
ctx.beginPath();
const mouthCenterX = 100;
const mouthCenterY = 160;
const mouthSize = 5; // X LINES

// First diagonal line (top-left to bottom-right)
ctx.moveTo(mouthCenterX - mouthSize, mouthCenterY - mouthSize);
ctx.lineTo(mouthCenterX + mouthSize, mouthCenterY + mouthSize);

// Second diagonal line (top-right to bottom-left)
ctx.moveTo(mouthCenterX + mouthSize, mouthCenterY - mouthSize);
ctx.lineTo(mouthCenterX - mouthSize, mouthCenterY + mouthSize);

ctx.stroke();
