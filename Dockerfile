# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install --production

# Copy app source code
COPY . .

# Environment variables
ENV PORT=3000
ENV DB_HOST=your_database_host
ENV DB_PORT=5432
ENV DB_NAME=your_database_name
ENV DB_USER=your_username
ENV DB_PASSWORD=your_password

# Expose port
EXPOSE ${PORT}

# Run the app
CMD ["npm", "start"]