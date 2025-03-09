const fs = require('fs');
const path = require('path');

// Make sure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Create SVG placeholders
const createPlaceholder = (filename, text, bgColor = '#333', textColor = '#fff') => {
  const svgContent = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="${bgColor}"/>
  <text 
    x="400" 
    y="300" 
    font-family="Arial" 
    font-size="36" 
    text-anchor="middle" 
    fill="${textColor}"
    dominant-baseline="middle"
  >${text}</text>
</svg>
`;

  fs.writeFileSync(path.join(publicDir, filename), svgContent);
  console.log(`Created ${filename}`);
};

// Generate placeholders for Hannibal TV
createPlaceholder('hannibal-studio.svg', 'Hannibal TV Studio', '#7c3aed', '#ffffff');
createPlaceholder('hannibal-camera.svg', 'Camera Setup', '#6d28d9', '#ffffff');
createPlaceholder('hannibal-pillows.svg', 'Pillow Segment', '#5b21b6', '#ffffff');
createPlaceholder('hannibal-team.svg', 'Production Team', '#4c1d95', '#ffffff');

// Generate placeholders for IFM Radio
createPlaceholder('ifm-studio.svg', 'IFM Radio Studio', '#0ea5e9', '#ffffff');
createPlaceholder('ifm-interview.svg', 'IFM Interview', '#0284c7', '#ffffff');
createPlaceholder('ifm-editing.svg', 'Audio Editing Session', '#0369a1', '#ffffff');
createPlaceholder('ifm-broadcast.svg', 'Live Broadcast', '#075985', '#ffffff');

console.log('All placeholders generated!'); 