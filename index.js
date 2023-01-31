let numExp = /[0-9]/g;
let regExp = /[A-z]/g;

/* NAME */

var name_input = document.querySelector('.content__form__inputs__name__input');
var name_card = document.querySelector('.images__front__name');
var name_error = document.querySelector('.error__name');

name_input.addEventListener('input', ()=>{

    if (numExp.test(name_input.value) == true) {
        name_error.innerText = 'Wrong format, letters only';
        name_error.style.display = 'grid';

        name_input.style.background = 'unset';
        name_input.style.border = '1px solid var(--Red)';

    } else {
        name_error.innerText = '';
        name_error.style.display = 'none';

        name_input.style.background = 'var(--Gradient)';
        name_input.style.border = '1px solid transparent';

    }

    name_card.innerHTML = name_input.value;

    if (name_input.value == "") {
        name_card.innerHTML = 'Jane Appleseed';

        name_input.style.background = '#FFFFFF';
        name_input.style.border = '1px solid #DFDEE0';
    }
});

/* NUMBER */

var number_input = document.querySelector('.content__form__inputs__number__input');
var number_card = document.querySelector('.images__front__number');
var number_error = document.querySelector('.error__number');

number_input.addEventListener('input', ()=>{

    if (regExp.test(number_input.value) == true) {
        number_error.innerText = 'Wrong format, numbers only';
        number_error.style.display = 'grid';

        number_input.style.background = 'unset';
        number_input.style.border = '1px solid var(--Red)';

    } else {
        number_input.value = number_input.value.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim();

        number_error.innerText = '';
        number_error.style.display = 'none';

        number_input.style.background = 'var(--Gradient)';
        number_input.style.border = '1px solid transparent';
    }

    number_card.innerHTML = number_input.value;
    
    if (number_input.value == "") {
        number_card.innerHTML = '0000 0000 0000 0000';

        number_input.style.background = '#FFFFFF';
        number_input.style.border = '1px solid #DFDEE0';
    }
});

/* CVC */

var cvc_input = document.querySelector('.content__form__inputs__information__cvc__input');
var cvc_card = document.querySelector('.images__back__cvc');
var cvc_error = document.querySelector('.error__information__cvc');

cvc_input.addEventListener('input', ()=>{

    if (regExp.test(cvc_input.value) == true) {
        cvc_error.innerText = 'Wrong format, numbers only';
        cvc_error.style.display = 'grid';

        cvc_input.style.background = 'unset';
        cvc_input.style.border = '1px solid var(--Red)';

    } else {
        cvc_input.value = cvc_input.value.replace(/\s/g, '');

        cvc_error.innerText = '';
        cvc_error.style.display = 'none';

        cvc_input.style.background = 'var(--Gradient)';
        cvc_input.style.border = '1px solid transparent';

    }

    cvc_card.innerHTML = cvc_input.value;
    
    if (cvc_input.value == "") {
        cvc_card.innerHTML = '000';

        cvc_input.style.background = '#FFFFFF';
        cvc_input.style.border = '1px solid #DFDEE0';
    }
});

/* MONTH */

var month_input = document.querySelector('.content__form__inputs__information__date__inputs__month');
var month_card = document.querySelector('.images__front__date__month');
var date_error = document.querySelector('.error__information__date');

month_input.addEventListener('input', ()=>{

    if (regExp.test(month_input.value) == true) {
        date_error.innerText = 'Wrong format, numbers only';
        date_error.style.display = 'grid';

        month_input.style.background = 'unset';
        month_input.style.border = '1px solid var(--Red)';

    } else {
        month_input.value = month_input.value.replace(/\s/g, '');

        date_error.innerText = '';
        date_error.style.display = 'none';

        month_input.style.background = 'var(--Gradient)';
        month_input.style.border = '1px solid transparent';

    }

    month_card.innerHTML = month_input.value;
    
    if (month_input.value == "") {
        month_card.innerHTML = '00';

        month_input.style.background = '#FFFFFF';
        month_input.style.border = '1px solid #DFDEE0';
    }
});

/* YEAR */

var year_input = document.querySelector('.content__form__inputs__information__date__inputs__year');
var year_card = document.querySelector('.images__front__date__year');

