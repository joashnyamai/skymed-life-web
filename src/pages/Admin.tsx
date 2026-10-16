
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { Plus, Edit, Trash2, LogOut, BookOpen, ArrowLeft } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { createBlogPost, deleteBlogPost, listAllBlogPosts, updateBlogPost, type BlogPost } from '@/lib/blogPosts';
import { getFriendlyErrorMessage } from '@/lib/friendlyError';

const Admin = () => {
  const { user, isAdmin, signOut, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isCreateIntent = searchParams.get('create') === 'true' || searchParams.get('new') === 'true';

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [showForm, setShowForm] = useState(isCreateIntent);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (isCreateIntent) {
      setShowForm(true);
    }
  }, [isCreateIntent]);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category: 'General',
    read_time: '5 min read',
    published: false,
    image_url: ''
  });

  const fetchPosts = useCallback(async () => {
    try {
      setPosts(await listAllBlogPosts());
    } catch (error) {
      toast({
        title: "Error",
        description: getFriendlyErrorMessage(error, "We couldn't load posts. Please try again."),
        variant: "destructive"
      });
    }
  }, [toast]);

  useEffect(() => {
    if (loading) return;

    if (!user || !isAdmin) {
      if (user && !isAdmin) {
        toast({
          title: "Admin access required",
          description: "This account has not been granted blog administration access.",
          variant: "destructive"
        });
      }
      navigate('/auth');
      return;
    }

    void fetchPosts();
  }, [user, isAdmin, loading, navigate, fetchPosts, toast]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      if (!user) throw new Error('You must be signed in to manage posts.');

      if (editingPost) {
        await updateBlogPost(editingPost.id, formData);
        
        toast({
          title: "Success",
          description: "Post updated successfully"
        });
      } else {
        await createBlogPost(formData, user.uid);
        
        toast({
          title: "Success",
          description: "Post created successfully"
        });
      }

      resetForm();
      await fetchPosts();
    } catch (error) {
      toast({
        title: "Error",
        description: getFriendlyErrorMessage(error, "We couldn't save this post. Please try again."),
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await deleteBlogPost(id);
      toast({
        title: "Success",
        description: "Post deleted successfully"
      });
      await fetchPosts();
    } catch {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive"
      });
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      category: post.category,
      read_time: post.read_time,
      published: post.published,
      image_url: post.image_url || ''
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      category: 'General',
      read_time: '5 min read',
      published: false,
      image_url: ''
    });
    setEditingPost(null);
    setShowForm(false);
    if (searchParams.has('create') || searchParams.has('new')) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('create');
      nextParams.delete('new');
      setSearchParams(nextParams, { replace: true });
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const categories = [
    'General',
    'Wellness',
    'Chronic Care',
    'Pediatrics',
    'Reproductive Health',
    'Mental Health'
  ];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-muted/20 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-border/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical-lightBlue text-medical-blue text-xs font-bold uppercase tracking-wider mb-2">
              Clinical CMS
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Blog & Article Management
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Create, review, edit, and publish clinical health articles for patients across Kenya.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-2xl border-border hover:bg-muted font-medium text-xs px-4 py-5"
            >
              <Link to="/blog">
                <BookOpen className="h-4 w-4 mr-2 text-medical-blue" />
                View Public Blog
              </Link>
            </Button>
            <Button
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              size="sm"
              className="bg-medical-lightBlue hover:bg-medical-blue/15 text-medical-blue font-bold rounded-2xl border border-medical-blue/30 text-xs px-4 py-5 shadow-xs"
            >
              <Plus className="h-4 w-4 mr-1.5" />
              New Article
            </Button>
            <Button
              onClick={handleSignOut}
              variant="ghost"
              size="sm"
              className="rounded-2xl text-muted-foreground hover:text-destructive text-xs px-3 py-5"
            >
              <LogOut className="h-4 w-4 mr-1.5" />
              Sign Out
            </Button>
          </div>
        </div>

        {showForm && (
          <Card className="mb-10 rounded-3xl border border-border/80 bg-card shadow-card p-6 sm:p-9 animate-fade-in">
            <CardHeader className="p-0 pb-6 border-b border-border/60 mb-6">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-medical-orange mb-1">
                {editingPost ? 'Article Editor' : 'New Article Draft'}
              </div>
              <CardTitle className="text-2xl font-extrabold text-foreground tracking-tight">
                {editingPost ? 'Update Blog Post' : 'Create New Health Article'}
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                {editingPost ? 'Revise content, modify category, or change publishing status' : 'Draft a patient-focused healthcare article for the clinic website'}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="title" className="block text-xs font-bold uppercase tracking-wider mb-2">Article Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    placeholder="e.g. Understanding Preventive Diabetes Care and Nutrition"
                    className="rounded-2xl h-12 bg-background text-sm"
                  />
                </div>
                
                <div>
                  <Label htmlFor="excerpt" className="block text-xs font-bold uppercase tracking-wider mb-2">Short Summary / Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="A brief 1-2 sentence overview of the article shown on cards..."
                    rows={2}
                    className="rounded-2xl bg-background text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider mb-2">Specialty Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="rounded-2xl h-12 bg-background text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl">
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="rounded-xl">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="read_time" className="block text-xs font-bold uppercase tracking-wider mb-2">Read Time</Label>
                    <Input
                      id="read_time"
                      value={formData.read_time}
                      onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                      placeholder="e.g. 5 min read"
                      className="rounded-2xl h-12 bg-background text-sm"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image_url" className="block text-xs font-bold uppercase tracking-wider mb-2">Hero Image URL (Optional)</Label>
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://example.com/medical-image.jpg"
                    className="rounded-2xl h-12 bg-background text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="content" className="block text-xs font-bold uppercase tracking-wider mb-2">Full Article Body</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Compose the full article with sections, medical insights, and preventive advice..."
                    rows={12}
                    required
                    className="rounded-2xl bg-background text-sm leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/40 border border-border/60">
                  <div>
                    <div className="text-sm font-bold text-foreground">Publish to Live Blog</div>
                    <div className="text-xs text-muted-foreground">Make this article immediately visible to visitors on /blog</div>
                  </div>
                  <Switch
                    id="published"
                    checked={formData.published}
                    onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Button
                    type="submit"
                    className="bg-medical-blue hover:bg-medical-blue/90 text-white font-bold rounded-2xl px-7 py-6 text-sm shadow-sm"
                    disabled={uploading}
                  >
                    {uploading ? 'Saving Article...' : (editingPost ? 'Update Post' : 'Publish Article')}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetForm}
                    className="rounded-2xl px-6 py-6 text-sm"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Existing Posts List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground">All Articles ({posts.length})</h2>
          </div>

          {posts.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-card border border-border/70">
              <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-base font-bold text-foreground mb-1">No articles created yet</h3>
              <p className="text-xs text-muted-foreground mb-5">Click 'New Article' above to draft your first clinical post.</p>
              <Button
                onClick={() => {
                  resetForm();
                  setShowForm(true);
                }}
                size="sm"
                className="bg-medical-lightBlue text-medical-blue font-bold rounded-2xl"
              >
                <Plus className="h-4 w-4 mr-1.5" />
                Create First Article
              </Button>
            </div>
          ) : (
            posts.map((post) => (
              <Card key={post.id} className="rounded-3xl border border-border/80 bg-card hover:border-medical-blue/30 shadow-sm p-6 sm:p-7 transition-all">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider ${
                        post.published 
                          ? 'bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20' 
                          : 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-medical-lightBlue text-medical-blue">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">• {post.read_time}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground tracking-tight">{post.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="text-xs text-muted-foreground pt-2">
                      Created on {new Date(post.created_at).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center gap-2 shrink-0">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(post)}
                      className="rounded-xl h-9 px-3 text-xs gap-1.5"
                    >
                      <Edit className="h-3.5 w-3.5 text-medical-blue" />
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(post.id)}
                      className="rounded-xl h-9 px-3 text-xs text-destructive hover:bg-destructive/10 gap-1.5"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
