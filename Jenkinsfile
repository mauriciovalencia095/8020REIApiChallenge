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
                checkout scm
            }
        }

        stage('Build and Test') {
            steps {
                script {
                    // Ejecutar el build y las pruebas
                    bat './gradlew clean build'
                }
            }
            post {
                always {
                    // Asegurar que los reportes de Cucumber se generan después de las pruebas
                    script {
                        bat './gradlew cucumberTestReport'
                    }
                }
            }
        }

        stage('Publish Reports') {
            steps {
                publishHTML(target: [
                    reportName: 'Cucumber Report',
                    reportDir: 'build/reports/cucumber',
                    reportFiles: 'cucumber-html-reports.html',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: true
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