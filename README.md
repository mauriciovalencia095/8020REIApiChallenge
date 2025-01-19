# 8020APIChallenge

Este es un proyecto de automatización de pruebas de API utilizando **RestAssured** para las solicitudes, **Cucumber** para las pruebas BDD (Behavior Driven Development) y **Gradle** como herramienta de construcción. También se generan reportes con **Cucumber** y se integra con **Jenkins** para la ejecución de los tests y la integración continua.

## Requisitos

Para ejecutar este proyecto, necesitarás lo siguiente:

- **Java 17** o superior.
- **Gradle 7.x** o superior.
- **Jenkins** (para la ejecución automática de pruebas).
- **Docker** (si es necesario ejecutar servicios como contenedores, aunque no es obligatorio).
- **Cucumber** para las pruebas de comportamiento.
- **RestAssured** para la integración de pruebas de servicios REST.


## Configuración

### 1. **Instalación de Dependencias**

Primero, asegúrate de tener **Java 17** o superior y **Gradle** instalados en tu máquina. Si aún no los tienes, puedes instalar Java [aquí](https://adoptopenjdk.net/) y Gradle [aquí](https://gradle.org/install/).

Una vez que tengas Java y Gradle instalados, ejecuta el siguiente comando para descargar las dependencias:

```bash
gradle clean build

## Ejecutar las Pruebas Localmente
Para ejecutar las pruebas de forma local, utiliza el siguiente comando:

gradle test