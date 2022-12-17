const openList = document.querySelector('.dropdown__list');
const value = document.getElementsByClassName('dropdown__value')
const item = document.getElementsByClassName('dropdown__item')


openList.onclick = open;
function open(event){
    openList.classList.toggle('dropdown__list_active')
    event.preventDefault()
//    console.log(0)
}
for (let i=0; i<value.length; i ++){
   value[i].addEventListener('click', open) 
}

for (let i=0; i<item.length; i++){
    item[i].onclick = choice
    function choice(event) {
     const dropLink = item[i].getElementsByClassName('dropdown__link')
     const drop = item[i].closest('.dropdown')
     const actualValue = drop.querySelector('.dropdown__value')
     actualValue.textContent= dropLink[0].textContent

    }
}





