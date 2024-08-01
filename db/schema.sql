-- Drop existing database and recreate it
DROP DATABASE IF EXISTS shorts_dev;
CREATE DATABASE shorts_dev;

\c shorts_dev;

-- Create the shorts table
CREATE TABLE shorts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT,
  category TEXT,
  description TEXT,
  is_favorite BOOLEAN
);

-- Create the reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer TEXT,
  title TEXT,
  content TEXT,
  rating NUMERIC CHECK (rating >= 0 AND rating <= 5),
  short_id INTEGER REFERENCES shorts (id) ON DELETE CASCADE
);

-- Create the authors table
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  biography TEXT
);

-- Create a junction table for many-to-many relationship between shorts and authors
CREATE TABLE shorts_authors (
  short_id INTEGER REFERENCES shorts (id) ON DELETE CASCADE,
  author_id INTEGER REFERENCES authors (id) ON DELETE CASCADE,
  PRIMARY KEY (short_id, author_id)
);
