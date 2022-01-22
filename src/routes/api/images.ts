import express from 'express'
import sharp from 'sharp'
import fs from 'fs'

const images = express.Router()

images.get('/', (req, res) => {
  const imgAttributes = req.query //  gets the image attributes from the url ex: image name, width, height
  const imgName = imgAttributes.filename as unknown as string //  save file name value as imageName
  const imgWidth = Number(imgAttributes.width) // save the image width as imgWidth and parse it to integer number
  const imgHeight = Number(imgAttributes.height) // save the image height as imgHeight and parse it to integer number
  const imgPath: string = `./assets/full/${imgName}.png` // concatenate the image name with the path
  const resizedImagePath: string = `./assets/thumb/${imgName}_thumb_${imgWidth}_${imgHeight}.png` //  generate a new name to the processed image

  //  the image resizing function
  const Resizing = async () => {
    //  check if the file name existes, if not the server throws an error to the user to enter a valid file name
    try {
      // the sharp library function, takes the image path as parameter,resize it to the desired (width,height) then save it to the new path
      await sharp(imgPath).resize(imgWidth, imgHeight).toFile(resizedImagePath)
    } catch (error) {
      res.send('🔴Wrong file name: please choose a valid image name to be processed!')
    }

    //  send the resized image to the server
    res.sendFile(resizedImagePath, { root: '.' })
  }
  //  cache handling
  const CheckImageExist = () => {
    //  if the resized image is already exists at the 'thumb' folder, the server will send it directly without re-processing it
    if (fs.existsSync(resizedImagePath)) {
      res.sendFile(resizedImagePath, { root: '.' })
    } else {
      // if the image wasn't processed before, the server invoke the 'Resizing' function
      Resizing()
    }
  }
  CheckImageExist()
})
export default images
