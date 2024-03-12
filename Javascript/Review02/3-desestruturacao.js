const person = {
    name: 'Luke',
    job: 'Farmer',
    parents: ['Anakin', 'Padme']
}

const job = person.job

const { name, parents } = person
console.log(job)
console.log(name, parents)


const [ father, mother ] = parents
console.log(father, mother)


const createUser = (user) => {
    const id = Math.floor(Math.random()*9999)
    return {
        id: id, 
        name: user.name,
        job: user.job,
        parents: user.parents
    }
}

const createUser2 = ({ name, job, parents }) => {
    const id = Math.floor(Math.random()*9999)
    return {
        id,
        name,
        job,
        parents
    }
}

console.log(createUser(person))
console.log(createUser2(person))