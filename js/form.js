const adultsMinusBtn = document.querySelector("#adults-minus");
const adultsPlusBtn = document.querySelector("#adults-plus");

const childrenMinusBtn = document.querySelector("#children-minus");
const childrenPlusBtn = document.querySelector("#children-plus");

const adultsInput = document.querySelector("#adults");
const childrenInput = document.querySelector("#children");

const sendBtn = document.querySelector(".formHeader");


adultsMinusBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (adultsInput.value > 0) {
    adultsInput.value--
  }
});
adultsPlusBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (adultsInput.value >= 0) {
    adultsInput.value++
  }
});

childrenMinusBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (childrenInput.value > 0) {
    childrenInput.value--
  }
});
childrenPlusBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (childrenInput.value >= 0) {
    childrenInput.value++
  }
});

sendBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  alert("Данная функция не работает в демо версии сайта.")
});