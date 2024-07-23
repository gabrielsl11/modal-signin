var obtn = document.getElementById('obtn');

obtn.addEventListener('click', () => {
    let modal = document.getElementById('modal');

    modal.show();
})

var cbtn = document.querySelector('#cbtn');

cbtn.addEventListener('click', () => {
    let modal = document.getElementById('modal');

    modal.close();
})