year_input.addEventListener('input', ()=>{

    if (regExp.test(year_input.value) == true) {
        date_error.innerText = 'Wrong format, numbers only';
        date_error.style.display = 'grid';

        year_input.style.background = 'unset';
        year_input.style.border = '1px solid var(--Red)';

    } else {
        year_input.value = year_input.value.replace(/\s/g, '');

        date_error.innerText = '';
        date_error.style.display = 'none';

        year_input.style.background = 'var(--Gradient)';
        year_input.style.border = '1px solid transparent';

    }

    year_card.innerHTML = year_input.value;
    
    if (year_input.value == "") {
        year_card.innerHTML = '00';

        year_input.style.background = '#FFFFFF';
        year_input.style.border = '1px solid #DFDEE0';
    }
});

/* BUTTONS */

var formInputs = document.querySelector('.content__form__inputs');
var formCompleted = document.querySelector('.content__form__completed');

var confirmBtn = document.querySelector('.content__form__button');
var continueBtn = document.querySelector('.content__form__continue');

confirmBtn.addEventListener('click', ()=>{

    ////////// Variables //////////

    let nameError = 0; let numberError = 0; let monthError = 0; let yearError = 0; let cvcError = 0;

    ////////// Name //////////

    if (name_input.value == "") {
        name_error.innerText = 'Can’t be blank';
        name_error.style.display = 'grid';

        name_input.style.background = 'unset';
        name_input.style.border = '1px solid var(--Red)';

        nameError = 1;
    }

    if (name_input.style.border == '1px solid var(--Red)') {
        nameError = 1;
    }

    ////////// Number //////////

    if (number_input.value.length < 19) {
        number_error.innerText = 'Fill in the blanks';
        number_error.style.display = 'grid';

        number_input.style.background = 'unset';
        number_input.style.border = '1px solid var(--Red)';

        numberError = 1;
    }

    if (number_input.value == "") {
        number_error.innerText = 'Can’t be blank';
        number_error.style.display = 'grid';

        number_input.style.background = 'unset';
        number_input.style.border = '1px solid var(--Red)';

        numberError = 1;
    }

    if (number_input.style.border == '1px solid var(--Red)') {
        numberError = 1;
    }

    ////////// Month //////////

    if (month_input.value.length < 2) {
        date_error.innerText = 'Fill in the blanks';
        date_error.style.display = 'grid';

        month_input.style.background = 'unset';
        month_input.style.border = '1px solid var(--Red)';

        monthError = 1;
    }

    if (month_input.value == "") {
        date_error.innerText = 'Can’t be blank';
        date_error.style.display = 'grid';

        month_input.style.background = 'unset';
        month_input.style.border = '1px solid var(--Red)';

        monthError = 1;
    }

    if (month_input.style.border == '1px solid var(--Red)') {
        monthError = 1;
    }

    ////////// Year //////////

    if (year_input.value.length < 2) {
        date_error.innerText = 'Fill in the blanks';
        date_error.style.display = 'grid';

        year_input.style.background = 'unset';
        year_input.style.border = '1px solid var(--Red)';

        yearError = 1;
    }

    if (year_input.value == "") {
        date_error.innerText = 'Can’t be blank';
        date_error.style.display = 'grid';

        year_input.style.background = 'unset';
        year_input.style.border = '1px solid var(--Red)';

        yearError = 1;
    }

    if (year_input.style.border == '1px solid var(--Red)') {
        yearError = 1;
    }

    ////////// Cvc //////////

    if (cvc_input.value.length < 3) {
        cvc_error.innerText = 'Fill in the blanks';
        cvc_error.style.display = 'grid';

        cvc_input.style.background = 'unset';
        cvc_input.style.border = '1px solid var(--Red)';

        cvcError = 1;
    }

    if (cvc_input.value == "") {
        cvc_error.innerText = 'Can’t be blank';
        cvc_error.style.display = 'grid';

        cvc_input.style.background = 'unset';
        cvc_input.style.border = '1px solid var(--Red)';

        cvcError = 1;
    }

    if (cvc_input.style.border == '1px solid var(--Red)') {
        cvcError = 1;
    }

    ////////////////////

    if (nameError == 0 && numberError == 0 && monthError == 0 && yearError == 0 && cvcError == 0) {
        confirmBtn.style.display = 'none';
        continueBtn.style.display = 'grid';

        formInputs.style.display = 'none';
        formCompleted.style.display = 'grid';
    }
});

continueBtn.addEventListener('click', ()=>{
    location.reload();
});