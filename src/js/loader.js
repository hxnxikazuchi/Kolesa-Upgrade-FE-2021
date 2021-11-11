/* eslint-disable import/prefer-default-export */

export const showLoader = (data) => {
    data = document.querySelector('#loader');

    data.style.display = 'block';
};

export const hideLoader = (data) => {
    data = document.querySelector('#loader');

    data.style.display = 'none';
};
