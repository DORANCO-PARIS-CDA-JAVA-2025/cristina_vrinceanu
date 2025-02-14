

FROM openjdk:17-jdk-alpine

WORKDIR /app

COPY Main.java .

RUN mkdir -p exo9

RUN javac -d . Main.java

CMD ["java", "exo9.Main"]

