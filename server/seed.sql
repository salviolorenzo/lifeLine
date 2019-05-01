INSERT INTO users (id, name, email, password, created_at, updated_at)
  VALUES
  (1, 'Lorenzo Salvio', 'salviolorenzo@gmail.com', 'password',  NOW(), NOW()),
  (2, 'Cassie Salvio', 'salviocassie@email.com', 'password',  NOW(),  NOW()),
  (3, 'Cecilia Salvio',' cecilia@email.com', 'password',  NOW(), NOW());

INSERT INTO user_friends(id, user_id, friend_id, created_at, updated_at)
  VALUES
    (1, 1, 2, NOW(), NOW()),
    (2, 1, 3, NOW(), NOW()),
    (3, 2, 1, NOW(), NOW()),
    (4, 2, 3, NOW(), NOW()),
    (5, 3, 1, NOW(), NOW()),
    (6, 3, 2, NOW(), NOW());

