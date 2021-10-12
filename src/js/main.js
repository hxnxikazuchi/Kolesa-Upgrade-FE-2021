import '../scss/style.scss';
import clothes from './clothes';
import accessories from './accessories';

const categories = document.querySelectorAll('.js__category-button');
const goodsItems = document.querySelectorAll('.goods__item');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalDialog = document.querySelector('.modal__dialog');

class GoodsItem {
    constructor(src, price, title, isNew, size, parentSelector) {
        this.src = src;
        this.price = price;
        this.title = title;
        this.isNew = isNew;
        this.size = size;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        element.innerHTML = `
            <div class="goods__item">
                <div class="goods__img-wrap">
                    <img
                        src=${this.src} alt="text"
                    />
                    ${this.isNew ? '<div class="new-cloth">new</div>' : ''}
                </div>
                <div class="item-desc">
                    <p class="item-desc__cost">${this.price} баллов</p>
                    <p class="item-desc__name">
                        ${this.title}
                    </p>
                    ${
                        this.size
                            ? '<p class="item-desc__size">Размер S/M/L</p>'
                            : ''
                    }
                    <button class="item-desc__order">Заказать</button>
                </div>
            </div>
        `;
        this.parent.append(element);

        element.addEventListener('click', () => {
            modal.style.display = 'block';
            const image = element.querySelector('img').src;
            const price = element.querySelector('.item-desc__cost').innerHTML;
            const title = element.querySelector('.item-desc__name').innerHTML;
            const modalInfo = new GoodsItem(
                image,
                price,
                title,
                false,
                false,
                '.modal__dialog',
            );

            modalInfo.renderModal();
        });
    }

    renderModal() {
        const element = document.createElement('div');

        element.classList.add('modal__inner');

        element.innerHTML = `
        <div class="goods-img-section">
        <div class="main-img">
            <img
                src=${this.src}
                alt="Main Image"
            />
        </div>
    </div>
    <div class="goods-information">
        <div class="main-info">
            <h3 class="goods-title">
                ${this.title}
            </h3>
            <p class="points">${this.price}</p>
            <div class="order">
                <a class="order__btn" href="#">Заказать</a>
            </div>
            <div class="client-points">
                <div class="money">
                    <h6>Твой баланс:</h6>
                    <p>3 945 баллов</p>
                </div>
                <div class="money-bag"></div>
            </div>
        </div>
        <div class="additional-info">
            <section class="inner-info">
                <h5 class="radio-info">Цвета:</h5>
                <div class="radio-wrapper">
                    <div class="color-container">
                        <input
                            id="radio-color-1"
                            type="radio"
                            name="radio-color"
                            value="Синий"
                            checked
                        />
                        <label for="radio-color-1">
                            <div
                                class="color color__blue"
                            ></div>
                            Синий</label
                        >
                    </div>

                    <div class="color-container">
                        <input
                            id="radio-color-2"
                            type="radio"
                            name="radio-color"
                            value="Бежевый"
                            checked
                        />
                        <label for="radio-color-2"
                            ><div
                                class="color color__whitish"
                            ></div>
                            Бежевый</label
                        >
                    </div>
                    <div class="color-container">
                        <input
                            id="radio-color-3"
                            type="radio"
                            name="radio-color"
                            value="Серый"
                            checked
                        />
                        <label for="radio-color-3"
                            ><div
                                class="color color__grey"
                            ></div>
                            Серый</label
                        >
                    </div>
                </div>
            </section>
            <section class="inner-info">
                <h5 class="radio-info">Размер:</h5>
                <div class="radio-wrapper">
                    <div class="size-container">
                        <input
                            id="radio-size-1"
                            type="radio"
                            name="radio-size"
                            value="S"
                            checked
                        />
                        <label for="radio-size-1">S</label>
                    </div>

                    <div class="size-container">
                        <input
                            id="radio-size-2"
                            type="radio"
                            name="radio-size"
                            value="M"
                        />
                        <label for="radio-size-2">M</label>
                    </div>

                    <div class="size-container">
                        <input
                            id="radio-size-3"
                            type="radio"
                            name="radio-size"
                            value="L"
                        />
                        <label for="radio-size-3">L</label>
                    </div>
                </div>
            </section>
            <section class="inner-info">
                <h5 class="non-radio-info">Детали:</h5>
                <div class="details-info">
                    Брендированная толстовка от Qazaq Republic.
                    Материал: Хлопок 80%, Вискоза 20%
                </div>
            </section>
            <section class="inner-info">
                <h5 class="non-radio-info">
                    Как выбрать размер:
                </h5>
                <div class="details-info">
                    Написать дяде Рику для уточнения.
                </div>
            </section>
        </div>
    </div>
        `;

        this.parent.append(element);
    }
}

const sortedCloth = clothes.sort((x, y) => y.isNew - x.isNew);
const sortedAccessories = accessories.sort((x, y) => y.isNew - x.isNew);

const allItems = sortedCloth.concat(sortedAccessories);
const sortedItems = allItems.sort((x, y) => y.isNew - x.isNew);

sortedItems.forEach((item) => {
    const {
        img, price, title, isNew,
    } = item;
    const itemHtml = new GoodsItem(
        img,
        price,
        title,
        isNew,
        true,
        '.goods-wrapper .goods',
    );

    itemHtml.render();
});

categories.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.dataset.key) {
            const categoryKey = button.dataset.key;

            document.querySelector('.goods').innerHTML = '';

            if (categoryKey === 'clothes') {
                sortedCloth.forEach((item) => {
                    const {
                        img, price, title, isNew,
                    } = item;
                    const itemHtml = new GoodsItem(
                        img,
                        price,
                        title,
                        isNew,
                        true,
                        '.goods-wrapper .goods',
                    );

                    itemHtml.render();
                });
            } else if (categoryKey === 'accessories') {
                sortedAccessories.forEach((item) => {
                    const {
                        img, price, title, isNew,
                    } = item;
                    const itemHtml = new GoodsItem(
                        img,
                        price,
                        title,
                        isNew,
                        false,
                        '.goods-wrapper .goods',
                    );

                    itemHtml.render();
                });
            } else if (categoryKey === 'all') {
                sortedItems.forEach((item) => {
                    const {
                        img, price, title, isNew,
                    } = item;
                    const itemHtml = new GoodsItem(
                        img,
                        price,
                        title,
                        isNew,
                        true,
                        '.goods-wrapper .goods',
                    );

                    itemHtml.render();
                });
            }
        }
    });
});

goodsItems.forEach((item) => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        const image = item.querySelector('img').src;
        const price = item.querySelector('.item-desc__cost').innerHTML;
        const title = item.querySelector('.item-desc__name').innerHTML;
        const modalInfo = new GoodsItem(
            image,
            price,
            title,
            false,
            false,
            '.modal__dialog',
        );

        modalInfo.renderModal();
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';

    if (modalDialog.querySelector('.modal__inner')) {
        modalDialog.querySelector('.modal__inner').remove();
    }
});

window.addEventListener('click', (e) => {
    if (e.target === modal && modal.style.display === 'block') {
        modal.style.display = 'none';

        if (modalDialog.querySelector('.modal__inner')) {
            modalDialog.querySelector('.modal__inner').remove();
        }
    }
});
