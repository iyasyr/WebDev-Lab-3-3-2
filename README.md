# Laboratorio 3-3-2: Condicionales beca y gasolina

## Instructions

### 1. BECA ESTUDIANTE

Para conseguir una beca en Hack-Iron el estudiante debe cumplir las siguientes condiciones:

1. Que sea mayor o igual a 18 años y resida en Barcelona
2. O bien, que sea mayor de 30 años y tenga familia numerosa
3. O bien, Que tenga entre 12 y 18 años y sea un geni@ de la programación

> Recuerda que puedes usar los métodos `toLowerCase()` o `toUpperCase()` para facilitar la comparación de strings.

---

### 2. COCHE NO ARRANCA

Solucionar mediante condicionales el siguiente algoritmo:

> Oh! Estás aparcado en la calle, pero el coche no arranca...

- Si vives cerca **AND** tienes ganas de caminar, te vas andando y ya lo arreglarás mañana.  
- Si no, realiza las siguientes comprobaciones:
  - **¿Tiene gasolina?**
    - **No** ⇒ hay que poner gasolina
      - **¿Tienes dinero?**
        - **Sí** ⇒ poner gasolina
        - **No** ⇒ vas en metro
    - **Sí que tiene gasolina:**
      - **¿Tiene batería?**
        - **No** ⇒ recargar batería
        - **Sí** ⇒ pásate por el mecánico
