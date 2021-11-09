// let pDiv=document.getElementById('premiereCase'); 
// let dDiv=document.getElementById('deuxiemeCase');
// let tDiv=document.getElementById('troisiemeCase');
// let qDiv=document.getElementById('quatriemeCase');


// // let cases = document.querySelectorAll('.toggle'); 


// // pDiv.addEventListener("click", function(){
    
// //     this.style.background='#f3eb06';
// //     this.style.color='#000';
// //     dDiv.style.background='grey'; 
// //     dDiv.style.color='#ffffff'; 

// //     tDiv.style.background='grey'; 
// //     tDiv.style.color='#ffffff'; 

// //     qDiv.style.background='grey'; 
// //     qDiv.style.color='#ffffff'; 

// //     afficherCinquiemeCase.style.display='block'; 


// // })

// pDiv.onclick= function() {
//     this.style.background='#f3eb06';
//     this.style.color='#000';
//     dDiv.style.background='grey'; 
//     dDiv.style.color='#ffffff'; 

//     tDiv.style.background='grey'; 
//     tDiv.style.color='#ffffff'; 

//     qDiv.style.background='grey'; 
//     qDiv.style.color='#ffffff'; 

//     afficherCinquiemeCase.style.display='block'; 


// }


// dDiv.onclick= function() {
//     this.style.background='#f3eb06';
//     this.style.color='#000';

//     pDiv.style.background='grey'; 
//     pDiv.style.color='#ffffff'; 

//     tDiv.style.background='grey'; 
//     tDiv.style.color='#ffffff'; 

//     qDiv.style.background='grey'; 
//     qDiv.style.color='#ffffff'; 
// }
// tDiv.onclick= function() {
//     this.style.background='#f3eb06';
//     this.style.color='#000';

//     pDiv.style.background='grey'; 
//     pDiv.style.color='#ffffff'; 

//     dDiv.style.background='grey'; 
//     dDiv.style.color='#ffffff'; 

//     qDiv.style.background='grey'; 
//     qDiv.style.color='#ffffff'; 
// }
// qDiv.onclick= function() {
//     this.style.background='#f3eb06';
//     this.style.color='#000';

//     pDiv.style.background='grey'; 
//     pDiv.style.color='#ffffff'; 

//     tDiv.style.background='grey'; 
//     tDiv.style.color='#ffffff'; 

//     dDiv.style.background='grey'; 
//     dDiv.style.color='#ffffff'; 
// }


// let auteur = document.addEventListener('click', function(){
//     liens.style.background='grey'; 
// });




//let cases = document.querySelectorAll('#firstCase, #secondCase, #thirdCase, #fourthCase')
//console.log(cases);

// var pDiv=document.getElementById('premiereCase'); 
// var dDiv=document.getElementById('deuxiemeCase');
// var tDiv=document.getElementById('troisiemeCase');
// var qDiv=document.getElementById('quatriemeCase');

// let cases = document.getElementsByClassName('toggle'); 

// let afficherCinquiemeCase = document.getElementById('cinquiemeCase');

// cases.addEventListener('onclick', function() {
//         this.style.background='#f3eb06';
//         this.style.color='#000';
// });.
// function changeBackground (){
//     pDiv.style.background='grey'; 
//     dDiv.style.background='grey';
//     tDiv.style.background='grey';
//     qDiv.style.background='grey';
//     pDiv.style.color='#ffffff'; 
//     dDiv.style.color='#ffffff'; 
//     tDiv.style.color='#ffffff'; 
//     qDiv.style.color='#ffffff'; 
// }


// let clickFunction = myArray = ["pDiv","dDiv","tDiv","qDiv"]; 

// for (let element of myArray){
//     changeBackground(element)
// }


/*code bon */
let afficherCinquiemeCase = document.getElementById('cinquiemeCase');

let cases= document.querySelectorAll('.active');
// .forEach(Case=>Case.addEventListener('click', myFunction));

//let liens = document.querySelectorAll('.lien');
// forEach(Lien=>Lien.addEventListener('click', style));

[].forEach.call(cases, function(ev){
    ev.addEventListener('click', function(elem){
        console.log(ev);
        cases.forEach( e  => {
            console.log(e)
            e.classList.remove('active')
            e.classList.add('inactive')

        } )
        ev.classList.remove('inactive')
        ev.classList.add('active')
        
        afficherCinquiemeCase.style.display='block'; 
    })
})

let liens = document.querySelectorAll('.lien');
// liens.forEach(lien=>lien.addEventListener('click',style));

//         function style(){

//                 this.nextElementSibling.style.background="grey";

            

//         }
[].forEach.call(liens, function(li){
    li.addEventListener('click', function(){
        liens.forEach(l => {
            l.classList.remove('lien')
            l.classList.add('inactive')
        })
        li.classList.remove('inactive')
        li.classList.add('lien')
    })
})




/*code avec jQuery
$(document).ready(function(){
$("#premiereCase, #deuxiemeCase, #troisiemeCase, #quatriemeCase").click(function(){
    this.style.background="grey";
    this.style.color="white";
})
})
*/