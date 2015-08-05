$("#ini").click(function(){
    $('#aca').removeClass('active');
    $('#exp').removeClass('active');
    $('#abo').removeClass('active');
    $('#con').removeClass('active');
});

$("#aca").click(function(){
    $('#aca').addClass('active');
    $('#exp').removeClass('active');
    $('#abo').removeClass('active');
    $('#con').removeClass('active');
});

$("#exp").click(function(){
    $('#exp').addClass('active');
    $('#aca').removeClass('active');
    $('#abo').removeClass('active');
    $('#con').removeClass('active');
});

$("#abo").click(function(){
    $('#abo').addClass('active');
    $('#exp').removeClass('active');
    $('#aca').removeClass('active');
    $('#con').removeClass('active');
});

$("#con").click(function(){
    $('#con').addClass('active');
    $('#exp').removeClass('active');
    $('#abo').removeClass('active');
    $('#aca').removeClass('active');
});