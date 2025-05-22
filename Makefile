gen:
	npx orval

build:
	docker build ./ -t mcp-food-data-api

run:
	docker run -i --rm mcp-food-data-api:latest
