-- BEGIN; 

-- TRUNCATE
--   users,
--   locations, 
--   ratings, 
--   comments

--   RESTART IDENTITY;

INSERT INTO users (id, email, password)
VALUES 
  (1,'emmie@aol.com', '$2a$12$puiYyy7dAMOBuL.vMwp8kephkPWl8puUkGaY40JYvJHNClFWLnZ2G'),
  (2,'yahoo@yahoo.com', '$2a$12$puiYyy7dAMOBuL.vMwp8kephkPWl8puUkGaY40JYvJHNClFWLnZ2G'),
  (3,'cashmew@gmail.com', '$2a$12$puiYyy7dAMOBuL.vMwp8kephkPWl8puUkGaY40JYvJHNClFWLnZ2G');

INSERT INTO locations (id, user_id,  image, title, content, keyword, is_public)  
VALUES

  (1, 3, 'https://live.staticflickr.com/65535/50607295132_069ed53912_w.jpg', 'location 1', 'info about location 1', 'sandy river, oregon', true );

INSERT INTO ratings (id, location_id, stars)
VALUES 
(1,1,5);


INSERT INTO comments (id, location_id, title, content)
VALUES 
(1,1,'title','here are some notes');

