FROM golang:alpine3.18 as builder

WORKDIR /app

COPY . .

RUN go mod init hello-world && \
  go build

FROM scratch
COPY --from=builder /app/hello-world /hello-world
CMD ["/hello-world"]