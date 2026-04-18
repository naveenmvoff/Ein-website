const fs = require('fs-extra');
const path = require('path');

// __dirname is src/scripts, go up two levels to reach project root
const tinymceSrc = path.join(__dirname, '../../node_modules/tinymce');
const tinymceDest = path.join(__dirname, '../../public/tinymce');

// Copy TinyMCE folder to public (no filter so we include required assets)
fs.copySync(tinymceSrc, tinymceDest);

console.log('✅ TinyMCE copied to public/tinymce');