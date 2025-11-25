document.addEventListener('DOMContentLoaded', () => {
    let addresses = document.getElementsByClassName('js-address');
    let maps  = document.getElementsByClassName('js-map');

    for (let i = 0; i < addresses.length; i++) {
        addresses[i].addEventListener('click', () => {
            for (let m = 0; m < maps.length; m++) {
                maps[m].classList.remove('map-visible');
            }
            maps[i].classList.add('map-visible');
        });
    }
});