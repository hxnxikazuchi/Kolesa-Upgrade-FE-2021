/* eslint-disable import/prefer-default-export */
export const showLoader = () => {
    const loader = document.querySelector('#loader');

    loader.style.display = 'block';
};

export const hideLoader = () => {
    const loader = document.querySelector('#loader');

    loader.style.display = 'none';
};
