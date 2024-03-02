//Event Delegation

//Отслеживание кликов по элементам списка, выбираем один из многих

//вешаем слушатель на список
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');   //поиск кнопки с активным классом

//если такая кнопка есть - снимаем с нее актив класс

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//  добавляем класс на тег на который кликнули

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;  //записываем значение выбранного тега

//   console.log(selectedTag);
// }

// выбираем несколько тегов
// const tagsContainer = document.querySelector(".js-tags");
// tagsContainer.addEventListener("click", onTagsContainerClick);
// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
// снимаем если такой класс есть  вешаем если нет
//   evt.target.classList.toggle("tags__btn--active");

// }

const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set();

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value; //записали значение выбранного тега
  const isActive = btn.classList.contains("tags__btn--active"); //содержит ли активный класс

  if (isActive) {
    selectedTags.delete(tag); //если на текущем элементе есть класс актив то из Сета удаляем тег на который кликнули
  } else {
    selectedTags.add(tag); //если нет то добавим этот тег в Сет
  }

  btn.classList.toggle("tags__btn--active"); //в любом случае делаем тоггл класса
  console.log(selectedTags);
}
