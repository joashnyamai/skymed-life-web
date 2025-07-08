
-- Update the existing blog_posts table to include all necessary fields
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS excerpt TEXT,
ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'General',
ADD COLUMN IF NOT EXISTS read_time TEXT DEFAULT '5 min read',
ADD COLUMN IF NOT EXISTS published BOOLEAN DEFAULT false;

-- Enable Row Level Security on blog_posts table
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public reading of published posts
CREATE POLICY "Anyone can view published blog posts" ON blog_posts
FOR SELECT USING (published = true);

-- Create policy to allow authenticated users to manage all posts
CREATE POLICY "Authenticated users can manage blog posts" ON blog_posts
FOR ALL USING (auth.role() = 'authenticated');

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create policy for blog images bucket
CREATE POLICY "Anyone can view blog images" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');

CREATE POLICY "Authenticated users can upload blog images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update blog images" ON storage.objects
FOR UPDATE USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete blog images" ON storage.objects
FOR DELETE USING (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
