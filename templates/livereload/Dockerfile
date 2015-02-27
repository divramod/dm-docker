FROM ubuntu:trusty
MAINTAINER Arvid Petermann <arvidpetermann@gmail.com> 

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update 
RUN apt-get -y install curl
RUN apt-get -y install nodejs 
RUN apt-get -y install npm
RUN apt-get -y install tree
RUN npm install n -g
RUN n 0.11.11
RUN npm install gulp
RUN npm install forever
RUN npm install gulp-livereload
RUN npm install shelljs
RUN npm install colors
RUN npm install gulp-watch

ADD appLivereload.sh appLivereload.sh
ADD livereload.js livereload.js
RUN chmod 755 /*.sh
