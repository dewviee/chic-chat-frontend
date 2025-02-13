# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:18.17.1-alpine AS build-stage

# Set the working directory inside the container
WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Don't know what need this. but this is required
RUN apk add --no-cache python3 make g++

# # Install dependencies
RUN npm install
RUN npm install -g serve

# Copy the entire project to the working directory
COPY . .

# ARG REACT_APP_SERVER_ENDPOINT
# ENV REACT_APP_SERVER_ENDPOINT=$REACT_APP_SERVER_ENDPOINT

# # Build the React app
RUN npm run build

EXPOSE 3000

# Serve the built static files
CMD ["serve", "-s", "dist"]