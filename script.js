$(document).ready(function () {
    
    $('#dark_mode').on('change', function () {
        $('body').toggleClass('body-dark');
        $('label').toggleClass('label-dark');
        $('label div').toggleClass('toggle-container-dark');
        $('label div div').toggleClass('toggle-button-dark');
        $('#calc').toggleClass('calc-dark');
        $('#calc span:first-child').toggleClass('calc-span-first-dark');
        $('#calc span:last-child').toggleClass('calc-span-last-dark');
        $('button').toggleClass('button');
        $('#del').toggleClass('del-dark');
    });


});