# Instalar aplicaciones

En Ubuntu puedes instalar aplicaciones desde el **Centro de aplicaciones** o desde un paquete descargado de la página oficial del desarrollador. En esta práctica instalarás Spotify y VLC en formato Snap, y TeamViewer, Google Chrome y PeaZip mediante sus paquetes oficiales para Ubuntu. PeaZip es una alternativa a 7-Zip.

Realiza las tareas en tu máquina virtual de Ubuntu con conexión a Internet. Instala Spotify y VLC desde el Centro de aplicaciones, y descarga las demás aplicaciones únicamente desde sus páginas oficiales. Si se solicita autenticación, introduce la contraseña de tu cuenta. No es necesario iniciar sesión en las aplicaciones.

**Solo tienes que entregar dos capturas:** una que muestre las cinco aplicaciones instaladas y otra que demuestre que VLC se ha desinstalado.

## Instalar aplicaciones desde el Centro de aplicaciones

1. Abre **Centro de aplicaciones** desde el menú de aplicaciones.
2. Busca cada aplicación de la lista, abre su ficha y selecciona la versión **Snap**:
   - **Spotify**
   - **VLC**
3. Pulsa **Instalar** y espera a que termine el proceso. Repite los pasos con las demás aplicaciones.
4. Comprueba que las dos aplicaciones aparecen instaladas. No hace falta abrirlas ni iniciar sesión.

## Instalar TeamViewer desde la página oficial

1. Abre el navegador y visita la [página oficial de descarga de TeamViewer para Linux](https://www.teamviewer.com/en/download/linux/).
2. Descarga el paquete **DEB para Ubuntu**. Si no sabes qué versión elegir, selecciona **64-bit**.
3. Abre el archivo `.deb` descargado. Se abrirá el Centro de software de Ubuntu; selecciona **Instalar** y autentícate si se solicita.
4. Comprueba que TeamViewer aparece como instalado. No inicies una conexión, no compartas ningún código o contraseña y no configures el acceso desatendido.

## Instalar Google Chrome desde la página oficial

1. Abre el navegador y visita la [página oficial de Google Chrome](https://www.google.com/chrome/).
2. Descarga el paquete **.deb de 64 bits para Debian/Ubuntu**.
3. Abre el archivo `.deb` descargado. En el Centro de software de Ubuntu, selecciona **Instalar** y autentícate si se solicita.
4. Comprueba que Google Chrome aparece como instalado. No hace falta iniciar sesión ni importar datos del navegador.

## Instalar PeaZip desde la página oficial

1. Visita la [página oficial de PeaZip para Linux x86_64](https://peazip.github.io/peazip-linux.html).
2. Descarga el paquete **DEB Qt6** para Debian/Ubuntu.
3. Abre el archivo `.deb` descargado. En el Centro de software de Ubuntu, selecciona **Instalar** y autentícate si se solicita.
4. Comprueba que PeaZip aparece como instalado. No hace falta abrir archivos ni crear un archivo comprimido.

## Tarea 1. Consultar las aplicaciones instaladas

1. Abre **Terminal** desde el menú de aplicaciones.
2. Ejecuta estos comandos para consultar las aplicaciones instaladas:

   ```bash
   snap list spotify vlc
   apt list --installed teamviewer
   apt list --installed google-chrome-stable
   apt list --installed peazip
   ```

3. Comprueba que los resultados muestran Spotify, VLC, TeamViewer, Google Chrome y PeaZip. Maximiza la ventana para que se vean todos.
4. Haz una captura donde se vean los comandos y los nombres de las cinco aplicaciones. Guárdala como `Tarea 1.jpg`.

## Tarea 2. Desinstalar VLC

1. Abre el **Centro de aplicaciones** y busca `VLC`.
2. En la ficha de VLC, selecciona **Desinstalar** o **Quitar** y confirma la operación.
3. Abre **Terminal** y ejecuta `snap list vlc`. Comprueba que indica que VLC ya no está instalado. No desinstales las demás aplicaciones.
4. Haz una captura donde se vea el resultado de la comprobación. Guárdala como `Tarea 2.jpg`.

### Entrega

Entrega únicamente estas dos capturas:

- `Tarea 1.jpg`: muestra los nombres de las cinco aplicaciones instaladas.
- `Tarea 2.jpg`: muestra que VLC ya no está instalado.
