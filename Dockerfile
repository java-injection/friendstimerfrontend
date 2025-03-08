# Usa un'immagine di Node.js per costruire l'app
FROM node:18-alpine AS builder

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di dipendenze e installa i pacchetti
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copia il resto del codice dell'app
COPY . .

# Compila l'app con Vite (output in /dist)
RUN npm run build

# Usa un'immagine Nginx leggera per servire i file statici
FROM nginx:alpine

# Copia i file compilati da Vite (corretto: /dist, non /build)
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia una configurazione custom di Nginx (se necessario)
# COPY nginx.conf /etc/nginx/nginx.conf

# Esponi la porta 80
EXPOSE 80

# Imposta il nome dell'immagine
LABEL image="daaddo/friendstimerfrontend"

# Avvia Nginx
CMD ["nginx", "-g", "daemon off;"]
