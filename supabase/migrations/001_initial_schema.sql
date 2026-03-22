-- AIPDN Database Schema
-- Run this in your Supabase SQL editor to set up all tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- TEAM MEMBERS
-- ============================================
CREATE TABLE public.team_members (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Team members are viewable by everyone"
  ON public.team_members FOR SELECT
  USING (true);

CREATE POLICY "Team members are editable by authenticated users"
  ON public.team_members FOR ALL
  USING (auth.role() = 'authenticated');

-- ============================================
-- EVENTS
-- ============================================
CREATE TABLE public.events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  content TEXT,
  location TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'past', 'cancelled')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are viewable by everyone"
  ON public.events FOR SELECT
  USING (true);

CREATE POLICY "Events are editable by authenticated users"
  ON public.events FOR ALL
  USING (auth.role() = 'authenticated');

CREATE INDEX idx_events_status ON public.events(status);
CREATE INDEX idx_events_start_date ON public.events(start_date DESC);
CREATE INDEX idx_events_slug ON public.events(slug);

-- ============================================
-- PUBLICATIONS
-- ============================================
CREATE TABLE public.publications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  category TEXT NOT NULL,
  file_url TEXT NOT NULL,
  cover_image_url TEXT,
  author TEXT,
  published_date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Publications are viewable by everyone"
  ON public.publications FOR SELECT
  USING (true);

CREATE POLICY "Publications are editable by authenticated users"
  ON public.publications FOR ALL
  USING (auth.role() = 'authenticated');

CREATE INDEX idx_publications_category ON public.publications(category);
CREATE INDEX idx_publications_slug ON public.publications(slug);

-- ============================================
-- NEWS ARTICLES
-- ============================================
CREATE TABLE public.news_articles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT,
  author TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "News articles are viewable by everyone"
  ON public.news_articles FOR SELECT
  USING (true);

CREATE POLICY "News articles are editable by authenticated users"
  ON public.news_articles FOR ALL
  USING (auth.role() = 'authenticated');

CREATE INDEX idx_news_published ON public.news_articles(published_at DESC);
CREATE INDEX idx_news_category ON public.news_articles(category);
CREATE INDEX idx_news_slug ON public.news_articles(slug);

-- ============================================
-- PARTNERS
-- ============================================
CREATE TABLE public.partners (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  description TEXT,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Partners are viewable by everyone"
  ON public.partners FOR SELECT
  USING (true);

CREATE POLICY "Partners are editable by authenticated users"
  ON public.partners FOR ALL
  USING (auth.role() = 'authenticated');

-- ============================================
-- GALLERY ITEMS
-- ============================================
CREATE TABLE public.gallery_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT,
  event_id UUID REFERENCES public.events(id) ON DELETE SET NULL,
  "order" INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Gallery items are viewable by everyone"
  ON public.gallery_items FOR SELECT
  USING (true);

CREATE POLICY "Gallery items are editable by authenticated users"
  ON public.gallery_items FOR ALL
  USING (auth.role() = 'authenticated');

CREATE INDEX idx_gallery_category ON public.gallery_items(category);

-- ============================================
-- CONTACT SUBMISSIONS
-- ============================================
CREATE TABLE public.contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Contact submissions: anyone can insert, only authenticated can read
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Contact submissions are viewable by authenticated users"
  ON public.contact_submissions FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Contact submissions are editable by authenticated users"
  ON public.contact_submissions FOR UPDATE
  USING (auth.role() = 'authenticated');

-- ============================================
-- NEWSLETTER SUBSCRIBERS
-- ============================================
CREATE TABLE public.newsletter_subscribers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Anyone can subscribe, only authenticated can view list
CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Subscribers are viewable by authenticated users"
  ON public.newsletter_subscribers FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Subscribers are editable by authenticated users"
  ON public.newsletter_subscribers FOR UPDATE
  USING (auth.role() = 'authenticated');

-- ============================================
-- MEMBERSHIP APPLICATIONS (Join the Network)
-- ============================================
CREATE TABLE public.membership_applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  organization_name TEXT NOT NULL,
  organization_type TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  motivation TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.membership_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit membership application"
  ON public.membership_applications FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Applications are viewable by authenticated users"
  ON public.membership_applications FOR SELECT
  USING (auth.role() = 'authenticated');

CREATE POLICY "Applications are editable by authenticated users"
  ON public.membership_applications FOR UPDATE
  USING (auth.role() = 'authenticated');

-- ============================================
-- STORAGE BUCKETS
-- ============================================
-- Run these separately if using Supabase Storage:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('publications', 'publications', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('team', 'team', true);
-- INSERT INTO storage.buckets (id, name, public) VALUES ('partners', 'partners', true);
