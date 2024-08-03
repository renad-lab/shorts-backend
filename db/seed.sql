\c shorts_dev

-- Insert data into writers table
INSERT INTO writers (name, biography, picture_url, is_active) VALUES
('Jonathan Swift', 'An Anglo-Irish writer and satirist, known for his works including ''Gulliver''s Travels''.', 'https://example.com/images/jonathan_swift.jpg', TRUE),
('Shirley Jackson', 'An American writer known for her works of horror and mystery, including ''The Haunting of Hill House''.', 'https://example.com/images/shirley_jackson.jpg', TRUE),
('Henry David Thoreau', 'An American naturalist, philosopher, and transcendentalist best known for his book ''Walden''.', 'https://example.com/images/henry_david_thoreau.jpg', TRUE),
('Charlotte Perkins Gilman', 'An American feminist, writer, and social reformer, known for ''The Yellow Wallpaper''.', 'https://example.com/images/charlotte_perkins_gilman.jpg', FALSE),
('George Orwell', 'An English novelist, essayist, journalist, and critic, known for ''1984'' and ''Animal Farm''.', 'https://example.com/images/george_orwell.jpg', TRUE),
('Ralph Waldo Emerson', 'An American essayist, philosopher, and poet, a leader of the transcendentalist movement.', 'https://example.com/images/ralph_waldo_emerson.jpg', FALSE),
('Edgar Allan Poe', 'An American writer, poet, and literary critic known for his tales of mystery and macabre.', 'https://example.com/images/edgar_allan_poe.jpg', TRUE),
('James Baldwin', 'An American writer and social critic known for his essays on race, sexuality, and class.', 'https://example.com/images/james_baldwin.jpg', TRUE),
('Kate Chopin', 'An American author of short stories and novels, known for ''The Awakening'' and ''The Story of an Hour''.', 'https://example.com/images/kate_chopin.jpg', FALSE),
('Flannery O''Connor', 'An American novelist and short story writer known for her Southern Gothic style.', 'https://example.com/images/flannery_oconnor.jpg', TRUE),
('Franz Kafka', 'A German-speaking Bohemian writer known for his works including ''The Metamorphosis''.', 'https://example.com/images/franz_kafka.jpg', FALSE),
('James Joyce', 'An Irish novelist and modernist writer known for his landmark work ''Ulysses''.', 'https://example.com/images/james_joyce.jpg', TRUE),
('Zora Neale Hurston', 'An American author, anthropologist, and filmmaker, best known for her novel ''Their Eyes Were Watching God''.', 'https://example.com/images/zora_neale_hurston.jpg', FALSE),
('Joan Didion', 'An American writer known for her novels and essays, including ''The White Album''.', 'https://example.com/images/joan_didion.jpg', TRUE),
('Stephen Crane', 'An American novelist, poet, and journalist, known for ''The Red Badge of Courage''.', 'https://example.com/images/stephen_crane.jpg', FALSE),
('Jack London', 'An American novelist, journalist, and social activist, known for ''The Call of the Wild''.', 'https://example.com/images/jack_london.jpg', TRUE),
('Robert Frost', 'An American poet known for his realistic depictions of rural New England life and his command of everyday speech.', 'https://example.com/images/robert_frost.jpg', FALSE);

-- Insert data into shorts table with writer_id references
INSERT INTO shorts (name, url, category, description, is_favorite, writer_id) VALUES
('A Modest Proposal', 'https://example.com/a-modest-proposal', 'satire', 'A satirical essay by Jonathan Swift', true, 1),
('The Lottery', 'https://example.com/the-lottery', 'fiction', 'A short story by Shirley Jackson', true, 2),
('On the Duty of Civil Disobedience', 'https://example.com/civil-disobedience', 'philosophy', 'An essay by Henry David Thoreau', true, 3),
('The Yellow Wallpaper', 'https://example.com/the-yellow-wallpaper', 'fiction', 'A short story by Charlotte Perkins Gilman', true, 4),
('Shooting an Elephant', 'https://example.com/shooting-an-elephant', 'non-fiction', 'An essay by George Orwell', true, 5),
('Self-Reliance', 'https://example.com/self-reliance', 'philosophy', 'An essay by Ralph Waldo Emerson', true, 6),
('The Tell-Tale Heart', 'https://example.com/the-tell-tale-heart', 'fiction', 'A short story by Edgar Allan Poe', true, 7),
('Notes of a Native Son', 'https://example.com/notes-of-a-native-son', 'non-fiction', 'An essay by James Baldwin', true, 8),
('The Story of an Hour', 'https://example.com/the-story-of-an-hour', 'fiction', 'A short story by Kate Chopin', true, 9),
('A Good Man is Hard to Find', 'https://example.com/a-good-man-is-hard-to-find', 'fiction', 'A short story by Flannery O''Connor', true, 10),
('The Metamorphosis', 'https://example.com/the-metamorphosis', 'fiction', 'A short story by Franz Kafka', true, 11),
('Araby', 'https://example.com/araby', 'fiction', 'A short story by James Joyce', true, 12),
('Why I Write', 'https://example.com/why-i-write', 'non-fiction', 'An essay by George Orwell', true, 5),
('The Raven', 'https://example.com/the-raven', 'poetry', 'A poem by Edgar Allan Poe', true, 7),
('The Road Not Taken', 'https://example.com/the-road-not-taken', 'poetry', 'A poem by Robert Frost', true, 17),
('How It Feels to Be Colored Me', 'https://example.com/how-it-feels-to-be-colored-me', 'non-fiction', 'An essay by Zora Neale Hurston', true, 13),
('The White Album', 'https://example.com/the-white-album', 'non-fiction', 'An essay by Joan Didion', true, 14),
('The Fall of the House of Usher', 'https://example.com/the-fall-of-the-house-of-usher', 'fiction', 'A short story by Edgar Allan Poe', true, 7),
('The Open Boat', 'https://example.com/the-open-boat', 'fiction', 'A short story by Stephen Crane', true, 15),
('To Build a Fire', 'https://example.com/to-build-a-fire', 'fiction', 'A short story by Jack London', true, 16);

