# Jacidi FrontEnd
Hola y bienvenido a esta prueba técnica para jacidi. En el siguiente documento te explicaremos qué tipo de perfil buscamos, instrucciones de la prueba, objetivos de la prueba y los criterios de evaluación de la misma.

## Que buscamos
Esta es una prueba para desarrolladores tanto de seniors como semi-seniors. Las peticiones son las mismas para ambos tipos de perfiles, pero el resultado que esperamos para un senior es bastante más alto, de modo que no se trata tanto de hacerla bien o mal, sino de determinar qué nivel como desarrollador FrontEnd tienes.

## Instrucciones de la prueba
En el siguiente proyecto Angular, tienes un esqueleto básico de una web app de angular 17. Para simular una API con la información a mostrar, está también incluido el directorio resources que contiene imágenes de archivo que puedes utilizar y una simulación de las respuestas de la api con los datos que deberás mostrar por pantalla. tal que:
- list_activities.json: Contiene en un json la información sobre las actividades del gimnasio y los vínculos a entrenadores y socios inscritos.
- list_members.json: Contiene en un json la información de los miembros del gimnasio.
- list_trainers.json: Contiene en un json la información de los entrenadores del gimnasio y la referencia a las clases que tienen asignados cada uno de ellos.

De igual modo, si tienes dudas sobre el look and field a aplicar, toma como referencia la actual web del gimnasio (esto es solo una prueba, no se trata de hacer un 1:1 respecto de la web): https://clubmetropolitan.com/

## Objetivos de la prueba
El objetivo de la prueba es desarrollar una web page en angular para administrar un gimnasio. En dicha web, tendras dos grandes secciones vista de actividades y vista de entrenadores.

### Vista de actividades
En la vista de actividades, tendrás que listar todas las actividades dirigidas que ofrece el gimnasio, con una información escueta de la misma. No obstante, al seleccionar una clase, se tiene que poder ver la información en detalle de la clase.
* Información en la lista: Nombre de la clase, dia y hora de la clase, 1 foto ilustrativa, numero de socios inscritos y nombre y apellidos del entrenador responsable
* La distribución y organización de la información a mostrar, queda a tu libre disposición, determnalo tú mismo el modo que consideres más adecuado.

### Vista de entrenadores
En la vista de entrenadores, tendrás que listar todos los entrenadores del gimnasio, mostrando la siguiente información de cada uno de ellos:
- Nombre
- Apellidos
- CV
- Nombre + dia + hora de las actividades que tienen

#### (opcional para semi-senior, obligatorio para senior)
Además se tiene que desarrollar un sistema de reasignación, de modo que se pueda asignar y quitar las actividades asignadas a un entrenador (evidentemente, si la actividad está asignada a un entrenador, le la quitara si es asignada a otro entrenador). Dicho cambio debe ser consistente y verse reflejado en la vista de entrenadores y en el detalle de actividades (si, una caché local con el cambio es suficiente, no tienes que simular una persistencia duradera).

## Criterios de evaluación

Se esperan las funcionalidades:
* Listado de actividades
* Listado de entrenadores
* Reasignación de clases a entrenadores (solo obligatoria para seniors)

Ten en cuenta que esta prueba no se trata solo de cumplir todos los puntos, sino de evaluar tu talento como programador, buscamos a profesionales con inventiva y capacidad para buscar soluciones, no tanto dominar tal o cual tecnología. Por ello, aspectos como los patrones de diseño, la calidad del código, que el diseño sea responsive, la cobertura en test, la documentación y la buena metodología para organizar el trabajo, son aspectos que valoramos tanto o más que cumplir con la checklist de objetivos de la prueba.
Ademas, sientete libre implementar cambios, si crees que montar otra forma de separar la información, de poner secciones extra con las información disponible, no te cortes y hazlo, te animamos a que te luzcas y muestres lo que sabes hacer.

## Candidate notes
Cualquier instrucción sobre la ejecución o cambio que consideres relevante, indicalo aquí abajo. Eres libre de usar cualquier herramienta o recurso y cambiar lo que consideres mejor, pero comentanos el que y el por que.
