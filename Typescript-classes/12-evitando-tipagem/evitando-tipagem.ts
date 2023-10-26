function sendSpaceship(spaceship: { pilot: string, copilot?: string}) {
    // ...
}

sendSpaceship({ pilot: 'Han Solo', copilot: 'Chewbacca' })
sendSpaceship({ pilot: 'Luke' })

//let input: unknown
let input: any // em ultimo caso, typescript perde o sentido

input =  'Test'
input = 20
input = []

let text: string

text = input


function verification(test) {
    if (test) { 
        
    } else {
        let _check: never

        //_check = '3'
        //let text = check
        //text = ''

        return //_check
    }
}