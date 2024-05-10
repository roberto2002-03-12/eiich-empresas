# Frontend

## Scripts

-   **dev**: Inicia el servidor de desarrollo Nextjs.
    ```
    yarn dev
    ```

## Dependencias

-   **lenis** ([documentación](https://www.npmjs.com/package/@studio-freight/lenis))
-   **framer-motion** ([documentación](https://www.framer.com/motion/))
-   **react** ([documentación](https://es.react.dev/))
-   **react-icons** ([documentación](https://react-icons.github.io/react-icons/))
-   **react-router-dom** ([documentación](https://reactrouter.com/en/main))
-   **tailwindcss** ([documentación](https://v2.tailwindcss.com/docs))
-   **zustand** ([documentación](https://docs.pmnd.rs/zustand/getting-started/introduction))

## Dependencias de desarrollo

-   **eslint** ([documentación](https://eslint.org/docs/latest/))
-   **husky** ([documentación](https://www.hillspet.com.pe/dog-care/dog-breeds/siberian-husky))
-   **prettier** ([documentación](https://prettier.io/docs/en/))
-   **typescript** ([documentación](https://www.typescriptlang.org/docs/))
-   **vite** ([documentación](https://es.vitejs.dev/guide/))

## Uso

1. Clona este repositorio.
2. Instala las dependencias:

    ```
    yarn
    ```

3. Inicia el servidor de desarrollo:

    ```
    yarn dev
    ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

# Backend

## Scripts

-   **start:dev**: Inicia el servidor de desarrollo Nestjs.
    ```
    yarn start:dev
    ```

## Dependencias

-   **lenis** ([documentación](https://www.npmjs.com/package/@studio-freight/lenis))
-   **framer-motion** ([documentación](https://www.framer.com/motion/))
-   **react** ([documentación](https://es.react.dev/))
-   **react-icons** ([documentación](https://react-icons.github.io/react-icons/))
-   **react-router-dom** ([documentación](https://reactrouter.com/en/main))
-   **tailwindcss** ([documentación](https://v2.tailwindcss.com/docs))
-   **zustand** ([documentación](https://docs.pmnd.rs/zustand/getting-started/introduction))

## Dependencias de desarrollo

-   **eslint** ([documentación](https://eslint.org/docs/latest/))
-   **husky** ([documentación](https://www.hillspet.com.pe/dog-care/dog-breeds/siberian-husky))
-   **prettier** ([documentación](https://prettier.io/docs/en/))
-   **typescript** ([documentación](https://www.typescriptlang.org/docs/))
-   **vite** ([documentación](https://es.vitejs.dev/guide/))

## Uso

1. Clona este repositorio.
2. Instala las dependencias:

    ```
    yarn
    ```

3. Inicia el servidor de desarrollo:

    ```
    yarn start:dev
    ```

4. Abre [http://localhost:3001](http://localhost:3001) en tu navegador.

## Convenciones de Codificación

En este proyecto, seguimos ciertas convenciones de nombres y estilos de codificación para mantener un código coherente y
fácilmente legible. A continuación, se detallan algunas de estas convenciones:

### Convenciones de Nombres

-   **Variables**: Utilizamos camelCase para nombrar variables descriptivas. Por ejemplo: `userName`, `isLoggedIn`.
-   **Funciones**: Utilizamos camelCase para nombrar funciones descriptivas. Por ejemplo: `calculateTotalPrice`,
    `fetchUserData`.
-   **Componentes**: Utilizamos PascalCase para nombrar componentes. Por ejemplo: `LoginForm`, `UserProfile`.
-   **Archivos**: Utilizamos minúsculas y guiones medios para separar palabras en los nombres de los archivos. Por
    ejemplo: `login-form.tsx`, `user-profile.css`.

### Convenciones de Estilo de Codificación

-   **Espacios en Blanco**: Utilizamos espacios en blanco de manera consistente en todo el código para mejorar la
    legibilidad.
-   **Sangrías**: Utilizamos sangrías de 4 espacios para indentar el código.
-   **Longitud Máxima de Línea**: Limitamos cada línea de código a 100 caracteres para mejorar la legibilidad en
    diferentes dispositivos.
-   **Arrow Functions**: Utilizamos arrow functions en lugar de funciones anónimas para una sintaxis más concisa y
    clara.
-   **Exportación Directa**: Exportamos directamente funciones, componentes y objetos cuando sea posible para mantener
    una estructura de archivo más limpia y legible.

### Ejemplos Prácticos

```typescript
// Variables
const userName = "John Doe"
let isLoggedIn = false

// Funciones
export const calculateTotalPrice = (quantity: number, price: number): number => {
	return quantity * price
}

// Componentes
export const LoginForm = () => {
	// Implementación del componente
}

// Archivos
import { calculateTotalPrice } from "./utils"
```

## Buenas Prácticas en Git

### Convenciones de Nombres para Ramas en Git

-   **Minúsculas:** No uses letras mayúsculas en el nombre de la rama, mantente en minúsculas
-   **Separación con Guiones:** Si el nombre de tu rama consta de más de una palabra, sepáralas con un guion, siguiendo
    la convención kebab-case. Evita PascalCase, camelCase o snake_case
-   **(a-z, 0-9):** Usa solo caracteres alfanuméricos y guiones en el nombre de tu rama. Evita cualquier carácter no
    alfanumérico
-   Por favor, no uses guiones continuos `(--)`. Esta práctica puede ser confusa. Por ejemplo, si tienes tipos de ramas
    (como `feature`, `bugfix`, `hotfix`, etc.), usa una barra `(/)` en su lugar
-   Usa nombres descriptivos, concisos y claros que expliquen lo que se hizo en la rama

#### Nombres incorrectos de ramas

-   fixSidebar
-   feature-new-sidebar-
-   FeatureNewSidebar
-   feat_add_sidebar

#### Buenos nombres de ramas

-   feature/new-sidebar
-   hotfix/interval-query-param-on-get-historical-data

### Prefijos de Convención de Nombres de Ramas

-   feature: Indica una nueva característica que se desarrollará. Por ejemplol, `feature/add-filters`
-   release: Se utiliza para preparar una nueva versión. Por ejemplo, `release/v3.3.1-beta`
-   bugfix: Indica que estás solucionando un error en el código. Por jemplo, `bugfix/sign-in-flow`
-   hotfix: Similar a bugfix, pero está relacionado con la corrección de un error crítico presente en el entorno de
    producción. Por ejemplo, `hotfix/cors-error`
-   docs: Para escribir documentación. Por ejemplo, `docs/quick-start`

### Mensaje de Commit

-   Utilice el modo imperativo en la línea del asunto.
-   Capitalice la primera letra de la línea del asunto.
-   No termine la línea del asunto con un punto.
-   Limite la línea del asunto a 50 caracteres, es decir, sea claro y conciso.

## Uso de Husky y Commits Convencionales

En este proyecto, utilizamos Husky junto con Commits Convencionales para automatizar ciertas tareas y mantener un
historial de commits limpio y estructurado. A continuación, se explica cómo funciona este sistema:

### Husky

Husky es una herramienta que nos permite ejecutar scripts automáticamente en ciertos momentos del ciclo de vida de Git,
como antes de hacer un commit (pre-commit). En este proyecto, Husky se utiliza para ejecutar scripts de linting y otras
tareas antes de confirmar cambios.

### Commits Convencionales

Seguimos un estilo de commits convencionales para garantizar que nuestro historial de commits sea claro, consistente y
fácil de entender para todo el equipo. Cada commit sigue una estructura específica que incluye un tipo, un ámbito
opcional y una descripción del cambio.

### Uso de GIT_DIRTY

En nuestros scripts de pre-commit con Husky, utilizamos la variable de entorno `GIT_DIRTY` para determinar la carpeta de
trabajo actual. Esto nos permite ejecutar acciones específicas dependiendo de si estamos en la raíz del proyecto, en la
carpeta frontend o en la carpeta backend.

Para usar `GIT_DIRTY` en tus scripts de pre-commit con Husky, asegúrate de definir esta variable en tus configuraciones
de Husky y ajustar la lógica según sea necesario en tus scripts.

Ejemplo:

```

GIT_DIRTY=frontend git commit -m "<Estructura de commit>"
GIT_DIRTY=backend git commit -m "<Estructura de commit>"

```

Estructura:

```

<tipo>[ámbito opcional]: <descripción>

```

Tipo de Commit:

-   feat: Introducción de nuevas funcionalidades.
-   fix: Correcciones de errores de software.
-   refactor: Empleado para alteraciones de código que conservan su funcionalidad general.
-   chore: Actualizaciones que no afectan al código de producción.
-   docs: Adiciones o modificaciones a archivos de documentación.
-   perf: Cambios de código que mejoran el rendimiento.
-   style: Ajustes relacionados con la presentación del código.
-   test: Inclusión o corrección de pruebas.
-   build: Modificaciones que afectan al sistema de compilación o dependencias externas.
-   ci: Alteraciones en archivos y scripts de configuración de CI.
-   env: Describe ajustes o adiciones a archivos de configuración dentro de procesos de CI.

Ámbito:

Un ámbito es una estructura que se puede agregar después del tipo de commit para proporcionar información contextual
adicional.

-   `fix(ui): resolver problema con la alineación del botón`
-   `feat(auth): implementar autenticación de usuario`

Cuerpo:

El cuerpo de un mensaje de commit proporciona explicaciones detalladas sobre los cambios introducidos en los commits.

Ejemplos de commits utilizando Commits Convencionales:

```

chore: add commitlint and husky
chore(eslint): enforce the use of double quotes in JSX
refactor: type refactoring
feat: add axios and data handling
feat(page/home): create next routing
chore!: drop support for Node 18

```
