FROM nginx:latest

# Copiamos nuestros archivos a la carpeta por default de nginx
COPY . /usr/share/nginx/html

# Liberamos el puerto 80
EXPOSE 80