const { Parser } = require('json2csv');

const fields = ['public_id', 'folder', 'filename', 'format', 'version', 'resource_type', 'type', 'created_at',
  'uploaded_at', 'bytes', 'backup_bytes', 'width', 'height', 'aspect_ratio', 'pixels', 'url',
  'secure_url', 'status', 'access_mode', 'access_control', 'etag', 'created_by/0', 'uploaded_by/0'];

const buildCsv = (data) => {
  const opts = { fields };
  const json2csv = new Parser(opts);

  const csv = json2csv.parse(data);
  return csv;
}
module.exports = {
  buildCsv
}
