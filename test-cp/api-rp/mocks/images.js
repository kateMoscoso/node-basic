
const imagesList = {
  next_cursor: '',
  rate_limit_allowed: 500,
  rate_limit_remaining: 499,
  resources: [
    {
      public_id: 'yellow_maple_leaf-1366x768_aoit8p',
      folder: '',
      filename: 'yellow_maple_leaf-1366x768_aoit8p',
      format: 'jpg',
      version: 1580932133,
      resource_type: 'image',
      type: 'upload',
      created_at: '2020-02-05T19:48:53+00:00',
      uploaded_at: '2020-02-05T19:48:53+00:00',
      bytes: 284542,
      backup_bytes: 0,
      width: 1366,
      height: 768,
      aspect_ratio: 1.77865,
      pixels: 1049088,
      url:
        'http://res.cloudinary.com/dbnuvqzms/image/upload/v1580932133/yellow_maple_leaf-1366x768_aoit8p.jpg',
      secure_url:
        'https://res.cloudinary.com/dbnuvqzms/image/upload/v1580932133/yellow_maple_leaf-1366x768_aoit8p.jpg',
      status: 'active',
      access_mode: 'public',
      access_control: null,
      etag: 'e2ba97ddebd037832f57e6956bbb0e1f',
      created_by: {
        access_key: '469833719843844',
        custom_id: 'admin@gomoodly.com',
        external_id: 'e7dda5a59ad13dc0fdb92abab97fc5',
      },
      uploaded_by: {
        access_key: '469833719843844',
        custom_id: 'admin@gomoodly.com',
        external_id: 'e7dda5a59ad13dc0fdb92abab97fc5',
      },
    },
    {
      public_id: 'wwe_randy_orton-1680x1050_d1wbxy',
      folder: '',
      filename: 'wwe_randy_orton-1680x1050_d1wbxy',
      format: 'jpg',
      version: 1580932156,
      resource_type: 'image',
      type: 'upload',
      created_at: '2020-02-05T19:49:16+00:00',
      uploaded_at: '2020-02-05T19:49:16+00:00',
      bytes: 823128,
      backup_bytes: 0,
      width: 1680,
      height: 1050,
      aspect_ratio: 1.6,
      pixels: 1764000,
      url:
        'http://res.cloudinary.com/dbnuvqzms/image/upload/v1580932156/wwe_randy_orton-1680x1050_d1wbxy.jpg',
      secure_url:
        'https://res.cloudinary.com/dbnuvqzms/image/upload/v1580932156/wwe_randy_orton-1680x1050_d1wbxy.jpg',
      status: 'active',
      access_mode: 'public',
      access_control: null,
      etag: 'a42fe829f735d125c8c32f668bb9d3b2',
      created_by: {
        access_key: '469833719843844',
        custom_id: 'admin@gomoodly.com',
        external_id: 'e7dda5a59ad13dc0fdb92abab97fc5',
      },
      uploaded_by: {
        access_key: '469833719843844',
        custom_id: 'admin@gomoodly.com',
        external_id: 'e7dda5a59ad13dc0fdb92abab97fc5',
      },
    },
  ],
  time: 197,
  total_count: 783,
};
function getImages() {
  return imagesList;
}

class CloudinaryServiceMock {
  async list_resources() {
    return Promise.resolve(imagesList.resources);
  }

  async getImages() {
    return Promise.resolve(imagesList);
  }
}

class CloudinaryControllerMock {
  async getStatistics() {
    return Promise.resolve({});
  }

  async getCsv() {
    return Promise.resolve();
  }
}

module.exports = {
  getImages,
  imagesList,
  CloudinaryServiceMock,
  CloudinaryControllerMock
};
