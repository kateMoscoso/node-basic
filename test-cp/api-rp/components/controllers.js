const CloudinaryService = require('./services');
const cloudinaryService = new CloudinaryService();
const { buildCsv } = require('../../../rp/utils/csv')

const getStatistics = async () => {
  const data = await cloudinaryService.list_resources();

  const biggestPicture = data[data.length - 1]
  const smallestPicture = data[0]
  let sum = 0;
  const formats = {}
  data.forEach(picture => {
    sum += picture.bytes;
    if (!formats[picture.format]) {
      formats[picture.format] = 0;
    }
    formats[picture.format] += 1
  });
  return {
    totalImages: data.length,
    formats,
    biggestPicture: biggestPicture.secure_url,
    smallestPicture: smallestPicture.secure_url,
    avgSize: getAvgSize(sum, data.length)
  }
}

const getAvgSize = (num, size) =>{
  return num / size;
}

const getCsv = async () => {
  const images = await cloudinaryService.list_resources();
  const csv = buildCsv(images);
  return csv;

}

module.exports = {
  getStatistics,
  getCsv
}
