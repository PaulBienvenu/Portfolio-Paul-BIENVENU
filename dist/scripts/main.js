let titleMotion = document.querySelector('.header__hero__mainTitle')

let animationTitre = lottie.loadAnimation({
    container: titleMotion,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "dist/scripts/title.json"
});


let motionsection= document.querySelector('.motiondesign__text__title__animation')

let animationSectionMotion = lottie.loadAnimation({
    container: motionsection,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "dist/scripts/motiondesign.json"
});


