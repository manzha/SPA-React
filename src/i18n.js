import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          users:{
            title: "Users",
            name: "Name",
            email: "Email",
            actions: "Actions",
            nousers: "There are no users",
            addnewuser: "Add new user",
            edituser: "Edit user",
            fullname: "Full name",
            submit: "Submit",
            update: "Update",
            userdoesnotexist: "This user does not exist."
          },
          news:{
            title: "News",
            seenall: "Yay! You have seen it all",
            loading: "Loading",
            keepreading: "Keep reading..."
          }
        }
      },
      es: {
        translation: {
          users:{
            title: "Usuarios",
            name: "Nombre",
            email: "Correo electrónico",
            actions: "Acciones",
            nousers: "No hay usuarios existentes",
            addnewuser: "Agregar nuevo usuario",
            edituser: "Editar usuario",
            fullname: "Nombre completo",
            submit: "Agregar",
            update: "Actualizar",
            userdoesnotexist: "El usuario no existe."
          },
          news:{
            title: "Noticias",
            seenall: "Yeeih! Has terminado de leer las noticias",
            loading: "Cargando",
            keepreading: "Continuar leyendo..."

          }
        }
      }
    }
  });

export default i18n;