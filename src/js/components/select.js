import { Select } from "../modules/Select";

const selects = document.querySelectorAll('.filters__select')

selects.forEach(el => {
    new Select(el)
})