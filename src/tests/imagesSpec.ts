import processing from '../routes/api/utilities'

describe('Testing the images processing module', () => {
  it('Expecting the processing function to be defined and working', () => {
    expect(
      processing('./assets/full/img2.png', 200, 100, './assets/thumb/img2_thumb_100_100.png')
    ).toBeDefined()
  })
})
