FROM node:18-alpine

# Workdir
WORKDIR /usr/app
COPY ./ /usr/app

# Install dependencies
RUN npm install -D

# Build the bot
RUN npm run build

# Run the application
CMD [ "npm", "run", "start" ]