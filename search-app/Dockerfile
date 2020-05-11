FROM node:10
RUN npm install -g serve
COPY build ./build
ENTRYPOINT [ "serve","-s","build" ] 