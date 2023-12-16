FROM node:latest
EXPOSE 4173

# copying code
COPY . /home/app
WORKDIR /home/app

# install packages, build and run app
RUN yarn
RUN yarn build
CMD [ "yarn", "preview"]

