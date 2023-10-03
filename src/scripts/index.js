import 'regenerator-runtime';
import '../styles/main.css';
import ('../public/data/DATA.json').then(({ default: jsonData }) => {
    console.log(jsonData);
    let datas = jsonData['restaurants'];
    let dataList = '';
    datas.forEach(function (data) {
        dataList += `
        <div class="list_item">
            <img class="list_item_thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    Rating : 
                    <span class="list_item_rating_value">${generateStarRating(data['rating'])}</span>
                    (${data['rating']})
                </p>
                <h1 class="list_item_title"><a href="#">${data['name']}</a></h1>
                <div class="list_item_desc">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('#tes').innerHTML = dataList;
});

// Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('.nav');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

// menambahkan bintang 
function generateStarRating(rating) {
    const maxRating = 5; // 
    const roundedRating = Math.round(rating); 

    let stars = '';

    for (let i = 0; i < roundedRating; i++) {
        stars += '<span class="star">&#9733;</span>'; 
    }
    
    if (roundedRating < maxRating) {
        for (let i = 0; i < maxRating - roundedRating; i++) {
            stars += '<span class="star">&#9734;</span>'; 
        }
    }

    return stars;
}
