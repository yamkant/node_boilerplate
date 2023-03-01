FROM node:16

# Create app directory
WORKDIR /code

# Bundle app source
COPY ./code /code

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


EXPOSE 8080
CMD [ "node", "server.js" ]
