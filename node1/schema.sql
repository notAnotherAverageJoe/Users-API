
CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(30) UNIQUE NOT NULL,
    password text NOT NULL

);

INSERT INTO users (username, email, password) VALUES ('pandas','panda@gmail.com','pandamonium');
INSERT INTO users (username, email, password) VALUES ('wolves','wolves@gmail.com','wolfville');