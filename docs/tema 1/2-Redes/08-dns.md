# DNS

<https://docs.google.com/presentation/d/1WhV-L3q4B5wBG7aUNb9DyXZ7-8E4ufOuIpAvtO3zGN8/edit?usp=sharing>

**Ejercicios**

Partimos desde tu último fichero entregado o te puedes descargar este <simulacion-red-internet-con-dhcp.fls>.

En esta práctica vamos a ver cómo funciona el servidor DNS. 

En primer lugar vamos a ver que si nos metemos en el navegador web del ordenador que está primero a la izquierda, el ahora bautizado como `192.168.0.100` y nos conectamos a `www.tiktok.com` no podemos.

[Primer problema](https://docs.google.com/presentation/d/1WZfi2G8fzXsgSgUZ9l_cXDWiKJCxaO1Nmhyi-Y_J9PQ/edit?usp=sharing)

La primera captura de pantalla a entregar es el error anterior. Llama a la captura: `1-sin-dns.jpg`.

No hemos configurado correctamente el servidor DHCP porque no hemos puesto a qué servidor DNS se tienen que conectar los dispositivos de nuestra red.

[Solución](https://docs.google.com/presentation/d/1KJ0bGmfaXUTicrx8xgStjOakNYovn1OJKUjZFA32y4k/edit?usp=sharing)

Aplica la solución que describe el vídeo. Para comprobar que lo has hecho, tal y como el vídeo hace, entra en la terminal del ordenador de la izquierda y ejecuta la orden `ipconfig`. Aquí se debe mostrar que el DNS está bien configurado. Haz una captura de pantalla de esto y llámala: `2-con-dns.jpg`. 

Ahora, con el DNS correctamente configurado: sigue fallando. Fíjate en el vídeo siguiente.

[Segundo problema](https://docs.google.com/presentation/d/1wM4pMxLaiKD7dGbzrvIz7KNpg3AjkIhAZeL9Y7U_bR4/edit?usp=sharing)

El problema está en que el servidor DNS está mal configurado. Nadie ha colocado que la ip de `www.tiktok.com` es `8.8.8.188`. Normalmente esto lo hacen los administradores de sistemas. Fíjate en cómo se hace este paso.

[Solución](https://docs.google.com/presentation/d/1HP5cJkvXdCwDpJABTeTDK5KE9_69eerToLFFFo8XXeY/edit?usp=sharing)

La tercera captura de pantalla es que tú hagas los pasos de la solución anterior. Llama a esta captura: `3-dns-configurado.jpg`. Aquí se tiene que ver cómo configuras correctamente el servidor DNS.

Y la cuarta y última captura, es que uses el ordenador de la izquierda, abras el navegador web y te conectes a `www.tiktok.com` y que veas finalmente que ya te puedes conectar desde cualquier ordenador de la red local a esa página web. Llama a esta última captura `4-tiktok-funcionando.jpg`.

Guarda el proyecto de Filius final como ``simulacion-red-final-<tu-nombre>.fls` y también lo entregas.

> Sustituye donde dice `<tu-nombre>` por tu nombre.

**Entregas**

- Cuatro capturas de pantallas
- Un fichero de Filius.