-- Insert data into reviews table
INSERT INTO reviews (short_id, reviewer, title, content, is_liked) VALUES
(1, 'Evan', 'Thought-Provoking', 'A deeply satirical take on societal issues', true),
(2, 'Juliana', 'Chilling', 'A haunting story with a shocking twist', true),
(3, 'David', 'Inspirational', 'Encourages reflection on civil rights and responsibilities', true),
(4, 'Mr. Mingo', 'Fascinating', 'A powerful exploration of mental health and gender roles', true),
(5, 'Alison', 'Eye-Opening', 'A compelling narrative on imperialism', true),
(6, 'Hannah', 'Empowering', 'A timeless call for individualism', true),
(7, 'Gabi', 'Gripping', 'A masterful tale of guilt and paranoia', true),
(8, 'Evan', 'Insightful', 'A poignant look at race and identity', true),
(9, 'Juliana', 'Touching', 'A brief but impactful story', true),
(10, 'David', 'Disturbing', 'A darkly humorous and thought-provoking story', true),
(11, 'Mr. Mingo', 'Kafkaesque', 'An unsettling and absurd transformation', true),
(12, 'Alison', 'Melancholic', 'A beautiful and sad coming-of-age story', true),
(13, 'Hannah', 'Revealing', 'A personal essay on the craft of writing', true),
(14, 'Gabi', 'Haunting', 'A dark and atmospheric poem', true),
(15, 'Evan', 'Reflective', 'A thought-provoking poem on choices', true),
(16, 'Juliana', 'Inspiring', 'A vivid portrayal of racial identity', true),
(17, 'David', 'Engaging', 'A captivating collection of essays', true),
(18, 'Mr. Mingo', 'Eerie', 'A gothic and suspenseful story', true),
(19, 'Alison', 'Powerful', 'A harrowing tale of survival', true),
(20, 'Hannah', 'Intense', 'A gripping survival story', true);

-- Insert data into shorts_writers table
INSERT INTO shorts_writers (short_id, writer_id) VALUES
(1, 1),  -- "A Modest Proposal" by Jonathan Swift
(2, 2),  -- "The Lottery" by Shirley Jackson
(3, 3),  -- "On the Duty of Civil Disobedience" by Henry David Thoreau
(4, 4),  -- "The Yellow Wallpaper" by Charlotte Perkins Gilman
(5, 5),  -- "Shooting an Elephant" by George Orwell
(6, 6),  -- "Self-Reliance" by Ralph Waldo Emerson
(7, 7),  -- "The Tell-Tale Heart" by Edgar Allan Poe
(8, 8),  -- "Notes of a Native Son" by James Baldwin
(9, 9),  -- "The Story of an Hour" by Kate Chopin
(10, 10),-- "A Good Man is Hard to Find" by Flannery O'Connor
(11, 11),-- "The Metamorphosis" by Franz Kafka
(12, 12),-- "Araby" by James Joyce
(13, 5), -- "Why I Write" by George Orwell
(14, 7), -- "The Raven" by Edgar Allan Poe
(15, 17),-- "The Road Not Taken" by Robert Frost
(16, 13),-- "How It Feels to Be Colored Me" by Zora Neale Hurston
(17, 14),-- "The White Album" by Joan Didion
(18, 7), -- "The Fall of the House of Usher" by Edgar Allan Poe
(19, 15),-- "The Open Boat" by Stephen Crane
(20, 16);-- "To Build a Fire" by Jack London
