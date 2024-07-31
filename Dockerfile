# pull official base image
FROM node:20.12.2-alpine

# set working directory
WORKDIR /lastName_firstName_final_site

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci


# add app
COPY . ./

EXPOSE 5575
# start app
CMD ["npm", "run", "start"]
