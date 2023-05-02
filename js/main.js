$(function () {
$('.right_menu').on('click',function () {
    $('.tit_login_menu').toggleClass('on');
})
$('.tit .left_menu i').on('click',function () {
    $('.left_gnb').toggleClass('on');
    $('main').toggleClass('on');
})
});