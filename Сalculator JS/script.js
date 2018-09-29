let total = 5000,
    time = 1,
    hourRate,
    tabLeft = document.querySelector('.tab-left'),
    tabRight = document.querySelector('.tab-right'),
    blocksBlock = document.getElementById('blocks-block'),
    pagesBlock = document.getElementById('pages-block'),
    counterBlock = document.getElementById('counter-block'),
    counterPages = document.getElementById('counter-pages'),
    counterHours = document.getElementById('counter-hours'),
    counterRate = document.getElementById('counter-rate'),
    changesCheck = document.getElementById('changes-check'),
    changesCms = document.getElementById('changes-cms'),
    totalValue = document.getElementsByClassName('total-count')[0],
    input = document.getElementsByTagName('input');
  
    
const land = 5000,
      corp = 12000,
      cms = 4000,
      changes = 1000,
      blocks = 500,
      pages = 2500;
//Все скрипты будуть работать тогда когда загрузилась структура нашего элемента(HTML) 
window.addEventListener('DOMContentLoaded',function(){
    //Делаем так что бы у нас все поля очищались
    tabLeft.addEventListener('click',()=>{
         for(var i = 0;i < input.length; i++){
             input[i].value = '';
         };
         blocksBlock.style.display = 'flex';
         pagesBlock.style.display = 'none';
         //Позваоляет добавлять удалять считать количество каких то класов
         tabLeft.classList.add('active');
         tabRight.classList.remove('active');

         if(changesCheck.checked){
             changesCheck.checked = false;
         };
         if(changesCms.checked){
            changesCms.checked = false;
        };
        total = land;
        totalValue.value = total;
    });
    //Делаем так что бы у нас все поля очищались
    tabRight.addEventListener('click',()=>{
        for(var i = 0;i < input.length; i++){
            input[i].value = '';
        };
        blocksBlock.style.display = 'none';
        pagesBlock.style.display = 'flex';
        //Позваоляет добавлять удалять считать количество каких то класов
        tabLeft.classList.remove('active');
        tabRight.classList.add('active');

        if(changesCheck.checked){
            changesCheck.checked = false;
        };
        if(changesCms.checked){
           changesCms.checked = false;
       };
       total = corp;
       totalValue.value = total;
   });
});