FROM cypress/base:14.18.1
RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install 
RUN $(npm bin)/cypress verify
RUN ["npx","cypress", "run"]