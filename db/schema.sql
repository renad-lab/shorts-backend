-- Drop existing database and recreate it
DROP DATABASE IF EXISTS shorts_dev;
CREATE DATABASE shorts_dev;

\c shorts_dev;

-- Create the writers table
CREATE TABLE writers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  biography TEXT,
  picture_url TEXT,
  is_active BOOLEAN DEFAULT FALSE
);

-- Create the shorts table with writer_id column
CREATE TABLE shorts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT,
  category TEXT,
  description TEXT,
  is_favorite BOOLEAN,
  writer_id INTEGER REFERENCES writers (id) ON DELETE SET NULL,
  picture_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the reviews table
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer TEXT,
  title TEXT,
  content TEXT,
  is_liked BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  short_id INTEGER REFERENCES shorts (id) ON DELETE CASCADE
);

CREATE TABLE shorts_writers (
  short_id INTEGER REFERENCES shorts (id) ON DELETE CASCADE,
  writer_id INTEGER REFERENCES writers (id) ON DELETE CASCADE,
  PRIMARY KEY (short_id, writer_id) -- Composite primary key
);
