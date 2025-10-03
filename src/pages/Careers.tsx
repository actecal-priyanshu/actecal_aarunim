import React from 'react';
import { PageHero } from '../components/PageHero';
import { HandBullets } from '../components/CreativeBits';
import { GothicH2, GothicH3 } from '../components/GothicHeading';
import { DrippingText } from '../components/DrippingText';

export const Careers: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Careers at BizSuite"
        subtitle="Work with us. Build the future of business software."
        imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
      />
      <section style={{ padding: '0 24px 40px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <DrippingText 
            text="At BizSuite, we're not just building apps — we're building the foundation for how businesses of all sizes will work in the future. Our mission is simple but ambitious: help teams move faster and work as one. If you're passionate about creating technology that makes a real impact, we'd love for you to join our journey."
            style={{ color: '#475569', lineHeight: 1.9, fontSize: '1rem' }}
          />

          <GothicH2 text="Why Work at BizSuite?" style={{ fontSize: '1.8rem', marginBottom: '1rem' }} />
          <GothicH3 text="1. A Mission That Matters" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }} />
          <DrippingText 
            text="We're creating a modular, unified platform that simplifies work for thousands of companies—every decision moves us closer to that mission."
            style={{ color: '#475569', fontSize: '1rem' }}
          />
          <GothicH3 text="2. Growth with Impact" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }} />
          <DrippingText 
            text="Own big problems early. Your work shapes how companies worldwide operate and grow."
            style={{ color: '#475569', fontSize: '1rem' }}
          />
          <GothicH3 text="3. People First, Always" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }} />
          <DrippingText 
            text="Openness, empathy, and collaboration. Ideas matter here—titles don't."
            style={{ color: '#475569', fontSize: '1rem' }}
          />
          <GothicH3 text="4. Flexibility & Balance" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }} />
          <DrippingText 
            text="Hybrid/remote options and outcome‑focused culture so you can do your best work and have a life outside it."
            style={{ color: '#475569', fontSize: '1rem' }}
          />

          <GothicH2 text="Life at BizSuite" style={{ marginTop: 24, fontSize: '1.8rem', marginBottom: '1rem' }} />
          <HandBullets
            items={[
              'Collaborative culture: cross‑functional teams solving problems together',
              'Continuous learning: mentorship, workshops, and learning stipends',
              'Innovation‑driven: we test, experiment, and iterate',
              'Diversity & inclusion: different voices make better products'
            ]}
          />

          <GothicH2 text="Our Values" style={{ marginTop: 24, fontSize: '1.8rem', marginBottom: '1rem' }} />
          <HandBullets
            items={[
              'Modular First – start small, grow smart',
              'Open by Default – be transparent and build trust',
              'Delightfully Usable – craft and polish matter',
              'One Team – work as one, win as one'
            ]}
          />

          <GothicH2 text="Opportunities" style={{ marginTop: 24, fontSize: '1.8rem', marginBottom: '1rem' }} />
          <HandBullets
            items={[
              'Engineering (Frontend, Backend, Full Stack, DevOps, AI/ML)',
              'Product & Design',
              'Sales & Customer Success',
              'Marketing & Growth',
              'Operations & HR'
            ]}
          />
          <p style={{ color: '#475569' }}>Don’t see the perfect role? Send us your resume and let’s explore opportunities together.</p>

          <GothicH2 text="Perks & Benefits" style={{ marginTop: 24, fontSize: '1.8rem', marginBottom: '1rem' }} />
          <HandBullets
            items={[
              'Competitive salary & equity options',
              'Health and wellness programs',
              'Flexible work (remote & hybrid)',
              'Learning and development budget',
              'Generous leave policy',
              'Team offsites & retreats',
              'A culture of recognition and celebration'
            ]}
          />

          <GothicH2 text="Hear from Our Team" style={{ marginTop: 24, fontSize: '1.8rem', marginBottom: '1rem' }} />
          <blockquote style={{ color: '#334155', margin: '8px 0' }}>
            “At BizSuite, I get to work on challenging problems while collaborating with some of the smartest and kindest people I’ve ever met.” – Product Engineer
          </blockquote>
          <blockquote style={{ color: '#334155', margin: '8px 0' }}>
            “The flexibility and trust here are unmatched. I feel supported both as a professional and as a person.” – HR Manager
          </blockquote>

          <GothicH2 text="Build the Future with Us" style={{ marginTop: 24, fontSize: '1.8rem', marginBottom: '1rem' }} />
          <p style={{ color: '#475569' }}>BizSuite is growing—and so is our impact. If you want to reshape how businesses work and have fun while doing it, we’d love to meet you.</p>
          <p>👉 <a href="/contact" style={{ color: '#667eea', textDecoration: 'none' }}>Explore open roles or drop us your resume</a>. Let’s build the future of work, together.</p>
        </div>
      </section>
    </main>
  );
};


