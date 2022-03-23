let addBtn = document.querySelector('.add-btn')

let modelCont = document.querySelector('.modal-cont')

let addFlag = false

addBtn.addEventListener('click' , function(e){
       // Display the Model

       //addFlag , true - Model Display
       //addFlag , false - Model Hide
       addFlag = !addFlag
       if(addFlag==true){
           modelCont.style.display = "flex";
       }else{
           modelCont.style.display = "none";
       }



})