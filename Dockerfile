FROM snorlock/node
ADD . /src
WORKDIR /src
RUN npm install
RUN node light.js

