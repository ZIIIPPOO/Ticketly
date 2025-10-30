function affichage(i){
    if(i == 1)
    {
        document.getElementById('s2').style.display='block';
        document.getElementById('s1').style.display='none';
    }
    else
    {
        document.getElementById('s2').style.display='none';
        document.getElementById('s1').style.display='block';
    }
}
let counteur =1;
function ctr() {
    if(counteur < 500){
    counteur++
    document.getElementById('ctrn').innerHTML=counteur
    }
}
function decr() {
    if(counteur > 1)
    {
    counteur--;
    document.getElementById('ctrn').innerHTML=counteur;
    increment_price();
    }
}
let new_price = 0;
function store(button){
    const div = button.parentElement;
    
    const title = div.querySelector('h2').innerHTML;
    const date = div.querySelector('.infos p:nth-child(1)').innerHTML;
    const location = div.querySelector('.infos p:nth-child(2)').innerHTML;
    const seats = div.querySelector('.infos p:nth-child(3)').innerHTML;
    const price = div.querySelector('.infos .price').innerHTML;
    new_price = parseInt(price);
    document.querySelector('.selected-event h2').innerHTML = title;
    document.querySelector('.selected-event div p').innerHTML = date + '<br>' + location + '<br>' + seats + '<br>' + price;
    document.querySelector('.total-price p:nth-child(2)').innerHTML = price;
    
}

function increment_price(){
    let total = counteur * new_price;

    document.querySelector('.total-price p:nth-child(2)').innerHTML = total + '$';
}