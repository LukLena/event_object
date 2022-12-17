//const tabActive = document.getElementsByClassName('tab_active')
const tab = document.getElementsByClassName('tab')
const content = document.querySelectorAll('.tab__content')

const arrayTab= Array.from(tab) //массив всех вкладок
 const element = arrayTab.findIndex((item) => item.classList.contains('tab_active')) // индекс активной вкладки



    tab.onclick = active;
    function active(event){
      for (let i=0; i < arrayTab.length; i++){
          if (tab[i] == arrayTab[element]){
              return
//              arrayTab[i].classList.remove('tab_active')
        console.log(1)
          } 
          else {
              arrayTab[element].classList.remove('tab_active')
              tab[i].classList.add('tab_active')
           console.log(2)
          return
          }
           
      }
          
       
     } 
    tab.addEventListener('click', active)
  
  



 




//
//1 выбрать раздел нажать на раздел
//2 Б появляется описание