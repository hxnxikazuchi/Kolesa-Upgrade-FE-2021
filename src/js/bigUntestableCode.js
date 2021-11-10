import { getItemsRequest, toggleFavoriteRequest } from './requests';
import { showLoader, hideLoader } from './loader';
import { showError } from './error';

export default () => {
    document.querySelector('#error').style.display = 'none';
    showLoader();
    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                showError(data);
            } else {
                const appElement = document.querySelector('#app');

                appElement.innerHTML = data.html;
                appElement.style.display = 'block';
                Array.from(appElement.querySelector('button')).forEach(
                    (button) => {
                        button.addEventListener('click', (e) => {
                            e.currentTarget.textContent = 'Загрузка...';
                            toggleFavoriteRequest(
                                e.currentTarget.dataset.id,
                            ).then(({ data: buttonData }) => {
                                if (buttonData.result === 'set') {
                                    e.currentTarget.textContent = '🌝';
                                } else {
                                    e.currentTarget.textContent = '🌚';
                                }
                            });
                        });
                    },
                );
            }
        })
        .catch((e) => {
            showError(e);
        })
        .finally(() => {
            hideLoader();
        });
};
