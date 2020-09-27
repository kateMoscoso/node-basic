const assert = require('chai').assert
const { buildCsv } = require('../../utils/csv');
const mocks = require('../../mocks/images');

describe('utils - csv', function () {
  describe('when receives a list images return csv', function () {
    it('should return ok', function () {
      const result = buildCsv(mocks.getImages().resources);
      assert.typeOf(result, 'string')
    });
  });

});
