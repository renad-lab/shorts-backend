
\c shorts_dev

-- Insert data into writers table
INSERT INTO writers (name, biography, picture_url, is_active) VALUES
('Jonathan Swift', 'An Anglo-Irish writer and satirist, known for his works including ''Gulliver''s Travels''.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722699953/Designer_28_cm05yr.png', FALSE),
('Shirley Jackson', 'An American writer known for her works of horror and mystery, including ''The Haunting of Hill House''.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722699965/Designer_29_vjcxah.png', TRUE),
('Henry David Thoreau', 'An American naturalist, philosopher, and transcendentalist best known for his book ''Walden''.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722702542/Designer_36_svti2u.png', FALSE),
('Charlotte Perkins Gilman', 'An American feminist, writer, and social reformer, known for ''The Yellow Wallpaper''.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722702546/Designer_32_tmpknr.png', FALSE),
('George Orwell', 'An English novelist, essayist, journalist, and critic, known for ''1984'' and ''Animal Farm''.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722702546/Designer_33_gfffq1.png', FALSE),
('Ralph Waldo Emerson', 'An American essayist, philosopher, and poet, a leader of the transcendentalist movement.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722702544/Designer_34_xo3ftp.png', FALSE),
('Edgar Allan Poe', 'An American writer, poet, and literary critic known for his tales of mystery and macabre.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722702540/Designer_38_z6xheo.png', FALSE),
('Kate Chopin', 'An American author of short stories and novels, known for ''The Awakening'' and ''The Story of an Hour''.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722702538/Designer_40_osnr5w.png', TRUE),
('Flannery O''Connor', 'An American novelist and short story writer known for her Southern Gothic style.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722702536/Designer_41_kr7yi0.png', TRUE),
('James Joyce', 'An Irish novelist and modernist writer known for his landmark work ''Ulysses''.', 'https://res.cloudinary.com/dxeoesm7e/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1722702536/Designer_42_bh4tpb.png', FALSE);

