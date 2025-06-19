run:
	npm run format
	ionic serve

run-public:
	ionic serve --host 0.0.0.0 --port 4200

run-build: 
	ionic build

run-watch:
	npm run watch

run-test:
	npm run test

format:
	npm run format