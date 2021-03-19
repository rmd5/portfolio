const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: find(),
    // centerMode: true,
    centerPadding: "50px"
};

function find() {
    let slides = 2;
    if(window.innerWidth < 500) {
        slides = 1;
    }
    return slides;
}

export default settings;