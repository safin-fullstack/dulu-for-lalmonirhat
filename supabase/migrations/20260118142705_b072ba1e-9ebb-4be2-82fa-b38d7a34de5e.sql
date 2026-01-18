-- Create a table for storing visitor advice/feedback submissions
CREATE TABLE public.advices (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  area TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.advices ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert advice (public form)
CREATE POLICY "Anyone can submit advice" 
ON public.advices 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading all advice (for admin review later)
CREATE POLICY "Anyone can view advice" 
ON public.advices 
FOR SELECT 
USING (true);