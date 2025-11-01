document.getElementById('button').disabled = true;
function affichage(i){
    if(i == 1)
    {
        document.getElementById('s2').style.display='block';
        document.getElementById('s1').style.display='none';
    }
    else if(i == 2)
    {
        document.getElementById('s2').style.display='none';
        document.getElementById('s1').style.display='block';
    }
    else if(i == 3)
    {
        document.getElementById('s3').style.display='block';
        document.getElementById('s2').style.display='none';
    }
    else if(i == 4)
    {
        document.getElementById('s3').style.display='none';
        document.getElementById('s2').style.display='block';
    }
}
let new_price = 0;
let nb_of_seats = 0;
function store(button){
    const div = button.parentElement;
    
    const title = div.querySelector('h2').innerHTML;
    const date = div.querySelector('.infos p:nth-child(1)').innerHTML;
    const location = div.querySelector('.infos p:nth-child(2)').innerHTML;
    const seats = div.querySelector('.infos p:nth-child(3)').innerHTML;
    const price = div.querySelector('.infos .price').innerHTML;
    const s = div.querySelector('.infos .seats span').innerHTML;
    nb_of_seats = s;
    new_price = parseInt(price);

    document.querySelector('.selected-event h2').innerHTML = title;
    document.querySelector('.selected-event div p').innerHTML = date + '<br>' + location + '<br>' + seats + '<br>' + price;
    document.querySelector('.total-price p:nth-child(2)').innerHTML = price;
    
}
let counteur =1;
function ctr() {
    console.log(nb_of_seats);
    if(counteur < nb_of_seats){
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

let total;
function increment_price(){
    total = counteur * new_price;

    document.querySelector('.total-price p:nth-child(2)').innerHTML = total + '$';
}

function store_input(){
    document.getElementById('pl').style.display='block';
    let fname = document.getElementById('firstName').value
    let lname = document.getElementById('lastName').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let result = fname.concat(" ", lname);
    document.querySelector(".participant-info h4").innerHTML = result;
    document.querySelector(".participant-info :nth-child(2)").innerHTML = email;
    document.querySelector(".participant-info :nth-child(3)").innerHTML = phone;
    console.log(result);
}
function remove()
{
    document.getElementById('pl').style.display='none';
}

function reset()
{
    document.getElementById('ctrn').innerHTML = 1;
    counteur = 1;
    i = 0;
    document.querySelector('.add').disabled = false;
    increment_price();
}
let i = 0;
function addprtc(){
    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let fullname = fname + " " + lname;


    document.getElementById('pl').innerHTML += `
        <div class="participant-item">
            <div class="participant-info">
                <h4>${fullname}</h4>
                <p>${email}</p>
                <p>${phone}</p>
            </div>
            <button onclick="remove()" class="remove-btn">Remove</button>
        </div>
    `;
    document.getElementById('pl').style.display = 'block';
    i++;

    console.log(i)
        console.log(counteur)

    if(i === counteur) {
        document.querySelector('.add').disabled = true;
        return;
    }

}