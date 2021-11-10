import { getItemsRequest } from './requests';
import { showLoader, hideLoader } from './loader';
import { showError } from './error';
import { showApp } from './app';

export default () => {
    document.querySelector('#error').style.display = 'none';
    showLoader();
    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                showError(data);
            } else {
                showApp(data);
            }
        })
        .catch((e) => {
            showError(e);
        })
        .finally(() => {
            hideLoader();
        });
};
