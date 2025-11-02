

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
    else if(i == 5) {
        document.getElementById('s4').style.display='none';
        document.getElementById('s3').style.display='block';
    }
    else if(i == 6) {
        document.querySelectorAll('.ticket-value')[0].innerHTML = counteur;
        document.querySelectorAll('.ticket-value')[1].innerHTML = '$' + new_price;
        document.querySelector('.total-amount').innerHTML = '$' + (counteur * new_price);

        document.getElementById('s4').style.display='block';
        document.getElementById('s3').style.display='none';
        
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

    document.querySelector('.event-name').innerHTML = title;
    document.querySelector('.detail-row').innerHTML = date + '<br>' + location + '<br>' + seats;
    
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

function remove(){
    document.getElementById('pl').innerHTML = '';
    document.getElementById('pl').style.display='none';
    i = 0;
    document.querySelector('.add').disabled = false;
    document.querySelector('#button').disabled = true;
}

function reset()
{
    document.getElementById('ctrn').innerHTML = 1;
    counteur = 1;
    i = 0;
    document.querySelector('.add').disabled = false;
    increment_price();
    document.querySelector('#button').disabled = true;
}
let i = 0;
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phone_regex = /^(\+2126\d{8}|06\d{8})$/
function addprtc(){
    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let fullname = fname + " " + lname;

    if (!fname || !lname) {
        alert('Please fill in both first name and last name');
        return;
    }
    if (!email_regex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    if (!phone_regex.test(phone)) {
        alert('Please enter a valid phone number (+2126XXXXXXXX or 06XXXXXXXX)');
        return;
    }
    document.getElementById('pl').innerHTML += `
        <div class="participant-item">
            <div class="participant-info">
                <h4>${fullname}</h4>
                <p>${email}</p>
                <p>${phone}</p>
            </div>
            <button onclick="remove()" class="remove">remove</button>
        </div>
    `;
    document.getElementById('pl').style.display = 'block';
    i++;

    console.log(i)
        console.log(counteur)

    if(i === counteur) {
        document.querySelector('.add').disabled = true;
        document.querySelector('#button').disabled = false; 
        return;
    }
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}

function msg(){
    alert('Réservation confirmée 🎉');
}