pipeline {
    agent any


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
