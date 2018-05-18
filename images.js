const  coolImages = require('cool-images')
const download = require('image-downloader')
const images =coolImages.many(600,800,25)  // array of 25 image random images with 600x800!
const fs = require('fs')
const path = require('path')

const directory = 'images'


deleteImages()

images.forEach( async image => {
  const name = Math.floor(Math.random() * (10000 - 1 + 1)) + 1
  console.log(image) 
  const options = {
    url: image,
    dest: __dirname + `/${directory}/${name}.jpeg`                  
  }

 await downloadIMG(options)

})   

async function downloadIMG(options) {
  try {
    const { filename, image } = await download.image(options)
    console.log(filename) // => /path/to/dest/image.jpg 
  } catch (e) {
    throw e
  }
}

async function deleteImages(){ fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
})}