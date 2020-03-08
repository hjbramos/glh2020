import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';

import ConsultoriaJuridica from './pages/ConsultoriaJuridica';
import Resposta from './pages/Resposta';
import Avaliacao from './pages/Avaliacao';

const Routes = createAppContainer(
    createSwitchNavigator({
        Avaliacao,
        Login,
        ConsultoriaJuridica,
        Resposta,
        List,
        Book
    })
);

export default Routes;