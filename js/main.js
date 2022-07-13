const tabBtn = document.querySelectorAll('.tabsMenu li');
const tabBd = document.querySelectorAll('.tabsBody>div');
console.log(tabBtn.length); 


tabBtn.forEach(function(item,index){
    item.onclick = function(){

        for( let i = 0; i<tabBtn.length; i++){
            tabBtn[i].classList.remove('on');
            tabBd[i].style.display='none';
        }
        item.classList.add('on');
        tabBd[index].style.display='block';

     /*   tabBtn[num].classList.remove('on');
        this.classList.add('on');
        num = bb;
        */
    };

})
