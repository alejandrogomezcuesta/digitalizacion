# Resumen

[Resumen](https://docs.google.com/document/d/1SKIJAAeMoscY5Wl-xKxZSoIelWqoCoP3pvEHs2hwjpU)


```mermaid
flowchart LR
    subgraph nucleo["Componentes principales"]
        almacenamiento["Almacenamiento interno<br/>HDD / SSD"]
        ram["Memoria RAM<br/>temporal y volátil"]
        cpu["CPU<br/>Unidad de control · ALU · registros<br/>GHz y núcleos"]

        almacenamiento -->|Carga el sistema operativo y los programas| ram
        ram -->|Instrucciones y datos| cpu
        cpu -->|Resultados| ram
        ram -->|Guarda datos| almacenamiento
    end

    entrada["Periféricos de entrada<br/>teclado, ratón, micrófono..."] -->|Introducen datos| cpu
    cpu -->|Envía resultados| salida["Periféricos de salida<br/>monitor, impresora, altavoces..."]
    mixtos["Periféricos mixtos<br/>pantalla táctil, disco externo,<br/>auriculares con micrófono"] <-->|Leen y envían datos| cpu

    placa["Placa base<br/>conecta y comunica los componentes"]
    energia["Fuente de alimentación<br/>suministra energía"]
    expansion["Tarjetas de expansión<br/>gráfica, sonido o red"]

    placa -. conecta .- cpu
    placa -. conecta .- ram
    placa -. conecta .- almacenamiento
    placa -. conecta .- entrada
    placa -. conecta .- salida
    placa -. conecta .- mixtos
    placa --- expansion
    energia -->|Energía| placa
```

## Preguntas para repasar

- ¿Qué función cumple la memoria RAM en un ordenador?
- ¿Por qué la CPU necesita la RAM para trabajar con los datos?
- Nombra tres periféricos de entrada y tres de salida.
- ¿Cuál es la diferencia entre un disco duro (HDD) y una unidad SSD?
- ¿Qué papel tiene el sistema operativo en el funcionamiento del ordenador?
