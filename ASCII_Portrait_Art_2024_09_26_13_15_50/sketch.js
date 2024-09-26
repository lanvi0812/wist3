let vid;
let asciiChar = " .*lan+vi@";

function preload() {
  vid = createVideo("IMG_9780.mov");
}

function setup() {
  createCanvas(600, 350);
  vid.hide();      // Hide the HTML video element
  vid.volume(0);   // Mute the video
  vid.loop();      // Play video in a loop
}

function draw() {
  background(255);
  
  vid.loadPixels();  // Load the current frame's pixels
  
  let stepSize = 6;  // Control the resolution of the ASCII art
  
  for (let y = 0; y < vid.height; y += stepSize) {
    for (let x = 0; x < vid.width; x += stepSize) {
      let index = (y * vid.width + x) * 4;
      let r = vid.pixels[index + 0];
      let g = vid.pixels[index + 1];
      let b = vid.pixels[index + 2];
      let brightness = (r + g + b) / 3;
      
   
      let tIndex = floor(map(brightness, 0, 255, asciiChar.length - 1, 0));
      let char = asciiChar.charAt(tIndex);
      
      
      textSize(stepSize);
      fill(0);  
      noStroke();  
      textAlign(CENTER, CENTER); 
      text(char, x + stepSize / 2, y + stepSize / 2);
    }
  }
}