-- Insert data into shorts table with writer_id references
INSERT INTO shorts (name, url, category, description, is_favorite, writer_id, picture_url, created_at, updated_at) VALUES
('A Modest Proposal', 'https://www.gutenberg.org/files/1080/1080-h/1080-h.htm', 'satire', 'This satirical essay proposes that impoverished Irish families could sell their children as food to the wealthy. Swift uses this shocking suggestion to criticize British exploitation and indifference towards the Irish poor, highlighting the dire need for genuine solutions to social issues.', TRUE, 1, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722708519/Designer_46_f4ikqt.png', '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
('The Lottery', 'https://www.newyorker.com/magazine/1948/06/26/the-lottery', 'fiction', 'Set in a small town, this short story describes an annual ritual called "the lottery," where the townspeople draw lots to select one person for a brutal sacrifice. The story reveals the dark side of human nature and the dangers of blindly following tradition.', TRUE, 2, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722708510/Designer_47_odlx9z.png', '2024-08-02 11:00:00', '2024-08-02 11:00:00'),
('On the Duty of Civil Disobedience', 'https://www.gutenberg.org/files/71/71-h/71-h.htm', 'philosophy', 'Thoreau argues that individuals should not permit governments to overrule their consciences and that people have a duty to resist unjust laws through nonviolent means. His essay advocates for civil disobedience as a moral stance against governmental injustice.', TRUE, 3, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722708502/Designer_48_pkqd4z.png', '2024-08-03 12:00:00', '2024-08-03 12:00:00'),
('The Yellow Wallpaper', 'https://www.gutenberg.org/cache/epub/1952/pg1952-images.html', 'fiction', 'This short story is a first-person account of a woman''s descent into madness while undergoing a "rest cure" for postpartum depression. The story, presented through journal entries, critiques the treatment of women and the oppressive nature of mental health practices in the 19th century.', TRUE, 4, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709994/Designer_49_pcsmch.png', '2024-08-04 13:00:00', '2024-08-04 13:00:00'),
('Shooting an Elephant', 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/shooting-an-elephant/', 'non-fiction', 'Orwell reflects on his experience as a colonial officer in Burma, where he is compelled to shoot an elephant to avoid looking weak in front of the locals. The essay explores themes of imperialism, power, and the moral complexities of colonial rule.
', TRUE, 5, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709996/Designer_50_fupyev.png', '2024-08-05 14:00:00', '2024-08-05 14:00:00'),
('Self-Reliance', 'https://archive.vcu.edu/english/engweb/transcendentalism/authors/emerson/essays/selfreliance.html', 'philosophy', 'Emerson''s essay encourages individuals to trust their intuition and be self-reliant. He argues that personal growth and individuality come from rejecting conformity and embracing one''s unique capabilities and insights.', TRUE, 6, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709990/Designer_51_colqou.png', '2024-08-06 15:00:00', '2024-08-06 15:00:00'),
('The Tell-Tale Heart', 'https://poemuseum.org/the-tell-tale-heart/', 'fiction', 'This psychological thriller tells the story of a narrator who insists on their sanity while describing the murder they committed. The story explores themes of guilt and paranoia as the narrator becomes increasingly haunted by the sound of the victim''s still-beating heart.', TRUE, 7, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709991/Designer_53_p6fzga.png', '2024-08-07 16:00:00', '2024-08-07 16:00:00'),
('The Story of an Hour', 'https://archive.vcu.edu/english/engweb/webtexts/hour/', 'fiction', 'The story focuses on Louise Mallard, who experiences a brief sense of liberation after learning of her husband''s death. However, this newfound freedom is abruptly ended when her husband returns alive. The story examines themes of freedom, identity, and the constraints of marriage.', TRUE, 8, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709962/Designer_56_h7gzuw.png', '2024-08-08 17:00:00', '2024-08-08 17:00:00'),


('A Good Man is Hard to Find', 'https://repositorio.ufsc.br/bitstream/handle/123456789/160332/A%20good%20man%20is%20hard%20to%20find%20-%20Flannery%20O%27Connor.pdf', 'fiction', 'This Southern Gothic story follows a family on a road trip that ends in tragedy. The grandmother’s manipulative behavior leads the family to encounter an escaped convict, resulting in their brutal murder. The story explores themes of morality, family dynamics, and the nature of good and evil.', TRUE, 9, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709963/Designer_58_dojdmj.png', '2024-08-09 18:00:00', '2024-08-09 18:00:00'),
('Araby', 'https://www.plato-philosophy.org/wp-content/uploads/2016/05/Araby.pdf', 'fiction', 'This coming-of-age story follows a young boy who is infatuated with a girl in his neighborhood. He goes to a bazaar called Araby to buy her a gift, only to find that the fair is disappointing and commercialized. The story captures themes of disillusionment and the loss of innocence.', TRUE, 10, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709963/Designer_59_zrxgpx.png', '2024-08-10 19:00:00', '2024-08-10 19:00:00'),
('Why I Write', 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/why-i-write/', 'non-fiction', 'Orwell''s essay discusses his motivations for writing, which include a desire to connect with others and a commitment to political and social causes. He outlines the influence of personal experiences and social conditions on his work.', TRUE, 5, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709955/Designer_60_soacqo.png', '2024-08-11 20:00:00', '2024-08-11 20:00:00'),
('The Raven', 'https://www.poetryfoundation.org/poems/48860/the-raven-5964f5014d47a', 'poetry', 'This narrative poem features a man mourning the loss of his lover, Lenore. As he struggles with his grief, a talking raven visits him, symbolizing the man’s descent into madness and despair as he reflects on his sorrow and loss.', TRUE, 7, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709955/Designer_62_izpkuc.png', '2024-08-12 21:00:00', '2024-08-12 21:00:00'),
('The Fall of the House of Usher', 'https://americanenglish.state.gov/files/ae/resource_files/the_fall_of_the_house_of_usher.pdf', 'fiction', 'The story revolves around the narrator’s visit to the decaying mansion of his friend, Roderick Usher. As the narrator learns more about the Usher family''s eerie history, he witnesses a series of supernatural events leading to the final, horrific collapse of the house. The story explores themes of madness, decay, and the supernatural.', TRUE, 7, 'https://res.cloudinary.com/dxeoesm7e/image/upload/v1722709961/Designer_63_civ028.png', '2024-08-13 22:00:00', '2024-08-13 22:00:00');


-- Insert data into reviews table
INSERT INTO reviews (short_id, reviewer, title, content, is_liked, created_at, updated_at) VALUES
(1, 'Marcus', 'Thought-Provoking', 'A deeply satirical take on societal issues', TRUE, '2024-08-01 10:00:00', '2024-08-01 10:00:00'),
(2, 'Lucia', 'Chilling', 'A haunting story with a shocking twist', TRUE, '2024-08-02 11:00:00', '2024-08-02 11:00:00'),
(3, 'Gaius', 'Inspirational', 'Encourages reflection on civil rights and responsibilities', TRUE, '2024-08-03 12:00:00', '2024-08-03 12:00:00'),
(4, 'Flavia', 'Fascinating', 'A powerful exploration of mental health and gender roles', TRUE, '2024-08-04 13:00:00', '2024-08-04 13:00:00'),
(5, 'Aurelia', 'Eye-Opening', 'A compelling narrative on imperialism', TRUE, '2024-08-05 14:00:00', '2024-08-05 14:00:00'),
(6, 'Antonia', 'Empowering', 'A timeless call for individualism', TRUE, '2024-08-06 15:00:00', '2024-08-06 15:00:00'),
(7, 'Cicero', 'Gripping', 'A masterful tale of guilt and paranoia', TRUE, '2024-08-07 16:00:00', '2024-08-07 16:00:00'),
(8, 'Julia', 'Insightful', 'A poignant look at race and identity', TRUE, '2024-08-08 17:00:00', '2024-08-08 17:00:00'),
(9, 'Octavia', 'Touching', 'A brief but impactful story', TRUE, '2024-08-09 18:00:00', '2024-08-09 18:00:00'),
(10, 'Titus', 'Disturbing', 'A darkly humorous and thought-provoking story', TRUE, '2024-08-10 19:00:00', '2024-08-10 19:00:00'),
(11, 'Cornelia', 'Kafkaesque', 'An unsettling and absurd transformation', TRUE, '2024-08-11 20:00:00', '2024-08-11 20:00:00'),
(12, 'Maximus', 'Melancholic', 'A beautiful and sad coming-of-age story', TRUE, '2024-08-12 21:00:00', '2024-08-12 21:00:00'),
(13, 'Livia', 'Revealing', 'A personal and societal reflection', TRUE, '2024-08-13 22:00:00', '2024-08-13 22:00:00');

-- Insert data into shorts_writers table
INSERT INTO shorts_writers (short_id, writer_id) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 5),
(12, 7),
(13, 6)

