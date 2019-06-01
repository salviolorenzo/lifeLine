
create table users(
  id serial primary key,
  name varchar(50) not null,
  email varchar(50) not null,
  password varchar(100) not null,
  created_at timestamp,
  updated_at timestamp
);

create table user_friends(
  id serial primary key,
  user_id integer references users(id),
  friend_id integer references users(id),
  created_at timestamp,
  updated_at timestamp
);

create table preferences(
  id serial primary key,
  type text,
  value text,
  created_at timestamp,
  updated_at timestamp
);

create table questions(
  id serial primary key,
  content text,
  created_at timestamp,
  updated_at timestamp
);

create table answers(
  id serial primary key,
  content text,
  created_at timestamp,
  updated_at timestamp
);

create table user_answers(
  id serial primary key,
  value text,
  answer_id integer references answers(id),
  question_id integer references questions(id),
  user_id integer references users(id),
  created_at timestamp,
  updated_at timestamp
);

