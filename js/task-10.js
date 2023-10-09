function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const divs = [];
  let size = 30;
  for (let index = 0; index < amount; index++) {
    const div= document.createElement('div');
    div.style.width =div.style.height= `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
    size += 10;
  }
  return divs;
}
function destroyBoxes() { boxes.innerHTML = ''; }

const boxes = document.querySelector('#boxes');
document.querySelector('button[data-create]').addEventListener('click',
  () => { boxes.append(...createBoxes(document.querySelector('input').value)) });
document.querySelector('button[data-destroy]').addEventListener('click',
  () => { destroyBoxes()});