/* eslint-disable import/prefer-default-export */

export const showError = (data) => {
    const errorElement =  document.querySelector('#error');

    errorElement.style.display = 'none';

    if (data.result !== 'ok' || typeof data.html === 'undefined') {
        errorElement.innerHTML = 'Произошла ошибка, попробуйте ещё раз.';
        errorElement.style.display = 'block';
    } else {
        errorElement.innerHTML = data.message;
        errorElement.style.display = 'block';
    }
};
