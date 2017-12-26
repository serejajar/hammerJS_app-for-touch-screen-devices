var dom = {
    wrapper: document.getElementById('wrap'),
    status: document.getElementById('status'),
}
var hammertime = new Hammer(dom.wrapper, {direction: Hammer.DIRECTION_ALL});

hammertime.on('swipeleft swiperight', function(ev) {
    var wrapperPosition = parseInt(dom.wrapper.style.left) || 0;
    var wrapperWidth = dom.wrapper.offsetWidth;
    var parentWidth = dom.wrapper.parentElement.offsetWidth;

    var goTo = ev.type === 'swipeleft' ? (wrapperPosition - 500) : (wrapperPosition + 500);
    if (goTo > 0) {
        goTo = 0;
    }
    if (Math.abs(goTo) + parentWidth > wrapperWidth) {
        goTo = parentWidth - wrapperWidth;
    }
    dom.wrapper.style.left = `${goTo}px`;
    dom.status.innerHTML = ev.type;
});
