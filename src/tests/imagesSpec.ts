import processing from '../routes/api/utilities'
import fs from 'fs'

describe('Testing the images processing module', () => {
  it('Expecting a new image (img2_thumb_100_100) is generated in thumb folder with the desired width and height', async (): Promise<void> => {
    const imagePath = './assets/full/img2.png'
    const resizedImagePath = './assets/thumb/img2_thumb_100_100.png'
    await processing(imagePath, 100, 100, resizedImagePath)
    const exist = fs.existsSync(resizedImagePath)
    expect(exist).toBeTrue()
  })
})
