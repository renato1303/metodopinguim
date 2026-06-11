import fs from 'fs';
import path from 'path';

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(source)) {
    console.warn(`Source folder does not exist: ${source}`);
    return;
  }

  // Create target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // Read source directory
  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);

    if (fs.lstatSync(curSource).isDirectory()) {
      // Recursively copy folders
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      // Copy files
      fs.copyFileSync(curSource, curTarget);
    }
  });
}

const srcDir = path.resolve('src/assets/images');
const destDir = path.resolve('dist/src/assets/images');

console.log('Copying static images to production dist output...');
try {
  copyFolderRecursiveSync(srcDir, destDir);
  console.log('Successfully copied all static images to dist/src/assets/images!');
} catch (error) {
  console.error('Error copying images to dist/src/assets/images:', error);
  process.exit(1);
}
