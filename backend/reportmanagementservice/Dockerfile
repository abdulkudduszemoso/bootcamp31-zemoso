FROM openjdk:11
WORKDIR /tmp
COPY ./target/reportmanagementservice-0.0.1-SNAPSHOT.jar  /tmp
EXPOSE 9092
ENTRYPOINT ["java", "-jar", "reportmanagementservice-0.0.1-SNAPSHOT.jar"]