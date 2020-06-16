// modal-window

let F2 = document.querySelector('.F2');


let more = document.querySelector('.btn'),
overplay = document.querySelector('.overplay'),
close = document.querySelector('.close');

more.addEventListener('click', function() {
    overplay.style.display = 'block';
    this.classList.add('btn-animation');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
    overplay.style.display = 'none';
    more.classList.add('btn-animation');
    document.body.style.overflow = '';
});