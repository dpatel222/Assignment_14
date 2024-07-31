# Pull official base image
FROM node:20.12.2-alpine

# Set working directory
WORKDIR /lastName_firstName_final_site

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /lastName_firstName_final_site/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# Add app source code
COPY . ./

# Build the app
RUN npm run build

# Install a simple server to serve the build
RUN npm install -g serve

# Expose port
EXPOSE 5575

# Start the app
CMD ["serve", "-s", "build", "-l", "5575"]
