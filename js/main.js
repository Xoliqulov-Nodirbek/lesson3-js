var elForm = document.querySelector(".form");
var elFormInput = document.querySelector(".form__input");
var elFormSelect = document.querySelector(".form__select");
var elFormResult = document.querySelector(".form__button");
var elResult = document.querySelector(".result");


elForm.addEventListener("submit", function(think){

  think.preventDefault();

    var elInputValue = elFormInput.value;
    var elSelectValue = elFormSelect.value;
    var elAll = elInputValue * elSelectValue;

    elResult.textContent = (`will be ${elAll}`);
    if( elAll < 0){
      elResult.textContent = ("Please, enter a number greater than 0 !");
    }
})