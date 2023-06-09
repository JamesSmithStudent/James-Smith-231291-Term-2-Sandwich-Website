addPrice = () => {
    let finalprice = 0 ;
    let white = document.getElementById("white").checked;
    let brown = document.getElementById("brown").checked;
    let fiber = document.getElementById("fiber").checked;

    
    if (white){
        finalprice = finalprice + 10 ;
        alert('Your sandwich is R'+finalprice+".00")
    }
    if (brown){
        finalprice = finalprice + 8 ;
        alert('Your sandwich is R'+finalprice+".00")
    }
    if (fiber){
        finalprice = finalprice + 10000 ;
        alert('Your sandwich is R'+finalprice+".00")
    }
    
}