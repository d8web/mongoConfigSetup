import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/usuarios', HomeController.addScreen);
router.post('/new-user', HomeController.addActionUser);

router.get('/editar/:id', HomeController.edit);
router.post('/edituser', HomeController.editAction);

router.get('/delete/:id', HomeController.destroy);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

export default router;