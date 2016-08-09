describe('dataFactory', function() {
    beforeEach(module('dataFactory'));

    var $httpBackend;
    var $rootScope;
    beforeEach('Get tools', inject(function(_$httpBackend_, _$rootScope_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
    }));

    it('should be an object', function() {
        expect(dataFactory).to.be.an('object')
    })

    describe('createUser', function() {
        it('should create a user from a an email address and password', function() {
            var user = {
                email: 'test@test.com',
                password: 'test'
            }

            expect(dataFactory.createUser(user)).to.be.ok;
        })

    })

});