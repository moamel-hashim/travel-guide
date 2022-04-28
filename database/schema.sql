set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "hotels" (
	"hotelId" serial NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT DEFAULT NULL,
	"line1" TEXT NOT NULL,
	"city" TEXT NOT NULL,
	"state" TEXT NOT NULL,
	"zipCode" INTEGER NOT NULL,
	"phoneNumber" TEXT NOT NULL,
	"photoUrl" TEXT NOT NULL,
	PRIMARY KEY ("hotelId")
);

CREATE TABLE "reviews" (
	"reviewId" serial NOT NULL,
	"review" TEXT NOT NULL,
	"rating" INTEGER NOT NULL,
	"hotelId" INTEGER NOT NULL,
	PRIMARY KEY ("reviewId")
);

ALTER TABLE "reviews" ADD CONSTRAINT "reviews_fk0" FOREIGN KEY ("hotelId") REFERENCES "hotels"("hotelId");


