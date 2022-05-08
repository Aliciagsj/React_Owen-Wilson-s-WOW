# Evaluación Final: Módulo 3

El ejercicio consiste en desarrollar una página web con el listado de las escenas de las películas donde el actor Owen Wilson ha dicho 'wow', API Wow de Owen Wilson es la API que usaremos en este ejercicio. Se utilizará React para realizarlo.

## Hitos del ejercicio

1. **Listado de escenas**
   Realizar una web con el listado de 50 escenas donde el actor Owen Wilson ha dicho 'wow'. Para eso, vamos a utilizar el servicio de https://owen-wilson-wow-api.herokuapp.com/wows/randomresults=50 que nos devuelve información de 50 escenas de películas aleatorias. Sobre cada una, vamos a mostrar al menos: Poster, película, frase completa y año.

2. **Filtrado por película**
   Realizar un filtro para buscar por película. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo las escenas cuya película contiene las letras escritas.

3. **Filtrado por año**
   Filtrar el listado por año de la película. Para eso, añadimos un select a la interfaz, de forma que al seleccionar un año queden en la interfaz solo las escenas que coincidan con el año seleccionado.

4. **Componentes de la aplicación**
   La aplicación debe tener los siguientes componentes como mínimo:

   - Componente para los filtros.
   - Componente para el listado (MovieSceneList).
   - Componente para la tarjeta de cada escena del listado (MovieSceneItem).
   - Componente para el detalle de cada escena del listado (MovieSceneDetail).

5. **Detalle de cada escena**
   Implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de una escena, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle aparecerá: - Nombre de la película, frase completa, director y el enlace del audio de la escena, al darle clic debe mostrarse en una pestaña aparte en el navegador.

6. **Detalle de calidad**

   - Usar etiqueta form en campo de texto
   - Impedir que el navegador navegue o cambie de ruta sin querer.
   - Si se busca por un texto que no coincida con ninguna escena de película mostrar mensaje de error.
   - El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsculas o minúsculas.
   - Al entrar en el detalle de un escena y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.

7. **BONUS: Mejoras visuales**

   - Realizar mejoras visuales: agreagar estilos, iconos, página responsive,...)

8. **BONUS: URL compatible**

   - Realizar la URL del detalle de cada escena compatible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle de la escena de una película. Si refrescamos el navegador en el detalle de una escena de la película debe volver a mostrar el detalle de la película, solo si está almacenado en el local storage.

   - Si la URL no exite, mostrar un mensaje de error.

9. **BONUS: Ordenación**
   -Ordenar el listado de escenas alfabéticamente por el nombre de la película.

## Tecnologías y herramientas utilizadas en el proyecto

<p align="left">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" alt="gulp" width="40" height="40"/> </a>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
</p>

## Guía para arrancar el proyecto

1. Clonar este repositorio
2. Abrir una terminal en la carpeta raíz del repositorio.
3. Instalar las dependencias locales ejecutando en la terminal el comando:

   ```bash
   npm install
   ```

4. Arrancar el proyecto con el comando:

   ```bash
   npm start
   ```

## Authors

- [@Aliciagsj](https://www.github.com/Aliciagsj)
- Sígueme en:
  [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alicia-gonz%C3%A1lez-san-juan/)
  [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/aliciagonsj)
