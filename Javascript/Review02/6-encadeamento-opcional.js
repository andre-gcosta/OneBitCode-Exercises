const user = {
    name: 'andre',
    email: 'andre@email.com',
    friends: [{
        name: "mary",
        address: {
            street: "some street",
            number: 89
        }
    }]
}

//encadeamento opcional
// console.log(user.friends[0].phone.ddd) //cannot read properties of undefined
console.log(user.friends[0].phone?.ddd) //undefined
console.log(user?.brothers?.length)
console.log(user?.brothers?.[5] .phone?.ddd)


//operador ternário
console.log(user?.brothers?brothers:'teste1'.phone?phone:'teste2'.ddd?ddd:'teste3')