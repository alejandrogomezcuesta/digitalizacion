# Práctica: comprimir y descomprimir con 7-Zip

En esta práctica aprenderás a organizar archivos, crear archivos comprimidos en formato ZIP y 7z, y extraer su contenido.

## Parte 1. Crear archivos comprimidos

### 1. Preparar las carpetas y los archivos

1. En el Escritorio, crea una carpeta llamada **Docs para comprimir**.
2. Dentro de ella, crea dos carpetas: **imágenes** y **documentos**.
3. Descarga dos imágenes y guárdalas dentro de **imágenes**.
4. Crea dos documentos diferentes y guárdalos dentro de **documentos**. Puedes usar el Bloc de notas, Word o LibreOffice. Escribe algo distinto en cada documento y guárdalos con nombres reconocibles.

### 2. Crear un archivo ZIP con Windows

1. Abre **Docs para comprimir** y selecciona las carpetas **imágenes** y **documentos**.
2. Haz clic con el botón derecho en la selección y elige **Enviar a > Carpeta comprimida (en zip)**. En Windows 11, puede que tengas que elegir primero **Mostrar más opciones**.
3. Si Windows crea el ZIP fuera de **Docs para comprimir**, arrástralo dentro de esa carpeta.
4. Comprueba que el ZIP contiene las dos carpetas.

### 3. Crear un archivo 7z con 7-Zip

1. En **Docs para comprimir**, selecciona de nuevo las carpetas **imágenes** y **documentos**.
2. Haz clic con el botón derecho y elige **7-Zip > Añadir al archivo...**.
3. En **Formato de archivo**, selecciona **7z**. Guarda el archivo dentro de **Docs para comprimir** y ponle un nombre fácil de reconocer.
4. Pulsa **Aceptar** y comprueba que el archivo 7z aparece junto al ZIP y las dos carpetas.

**Importante:** comprime las carpetas originales, no el archivo ZIP que acabas de crear. Así, cada archivo comprimido contendrá **imágenes** y **documentos**.

### Entrega de la parte 1

Haz una captura de pantalla del Explorador de archivos en la que se vea el contenido de **Docs para comprimir**: las carpetas **imágenes** y **documentos**, el archivo **.zip** creado con Windows y el archivo **.7z** creado con 7-Zip. Asegúrate de que se distinguen los cuatro elementos.

Hay que entregar una captura:

1. Llámala "parte1.jpg" y se tiene que ver los dos ficheros comprimidos.

## Parte 2. Descargar y extraer archivos

1. Descarga los dos archivos de esta carpeta:
   - [fichero-comprimido-1.7z](./fichero-comprimido-1.7z)
   - [fichero-comprimido-2.zip](./fichero-comprimido-2.zip)
2. Guarda ambos archivos en una carpeta de trabajo, por ejemplo, en el Escritorio.
3. Extrae cada archivo en su propia carpeta:
   - Para el archivo **.7z**, haz clic con el botón derecho y elige **7-Zip > Extraer en «fichero-comprimido-1\\»**.
   - Para el archivo **.zip**, haz clic con el botón derecho y elige **Extraer todo...**.
4. Haz una captura de pantalla de la descompresión del contenido de `fichero-comprimido-1.7z`.
5. Descomprime el fichero `fichero-comprimido-2.zip`. Dentro hay un fichero que tiene una extensión `.bat`. Dale doble clic a este fichero y ejecútalo. Haz una captura de pantalla de lo que salga y añádela a classroom.

### Entrega de la parte 2

Tiene que haber dos capturas.

1. La primera es `parte2-a.jpg` donde se ve el contenido del fichero `fichero-comprimido-1.7z`.
2. La segunda es `parte2-b.jpg` donde se ve la ejecución del fichero `.bat ` contenido en `fichero-comprimod-2.zip`.