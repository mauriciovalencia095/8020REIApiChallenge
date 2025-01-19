pipeline {
    agent any

    environment {
        GRADLE_HOME = 'C:/workspace/gradle-8.12-bin/gradle-8.12'
        PATH = "$GRADLE_HOME/bin:$PATH"
        JAVA_HOME = 'C:/workspace/OpenJDK17U-jdk_x64_windows_hotspot_17.0.13_11/jdk-17.0.13+11'

    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout del código fuente
                checkout scm
            }
        }
        stage('Build') {
            steps {
                // Construcción y ejecución de pruebas con Gradle
                script {
                    sh './gradlew clean build'
                }
            }
        }
        stage('Test') {
            steps {
                // Ejecución de pruebas
                script {
                    sh './gradlew test'
                }
            }
        }
        stage('Publish Reports') {
            steps {
                // Publicar reportes HTML en Jenkins
                publishHTML(target: [
                    reportName: 'Cucumber Report',
                    reportDir: 'target',
                    reportFiles: 'cucumber-reports.html'
                ])
            }
        }
    }

    post {
        always {
            // Limpiar el workspace
            cleanWs()
        }
    }
}