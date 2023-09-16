const card = document.getElementById('rating-card');
const cardSubmit = document.getElementById('submited-card');
const rating = document.querySelector('.rating');

function getResult(e) {
    const selectedRating = e.target.classList.contains('value');
    if (selectedRating) {
        card.style.display = 'none';
        cardSubmit.style.display = 'block';

    } else {
        card.style.display = 'block'
        cardSubmit.style.display = 'none'
    }
}

rating.addEventListener('click', getResult);


