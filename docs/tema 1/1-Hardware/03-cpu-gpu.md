---
marp: true
theme: default
paginate: true
lang: es
title: "CPU vs GPU"
style: |
  .mkdocs-only {
    display: none;
  }

---


# Hardware
## CPU vs GPU
**Digitalización · 4.º ESO**

<div class="mkdocs-only" style="text-align:center; border: 2px solid red; padding: 20px; font-size: x-large;">
  <a href="../presentaciones-html/03-cpu-gpu.html">Abrir presentación</a>
</div>

---

## Dos tipos de procesadores, misma función

**Ejecutar instrucciones**

Una instrucción es una operación muy muy simple.

- Copiar números de la memoria al procesador.
- Copiar números del procesador a la memoria.
- Una suma o resta.
- Una multiplicación o división.

---

## Características comunes

**Velocidad**
Se mide en hercios.

- Los hercios el número de cosas que suceden en un segundo.
- En cada hercio se ejecuta una instrucción muy muy simple.

**Núcleos** o **Cores**
Es un chip capaz de ejecutar una instrucción muy muy simple.

**Hilos** o **Threads**
Número de tareas en paralelo que puede ejecutar un núcleo. Este concepto no lo usaremos en clase.

---

## Número de núcleos

Dos núcleos, ejecutan dos instrucciones en paralelo: por lo tanto, vamos el doble de rápido.
Cuatro núcleos...
Ocho núcleos...

---

## Ejercicio de clase
Una CPU con un único núcleo tarda en realizar una operación que se puede paralelizar en 16 segundos.

- ¿Cuánto tardaría en realizar la misma operación si tuviéramos una CPU con 2 núcleos?
- ¿Cuánto tardaría en realizar la misma operación si tuviéramos una CPU con 4 núcleos?

---

## Ejercicio de clase

Una operación que tiene que realizar una CPU consta de dos partes. La primera parte tarda 10 segundos y no se puede paralelizar. La segunda parte dura 16 segundos y sí se puede paralelizar.

- ¿Cuánto tardaría en realizar la misma operación si tuviéramos una CPU con 2 núcleos?
- ¿Cuánto tardaría en realizar la misma operación si tuviéramos una CPU con 4 núcleos?

---

## Dos tipos de procesadores: trabajos distintos

- **CPU:** pocos núcleos y cada uno muy potente.
- **GPU:** muchísimos núcleos de poca potencia.
- Son compañeras, no alternativas excluyentes.
- Analogía
  - CPU organiza una cocina **es el cocinero jefe**
  - GPU es un **gran equipo** de pinches haciendo tareas repetidas a la vez.

---

## CPU: instrucciones y control

- Ejecuta el sistema operativo, el navegador, los juegos, una videollamada.
- Los programas se van ejecutando a turnos en los diferentes núcleos.

---

## GPU: cálculo paralelo

- Procesa grandes cantidades de operaciones parecidas en paralelo.
- Dibuja escenas 3D, efectos y vídeo.
- Acelera algunas tareas científicas.
- Se usa en la minería de datos: bitcoin.
- En un juego, la GPU dibuja y la CPU prepara lógica e instrucciones.

---

## Gráficos integrados o tarjeta dedicada

- **Integrados:** forman parte de la CPU o del mismo paquete; suelen consumir menos.
- **Dedicada:** tarjeta independiente, normalmente más potente y con memoria propia.
- La dedicada ocupa espacio, necesita energía y debe caber en la placa/caja.
- Para documentos y vídeo sencillo suelen bastar gráficos integrados.

---

## VRAM: memoria de la tarjeta gráfica
Es la memoria de una GPU.

- La VRAM guarda información que ejecuta la GPU: texturas, imágenes y datos gráficos.

La GPU integrada puede compartir memoria del sistema.

- La RAM del ordenador y la VRAM no son lo mismo.

---

## Ejemplo: ¿qué limita un juego?

- La CPU prepara física, reglas, personajes y llamadas de dibujo.
- La GPU calcula los píxeles, efectos y modelos que aparecen.
- Si uno termina antes que el otro, el componente más ocupado puede limitar los FPS.
- Resolución y calidad gráfica cambian mucho el trabajo de la GPU.

---

## Benchmarks: pruebas, no promesas

**Benchmark** es una forma de poder comparar con números la potencia de diferentes CPUS, o GPUs.

- PassMark publica pruebas y puntuaciones para modelos concretos.
- **CPU Mark** compara procesadores; **G3D Mark** compara tarjetas gráficas.
- No se compara directamente un CPU Mark con un G3D Mark.
- Una puntuación no garantiza FPS en un juego concreto.

---

## Elegir CPU y GPU según el uso

- Ofimática y navegación: CPU equilibrada y gráficos integrados pueden bastar.
- Juegos 3D: suele pesar mucho la GPU, junto a CPU y resolución. Se necesita una tarjeta gráfica dedicada.
- Edición: depende del programa; CPU y GPU pueden acelerar tareas distintas.
- Decide por necesidad y presupuesto, no por una cifra aislada.

---

## Práctica 1 · Identifica la CPU del ordenador

1. Abre **Terminal** en Linux Mint.
2. Teclea `lscpu` y pulsa Intro.
3. Muestra `Model name`, `CPU(s)`, `Core(s) per socket`, `Thread(s) per core` y `Socket(s)`.
4. Captura la Terminal completa y guárdala como `ejercicio1.jpg`.
5. Entrega el fichero en Classroom.

---

## Práctica 2 · Identifica la GPU del ordenador

1. En la Terminal ejecuta `inxi -G`.
2. Localiza el nombre de cada dispositivo gráfico; puede haber más de uno.
3. Captura el resultado legible y guárdalo como `ejercicio2.jpg`.
4. Si `inxi` no está disponible, avisa al profe.
5. Entrega el fichero en Classroom.

---

## Práctica 3 · Identifica la CPU del móvil

1. Abre **Z-CPU** desde la tienda oficial de Android o iPhone.
2. En la sección CPU/SoC localiza el modelo del procesador.
3. Captura esa pantalla y expórtala como `ejercicio3.jpg`.
4. Comprueba que se lee el nombre completo del modelo.
5. Entrega el fichero en Classroom.

---

## Práctica 4 · Identifica la GPU del móvil

1. En Z-CPU abre la sección GPU/Graphics.
2. Localiza el nombre de la GPU del teléfono.
3. Guarda la captura como `ejercicio4.jpg`.
4. Si aparece en la misma pantalla que la CPU, entrega una copia del fichero anterior pero con el nombre actualizado.
5. Entrega el fichero en Classroom.

---

## Práctica 5 · Compara la CPU del ordenador con la del teléfono

1. Abre [PassMark CPU Benchmark](https://www.cpubenchmark.net/).
2. Busca la CPU del ordenador y la CPU del teléfono; compara **CPU Mark** con **CPU Mark**.
3. Ejemplo de comparativa: [MediaTek MT6781 vs Intel i3-10110U](https://www.cpubenchmark.net/compare/5351vs3573/Mediatek-MT6781-vs-Intel-i3-10110U).
4. Copia la URL de la comparación y entrégala en Classroom como enlace.
