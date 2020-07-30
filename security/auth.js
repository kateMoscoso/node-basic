const speakeasy = require('speakeasy');
const qrcode = require('qrcode');
const { Router } = require('express');
const router = Router();
var user = {
    two_factor_temp_secret : null,
    two_factor_secret: null,
    two_factor_enabled: null
}

router.get('/2fa', function(req, res){

    var secret = speakeasy.generateSecret();

    user.two_factor_temp_secret = secret.base32;

    qrcode.toDataURL(secret.otpauth_url, function(err, data_url){
        res.send(`<img src="${data_url}">`);
    });
});

router.get('/authenticate', function(req, res){
    res.send('')
})

router.post('/verify', function(req, res){
    var userToken= req.body.token;

    var base32secret = user.two_factor_temp_secret;

    var verified = speakeasy.totp.verify({
        secret: base32secret,
        encoding: 'base32',
        token: userToken
    });
    if(verified){
        user.two_factor_secret = user.two_factor_temp_secret;
        user.two_factor_enabled = true;

        res.send('<p>verified</p>')
    }else {
        res.send('<p>verification failed</p>')
    }
})


