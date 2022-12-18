
const tab = document.getElementsByClassName('tab')
const content = document.getElementsByClassName('tab__content')

const arrayTab= Array.from(tab) //массив всех вкладок
 const element = arrayTab.findIndex((item) => item.classList.contains('tab_active')) // индекс активной вкладки

 for (let i=0; i < arrayTab.length; i++){
     arrayTab[i].onclick = active;
     
     function active(event){
        const tabActive= arrayTab[i].parentElement.querySelector('.tab_active')
        tabActive.classList.remove('tab_active')
        arrayTab[i].classList.add('tab_active')
        if (arrayTab[i]){
            const activeContent = content[element].parentElement.querySelector('.tab__content_active')
            activeContent.classList.remove('tab__content_active')
            content[i].classList.add('tab__content_active')
         }
      }

     arrayTab[i].addEventListener('click', active)
 }

    
