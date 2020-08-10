export default function transformImage(image, option) {
  if (image === '') {
    return ''
  }
  const imageService = '//img2.storyblok.com/'
  const path = image.replace('https://a.storyblok.com', '')
  return imageService + option + path
}
