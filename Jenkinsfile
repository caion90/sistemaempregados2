pipeline {
  agent any
  stages {
    stage('Verify tooling') {
      steps {
        sh '''
          sudo docker version
          sudo docker info
          sudo docker-compose version
          curl --version
          jq --version
          '''
      }
    }
      stage('Prune all docker data') {
        steps {
          sh 'sudo docker system prune -a --volumes -f'
      }
     }
      stage('Start container') {
        steps {
         sh '''
         sudo docker-compose build
         '''
      }
    }
      stage('Test') {
        steps {
          sh 'curl http://168.227.56.72:8000/api/v1/empregados | jq' 
      }
    }
  }
  
  // api ccccxcvcv
  
  post {
    always {
         sh '''
         sudo docker-compose up -d --no-color
         '''
  }
}
}
