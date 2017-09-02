describe('calc_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#number').val(90);
        $('#calculate').trigger('click');
    });

    it("displays number", function() {
        expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });
    it("displays BMI message (metric)", function() {
        expect($('#display_message').text()).toBe('and you are overweight.');
    });

    it("displays BMI value (imperial)", function() {
        expect($('#display_value_2').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI message (imperial)", function() {
        expect($('#display_message_2').text()).toBe('and you are overweight.');
    });

    it("displays error message if input isn't correct", function() {
        $('#weight').val('0');
        $('#height').val('0');
        $('#calculate').trigger('click');
      expect($('#display_error').text()).toBe('Do you want to be undefined, or what? Enter your real values please!')
    });

});
