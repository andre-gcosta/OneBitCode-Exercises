const spaceship2 = {
    name: 'X-Wing',
    speed: 0
}

function accelerate2(spaceship: { name: any; speed?: number }, speed: number) {
    spaceship.name = speed
}

accelerate2(spaceship2, 50)