# Comprimir y descomprimir archivos

En esta práctica crearás un archivo ZIP con el gestor de archivadores de Ubuntu y un archivo 7Z con PeaZip. Después extraerás ambos archivos en otra ubicación y compararás las herramientas.

> **Antes de empezar:** completa la práctica [Directorios y archivos](03-directorios-archivos.md) y comprueba que PeaZip está instalado. Usarás la carpeta `Practica_archivos` que creaste en el Escritorio.

> **Importante:** el soporte de 7Z en el gestor de archivadores de Ubuntu puede depender de la versión y de los componentes instalados. Comprueba qué ocurre en tu máquina virtual; no des por hecho que el gestor del sistema solo abre ZIP.

Haz capturas de pantalla en los pasos indicados y guárdalas en el Escritorio con los nombres `Tarea X.jpg`.

## Tarea 1. Preparar las carpetas de destino

1. En el Escritorio, crea dos carpetas junto a `Practica_archivos`: `Comprimidos` y `Descomprimidos`.
2. No crees estas carpetas dentro de `Practica_archivos`; así evitarás incluir los archivos comprimidos dentro del contenido que vas a comprimir.
3. Haz una captura donde se vean las tres carpetas del Escritorio. Guárdala como `Tarea 1.jpg`.

## Tarea 2. Crear un archivo ZIP con Ubuntu

1. En **Archivos**, haz clic con el botón derecho en `Practica_archivos` y selecciona **Comprimir...**.
2. Escribe `Practica_archivos.zip` como nombre y elige el formato **ZIP** si aparece la opción.
3. Guarda el archivo en `Escritorio/Comprimidos`.
4. Comprueba que el archivo ZIP está en `Comprimidos` y que `Practica_archivos` sigue en el Escritorio.
5. Haz una captura del resultado y guárdala como `Tarea 2.jpg`.

## Tarea 3. Crear un archivo 7Z con PeaZip

1. Abre **PeaZip** desde el menú de aplicaciones y localiza la carpeta `Practica_archivos` del Escritorio.
2. Selecciona la carpeta y pulsa **Añadir**.
3. En el diálogo de creación, elige el formato `7Z` y guarda el archivo como `Escritorio/Comprimidos/Practica_archivos.7z`.
4. Comprueba que `Comprimidos` contiene el archivo ZIP y el archivo 7Z.
5. Haz una captura donde se vean los dos archivos. Guárdala como `Tarea 3.jpg`.

## Tarea 4. Extraer los archivos con Ubuntu

1. En **Archivos**, abre el archivo ZIP con el **Gestor de archivadores** y pulsa **Extraer**.
2. Elige como destino `Escritorio/Descomprimidos/ZIP_Ubuntu` y extrae el contenido. Si la carpeta no existe, créala desde el cuadro de selección.
3. Intenta abrir `Practica_archivos.7z` con el **Gestor de archivadores**. Si permite extraerlo, guárdalo en `Escritorio/Descomprimidos/7Z_Ubuntu`. Si no reconoce el formato, anótalo y continúa con la tarea siguiente.
4. Haz una captura donde se vea el resultado de la extracción con Ubuntu y, si ha sido posible, también el mensaje o resultado al intentar abrir el archivo 7Z. Guárdala como `Tarea 4.jpg`.

## Tarea 5. Extraer ambos archivos con PeaZip

1. En PeaZip, abre el archivo ZIP de `Escritorio/Comprimidos` y pulsa **Extraer**.
2. Elige `Escritorio/Descomprimidos/ZIP_PeaZip` como destino y confirma.
3. Repite el proceso con `Practica_archivos.7z` y elige `Escritorio/Descomprimidos/7Z_PeaZip`.
4. Comprueba que ambas carpetas contienen una copia de `Practica_archivos` con sus directorios y archivos.
5. Haz una captura donde se vean los resultados de la extracción con PeaZip. Guárdala como `Tarea 5.jpg`.

## Comparar los resultados

- Ubuntu puede crear y extraer archivos ZIP con el gestor de archivadores.
- PeaZip puede crear archivos 7Z y extraer tanto ZIP como 7Z.
- Comprueba si el gestor de archivadores de tu máquina virtual también puede extraer 7Z. La disponibilidad puede variar según la versión de Ubuntu y los componentes instalados.

### Entrega

Entrega las cinco capturas, desde `Tarea 1.jpg` hasta `Tarea 5.jpg`. En ellas deben verse las carpetas, los archivos comprimidos y los resultados de la extracción necesarios para comprobar cada tarea.
