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

    $('button').on('click', function () {
        let button = $(this).text();
        currentValue = getCurrent();
        switch(button){
            case 'AC':
                clear();
                break;
            case '':
                del();
                break;
            case '%':
                changeInput(currentValue / 100);
                break;
            case '÷':
                changeInput(currentValue + '/');
                break;
            case '×':
                changeInput(currentValue + '*');
                break;
            case '.':
                if (currentValue == '')
                    currentValue = '0';
                changeInput(currentValue + button);
                break;
            case '=':
                getAns();
                break;
            default:
                changeInput(currentValue + button);
        }
    });

});

const getCurrent = () => {
    let currentValue = $('#calc span:first-child').text();
    if (currentValue == 0 && currentValue !== '0.')
        currentValue = '';
    return currentValue;
}

const changeInput = input => $('#calc span:first-child').text(input);

const clear = () => $('#calc span').text('0');

const del = () => {
    let currentValue = getCurrent();
    let delVal = 0;
    if (currentValue.length > 1)
        delVal = currentValue.slice(0, -1);
    changeInput(delVal);
}

const getAns = () => {
    try {
        ans = eval(getCurrent());
    } catch (error) {
        ans = 'Error';
    }
    $('#calc span:last-child').text(ans);
}

document.addEventListener('keydown', e => {
    let key = e.key;
    if (! isNaN(key) || '+-*/.'.includes(key))
        changeInput(getCurrent() + key)
    else{
        switch(key.toLowerCase()){
            case 'enter':
                getAns();
                break;
            case 'backspace':
                del();
                break;
            case '%':
                changeInput(getCurrent() / 100);
                break;
            case 'c':
                clear();
                break;
        }
    }    
})