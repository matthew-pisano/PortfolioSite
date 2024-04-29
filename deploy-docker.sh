#!/bin/bash

environ=prod

docker build -t portfolio:latest .
docker export $(docker create portfolio:latest) > build/portfolio.tar

# scp -i /home/matthew/auth/LightSail.pem -r ./build/portfolio.tar bitnami@174.129.214.82:/home/bitnami/portfolio/$environ
