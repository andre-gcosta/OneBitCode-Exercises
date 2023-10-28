const planets = [];
function addPlanet(name, coordinates, situation) {
    planets.push({
        name,
        coordinates,
        situation,
        satelites: []
    });
    alert(`O planeta ${name} foi registrado com sucesso.`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateeSituation(planet, situation) {
    planet.situation = situation;
    alert(`A situação do planeta ${planet.name} atualizado para a situação ${planet.situation}.`);
}
function addSatelite(name, planet) {
    planet.satelites.push(name);
    alert(`O satélite ${name} foi adicionado com sucesso ao planeta ${planet.name}`);
}
function removeSatelite(name, planet) {
    planet.satelites = planet.satelites.filter(satelite => satelite !== name);
    alert(`O satélite ${name} foi removido com sucesso do planeta ${planet.name}`);
}
function promptValidSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt("Informe a situação do planeta");
        switch (situationInput) {
            case "1":
                situation = "habited";
                validSituation = true;
                break;
            case "2":
                situation = "habitable";
                validSituation = true;
                break;
            case "3":
                situation = "unhabitable";
                validSituation = true;
                break;
            case "4":
                situation = "unexplored";
                validSituation = true;
                break;
        }
    }
    return situation;
}
function promptValidPlanet(callbackfn) {
    const planetName = prompt("Informe o nome do planeta");
    const planet = findPlanet(planetName);
    if (planet) {
        callbackfn(planet);
    }
    else {
        alert("Planeta não encontrado! Retornando ao menu...");
    }
}
function firstMenuOption() {
    const name = prompt('Informe o nome do planeta');
    const coordinateA = Number(prompt("Informe a primeira coordenada"));
    const coordinateB = Number(prompt("Informe a segunda coordenada"));
    const coordinateC = Number(prompt("Informe a terceira coordenada"));
    const coordinateD = Number(prompt("Informe a quarta coordenada"));
    //A função ajuda a ter um código mais organizado
    const situation = promptValidSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situation: ${situation}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
function secondMenuOption() {
    promptValidPlanet(planet => {
        const situation = promptValidSituation();
        updateeSituation(planet, situation);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satelite = prompt("Informe o nome do satélite a ser adicionado:");
        addSatelite(satelite, planet);
    });
}
function fourthMenuOption() {
    promptValidPlanet(planet => {
        const satelite = prompt("Informe o nome do satélite a ser adicionado:");
        removeSatelite(satelite, planet);
    });
}
function fifthMenuOption() {
    let list = 'Planetas:\n';
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates;
        list += `
        Nome: ${planet.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.situation}
        Satélites: ${planet.satelites.length}
        `;
        planet.satelites.forEach(satelite => {
            list += `   - ${satelite}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Reemover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
