# Deep Patel Website

## Getting Started

1. **Clone the repository**

   ```sh
   git clone
   ```

2. **Build the Docker image**

   ```sh
   docker build -t patel_deep_coding_assignment_14 .

   ```

3. **Run the Docker container**

   ```sh
   docker run --name patel_deep_coding_assignment_14 -dp 5575:5575 patel_deep_coding_assignment_14

   ```

After running the above commands, The Web Site should be accessible at `http://localhost:5575`.

## Dockerfile Breakdown

Here's a brief explanation of the Dockerfile:

- **Base Image**

  ```dockerfile
  FROM node:20.12.2-alpine
  ```

  We use the official Node.js base image with Alpine Linux for a lightweight container.

- **Set Working Directory**

  ```dockerfile
  WORKDIR lastName_firstName_final_site
  ```

  Set the working directory inside the container.

- **Update PATH**

  ```dockerfile
  ENV PATH /app/node_modules/.bin:$PATH
  ```

  Add `/app/node_modules/.bin` to the PATH for easier npm script execution.

- **Install Dependencies**

  ```dockerfile
  COPY package.json ./
  COPY package-lock.json ./
  RUN npm ci
  ```

  Copy the `package.json` and `package-lock.json` files to the container and install dependencies using `npm ci` for a clean and reproducible install.

- **Copy Application Code**

  ```dockerfile
  COPY . ./
  ```

  Copy the rest of the application code to the container.

- **Expose Port**

  ```dockerfile
  EXPOSE 5575
  ```

  Expose port 8083 to be accessible outside the container.

- **Start Application**

  ```dockerfile
  CMD ["npm", "start"]
  ``
