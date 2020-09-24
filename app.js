//selectors
const navbtn = document.querySelector('.detail__button');
const list = document.querySelector('.list');
const cards = document.querySelectorAll('.card');


//event listener
navbtn.addEventListener('click',() => showlist())

//funnctions
let showlist = () => {
list.classList.toggle('list__show')
}

cards.forEach(element => {
    element.children[0].children[1].addEventListener('click',(event) => addorder(event))
});

let addorder = (event) => {
//console.log(event.target)
let neworder = {}
let fullpath =  event.target.parentElement.children[0].src;
let addres = fullpath.indexOf('img')+8;
let newaddress = fullpath.slice(addres);
neworder.path = `img${newaddress}`
let name = event.target.parentElement.parentElement.children[1].children[0].textContent.trim();
neworder.name=name;
let fee = event.target.parentElement.parentElement.children[1].children[1].children[0].textContent;
neworder.fee= +fee;
//add new order
let newcard = document.createElement('div');
newcard.classList.add('list__item');
newcard.innerHTML=`
<img src="css/${neworder.path}" alt="" class="list__item--img">
<span class="list__item--detail">
    <h6 class="list__item--detail-name">${neworder.name}</h6>
    <p class="list__item--detail-fee">$ <strong>${neworder.fee}</strong></p>
</span>
<button class="list__item--icon">
    <i class="fas fa-trash"></i>
</button>
`
list.appendChild(newcard)
alert('add order is done')
const items = document.querySelectorAll('.list__item')
navbtn.children[1].textContent=`${items.length} item`
let newfee = +navbtn.children[2].children[0].textContent
navbtn.children[2].children[0].textContent = newfee + neworder.fee
}