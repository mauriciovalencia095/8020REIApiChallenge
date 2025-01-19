pipeline {
    agent any

    environment {
        // Define variables de entorno si es necesario
    }

    stages {
        stage('Checkout') {
            steps {
                // Clonar tu repositorio
                checkout scm
            }
        }

        stage('Build and Test') {
            steps {
                script {
                    // Ejecutar los tests de Gradle
                    sh './gradlew clean test'
                }
            }
        }

        stage('Publish Cucumber Report') {
            steps {
                script {
                    // Publicar el reporte de Cucumber en Jenkins usando el plugin
                    // Se debe proporcionar la ruta al archivo JSON generado por Cucumber
                    cucumber reports: '**/target/cucumber-report.json',
                                      cucumberReportTitle: 'Cucumber Test Report',
                                      cucumberReportOverview: true
                }
            }
        }
    }

    post {
        always {
            // Pasos adicionales para realizar después de la ejecución
            echo 'Pipeline completado'
        }
        success {
            // Enviar una notificación si el pipeline es exitoso
            echo 'La ejecución fue exitosa.'
        }
        failure {
            // Enviar una notificación si el pipeline falla
            echo 'La ejecución falló.'
        }
    }
}
