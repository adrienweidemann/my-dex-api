FROM node:20

# Prepare work directory
WORKDIR /usr/src/app

# Copy package and package-lock in work directory ; then install all dependencies
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Force PORT and expose the PORT from the container
ENV PORT 8080
EXPOSE 8080

CMD ["npm", "start"]