import { Request, Response } from 'express';
import * as UserService from '../services/UserService';

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=> {

    // let usuarios = await UserService.allUsers();
    // Model.find({}) retorna uma array, Model.findOne({ email: 'email.com' }) retorna um objeto, Model.findById('id') retorna um objeto

    // console.log(usuarios);

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};

export const addScreen = async (req: Request, res: Response) => {
    let users = await UserService.allUsers();

    res.render('pages/screenadd', {
        users
    });
}

export const addActionUser = async (req: Request, res: Response) => {
    
    if(req.body.firstname && req.body.lastname) {
        let newUser = await UserService.insertUser(req.body.firstname, req.body.lastname, req.body.email, parseInt(req.body.age), req.body.interests);
        
        console.log('Usuário adicionado com sucesso!');
        return res.redirect('/adicionar');
    } else {
        console.log('Envie os dados corretos!');
        return res.redirect('/adicionar')
    }

}

export const edit = async (req: Request, res: Response) => {
    if(req.params.id) {
        let userData = await UserService.findUserById(req.params.id);

        res.render('pages/edit', {
            userData,
            id: req.params.id
        })
    } else {
        return res.redirect('/adicionar')
    }
}

export const editAction = async (req: Request, res: Response) => {
    if(req.body.id) {
        let user = await UserService.findUserById(req.body.id);

        if(req.body.firstname !== user.name.firstName) {
            user.name.firstName = req.body.firstname;
            await user.save();
            return res.redirect('/editar/'+req.body.id);
        }

        if(req.body.email !== user.email) {
            user.email = req.body.email;
            await user.save();
            return res.redirect('/editar/'+req.body.id);
        }

        return res.redirect('/editar/'+req.body.id)
    }
}

export const destroy = async (req: Request, res: Response) => {

    if(req.params.id) {
        let user = await UserService.findUserById(req.params.id);
        if(user) {
            await user.remove();
        }

        return res.redirect('/usuarios');
    }

}