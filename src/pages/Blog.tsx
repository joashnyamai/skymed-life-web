
import { Calendar, Clock, User, Heart, Activity, Pill, Baby, Apple } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Managing Diabetes: A Complete Guide to Healthy Living",
      excerpt: "Learn essential tips for managing diabetes effectively, including diet planning, exercise routines, and monitoring blood sugar levels.",
      category: "Chronic Care",
      icon: Heart,
      author: "Dr. Sarah Kimani",
      date: "December 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "Essential Vaccinations for Children: A Parent's Guide",
      excerpt: "Complete vaccination schedule for children from birth to adolescence, including importance and timing of each vaccine.",
      category: "Pediatrics",
      icon: Baby,
      author: "Dr. Michael Ochieng",
      date: "December 10, 2024",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 3,
      title: "Heart-Healthy Diet: Foods That Protect Your Cardiovascular System",
      excerpt: "Discover the best foods for heart health and learn how to create a sustainable diet plan that protects against heart disease.",
      category: "Wellness",
      icon: Apple,
      author: "Dr. Grace Wanjiku",
      date: "December 8, 2024",
      readTime: "10 min read",
      featured: false
    },
    {
      id: 4,
      title: "Understanding Blood Pressure: Prevention and Management",
      excerpt: "Everything you need to know about hypertension, from understanding the numbers to lifestyle changes that can help control it.",
      category: "Chronic Care",
      icon: Activity,
      author: "Dr. James Mwangi",
      date: "December 5, 2024",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Family Planning Options: Making Informed Decisions",
      excerpt: "Comprehensive guide to modern family planning methods, their effectiveness, and how to choose the right option for your lifestyle.",
      category: "Reproductive Health",
      icon: Heart,
      author: "Dr. Mary Nyong'o",
      date: "December 1, 2024",
      readTime: "12 min read",
      featured: false
    },
    {
      id: 6,
      title: "Mental Health Awareness: Breaking the Stigma",
      excerpt: "Understanding mental health, recognizing warning signs, and knowing when to seek professional help for yourself or loved ones.",
      category: "Mental Health",
      icon: Activity,
      author: "Dr. Peter Kiprotich",
      date: "November 28, 2024",
      readTime: "9 min read",
      featured: false
    }
  ];

  const categories = ["All", "Wellness", "Chronic Care", "Pediatrics", "Reproductive Health", "Mental Health"];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Wellness": "bg-green-100 text-green-800",
      "Chronic Care": "bg-red-100 text-red-800",
      "Pediatrics": "bg-blue-100 text-blue-800",
      "Reproductive Health": "bg-purple-100 text-purple-800",
      "Mental Health": "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest health tips, medical insights, and wellness advice 
            from our experienced healthcare professionals.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant={category === "All" ? "default" : "outline"}
              className={`px-4 py-2 cursor-pointer hover:bg-medical-blue hover:text-white transition-colors ${
                category === "All" ? "bg-medical-blue text-white" : ""
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-medical-lightBlue to-medical-lightOrange p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-medical-blue rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                      <featuredPost.icon className="h-12 w-12 text-white" />
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-medical-gray text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-medical-gray">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-medical-lightBlue rounded-full p-3 group-hover:bg-medical-blue transition-colors duration-300">
                    <post.icon className="h-6 w-6 text-medical-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-medical-blue transition-colors duration-300">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-medical-gray">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-3 truncate">{post.author}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center text-sm text-medical-gray mt-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-medical-blue to-medical-blue/90 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest health articles, wellness tips, and medical insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-medical-orange"
            />
            <button className="bg-medical-orange hover:bg-medical-orange/90 px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
