import sharp from 'sharp'

const processing = async (path: string, width: number, height: number, resizedpath: string): Promise<void> => {
  await sharp(path).resize(width, height).toFile(resizedpath)
}

export default processing
