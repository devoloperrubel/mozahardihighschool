$(document).ready(function () {
    $('.vew-btn').click(function (e) { 
        e.preventDefault();
        $('.notice-table').hide();
        $('.notice-img-section').css('display','block');
    });
    $('.return-btn').click(function (e) { 
        e.preventDefault();
        $('.notice-table').show();
        $('.notice-img-section').css('display','none');
    });
});