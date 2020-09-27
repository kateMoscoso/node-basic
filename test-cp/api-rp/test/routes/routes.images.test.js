const proxyquire = require('proxyquire');

const { CloudinaryControllerMock } = require('../../mocks/images');
const testServer = require('../../utils/testServer');

describe('routes - images from cloudinary', function () {
  const route = proxyquire('../../components/images/routes', {
    '../../components/images/controllers': CloudinaryControllerMock,
  });

  const request = testServer(route);

  describe('GET /csv', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/cloudinary/csv').expect(200, done);
    });
  });
  describe('GET /statistics', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/cloudinary/statistics').expect(200, done);
    });
  });
});
