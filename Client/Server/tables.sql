CREATE TABLE users (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username text,
    password text,
    email text,
    name text,
    city text,
    state text,
    zipcode integer
);

CREATE TABLE posts (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item_name text,
    store text,
    total integer,
    user_link integer REFERENCES users(id),
    description text,
    address text,
    city text,
    state text,
    zip integer,
    images text,
    category text
);