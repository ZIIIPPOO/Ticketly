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
    document.getElementById('ctrn').innerHTML=counteur
    }
}
function store(button){
    const div = button.parentElement;
    
    const title = div.querySelector('h2').innerHTML;
    const info = div.querySelector('.infos p').innerHTML;
    const price = div.querySelector('.selected-event div p').innerHTML;


    document.querySelector('.total-price p').innerHTML = price;
    document.querySelector('.selected-event h2').innerHTML = title;
    document.querySelector('.selected-event div p').innerHTML = info;
    
}