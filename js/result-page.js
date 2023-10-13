$(document).ready(function () {
    









    
        $('.submit').click(function (e) { 
            e.preventDefault();
            $('.result-filter-section').hide();
            $('.print, .result-personal-info, .mark-sheet').css('display','block');
        });
        $('.return-btn').click(function (e) { 
            e.preventDefault();
            $('.result-filter-section').show();
            $('.print, .result-personal-info, .mark-sheet').css('display','none');
        });
 


















});



// let cls = document.querySelector(".class");
// let clv = cls.value;
// console.log(clv);
// if(cls!=""){
   
//    alert('problem')
//    console.log(clv);
// }else{
//    alert('দয়া করে সবগুলো তথ্য দিয়ে তারপর সাবমিট বাটনে চাপ দিন ') ;
// }


