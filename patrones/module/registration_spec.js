Registration = require('./lib/registration')

describe("Regitration", function(){
    describe("a valid application", function(){
        var regResult = {};
        before(function () {
            regResult = Registration.applyForMembership({email : "rob@tekpub.com"})
        });
        it("is successful", function(){
            regResult.success.should.equal(true)
        });
        it("creates a user",)
    })
})