FROM node:22.4-slim

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy entire project
COPY . ./

# Generate MCP server code using orval
RUN npm run gen

# Expose the MCP server port
EXPOSE 3000

# Start the MCP server
CMD ["npm", "start"]
# CMD ["bash"]
