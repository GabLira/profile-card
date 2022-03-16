import {buildCardTPL} from "./components/templates/card-tpl.js";

const execute = () => {
    const container = document.querySelector('.container');

    const buildCar = async () => {
        try {
            let response = await fetch('./data-user.json')
            const result = await response.json();
            container.innerHTML += buildCardTPL(result);
        } catch (e) {
            console.log('The promise failed');
        }
    };

    buildCar();
}
window.addEventListener('DOMContentLoaded', execute);