/* eslint-disable import/prefer-default-export */
const loader = document.querySelector('#loader');

export const showLoader = () => {
    loader.style.display = 'block';
};

export const hideLoader = () => {
    loader.style.display = 'none';
};
