#!/bin/bash

environ=prod

scp -i /home/matthew/auth/LightSail.pem -r ./pages bitnami@174.129.214.82:/home/bitnami/portfolio/$environ
scp -i /home/matthew/auth/LightSail.pem -r ./public bitnami@174.129.214.82:/home/bitnami/portfolio/$environ
scp -i /home/matthew/auth/LightSail.pem -r ./scripts bitnami@174.129.214.82:/home/bitnami/portfolio/$environ
scp -i /home/matthew/auth/LightSail.pem -r ./_nginx_error.html bitnami@174.129.214.82:/home/bitnami/portfolio/$environ
scp -i /home/matthew/auth/LightSail.pem -r ./middleware.js bitnami@174.129.214.82:/home/bitnami/portfolio/$environ
scp -i /home/matthew/auth/LightSail.pem -r ./next.config.js bitnami@174.129.214.82:/home/bitnami/portfolio/$environ
scp -i /home/matthew/auth/LightSail.pem -r ./package.json bitnami@174.129.214.82:/home/bitnami/portfolio/$environ