# Pull official base image
FROM node:20.12.2-alpine

# Set working directory
WORKDIR /lastName_firstName_final_site

# Add `/lastName_firstName_final_site/node_modules/.bin` to $PATH
ENV PATH /lastName_firstName_final_site/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# Add app
COPY . ./

# Expose port 5575
EXPOSE 5575

# Start app
CMD ["npm", "run", "start"]
