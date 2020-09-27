const cloudinary = require('cloudinary').v2
const { config } = require('../../config');

class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: config.cloud_name,
      api_key: config.api_key,
      api_secret: config.api_secret
    });
  }

  async list_resources() {
    let result = await this.getImages();
    let results = [...result.resources]
    let next_cursor = result.next_cursor
    while (next_cursor) {
      result = await this.getImages(next_cursor);
      results = [...results, ...result.resources]
      next_cursor = result.next_cursor
    }
    return results;
  }
  async getImages(next_cursor = null) {
    return await cloudinary.search.sort_by('bytes', 'asc')
      .expression('resource_type=image')
      .next_cursor(next_cursor)
      .max_results(500)
      .execute()
  }

}

module.exports = CloudinaryService;
