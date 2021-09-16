build-dev:
	docker build -t personal-site-contact-api-dev -f Dockerfile.dev .

build-prod: 
	docker build -t personal-site-contact-api-prod -f Dockerfile .
