# Set the base image to the official Node.js 16 image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies inside the container
RUN npm ci --only=production

# Copy the rest of the app files to the container
COPY . .

# Build the app inside the container
RUN npm run build

# Set the command to start the app when the container is run
CMD ["npx", "serve", "dist"]