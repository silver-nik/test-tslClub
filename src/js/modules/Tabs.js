export class Tabs {
    constructor(tabs, className) {
        this.tabs = tabs;
        this.class = className;

        this.init();

    }


    init() {

        this.tabs.addEventListener("click", (e) => {

            e.preventDefault();
        
            const targetTranslateValue = e.target.dataset.translateValue;
        
            if (e.target.classList.contains("filter-button")) this.tabs.querySelector('.filter-slider-rect').style.transform = `translateX(${targetTranslateValue})`;
        
        });        

    }
}