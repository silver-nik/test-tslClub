import { Tabs } from '../modules/Tabs';

const mainfilterTabs = document.querySelector(".main-filters .filters__tabs");
const catalogfilterTabs = document.querySelector(".catalog .filters__tabs");


new Tabs(
    mainfilterTabs,
)

new Tabs(
    catalogfilterTabs,
)