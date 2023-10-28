// let literal: "Hello, World!"
// let pi: 3.14159
// const test = 5

// let option: "Yes" | "No" | "Maybe"
let option: boolean

option = false

// let planet: "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"
type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"
//alias

let planet: Planet
if (planet === "Terra") {
    console.log("Estamos na Terra")
}

let homePlanet: Planet

function checkPlanet(planet: Planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra")
    }
}

type GreetingCallback = (name: string) => void
function greet(callbackfn: GreetingCallback) {
    let name = "Isaac"
    callbackfn(name)
}