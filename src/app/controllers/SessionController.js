import { response } from 'express';
import * as Yup from 'yup';
import User from '../models/User';

// autenticação do usuario
class SessionController {
  async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(request.body);

    const emailOrPasswordIncorrect = () => {
      return response
      .status(401)
      .json({
        error: 'Certifique-se de que seu e-mail ou senha estejam corretos',
      });

    }

    if (!isValid) {
      // quando não for valido
      emailOrPasswordIncorrect();
    }

    const { email, password } = request.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      //se o usuario nao existir
      emailOrPasswordIncorrect();
    }

    const isSamePassword = await user.checkPassword(password);
    
    if (!isSamePassword) {
      emailOrPasswordIncorrect();
    }

    return response.status(201).json({
      id: user.id,
      name: user.name,
      email,
      admin: user.admin,
    });
  }
}

export default new SessionController();
