let text2 = document.querySelector(`.text2`);
let skills = ["Web Developer", "UI & UX Designer", "Freelancer", "Youtuber"];
let arrIndex = 0;
let length = skills.length;
console.log(length);

text2.innerHTML = skills[arrIndex];
function changeText(){
    arrIndex = (arrIndex == length - 1) ? 0 : arrIndex + 1;
    text2.innerHTML = skills[arrIndex];
}

setInterval(changeText, 5000);