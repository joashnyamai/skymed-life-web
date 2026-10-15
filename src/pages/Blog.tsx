
import { useState, useEffect, useCallback, type FormEvent } from "react";
import { Calendar, Clock, Heart, Activity, Baby, Apple, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { listPublishedBlogPosts, type BlogPost } from "@/lib/blogPosts";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { toast } = useToast();

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
        description: error instanceof Error ? error.message : "Failed to fetch blog posts",
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
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest health tips, medical insights, and wellness advice 
            from our experienced healthcare professionals.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === selectedCategory ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer hover:bg-medical-lightBlue hover:text-medical-blue transition-colors ${
                category === selectedCategory ? "bg-medical-lightBlue text-medical-blue" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-medical-gray mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">No blog posts yet</h2>
            <p className="text-medical-gray">Check back soon for health tips and medical insights!</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-10">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-medical-lightBlue to-medical-lightOrange p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-medical-lightBlue rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                          {(() => {
                            const IconComponent = iconMap[featuredPost.category] || Activity;
                            return <IconComponent className="h-12 w-12 text-medical-blue" />;
                          })()}
                        </div>
                        <Badge className={getCategoryColor(featuredPost.category)}>
                          Featured Article
                        </Badge>
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <Badge className={`${getCategoryColor(featuredPost.category)} mb-4`}>
                        {featuredPost.category}
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-medical-gray text-lg mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-medical-gray">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="mr-4">{new Date(featuredPost.created_at).toLocaleDateString()}</span>
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{featuredPost.read_time}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Blog Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="bg-medical-lightBlue rounded-full p-3 group-hover:bg-medical-lightOrange transition-colors duration-300">
                          {(() => {
                            const IconComponent = iconMap[post.category] || Activity;
                            return <IconComponent className="h-6 w-6 text-medical-blue group-hover:text-medical-orange transition-colors duration-300" />;
                          })()}
                        </div>
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground leading-tight group-hover:text-medical-blue transition-colors duration-300">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-medical-gray mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-medical-gray">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.read_time}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}

        {/* Newsletter Signup */}
        <div className="mt-12 bg-medical-lightBlue rounded-2xl p-6 md:p-10 text-center text-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest health articles, wellness tips, and medical insights delivered to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              name="newsletterEmail"
              placeholder="Enter your email" 
              required
              aria-label="Email address for newsletter subscription"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-medical-blue"
            />
            <button type="submit" className="bg-medical-lightOrange hover:bg-medical-orange/15 text-medical-orange px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-sm text-muted-foreground">Your email app will open so you can send the subscription request.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
