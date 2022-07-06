const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const listItems = document.querySelectorAll('.list-item');

menuToggle.onclick = () => {
    navigation.classList.toggle('open');
}

listItems.forEach(item => {
    item.onclick = () => {
        listItems.forEach(item =>
            item.classList.remove('active'));
        item.classList.add('active');
    }
})