import Veterinario from "../models/Veterinario.js";
import generarJWT from "../helpers/genetarJWT.js";

const registrar = async (req, res) => {
  const { email } = req.body;

  //Prevenir usuario duplicados.
  try {
    const emailExistente = await Veterinario.findOne({
      email: email,
    });

    if (emailExistente) {
      console.log("Existe el Usuario");
      res.send({ msg: "Usuario ya registrado" });
      return;
    }
  } catch (error) {
    console.log(error);
  }

  try {
    //Guardar Nuevo Veterinario
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();

    res.json({ msg: "Registrando Usuario" });
  } catch (error) {}

  //Validar Campos.

  //Crear Veterinario:
};

const perfil = (req, res) => {
  res.json({ url: "Desde API/VET/PERFIL" });
};

const confirmar = async (req, res) => {
  const token = req.params.token;

  try {
    const usuario = await Veterinario.findOne({
      token: token,
    });

    if (usuario) {
      res.json({ msg: "Token Valido" });
      usuario.token = null;
      usuario.confirmar = true;
      usuario.save();
    } else {
      res.json({ msg: "Toke Invalido" });
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

const autenticar = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  //Comprobar si el usuario Existe
  try {
    const usuario = await Veterinario.findOne({ email: email });
    if (usuario) {
      console.log("Existe el usuario");
    } else {
      res.json({ msg: "El usuario no existe" });
    }

    if (!usuario.confirmado) {
      return res.status(403).json({ msg: "El usuario no se ha confirmado" });
    }

    if (await usuario.comprobarPassword(password)) {
      //Autenticar con JWT
      console.log(usuario.id);
      return res.json({ token: generarJWT(usuario.id) });
    } else {
      return res.json({ msg: "Password Incorrecto" });
    }
  } catch (error) {
    console.log(error);
  }
};

export { registrar, perfil, confirmar, autenticar };
