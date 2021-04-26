import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/login';
import CadastraContato from './modules/cadastroContatos';


const cadastraContato = new CadastraContato('.form-cadastro-cont');
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');

cadastraContato.init();
login.init();
cadastro.init();