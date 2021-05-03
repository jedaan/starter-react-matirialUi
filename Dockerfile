 # build environment

FROM mhart/alpine-node:12 as builder

 WORKDIR /app

 ENV PATH /app/node_modules/.bin:$PATH

 COPY .npmrc .npmrc  

 COPY package.json package.json  

 RUN npm set registry http://18.193.155.21:4873
 
 RUN npm i

 RUN npm install

 COPY . ./

 RUN npm run build


# Production
FROM nginx:stable-alpine
# Copy npm config
COPY .npmrc /root/.npmrc
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]