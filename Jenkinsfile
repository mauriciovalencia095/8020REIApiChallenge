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

                    bat './gradlew clean test'
                }
            }
        }

        stage('Publish Cucumber Report') {
            steps {
                script {

                    cucumber reports: '**/target/cucumber-report.json',
                                      cucumberReportTitle: 'Cucumber Test Report',
                                      cucumberReportOverview: true
                }
            }
        }
    }

    post {
        always {

            echo 'Pipeline completado'
        }
        success {

            echo 'La ejecución fue exitosa.'
        }
        failure {

            echo 'La ejecución falló.'
        }
    }
}
