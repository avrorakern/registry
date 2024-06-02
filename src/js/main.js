let date = document.querySelector('.dates :nth-child(5)');
let talon = document.querySelector('.talon');

date.addEventListener('click', () => {
    talon.innerHTML = `
    <p class ="talon__day">3 мая</p>
    <div class="talon__wrapper">
    <a class ="talon__day" href="noskova.html">8:15-8:30<a>
    <a class ="talon__day" href="noskova.html">10:45-11:00<a>
    </div>
    `
})