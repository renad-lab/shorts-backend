\c shorts_dev


-- Insert data into authors table
INSERT INTO authors (name, biography) VALUES
('Jonathan Swift', 'An Anglo-Irish writer and satirist, known for his works including ''Gulliver''s Travels''.'),
('Shirley Jackson', 'An American writer known for her works of horror and mystery, including ''The Haunting of Hill House''.'),
('Henry David Thoreau', 'An American naturalist, philosopher, and transcendentalist best known for his book ''Walden''.'),
('Charlotte Perkins Gilman', 'An American feminist, writer, and social reformer, known for ''The Yellow Wallpaper''.'),
('George Orwell', 'An English novelist, essayist, journalist, and critic, known for ''1984'' and ''Animal Farm''.'),
('Ralph Waldo Emerson', 'An American essayist, philosopher, and poet, a leader of the transcendentalist movement.'),
('Edgar Allan Poe', 'An American writer, poet, and literary critic known for his tales of mystery and macabre.'),
('James Baldwin', 'An American writer and social critic known for his essays on race, sexuality, and class.'),
('Kate Chopin', 'An American author of short stories and novels, known for ''The Awakening'' and ''The Story of an Hour''.'),
('Flannery O''Connor', 'An American novelist and short story writer known for her Southern Gothic style.'),
('Franz Kafka', 'A German-speaking Bohemian writer known for his works including ''The Metamorphosis''.'),
('James Joyce', 'An Irish novelist and modernist writer known for his landmark work ''Ulysses''.'),
('Zora Neale Hurston', 'An American author, anthropologist, and filmmaker, best known for her novel ''Their Eyes Were Watching God''.'),
('Joan Didion', 'An American writer known for her novels and essays, including ''The White Album''.'),
('Stephen Crane', 'An American novelist, poet, and journalist, known for ''The Red Badge of Courage''.'),
('Jack London', 'An American novelist, journalist, and social activist, known for ''The Call of the Wild''.'),
('Robert Frost', 'An American poet known for his realistic depictions of rural New England life and his command of everyday speech.');

-- Insert data into shorts table with author_id references
INSERT INTO shorts (name, url, category, description, is_favorite, author_id) VALUES
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
INSERT INTO reviews (short_id, reviewer, title, content, rating) VALUES
(1, 'Evan', 'Thought-Provoking', 'A deeply satirical take on societal issues', 5),
(2, 'Juliana', 'Chilling', 'A haunting story with a shocking twist', 4),
(3, 'David', 'Inspirational', 'Encourages reflection on civil rights and responsibilities', 5),
(4, 'Mr. Mingo', 'Fascinating', 'A powerful exploration of mental health and gender roles', 4),
(5, 'Alison', 'Eye-Opening', 'A compelling narrative on imperialism', 5),
(6, 'Hannah', 'Empowering', 'A timeless call for individualism', 5),
(7, 'Gabi', 'Gripping', 'A masterful tale of guilt and paranoia', 5),
(8, 'Evan', 'Insightful', 'A poignant look at race and identity', 4),
(9, 'Juliana', 'Touching', 'A brief but impactful story', 4),
(10, 'David', 'Disturbing', 'A darkly humorous and thought-provoking story', 5),
(11, 'Mr. Mingo', 'Kafkaesque', 'An unsettling and absurd transformation', 4),
(12, 'Alison', 'Evocative', 'A beautifully written story of longing', 4),
(13, 'Hannah', 'Reflective', 'A candid exploration of the motives behind writing', 5),
(14, 'Gabi', 'Haunting', 'A melancholic and atmospheric poem', 5),
(15, 'Evan', 'Inspiring', 'A beloved and oft-quoted poem', 5),
(16, 'Juliana', 'Vivid', 'A colorful and autobiographical essay', 4),
(17, 'David', 'Engaging', 'A personal and cultural reflection', 5),
(18, 'Mr. Mingo', 'Eerie', 'A story of decay and madness', 5),
(19, 'Alison', 'Intense', 'A gripping tale of survival and human will', 4),
(20, 'Hannah', 'Chilling', 'A stark portrayal of human frailty in nature', 4);
