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
//      stage('Prune all docker data') {
//        steps {
//         sh 'sudo docker system prune -a --volumes -f'
//      }
//    }
      stage('Start container') {
        steps {
         sh '''
         sudo docker-compose build
         sudo docker-compose up -d
         sudo docker-compose ps
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
  
//  post {
//    always {
//    sh 'sudo docker-compose down --remove-orphans -v'
//    sh 'sudo docker-compose ps'
//  }
//}
}
