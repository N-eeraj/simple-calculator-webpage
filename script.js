display = document.getElementsByTagName('h1')[0];

function fnPress(key)
{
    //if display is 0 then change it to key pressed
    if (display.innerText == 0 | display.innerText == 'Error')
        display.innerText = key;
    //if display is not 0 then add key pressed to current display
    else
        display.innerText += key;
}

function fnSolve()
{
    //try to evaluate with eval fn, catch by displaying error mesage
    try{display.innerText = eval(display.innerText);}
    catch{display.innerText = 'Error';}
}

function fnClear()
{
    display.innerText = '0';
}

function fnDel()
{
    //check if expression has only 1 character, then clear display
    if (display.innerText.length == 1)
        fnClear()
    // else we set sliced value
    else
        display.innerText = display.innerText.slice(0, display.innerText.length - 1)
}