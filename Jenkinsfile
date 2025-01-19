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
                    // Ejecutar las pruebas
                    bat './gradlew clean test'
                }
            }
            post {
                always {
                    // Verificar si el archivo cucumber.json se generó
                    script {
                        if (fileExists('target/cucumber.json')) {
                            echo 'Archivo cucumber.json generado correctamente.'
                        } else {
                            echo 'Advertencia: El archivo cucumber.json no se generó.'
                        }
                    }
                }
            }
        }

        stage('Generate Cucumber Report') {
            steps {
                script {
                    // Generar reporte de Cucumber
                    bat './gradlew cucumberTestReport'
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
            cleanWs()
        }
    }
}