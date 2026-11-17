# Gestión de usuarios

En Ubuntu, cada usuario tiene su propio espacio y configuración.

- Una cuenta **estándar** sirve para las tareas habituales y no puede administrar el equipo.
- Una cuenta **administradora** puede realizar tareas que requieren permisos elevados, como instalar programas o gestionar otras cuentas.

Por seguridad, conviene usar una cuenta estándar para el trabajo diario y reservar los permisos de administrador para cuando hagan falta.

> **Antes de empezar:** realiza las actividades en tu máquina virtual de Ubuntu. Cuando domines las tareas, las puedes intentar en otros ordenadores, como por ejemplo, el de casa.

!!! warning "Importante"
    Los nombres de usuario de Ubuntu se escriben en minúsculas y no llevan tildes. En esta práctica, `mama` corresponde a «mamá».

## Tipos de usuarios

### Tarea 1. Identificar las cuentas del equipo

1. Abre **Configuración > Sistema > Usuarios**.
2. Observa qué cuentas aparecen, sin modificar ninguna. Si aparece la opción **Desbloquear**, tendrás que autenticarte para consultar o cambiar la configuración.
3. Haz una captura de pantalla donde se muestren las cuentas de tu instalación y guárdala como `Tarea1.jpg`.

## Crear usuarios

### Tarea 2. Crear tres cuentas locales

1. En **Configuración > Sistema > Usuarios**, selecciona **Desbloquear** e introduce tu contraseña si se solicita.
2. Selecciona **Añadir usuario**.
3. Crea una cuenta llamada `mama`, con una contraseña de prueba. No uses una contraseña personal ni la compartas. Elige el tipo **Estándar**.
4. Repite el proceso para crear una cuenta llamada `administrador2` de tipo **Administrador**.
5. Repite el proceso para crear una cuenta llamada `prueba4eso` de tipo **Estándar**.
6. Comprueba que las tres cuentas aparecen en la lista. No cierres la sesión si no sabes cómo volver a entrar en tu cuenta habitual.
7. Haz una captura de pantalla donde se muestren las tres cuentas y guárdala como `Tarea2.jpg`.

## Modificar usuarios

### Tarea 3. Cambiar el tipo de cuenta

1. En **Configuración > Sistema > Usuarios**, selecciona `prueba4eso`.
2. Cambia su tipo de **Estándar** a **Administrador**.
3. Comprueba que `mama` es estándar y que `administrador2` y `prueba4eso` son administradoras.
4. Haz una captura de pantalla donde se vean los tipos de las tres cuentas y guárdala como `Tarea3.jpg`.

## Cambiar contraseña

### Tarea 4. Desde una cuenta estándar

1. Cierra la sesión e inicia sesión con `mama`.
2. Abre **Configuración > Sistema > Usuarios** y selecciona tu cuenta.
3. Selecciona **Contraseña** y cambia la contraseña de `mama`. No uses una contraseña personal ni incluyas contraseñas en la captura.
4. Cierra la sesión e inicia de nuevo con la contraseña nueva.
5. Vuelve a **Configuración > Sistema > Usuarios**. Comprueba que no puedes administrar las cuentas de los demás usuarios sin autenticarte como administrador.
6. Abre un editor de texto y explica por qué una cuenta estándar no puede administrar otras cuentas. Haz una captura de pantalla de la respuesta y guárdala como `Tarea4.jpg`.

### Tarea 5. Desde una cuenta administradora

1. Cierra la sesión de `mama` e inicia sesión con `administrador2`.
2. Abre **Configuración > Sistema > Usuarios** y selecciona tu cuenta. En **Contraseña**, establece una contraseña de prueba; no uses una contraseña personal.
3. Selecciona `prueba4eso` y cambia su contraseña desde la opción **Contraseña**. No incluyas contraseñas en la captura.
4. Comprueba que puedes administrar las cuentas y cambiar la contraseña de otro usuario porque `administrador2` es administradora.
5. Haz una captura de pantalla del resultado, sin mostrar ninguna contraseña, y guárdala como `Tarea5.jpg`.

## Borrar usuarios

### Tarea 6. Eliminar las cuentas de prueba

1. Vuelve a tu cuenta habitual, abre **Configuración > Sistema > Usuarios** y desbloquea la configuración si se solicita.
2. Elimina las cuentas `mama`, `administrador2` y `prueba4eso`. Lee el aviso antes de confirmar: al eliminar una cuenta también puedes borrar sus archivos.
3. Comprueba que las tres cuentas de prueba ya no aparecen en la lista.
4. Haz una captura de pantalla donde se vea que ya no aparecen y guárdala como `Tarea6.jpg`.
