import {
    generateInitialPopulation,
    formatHtmlForBoard
} from "/js/service.js";

const BOARD_SIZE = 8;
const POPULATION_SIZE = 8;


function init() {
    const population  = generateInitialPopulation(POPULATION_SIZE, BOARD_SIZE);
    let contentRoot = "";
    population.forEach((individual) => {
        contentRoot += formatHtmlForBoard(individual);
    })
    root.innerHTML = contentRoot;
}

init();