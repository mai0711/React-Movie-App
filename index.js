//open movie's details page
const buttonOpen = document.querySelectorAll('.modalOpen');
for(var i = 0; i < buttonOpen.length; i++){
    buttonOpen[i].addEventListener('click', clickFunction, false);
}
function clickFunction(e) {
    e.preventDefault();
    modal.style.display = "block";
    console.log(this);
}

//close movie's details page
const buttonClose = document.querySelectorAll('.modalClose');
for(var i = 0; i < buttonClose.length; i++){
    buttonClose[i].addEventListener('click', closeFunction, false);
}
function closeFunction(e) {
    e.preventDefault();
    modal.style.display = "none";
    console.log(this);
}

//close movies details page when I clicked outside of the page
const modal = document.getElementById("modal");
document.addEventListener("click", (e) => {
        if(e.target == modal){
            modal.style.display = "none";
        }
    });

//play, favorite and like button of the details page
const playButton = document.querySelector('#play');
const favoritesButton = document.querySelector('#favorites');
const likeButton = document.querySelector('#like');
const likeDis = document.querySelector('#likeDisplay');
const favDis = document.querySelector('#favoriteDisplay');
const times = document.querySelector('#times');

favoritesButton.addEventListener('click', function(){
    favoritesButton.innerHTML = "Added";
    favDis.innerHTML = '✅';
});

likeButton.addEventListener('click', function(){
    likeDis.innerHTML = '✅';
    let timesClicked = 0;
    times.innerHTML = ++timesClicked;
});


//to move image right and left
$('.slider').slick({
    dots: true, //to appear dots
    autoplay: true, 
    // prevArrow: '<img src="http://kasumiblog.xsrv.jp/codepen/images/arrow_lft.png" class="slide-arrow prev-arrow">',
    // nextArrow: '<img src="http://kasumiblog.xsrv.jp/codepen/images/arrow_rig.png" class="slide-arrow next-arrow">',
});

$('.slide-items').slick({
    infinite: true, //play slide infinitely
    slidesToShow: 5, //5 images are displayed
    slidesToScroll: 1, // image can move 1 to the left or right
    dots: true,

    responsive: [{
        breakpoint: 768, 
        settings: {
        slidesToShow: 2,
        },
        },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '20%',
        },
    },
    ]
    }); 



