
if(Modernizr.mq('only screen and (min-width: 980px)')) {
    $('#highlights').affix({
        offset: {
            top: 100,
            bottom: 140
        }
    });
}
if(Modernizr.mq('only screen and (max-width: 767px)')) {
    $('#highlights').css('background-image','none');
}

/*
if(Modernizr.mq('only all')) {
    document.write("test!");
}*/