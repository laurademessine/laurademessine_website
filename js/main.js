document.addEventListener('DOMContentLoaded', () => {

    console.log("dom loaded")

    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('#shape', 6, {
        y: -30
    })
    .to('#plant', 6, {
        y: -50
    }, '-=6')
    .to('#girl', 6, {
        y: -70
    }, '-=6')
    .from('.formation', 3, {
        top: '40px',
        autoAlpha: 0
    }, '-=4')
    

    let scene = new ScrollMagic.Scene({
        triggerElement: 'home-illustrations',
        duration: '100%',
        triggerHook: 0.5
    })
    .setTween(timeline)
    .addIndicators()
    .setPin('section')
    .addTo(controller);
})