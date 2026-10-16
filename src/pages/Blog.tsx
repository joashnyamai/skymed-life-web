
import { useState, useEffect, useCallback, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Heart, Activity, Baby, Apple, PlusCircle, Settings, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { listPublishedBlogPosts, type BlogPost } from "@/lib/blogPosts";
import { getFriendlyErrorMessage } from "@/lib/friendlyError";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { toast } = useToast();
  const { isAdmin } = useAuth();

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("newsletterEmail");
    const mailto = new URL("mailto:info@skylifemedicalclinic.com");
    mailto.searchParams.set("subject", "Health newsletter subscription");
    mailto.searchParams.set("body", `Please add ${email} to the health newsletter.`);
    window.location.href = mailto.toString();
  };

  const categories = ["All", "Wellness", "Chronic Care", "Pediatrics", "Reproductive Health", "Mental Health"];

  const iconMap: Record<string, LucideIcon> = {
    "Wellness": Apple,
    "Chronic Care": Heart,
    "Pediatrics": Baby,
    "Reproductive Health": Heart,
    "Mental Health": Activity,
    "General": Activity
  };

  const fetchBlogPosts = useCallback(async () => {
    try {
      setBlogPosts(await listPublishedBlogPosts());
    } catch (error) {
      toast({
        title: "Error",
        description: getFriendlyErrorMessage(error, "We couldn't load articles right now. Please try again later."),
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    void fetchBlogPosts();
  }, [fetchBlogPosts]);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Wellness": "bg-medical-lightBlue text-medical-blue",
      "Chronic Care": "bg-medical-lightOrange text-medical-orange",
      "Pediatrics": "bg-medical-lightBlue text-medical-blue",
      "Reproductive Health": "bg-medical-lightOrange text-medical-orange",
      "Mental Health": "bg-medical-lightOrange text-medical-orange",
      "General": "bg-medical-lightBlue text-medical-blue"
    };
    return colors[category] || "bg-medical-lightBlue text-medical-blue";
  };

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-medical-blue"></div>
          <p className="mt-4 text-medical-gray">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isAdmin && (
          <div className="mb-8 p-4 rounded-2xl bg-medical-lightBlue/60 border border-medical-blue/20 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm animate-fade-in">
            <div className="flex items-center gap-2.5 text-medical-blue">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-medical-blue"></span>
              </span>
              <span className="text-sm font-semibold">Admin Mode Active</span>
              <span className="hidden sm:inline text-xs text-muted-foreground">• You have permission to publish and manage articles</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <Button asChild size="sm" className="bg-medical-blue hover:bg-medical-blue/90 text-white font-medium rounded-xl shadow-sm">
                <Link to="/admin?create=true">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create New Post
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-xl">
                <Link to="/admin">
                  <Settings className="h-4 w-4 mr-2" />
                  Manage Posts
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-medical-lightBlue dark:bg-medical-blue/20 text-medical-blue dark:text-sky-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 border border-medical-blue/20 shadow-xs">
            Health Insights & Advice
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            SkyLife Medical Wellness Journal
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay informed with verified medical articles, preventive health strategies, and wellness advice from our healthcare team.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                category === selectedCategory
                  ? "bg-medical-blue text-white border-medical-blue shadow-sm scale-105"
                  : "bg-card hover:bg-muted text-muted-foreground hover:text-foreground border-border/80"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-3xl border border-border/70 p-8">
            <div className="w-16 h-16 rounded-2xl bg-medical-lightBlue text-medical-blue mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">No Articles in This Category Yet</h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Check back soon as our clinical staff routinely publish patient guides and wellness insights.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12">
                <Card className="rounded-3xl overflow-hidden border border-border/80 bg-card shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-medical-lightBlue via-sky-50 to-medical-lightOrange/50 dark:from-medical-blue/20 dark:to-card p-10 sm:p-14 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border/60">
                      <div className="text-center">
                        <div className="bg-white/90 dark:bg-card/90 rounded-3xl p-6 w-28 h-28 mx-auto mb-6 flex items-center justify-center shadow-sm border border-border/60">
                          {(() => {
                            const IconComponent = iconMap[featuredPost.category] || Activity;
                            return <IconComponent className="h-14 w-14 text-medical-blue" />;
                          })()}
                        </div>
                        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-medical-lightOrange text-medical-orange border border-medical-orange/20">
                          Featured Clinical Article
                        </span>
                      </div>
                    </div>
                    <div className="p-8 sm:p-12 flex flex-col justify-between">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-xl text-xs font-semibold bg-medical-lightBlue text-medical-blue mb-4">
                          {featuredPost.category}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground pt-4 border-t border-border/60">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-medical-blue" />
                          <span>{new Date(featuredPost.created_at).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-medical-orange" />
                          <span>{featuredPost.read_time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Blog Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => (
                  <Card key={post.id} className="group rounded-3xl border border-border/80 bg-card hover:border-medical-blue/40 shadow-sm hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between p-7 animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-medical-lightBlue dark:bg-medical-blue/20 flex items-center justify-center text-medical-blue group-hover:scale-110 transition-transform shadow-xs">
                          {(() => {
                            const IconComponent = iconMap[post.category] || Activity;
                            return <IconComponent className="h-6 w-6" />;
                          })()}
                        </div>
                        <span className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-muted text-foreground/80">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground leading-snug mb-3 group-hover:text-medical-blue transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-medical-orange" />
                        <span>{post.read_time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-medical-blue" />
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-medical-lightBlue/80 via-sky-50 to-medical-lightOrange/50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-950 p-8 sm:p-12 text-center border border-border/80 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-medical-lightBlue text-medical-blue border border-medical-blue/20 text-xs font-bold uppercase tracking-wider mb-4">
            Clinical Newsletter
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 tracking-tight">
            Stay Informed With Health Updates
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            Subscribe to receive clinic updates, community wellness tips, and preventive health guidance directly in your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              name="newsletterEmail"
              placeholder="Enter your email address" 
              required
              aria-label="Email address for newsletter subscription"
              className="flex-1 px-4 py-3.5 rounded-2xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue transition-all"
            />
            <Button
              type="submit"
              className="bg-medical-lightOrange hover:bg-medical-orange/20 text-medical-orange font-bold px-7 py-3.5 rounded-2xl border border-medical-orange/30 shadow-xs transition-all"
            >
              Subscribe
            </Button>
          </form>
          <p className="mt-3 text-xs text-muted-foreground">Your mail client will open with your subscription confirmation.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
