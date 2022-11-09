# Timestamp Microservice

## Installation
We use [NPM](https://www.npmjs.com/get-npm) for our dependency manager. This should be installed before continuing.

To access the project, run the following:
```
git clone --recursive https://github.com/OlegAba/timestamp-microservice.git
cd timestamp-microservice
npm run install-all
npm run dev
```

## Docker
Build and run the container locally
```
docker build . -t timestamp-microservice
docker run -dp 8080:8080 timestamp-microservice
```

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/OlegAba/timestamp-microservice/blob/main/LICENSE) file for details.