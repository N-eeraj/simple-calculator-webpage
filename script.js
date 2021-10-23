$(document).ready(function () {
    
    $('#dark_mode').on('change', function () {
        $('body').toggleClass('body-dark');
        $('label').toggleClass('label-dark');
        $('label div').toggleClass('toggle-container-dark');
        $('label div div').toggleClass('toggle-button-dark');
        $('#calc').toggleClass('calc-dark');
    });


});