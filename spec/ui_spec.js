describe('CALC - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    it("displays 1 if number is 1", function() {
        $('#number').val(1);
        $('#calculate').trigger('click');
        expect($('#display_message').text()).toBe('1');
    });

    it("displays fizz if number is divisible by 3", function() {
        $('#number').val(3);
        $('#calculate').trigger('click');
        expect($('#display_message').text()).toBe('fizz');
    });

    it("displays buzz if number is divisible by 5", function() {
        $('#number').val(5);
        $('#calculate').trigger('click');
        expect($('#display_message').text()).toBe('buzz');
    });

    it("displays fizz buzz if number is divisible by 15", function() {
        $('#number').val(15);
        $('#calculate').trigger('click');
        expect($('#display_message').text()).toBe('fizz buzz');
    });

    it("displays error message if input isn't correct", function() {
        $('#number').val('s');
        $('#calculate').trigger('click');
      expect($('#display_message').text()).toBe('Didn\'t I tell you to enter an integer?')
    });

});
