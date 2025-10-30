function affichage(index){
    if(index == 1)
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
let counteur =0
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
let store;
function store(index){

}
