import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { posts } from './blogData';

export const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main style={{ padding: '40px 24px' }}>
        <div className="container">
          <h2 style={{ marginTop: 0 }}>Post not found</h2>
          <Link to="/blog">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        title={post.title}
        subtitle={`${post.category} • ${post.date} • ${post.read} read`}
        imageUrl={undefined}
        emphasize="none"
      />
      <section style={{ padding: '0 24px 60px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Brief version: show summary and one concise paragraph */}
          <p style={{ color: '#475569', lineHeight: 1.8, fontSize: '1.05rem', marginTop: 0 }}>
            {post.summary}
          </p>
          {post.content.slice(0, 1).map((para, idx) => (
            <p key={idx} style={{ color: '#334155', lineHeight: 1.8, fontSize: '1rem' }}>{para}</p>
          ))}
          <div style={{ marginTop: 24 }}>
            <Link to="/blog">← Back to Blog</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;


