import { createBrowserRouter } from 'react-router-dom';
// Vistas
import App from './components/App';
import Formulario from './components/Formulario'
import Calculadora from './components/Calculadora';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App/>
	},
	{
		path: "/Formulario",
		element: <Formulario/>
	},
	{
		path: "/Calculadora",
		element: <Calculadora/>
	}
]);

export default router