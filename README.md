<div align="center">

# 🤖 Toy Robot Simulator

Simulador interactivo de un robot sobre un tablero 5x5  
desarrollado con **React**, **Tailwind CSS** y **SweetAlert2**

<br/>

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-4-purple?logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Portfolio%20Project-success)

</div>

<hr/>

## 🧩 Descripción del proyecto

**Toy Robot Simulator** es una aplicación frontend que simula el movimiento de un robot sobre un tablero.  
El usuario puede controlarlo mediante comandos de texto o botones rápidos, recibir feedback visual inmediato y consultar el historial de acciones ejecutadas.

Este proyecto nace a partir de un ejercicio técnico clásico y se transforma en una **aplicación completa**, con especial atención a:

- Arquitectura limpia
- Experiencia de usuario (UX)
- Diseño moderno
- Buenas prácticas con React

<hr/>

## ✨ Funcionalidades principales

- Tablero 5x5 renderizado con **CSS Grid**
- Colocación del robot con orientación (NORTH, SOUTH, EAST, WEST)
- Movimiento y rotación del robot
- Colocación de paredes como obstáculos
- Movimiento con *wrapping* (sale por un lado y entra por el opuesto)
- Entrada de comandos por texto
- Botones rápidos para acciones comunes
- Historial de comandos con estados (éxito / error)
- Reporte de posición y orientación
- Reset completo con confirmación
- Animaciones suaves del robot
- Alertas UX con SweetAlert2

<hr/>

## 🧠 Comandos disponibles

<pre>
<code>PLACE_ROBOT X,Y,DIRECTION
PLACE_WALL X,Y
MOVE
LEFT
RIGHT
REPORT</code>
</pre>

Ejemplo:
<pre>
<code>PLACE_ROBOT 2,3,NORTH</code>
</pre>

<hr/>

## 🛠️ Tecnologías utilizadas

<ul>
  <li><strong>React</strong> – Componentes y gestión de estado</li>
  <li><strong>React Router</strong> – Navegación</li>
  <li><strong>Tailwind CSS v4</strong> – Diseño y layout</li>
  <li><strong>SweetAlert2</strong> – Alertas y confirmaciones</li>
  <li><strong>Vite</strong> – Entorno de desarrollo</li>
</ul>

<hr/>

## 🎨 Decisiones técnicas destacadas

<ul>
  <li>
    Uso de <strong>CSS Grid</strong> en lugar de tablas para un control visual
    más preciso y mayor escalabilidad.
  </li>
  <li>
    Separación clara entre lógica del juego, componentes visuales y UX.
  </li>
  <li>
    Eliminación de estilos inline en favor de <strong>Tailwind CSS</strong>.
  </li>
  <li>
    Implementación de un historial de comandos para mejorar la depuración
    y la experiencia del usuario.
  </li>
  <li>
    Animaciones suaves sin librerías externas para mantener el proyecto ligero.
  </li>
</ul>

<hr/>

## ▶️ Instalación y ejecución

<pre>
<code>cd toy-robot-simulator
npm install
npm run dev</code>
</pre>

<p>
Esto iniciará el servidor de desarrollo y la aplicación estará disponible en el navegador.
</p>

<hr/>

## 🔮 Posibles mejoras

<ul>
  <li>
    <strong>Persistencia:</strong>
    Guardar el estado del robot y las paredes en <code>localStorage</code>.
  </li>
  <li>
    <strong>Personalización:</strong>
    Permitir tableros de tamaño dinámico (por ejemplo, 10x10).
  </li>
  <li>
    <strong>Debugging:</strong>
    Modo <em>paso a paso</em> para ejecutar secuencias de comandos guardadas.
  </li>
  <li>
    <strong>Testing:</strong>
    Tests unitarios con Vitest y React Testing Library.
  </li>
  <li>
    <strong>i18n:</strong>
    Soporte multi-idioma para comandos e interfaz.
  </li>
</ul>

<hr/>

## 👤 Autor

Proyecto desarrollado como parte de un **portfolio profesional**,  
enfocado en **Clean Code**, buenas prácticas con **React**  
y una **experiencia de usuario (UX) cuidada**.

<hr/>

<div align="center">
✨ Proyecto diseñado para ser presentado en entrevistas técnicas ✨
</div>
