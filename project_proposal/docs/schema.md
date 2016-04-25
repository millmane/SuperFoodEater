# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
host_id     | integer   | not null, foreign key (references users), indexed

## reservations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
guest_id    | integer   | not null, foreign key (references users), indexed
listing_id  | integer   | not null, foreign key (references users), indexed
end_date    | date      | not null
start_date  | date      | not null
status      | string    | not null

## space
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
listing_id    | integer   | not null, foreign key (references listings), indexed
accommodates  | integer   | not null
beds          | integer   | not null
bathrooms     | float     | not null
bedrooms      | integer   | not null
property_type | string    | not null
room_type     | string    | not null

## amenities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
type        | string    | not null

## prices
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
type        | string    | not null
price       | string    | not null

## house_rules
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
rule        | string    | not null

## safety_features
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
feature     | string    | not null

## availability
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
listing_id  | integer   | not null, foreign key (references listings), indexed
type        | string    | not null
