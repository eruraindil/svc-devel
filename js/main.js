
if(Modernizr.mq('only screen and (max-width: 767px)')) {
    $('#highlights').css('background-image','none');
} else {
    $('#highlights').affix({
        offset: {
            top: 100,
            bottom: 140
        }
    });
}
/*
if(Modernizr.mq('only all')) {
    document.write("test!");
}*/