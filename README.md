MotokoApp 
Aplicación Mobile – Ionic + Angular (Standalone)

MotokoApp es una aplicación mobile desarrollada con **Ionic Framework** y **Angular utilizando componentes standalone**.  
El proyecto fue construido como **modelo educativo**, demostrando cómo es posible desarrollar una app moderna y visualmente atractiva, sin backend ni sistema de autenticación.

---

Objetivo del proyecto

- Construir una aplicación mobile funcional usando Ionic + Angular Standalone
- Aplicar buenas prácticas de arquitectura y navegación
- Servir como ejemplo de un app real
- Documentar las dificultades reales del proceso y cómo fueron resueltas

---

Tecnologías utilizadas

- Ionic Framework
- Angular (Standalone Components)
- TypeScript
- HTML / SCSS
- Ionicons
- Datos mock (sin backend)

---

Requisitos previos

Antes de ejecutar el proyecto, es necesario contar con:

- Node.js (versión LTS recomendada)
- npm
- Ionic CLI

Instalar Ionic CLI:

```bash
npm install -g @ionic/cli


Verificar instalación:

ionic --version

Instalación del proyecto

Clonar el repositorio:

git clone https://github.com/jgabrielaiep-hue/uniaccc.git
cd motokoapp


Instalar dependencias:

npm install

Ejecutar el proyecto en desarrollo

Levantar el servidor local:

ionic serve


La aplicación se abrirá automáticamente en el navegador.
En caso contrario, acceder manualmente a:

http://localhost:8100


Ruta recomendada para comenzar:

http://localhost:8100/tabs/tab1

Estructura principal del proyecto
src/
 ├── app/
 │   ├── tabs/              # Layout de Tabs y rutas internas
 │   ├── tab1/              # Buscar proveedores
 │   ├── tab2/              # Reservas
 │   ├── tab3/              # Perfil de usuario
 │   ├── models/            # Interfaces del dominio
 │   ├── services/          # DataService (datos mock)
 │   └── app.routes.ts      # Rutas principales
 ├── assets/
 ├── global.scss
 └── index.html

Principales dificultades encontradas y soluciones
1. Confusión entre Standalone y NgModules

Problema
Al inicio se intentó declarar componentes standalone dentro de módulos (NgModule), lo que provocó errores como:

Component X is standalone and cannot be declared in an NgModule


Solución
Se decidió mantener el proyecto 100% standalone, utilizando:

standalone: true

imports directos en cada componente

Rutas con loadComponent y loadChildren

2. Tabs visibles pero contenido vacío

Problema
La aplicación compilaba correctamente, pero solo se veía el TabBar inferior; el contenido de Tab1, Tab2 y Tab3 no se renderizaba.

Causa

Falta o duplicación de ion-router-outlet

Configuración incorrecta del router en layout con Tabs

Solución

Dejar un único <ion-router-outlet> en app.component.html

Incluir <ion-router-outlet> correctamente dentro de ion-tabs

Separar claramente app.routes.ts y tabs.routes.ts

3. Error: “Cannot activate an already activated outlet”

Problema
Aparecía un error de router que impedía la navegación correcta entre tabs.

Causa
Había más de un outlet intentando manejar la misma rama de rutas.

Solución
Reestructurar el layout para que:

El router raíz controle la navegación principal

Los Tabs manejen solo sus rutas hijas

4. Pantalla negra o contenido invisible

Problema
La app compilaba, pero la pantalla aparecía negra o sin contenido visible.

Causa

CSS global sobrescribiendo estilos base de Ionic

Modo oscuro sin colores de texto definidos

Solución

Ajustar global.scss para no romper la estructura de Ionic

Definir correctamente background y colores de texto

Evitar reglas globales agresivas como height: 100vh o overflow: hidden

5. Iconos no visibles / error “Invalid base URL”

Problema
Ionicons no se cargaban correctamente y aparecía el mensaje Invalid base URL.

Causa
Faltaba la definición correcta del base href.

Solución
Agregar en src/index.html:

<base href="/" />


y reiniciar el servidor.

6. Modelo de datos incorrecto (never[])

Problema
Los tags no se renderizaban y los filtros no funcionaban.

Causa
El modelo tenía definido:

tags: never[];


Solución
Corregir el tipado a:

tags: string[];


permitiendo renderizado, filtros y búsquedas correctas.

Aprendizajes clave

Muchos errores reales no provienen de la lógica, sino de la configuración

Ionic requiere respetar su estructura de layout y router

Leer errores y entender la arquitectura es clave para proyectos reales

Estado del proyecto

✔ Compila correctamente
✔ Navegación estable
✔ UI completa y moderna
✔ Datos mock funcionales
✔ Proyecto listo para evaluación académica

Licencia

Proyecto de uso educativo y demostrativo.
