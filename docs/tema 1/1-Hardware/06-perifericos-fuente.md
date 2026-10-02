---
marp: true
theme: default
paginate: true
lang: es
title: "Periféricos y fuente de alimentación"
style: |
  .mkdocs-only { display: none; }
---

<div class="mkdocs-only" style="text-align:center; border: 2px solid red; padding: 20px; font-size: x-large;">
  <a href="../presentaciones-html/06-perifericos-fuente.html">Abrir presentación</a>
</div>

# Hardware 4
## Periféricos y fuente de alimentación
**Digitalización · 4.º ESO**

---

## Periféricos: entrada, salida y mixtos
- Entrada: teclado, ratón, cámara, micrófono.
- Salida: pantalla, altavoces, impresora.
- Mixtos: pantalla táctil, auriculares con micrófono, impresora multifunción.
- Conector adecuado, alimentación y soporte del sistema son requisitos distintos.

---


## Fuente: entrega energía
- Convierte la corriente de la pared en tensiones que usa el PC.
- Su potencia nominal se expresa en vatios (**W**).
- CPU, GPU y tarjetas pueden demandar energía; la carga cambia según el uso.
- La fuente debe proporcionar potencia y conectores adecuados.

---

## Potencia nominal y consumo real
- Una fuente de 550 W puede entregar hasta esa potencia nominal bajo las condiciones especificadas.
- El PC no consume 550 W todo el tiempo: usa más o menos según la carga.
- La energía tomada de la pared es algo mayor que la entregada a los componentes, por las pérdidas.
- La fuente suministra lo que el equipo necesita; no "empuja" siempre su máximo.

---

## Qué indica 80 Plus
- Certifica niveles de eficiencia energética bajo condiciones de prueba.
- La eficiencia compara energía útil entregada con energía tomada de la pared.
- Parte de la energía se pierde principalmente como calor.
- No certifica por sí sola silencio, calidad, duración ni protecciones.

## Estimar potencia con sensatez
- Suma el consumo estimado de CPU, GPU y resto del equipo.
- Ejemplo: 65 W + 150 W + 100 W = 315 W estimados.
- Con una fuente de 550 W, el margen nominal del ejemplo es 235 W.
- El cálculo es orientativo: el consumo real cambia y puede haber picos.

---

## Práctica 1 · Observa las interfaces de red
1. Ejecuta `ip -brief link`.
2. Ejecuta `nmcli device status`.
3. Identifica si aparecen interfaces Ethernet o Wi-Fi.
4. No compartas nombres/direcciones de la red del centro.

---

## Práctica 2 · Compara redes para el cliente
1. Revisa el perfil asignado y sus necesidades de conexión.
2. Decide si priorizarías Ethernet, Wi-Fi o ambos.
3. Justifica la elección según movilidad, estabilidad y ubicación.
4. No publiques identificadores ni nombres de la red del centro.

---

## Práctica 3 · Calcula la potencia estimada
1. Usa el ejemplo: CPU 65 W, GPU 150 W y resto del equipo 100 W.
2. Suma la carga: `65 + 150 + 100`.
3. Con una fuente de 550 W, calcula la diferencia respecto a la carga.
4. Explica por qué el consumo real puede variar.

---

## Práctica 4 · Interpreta 80 Plus
1. Consulta la etiqueta de eficiencia de una fuente asignada.
2. Anota su categoría 80 Plus y potencia nominal.
3. Explica qué información aporta y qué aspectos no garantiza.
4. No confundas eficiencia con vatios disponibles.

---

## Práctica 5 · Lanza el proyecto
1. Elige o recibe un perfil de cliente asignado por el profesor.
2. Anota tareas, presupuesto, periféricos disponibles y límites.
3. Decide qué fuente y conexión de red convienen para ese uso.
4. Trae tres prioridades para el taller de PCPartPicker.
