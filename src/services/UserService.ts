import User from '../models/User';

export const allUsers = async () => {
    /*
    let users = await User.find({
        // "name.firstName": "Pedro",
        // interests: "Tecnologia" [Mongo inteligente, já pega string dentro do array interests[]]
        // $gt = Greater Then -> Maior que
        // $gte = Greater Then or Equal -> Maior ou igual que
        // $lt = lower Then -> Menor que
        // $lte = lower Then or Equal -> Menor ou igual que
        // age: { $gte: 38 }
        age: { $gt: 18 }
    }).sort({ age: -1 }) // sort({ age: 1 }), ordem ascendente com 1, decrescente colocamos -1
    */

    // let users = await User.find({}).skip(1).limit(1) // Limit(1) limita 1 ou 2 ou quantos quiser, skip(1) pula 1 ou 2 ou quantos quiser

    let users = await User.find({});
    return users;
}

export const insertUser = async (firstName: string, lastName: string, email: string, age: number, interests: string) => {
    /*
    // Criando dados no mongo com o create({})
    let newUser = await User.create({
        name: { firstName: 'Andressa', lastName: 'Apipe' },
        email: 'andressa@gmail.com',
        age: 21,
        interests: [ 'Pizza', 'Leitura', 'Comer' ]
    });
    */

    let newUser = new User();
    newUser.name = { firstName, lastName }
    newUser.email = email;
    newUser.age = age;
    newUser.interests = [interests];

    try {
        return await newUser.save();
    } catch(error) {
        return new Error('Ocorreu um erro ao adicionar');
    }
}

export const findUserById = async (id: string) => {
    const user = await User.findById(id);

    if(user) {
        return user;
    }
}