function showMenu(){
    let el = document.getElementById('nav-mobile')
    if (el.style.display === '' || el.style.display === 'none'){
        el.style.display = 'flex';
    }

    else if (el.style.display === 'flex'){
        el.style.display = 'none';
    }
}

function closeMenu(){
    document.getElementById('nav-mobile').style.display = 'none';
}