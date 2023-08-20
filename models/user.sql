/* TABLE MODEL */
CREATE TABLE user (
    username VARCHAR(30) PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    age TINYINT NOT NULL,
    user_since DATE NOT NULL
)

/* TRIGGER MODEL */
CREATE TRIGGER USERSINCE
AFTER INSERT ON user
FOR EACH ROW
UPDATE user
SET membersince = CURDATE();

/* INDEX MODEL */
CREATE INDEX SENIORITY
ON user (user_since);