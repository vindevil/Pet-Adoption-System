# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json yarn.lock ./

# Clean cache and install dependencies
RUN yarn cache clean
RUN yarn install --frozen-lockfile
#RUN yarn install

# Copy the rest of the app (for build context, but will be overridden by volume in dev)
COPY . .

# Prepare the app
RUN yarn prepare

# Expose the default React port
EXPOSE 3000

# Start the development server
CMD ["yarn", "start"] 