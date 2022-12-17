CREATE TABLE users (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email text,
    username text,
    password text,
    zip integer
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