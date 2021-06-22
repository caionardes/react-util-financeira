# Imagem baseada em Node
FROM node:12.20.1-alpine

# Cria o diretorio do app
RUN mkdir /app

# Copia todo conteudo do app
COPY . /app

# Navega no servidor ate a pasta do app
WORKDIR /app

# Cria variavel $PATH apontando para `/app/node_modules/.bin`
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN yarn

# start app
CMD ["npm", "start"]