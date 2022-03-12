import {buildCardTPL} from "./components/templates/card-tpl.js";

const execute = () => {
    const container = document.querySelector('.container');

    const buildCar = async () => {
        try {
            let response = await fetch('./data-user.json')
            console.log(response)
            const result = await response.json();
            console.log(result)
            container.innerHTML += buildCardTPL(result);
        } catch (e) {
            console.log('HUBO UN FALLO');
        }
    };

    buildCar();
}
window.addEventListener('DOMContentLoaded', execute);