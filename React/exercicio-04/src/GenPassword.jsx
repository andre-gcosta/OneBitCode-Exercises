export default function GeneratePassword(passwordSize) {
    let possibleCharacteres =
    [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'
        , 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ,'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'
        , 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5'
        , '6', '7', '8', '9', '!', '@', '#', '$', '%', '¨', '&', '*'
        // , '(', ')', '-', '_'
        // , '=', '+', '.', ',', ';', ':', '/', '?', '~', '^', '}', ']', '{', '[', '`'
    ]
    let password = ''
    let randomNumber = 0
    let newCharacter = ''
    for (password.length; password.length < passwordSize; ) {
        randomNumber = Math.round(Math.random()*possibleCharacteres.length) + 1
        newCharacter = possibleCharacteres[randomNumber]
        if (newCharacter !== undefined) {
            password += newCharacter
        }
        if (password.length == passwordSize) {
            let regex =  
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{4,512}$/; 
            if (regex.test(password) == false){
                password = ''
            }
        }
    }
    return password
}