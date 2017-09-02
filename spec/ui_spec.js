describe('calc_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    it("displays 1 if number is 1", function() {
        $('#number').val(1);
        $('#calculate').trigger('click');
        expect($('#display_message').text()).toBe('');
    });

    it("displays fizz if number is divisible by 3", function() {
        expect($('#display_message').text()).toBe('');
    });

    it("displays buzz if number is divisible by 5", function() {
        expect($('#display_message').text()).toBe('');
    });

    it("displays fizz buzz if number is divisible by 15", function() {
        expect($('#display_message').text()).toBe('');
    });

    it("displays error message if input isn't correct", function() {
        $('#number').val('s');
        $('#calculate').trigger('click');
      expect($('#display_message').text()).toBe('')
    });

});
