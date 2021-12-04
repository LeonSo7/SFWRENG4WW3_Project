CREATE TABLE STORES (
    STOREID INTEGER NOT NULL,
    STORENAME varchar(50) NOT NULL,
    DESCR varchar(255) NOT NULL,
    LATITUDE decimal(10,6) DEFAULT NULL,
    LONGITUDE decimal(10,6) DEFAULT NULL,
    IMAGEPATH varchar(255) DEFAULT NULL,
    PRIMARY KEY (STOREID)
);

INSERT INTO STORES VALUES(0, "Emily's Ice Cream Parlour", "Cute Mom and Pop shop", 43.25930525276186, -79.912408656859953, "/images/icecream1.jpeg");
INSERT INTO STORES VALUES(1, "FruitYoyo", "Asthetic, relaxing, ice cream", 43.25679154361946, -79.92481721503928, "/images/icecream2.jpeg");
INSERT INTO STORES VALUES(2, "Coco Gelato", "Best ice cream", 43.25538506117054, -79.9199677814544, "/images/icecream3.jpeg");
INSERT INTO STORES VALUES(3, "Dairy Queen", "Fast food", 43.25157176755302, -79.9198819507715, "/images/icecream4.jpeg");
INSERT INTO STORES VALUES(4, "Marble Slab", "Slab ice cream with all the mix ins", 43.25690215059384, -79.93176542603081, "/images/icecream5.jpeg");
INSERT INTO STORES VALUES(5, "Lulu", "Hawaiian shaved ice", 43.25691215059384, -79.93180542603081, null);

CREATE TABLE USERS (
    USERID INTEGER NOT NULL,
    FIRSTNAME varchar(50) NOT NULL,
    LASTNAME varchar(50) NOT NULL,
    PHONE char(14) NOT NULL, 
    EMAIL varchar(255) NOT NULL,
    PASS varchar(255) NOT NULL,
    POSTALCODE char(7) NOT NULL,
    PRIMARY KEY (USERID)
);

INSERT INTO USERS VALUES(0, "Jenneth", "Pan", "(416) 123-1234", "jenna@gmail.com", "password", "L2H 2S1");
INSERT INTO USERS VALUES(1, "Lannie",  "King", "(416) 322-5435", "lanna@hotmail.com", "password", "L2H 1Q5");
INSERT INTO USERS VALUES(2, "Hana", "Min", "(647) 234-8768", "hanna@hotmail.com", "password", "L2H 2M5");
INSERT INTO USERS VALUES(3, "Lin", "Cha", "(905) 546-5656", "lin@hotmail.com", "password", "L2H 3R5");
INSERT INTO USERS VALUES(4, "Emma", "Tin", "(416) 345-7864", "emma@hotmail.com", "password", "L3H 4R5");

CREATE TABLE REVIEWS (
    REVIEWID INTEGER NOT NULL,
    REVIEWERNAME varchar(100) NOT NULL,
    TITLE varchar(255) NOT NULL,
    REVIEW varchar(255) NOT NULL,
    RATING INTEGER NOT NULL,
    STOREID INT NOT NULL, 
    USERID INT NOT NULL,
    FOREIGN KEY (STOREID) REFERENCES STORES(STOREID),
    FOREIGN KEY (USERID) REFERENCES USERS(USERID),
    PRIMARY KEY (REVIEWID)
);

INSERT INTO REVIEWS VALUES(0, "Jenneth Pan", "Amazing!", "BEST ICE CREAM EVER!", 4, 0, 0);
INSERT INTO REVIEWS VALUES(1, "Lannie King", "ok", "Pretty good.", 3, 1, 1);
INSERT INTO REVIEWS VALUES(2, "Hana", "Love it!", "The ice cream here is the best! I've been coming here multiple times a week because it's just that good!" , 4, 2, 2);
INSERT INTO REVIEWS VALUES(3, "Lin", "Delish!!!!", "My favourite flavour here is peach. Soooo good!!", 5, 3, 3);
INSERT INTO REVIEWS VALUES(4, "Emma Tin", "mmmmm", "I crave the cookie dough ice cream everyday", 5, 4, 4);
