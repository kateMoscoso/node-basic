const assert = require('assert');
const { getStatistics } = require('../../components/images/controllers');
const mocks = require('../../mocks/images');


describe('controllers images', function () {
  describe('when receives a list images return Statistics', function () {
    const response = {
      avgSize: 553835,
      biggestPicture: 'https://res.cloudinary.com/dbnuvqzms/image/upload/v1580932156/wwe_randy_orton-1680x1050_d1wbxy.jpg',
      formats: {
        jpg: 2
      },
      smallestPicture: 'https://res.cloudinary.com/dbnuvqzms/image/upload/v1580932133/yellow_maple_leaf-1366x768_aoit8p.jpg',
      totalImages: 2
    }
    it('should return correct Statistics', function () {
      const result = getStatistics(mocks.getImages().resources);
      assert.deepEqual(result, response);
    });
  });

});
