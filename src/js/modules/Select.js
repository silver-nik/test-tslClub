export class Select {
    constructor(select) {
        this.select = select;

        this.init();
    }

    init() {
        this.select.addEventListener('click', (e) => {
            e.preventDefault();
            
            this.select.classList.toggle('open');

            if(e.target.dataset.selectOption) {
                this.select.querySelector('.select-title').innerText = e.target.innerText;
            }

        })
    }
}