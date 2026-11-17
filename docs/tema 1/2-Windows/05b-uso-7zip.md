# Comprimir y descomprimir archivos

En esta práctica crearás un archivo ZIP con las herramientas de Windows y un archivo 7Z con 7-Zip. Después extraerás ambos archivos en otra ubicación y compararás las herramientas.

> **Antes de empezar:** completa la práctica [Directorios y archivos](03-directorios-archivos.md). Usarás la carpeta `Practica_archivos` que creaste en el Escritorio. Comprueba también que 7-Zip está instalado.

Haz capturas de pantalla en los pasos indicados y guárdalas en el Escritorio con los nombres `Tarea X.jpg`.

## Tarea 1. Preparar las carpetas de destino

1. En el Escritorio, crea dos carpetas junto a `Practica_archivos`: `Comprimidos` y `Descomprimidos`.
2. No crees estas carpetas dentro de `Practica_archivos`; así evitarás incluir los archivos comprimidos dentro del contenido que vas a comprimir.
3. Haz una captura donde se vean las tres carpetas del Escritorio. Guárdala como `Tarea 1.jpg`.

## Tarea 2. Crear un archivo ZIP con Windows

1. Haz clic con el botón derecho en la carpeta `Practica_archivos`.
2. Selecciona **Comprimir en archivo ZIP**. Según la versión de Windows, la opción puede aparecer dentro de **Enviar a > Carpeta comprimida en zip**.
3. Se creará un archivo ZIP junto a `Practica_archivos`. Muévelo a la carpeta `Comprimidos`.
4. Comprueba que el archivo ZIP está en `Comprimidos` y que `Practica_archivos` sigue en el Escritorio.
5. Haz una captura del resultado y guárdala como `Tarea 2.jpg`.

## Tarea 3. Crear un archivo 7Z con 7-Zip

1. Haz clic con el botón derecho en `Practica_archivos` y selecciona **7-Zip > Añadir al archivo...**. Si no aparece 7-Zip, selecciona **Mostrar más opciones**.
2. En **Formato de archivo**, selecciona `7z`. Deja el resto de las opciones predeterminadas y confirma.
3. Se creará `Practica_archivos.7z` junto a la carpeta original. Muévelo a `Comprimidos`.
4. Comprueba que `Comprimidos` contiene el archivo ZIP y el archivo 7Z.
5. Haz una captura donde se vean los dos archivos. Guárdala como `Tarea 3.jpg`.

## Tarea 4. Extraer los archivos con Windows

1. En `Comprimidos`, haz clic con el botón derecho en el archivo ZIP y selecciona **Extraer todo...**.
2. Elige como destino `Escritorio/Descomprimidos/ZIP_Windows` y extrae el contenido. Si la carpeta no existe, créala desde el cuadro de selección.
3. Haz clic con el botón derecho en `Practica_archivos.7z` y comprueba si aparece la opción **Extraer todo...**.
   - Si aparece, extráelo en `Escritorio/Descomprimidos/7Z_Windows`.
   - Si no aparece, anota que el Explorador de esta versión de Windows no admite la extracción de 7Z. No elijas otra aplicación para abrirlo.
4. Haz una captura donde se vea que Windows ha extraído el ZIP y, si tu versión lo permite, también el 7Z. Guárdala como `Tarea 4.jpg`.

## Tarea 5. Extraer ambos archivos con 7-Zip

1. En `Comprimidos`, haz clic con el botón derecho en el archivo ZIP y selecciona **7-Zip > Extraer ficheros...**.
2. Elige `Escritorio/Descomprimidos/ZIP_7Zip` como destino y confirma.
3. Repite el proceso con `Practica_archivos.7z` y elige `Escritorio/Descomprimidos/7Z_7Zip`.
4. Comprueba que ambas carpetas contienen una copia de `Practica_archivos` con sus directorios y archivos.
5. Haz una captura donde se vean los resultados de la extracción con 7-Zip. Guárdala como `Tarea 5.jpg`.

## Comparar los resultados

- Windows crea el archivo ZIP y puede extraerlo desde el Explorador.
- 7-Zip puede crear archivos 7Z y extraer tanto ZIP como 7Z.
- La posibilidad de extraer 7Z directamente con el Explorador depende de la versión de Windows. En Windows 11 23H2 y posteriores, Windows también admite la extracción de este formato.

### Entrega

Entrega las cinco capturas, desde `Tarea 1.jpg` hasta `Tarea 5.jpg`. En ellas deben verse las carpetas, los archivos comprimidos y los resultados de la extracción necesarios para comprobar cada tarea.
