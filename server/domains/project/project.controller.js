// Actions methods
import log from '../../config/winston';

// GET '/user/project/["projects", "dashboard"]'
const showdasboard = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION '/user/project/[projects o dashboard]' 🚧");
};

const add = (req, res) => {
  res.render('project/addView');
};

const addPost = (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Se entrega al cliente error de validación de add Project');
    res.status(422).json(validationError);
  } else {
    // En caso de que pase la validación
    // Se desestructura la información
    // de la peticion
    const { validData: project } = req;
    // Se contesta la información
    // del proyecto al cliente
    res.status(200).json(project);
  }
};

// Controlador Home
export default {
  showdasboard,
  add,
  addPost,
};
