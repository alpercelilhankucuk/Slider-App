var models = [{
    name: 'Bmw 418d',
    image: 'img/bmw.jpg',
    link: 'http://www.arabalar.com.tr/bmw'

},
{
    name: 'Audi A3',
    image: 'img/audi.jpg',
    link: 'http://www.arabalar.com.tr/audi'

},
{
    name: 'Fiat',
    image: 'img/fiat.png',
    link: 'http://www.arabalar.com.tr/fiat'
},
{
    name: 'Mercedes GLB',
    image: 'img/mercedes.jpg',
    link: 'http://www.arabalar.com.tr/mercedes'

},
{
    name: 'Subaru Brz',
    image: 'img/subaru.png',
    link: 'http://www.arabalar.com.tr/subaru'
}

];

var index = 0;
var slideCount = models.length;
var interval;
var settings = {
duration: '2000',
random: true,
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
index--;
showSlide(index);
console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function() {
index++;
showSlide(index);
console.log(index);
});
document.querySelectorAll('.arrow').forEach(function(item) {
item.addEventListener('mouseenter', function() {
    clearInterval(interval);
})
});
document.querySelectorAll('.arrow').forEach(function(item) {
item.addEventListener('mouseleave', function() {
    init(settings);
})

})

function init(settings) {

var prev;
interval = setInterval(function() {
    if (settings.random) {
        //random index
        do {
            index = Math.floor(Math.random() * slideCount);
        } while (index == prev)
        prev = index;
    } else {
        //artan index

        if (slideCount == index + 1) {
            index = -1;
        }
        showSlide(index);
        console.log(index);

    }
    showSlide(index);

}, settings.duration)

};

function showSlide(i) {

index = i;
if (i < 0) {
    index = slideCount - 1;
}
if (i >= slideCount) {
    index = 0;
}


document.querySelector('.card-title').textContent = models[index].name;

document.querySelector('.card-img-top').setAttribute('src', models[index].image);

document.querySelector('.card-link').setAttribute('href', models[index].link);
}