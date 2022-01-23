import sharp from 'sharp'

const processing = async (
  path: string,
  width: number,
  height: number,
  resizedpath: string
): Promise<void> => {
  try {
    await sharp(path).resize(width, height).toFile(resizedpath)
  } catch (e) {
    throw new Error('error')
  }
}

export default processing
