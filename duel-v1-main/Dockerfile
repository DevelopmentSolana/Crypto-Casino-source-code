# syntax=docker/dockerfile:1

FROM node:18.8-alpine3.16 as front-end
ARG MASTER_WALLET_PUBLIC_KEY
ARG GENERATE_SOURCEMAP
ARG NETWORK
ARG SOLANA_ENDPOINT
ARG STAGE
ARG HAPPY_HOLIDAY
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . /app
RUN echo "REACT_APP_MASTER_WALLET_PUBLIC_KEY=$MASTER_WALLET_PUBLIC_KEY" > .env
RUN echo "GENERATE_SOURCEMAP=$GENERATE_SOURCEMAP" >> .env
RUN echo "REACT_APP_NETWORK=$NETWORK" >> .env
RUN echo "REACT_APP_SOLANA_ENDPOINT=$SOLANA_ENDPOINT" >> .env
RUN echo "REACT_APP_STAGE=$STAGE" >> .env
RUN echo "REACT_APP_HAPPY_HOLIDAY=$HAPPY_HOLIDAY" >> .env
RUN if [[ -z "$SOLANA_ENDPOINT" ]] ; then echo Argument not provided ; else echo "REACT_APP_SOLANA_ENDPOINT=$SOLANA_ENDPOINT" >> .env ; fi
RUN yarn build

FROM golang:alpine3.15
COPY --from=front-end /app/build/ /app/build/
COPY --from=front-end /app/server/ /app/server/
COPY --from=front-end /app/.env /app/
WORKDIR /app/server/
RUN go mod download
RUN go build -o duelana-v1 -ldflags "-s -w"

EXPOSE $APP_PORT

CMD ["/app/server/duelana-v1"]