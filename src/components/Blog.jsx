import { useState } from "react";

export const Blog = ({ onReadMore }) => {
  const [blogs] = useState([
    {
      id: 1,
      title: 'Building Scalable APIs with FastAPI',
      excerpt: 'Learn how to build high-performance REST APIs using FastAPI, including best practices for authentication, validation, and async operations.',
      date: '2024-10-01',
      author: 'Your Name',
      readTime: '8 min read',
      tags: ['FastAPI', 'Python', 'Backend'],
      content: `
# Building Scalable APIs with FastAPI

FastAPI has revolutionized the way we build APIs in Python. Its modern features and incredible performance make it the go-to choice for modern web applications.

## Why FastAPI?

FastAPI offers several advantages:
- **High Performance**: Comparable to NodeJS and Go
- **Type Safety**: Built-in Pydantic validation
- **Automatic Documentation**: Interactive API docs with Swagger UI
- **Async Support**: Native async/await support

## Getting Started

First, install FastAPI:
\`\`\`bash
pip install fastapi uvicorn
\`\`\`

## Creating Your First Endpoint

Here's a simple example:
\`\`\`python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
\`\`\`

## Best Practices

1. Use dependency injection for database connections
2. Implement proper error handling
3. Add authentication middleware
4. Use background tasks for heavy operations

## Conclusion

FastAPI is an excellent choice for building modern APIs. Its speed, type safety, and developer experience make it stand out from other frameworks.
      `
    },
    {
      id: 2,
      title: 'PostgreSQL vs MongoDB: Choosing the Right Database',
      excerpt: 'A comprehensive comparison of PostgreSQL and MongoDB, helping you make informed decisions for your next project.',
      date: '2024-09-28',
      author: 'Your Name',
      readTime: '10 min read',
      tags: ['Database', 'PostgreSQL', 'MongoDB'],
      content: `
# PostgreSQL vs MongoDB: Choosing the Right Database

Choosing the right database is crucial for your application's success. Let's explore the differences between PostgreSQL and MongoDB.

## PostgreSQL: The Relational Powerhouse

PostgreSQL is a powerful, open-source relational database with:
- ACID compliance
- Complex queries with JOINs
- Strong data integrity
- Rich ecosystem

## MongoDB: The Document Database

MongoDB offers:
- Flexible schema
- Horizontal scalability
- Fast development
- JSON-like documents

## When to Use PostgreSQL

Use PostgreSQL when:
- You need complex relationships
- Data integrity is critical
- You require transactions
- You have structured data

## When to Use MongoDB

Choose MongoDB when:
- Schema flexibility is needed
- You're working with unstructured data
- Horizontal scaling is priority
- Rapid development is required

## Conclusion

Both databases have their place. Choose based on your specific requirements, not trends.
      `
    },
    {
      id: 3,
      title: 'DevOps Best Practices for 2024',
      excerpt: 'Essential DevOps practices every developer should know, from CI/CD pipelines to container orchestration.',
      date: '2024-09-25',
      author: 'Your Name',
      readTime: '12 min read',
      tags: ['DevOps', 'Docker', 'CI/CD'],
      content: `
# DevOps Best Practices for 2024

DevOps continues to evolve. Here are the essential practices you should implement in your workflow.

## Continuous Integration/Continuous Deployment

CI/CD is the backbone of modern DevOps:
- Automated testing
- Frequent deployments
- Quick feedback loops
- Reduced manual errors

## Infrastructure as Code

Treat your infrastructure like code:
\`\`\`yaml
version: '3.8'
services:
  web:
    image: nginx
    ports:
      - "80:80"
\`\`\`

## Container Orchestration

Docker and Kubernetes are essential:
- Consistent environments
- Easy scaling
- Resource efficiency
- Service discovery

## Monitoring and Logging

Never deploy blind:
- Real-time metrics
- Centralized logging
- Alert systems
- Performance tracking

## Conclusion

Implementing these practices will significantly improve your deployment process and application reliability.
      `
    }
  ]);

  return (
    <section className="py-24 bg-black" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Latest <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Blog Posts</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing my knowledge and experiences in web development, databases, and DevOps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-2xl"></div>
              
              {/* Card */}
              <div className="relative bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-cyan-500 transition-all duration-500 transform group-hover:scale-105 h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">{blog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-900 text-cyan-400 text-xs rounded-full border border-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => onReadMore(blog)}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold group/btn"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
