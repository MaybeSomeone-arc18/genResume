# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the React dev server port
EXPOSE 3000

# Default command (can be overridden in docker-compose.yml)
CMD ["npm", "start"]
