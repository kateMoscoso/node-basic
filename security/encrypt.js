const crypto = require('crypto');
//const hash = crypto.createHash('md5');

//hash.update('password1');

//const hpass = hash.digest('hex');

const password = 'password1';

//const salt = crypto.randomBytes(256).toString('hex');

//const hasedPwd = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');


// algorithm
const algorithm = 'aes-256-cbc';
const salt = crypto.randomBytes(32);
const key = crypto.scryptSync(password, salt,32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv);
let ssn = '111-000-0000';
let encrypted = cipher.update(ssn, 'utf8', 'hex');
encrypted += cipher.final('hex');


// decrypt

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decypted = decipher.update(encrypted, 'hex', 'utf8');
decypted = decipher.final('utf-8');


const sally = crypto.createDiffieHellman(2048);
const sallyKeys = sally.generateKeys();

const bob = crypto.createDiffieHellman(sally.getPrime(), sally.getGenerator());

const bobKey = bob.generateKeys();

const sallySecret = sally.computeSecret(bobKey);
const bobSecret = bob.computeSecret(sallyKeys);
console.log(sallySecret.toString('hex'));


// hmac
const hmac = crypto.createHmac('sha256', 'a secret');

hmac.update('some datat to hash');

console.log(hmac.digest('hex'));

var salt_db= crypto.randomBytes(16);
password = crypto.pbkdf2Sync(password, salt, 100000, 512, 'SHA-512');


