class GoodsItem {
    constructor(src, alt, price, title, newCLoth, size, parentSelector) {
        this.src = src;
        this.alt = alt;
        this.price = price;
        this.title = title;
        this.newCLoth = newCLoth;
        this.size = size;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');

        element.innerHTML = `

            <div class="goods-item">
                <div class="goods-img-wrap">
                    <img
                        src=${this.src} alt="${this.alt}"
                    />
                    <div class="new-cloth">${this.newCLoth}</div>
                </div>
                <div class="item-desc">
                    <p class="item-cost">${this.price} баллов</p>
                    <p class="item-name">
                        ${this.title}
                    </p>
                    <p class="item-size">Размер ${this.size}</p>
                    <button class="item-order">Заказать</button>
                </div>
            </div>
        `;
        this.parent.append(element);
    }
}

for (let i = 0; i < 12; i += 1) {
    new GoodsItem(
        'src/assets/img/goods-item.png',
        'goods-item',
        220,
        'Футболка "Эволюционируй или Сдохни"',
        '',
        'S/M/L',
        '.goods-wrapper .goods',
    ).render();
}
