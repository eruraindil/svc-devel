
if (matchMedia('only (max-width: 767px)').matches) {

} else {
    $('#highlights').affix({
        offset: {
            top: 100,
            bottom: 140
        }
    })
}