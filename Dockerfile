from node:20-alpine
workdir /app
copy . .
run npm install --force
run npm run build
expose 4173
cmd ["npm", "run", "preview"]