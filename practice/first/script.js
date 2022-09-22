const toggleBtn = document.querySelector('.navbar_toggle');
const option = document.querySelector('.navbar_options');
const icon = document.querySelector('.navbar_icons');


console.log(toggleBtn);
console.log(icon);


toggleBtn.addEventListener('click', () => {
    option.classList.toggle('active');
    icon.classList.toggle('acitve');
});