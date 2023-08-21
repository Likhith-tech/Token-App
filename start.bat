@echo off
setlocal
set "APP_DIR=%~dp0"

echo Navigating to the application directory...

echo Starting generator Spring Boot application...
start java -jar %APP_DIR%/generator/build/libs/generator-0.0.1-SNAPSHOT.jar

echo Starting validator Spring Boot application...
start java -jar %APP_DIR%/validator/build/libs/validator-0.0.1-SNAPSHOT.jar

cd %APP_DIR%/frontend

start npm start

echo React Application started.



echo All Apps started ready to use the application...
