var originalText = "Dasun@Theeksahan:~";
var text = originalText;
var roundLogEl = document.querySelector('.navbar-brand span');

function typewriter() {
    if (text.length > 0) {
        roundLogEl.innerHTML += text.charAt(0);
        text = text.substr(1);
        setTimeout(typewriter, 100);
    } else {
        roundLogEl.innerHTML = '';
        text = originalText;
        setTimeout(typewriter, 1000); // delay before restarting
    }
}

typewriter();

function scrollToNextSection() {
    document.getElementById('experience').scrollIntoView({ behavior: 'smooth' });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener('scroll', function() {
    const awardCards = document.querySelectorAll('.award-card');
    awardCards.forEach(function(card) {
        if (isInViewport(card)) {
            card.classList.add('fade-in');
        } else {
            card.classList.remove('fade-in');
        }
    });
});

$(document).on('click', '.flip', function () {
    let card = $(this).closest('.certificate_card');
    if (card.hasClass('flip-it')) card.removeClass('flip-it');else
    card.addClass('flip-it');
    });


    $('.certificate_card').each(function () {
        let href = $(this).data('href');
        $(this).find('.front-wrapper').css({
            'background-image': 'url(' + href + ')',
            'background-size': 'contain',
            'background-position': 'center',
            'background-repeat': 'no-repeat',
            'class' : 'lazyload',
            'loading': 'lazy'
        });
    });