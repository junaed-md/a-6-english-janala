document.getElementById('nav').style.display= 'none';
document.getElementById('faq').style.display= 'none';
document.getElementById('learn').style.display= 'none';


// login button
document.getElementById('login').addEventListener('click', (event)=> {
    event.preventDefault();
const name = document.getElementById('name').value;
const pass = document.getElementById('pass').value;

if(name<1) {
alert('Enter your name');
return;
}

if(pass ==='123456') {

} else{
    alert('Invalid password')
    return;
}
alert('Success')
document.getElementById('nav').style.display= 'block';
document.getElementById('faq').style.display= 'block';
document.getElementById('learn').style.display= 'block';
document.getElementById('hero').style.display= 'none';
})

// logout button
document.getElementById('logout').addEventListener('click', () => {
    document.getElementById('nav').style.display= 'none';
document.getElementById('faq').style.display= 'none';
document.getElementById('learn').style.display= 'none';
document.getElementById('hero').style.display= 'block';

})