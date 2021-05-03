def dockerrunSource = 'Dockerrun-DEV.aws.json';
def imageSuffix = '-dev';
def nodeEnviroment = 'dev'
def DOCKER_REGISTRY = '603692555054.dkr.ecr.eu-central-1.amazonaws.com';
def AWS_DEFAULT_REGION: 'eu-central-1';
def APP_NAME: 'philiploans-webapp';
def S3_BUCKET_NAME: 'philips-webapp';
def ENV_NAME: 'Philipsloans-env';
def APPLICATION_NAME: 'philips-loans';

properties([
  parameters([
    choice(name: 'environment', choices: ['dev-webapp', 'prod-webapp']),
     string(name: 'versiontag', defaultValue: 'latest'),
    ])
  ])

if (params.environment == 'prod-webapp'){
  dockerrunSource = 'Dockerrun-PROD.aws.json'
  imageSuffix = '-prod' 
  nodeEnviroment = 'prod'
  ENV_NAME = 'prod-buygon-webapp'
}

pipeline {
 agent { label 'master' }
 stages {
   stage('Install Packages') {
     steps {
       sh 'npm install'
     }
   }
   stage('Code Inspection') {
     steps {
       sh 'sleep 2'
       // sh 'npm run lint'
     }
   }
  stage('Automation test') {
     steps {
       sh 'sleep 2'
     }
   }
   stage('Build Docker') {
      steps {
        script {
             docker.withRegistry("https://${DOCKER_REGISTRY}","${AWS_DEFAULT_REGION}:bttrm-backend-ecr") {
               sh "docker build --no-cache -t ${DOCKER_REGISTRY}/${APP_NAME}:${versiontag}${imageSuffix} -f Dockerfile ."
           }
        }
     }
   }
   stage('Dockerrun.aws') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'bttrm-backend-ecr']]) {
               sh "sh scripts/utils/writeToDockerrun.bash ${versiontag}${imageSuffix}"
               sh "aws s3 cp Dockerrun.aws.json s3://${S3_BUCKET_NAME}/${versiontag}${imageSuffix}"
              }
     }
   }
   stage('Upload Artifact') {
      steps { 
          script {
             docker.withRegistry("https://${DOCKER_REGISTRY}", "${AWS_DEFAULT_REGION}:bttrm-backend-ecr") {
               sh "docker push ${DOCKER_REGISTRY}/${APP_NAME}:${versiontag}${imageSuffix}"
           }
         }
      }
   }
   stage('Deployment') {
     steps {
       withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'bttrm-backend-ecr']]) {
        sh "aws elasticbeanstalk create-application-version --application-name ${APPLICATION_NAME} --version-label ${versiontag}${imageSuffix} --source-bundle S3Bucket=buygons-webapp,S3Key=${versiontag}${imageSuffix} --region eu-central-1"
        sh "aws elasticbeanstalk update-environment --application-name ${APPLICATION_NAME} --environment-name ${ENV_NAME} --version-label ${versiontag}${imageSuffix} --region eu-central-1"
        sh 'echo "Deploy finish"'
       }
     }
   }
   stage('clear') {
     steps { 
          script {
             docker.withRegistry("https://${DOCKER_REGISTRY}", "${AWS_DEFAULT_REGION}:bttrm-backend-ecr") {
               sh "docker image rm ${DOCKER_REGISTRY}/${APPLICATION_NAME}:${versiontag}${imageSuffix}"
           }
         }
      }
   }
 }
}