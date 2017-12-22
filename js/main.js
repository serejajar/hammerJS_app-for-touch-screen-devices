var dom = {
    wrapper: document.getElementById('wrap'),
    status: document.getElementById('status'),
}
var hammertime = new Hammer(dom.wrapper, {direction: Hammer.DIRECTION_ALL});

hammertime.on('swipeleft swiperight', function(ev) {
    dom.status.innerHTML = ev.type;
    var wrapperPosition = parceInt(dom.wrapper.style.left);

    var goTo = ev.type === 'swipeleft' ? wrapperPosition - 1000 : wrapperPosition + 1000;
    dom.wrapper.style.left = wrapperPosition + '';
});
