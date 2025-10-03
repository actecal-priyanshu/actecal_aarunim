import React, { useEffect, useState } from 'react';
import { Hero } from '../components/Hero';
import HandwrittenHero from '../components/HandwrittenHero';
import { FeatureGrid } from '../components/FeatureGrid';
import { Testimonials } from '../components/Testimonials';
import { PricingSection } from '../components/PricingSection';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { StatsSection } from '../components/StatsSection';
import { DoodleBackground, StickerButton } from '../components/CreativeBits';
import { AnimatedBackground } from '../components/AnimatedBackground';
import AppDirectory from '../components/AppDirectory';
import QuickStartSteps from '../components/QuickStartSteps';
import GradientWaveDivider from '../components/GradientWaveDivider';
import FloatingCTA from '../components/FloatingCTA';
import ElevateSection from '../components/ElevateSection';

type HeroData = {
  heading: string;
  subheading: string;
  cta: { label: string; href: string };
  stats?: { label: string; value: string }[];
  badges?: string[];
};

type Section = { 
  id: string; 
  title: string; 
  description: string; 
  features: string[];
  icon?: string;
  color?: string;
  cta?: { label: string; href: string };
};

type Testimonial = { 
  author: string; 
  quote: string;
  role?: string;
  company?: string;
  rating?: number;
  avatar?: string;
  logo?: string;
};

type PricingTier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
};

export const Home: React.FC = () => {
  const [hero, setHero] = useState<HeroData | null>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [pricingTiers, setPricingTiers] = useState<PricingTier[]>([]);
  const [stats, setStats] = useState<{ value: number; label: string; suffix?: string; prefix?: string; icon?: string; color?: string }[]>([]);

  useEffect(() => {
    // Simulate API calls with enhanced data
    const fetchAll = async () => {
      // Hero data with enhanced content
      const heroData: HeroData = {
        heading: "Transform Your Business with Modern Apps",
        subheading: "Unify your workflow with our comprehensive suite of business applications. Streamline operations, boost productivity, and scale with confidence.",
        cta: { label: "Start Free Trial", href: "/signup" },
        badges: ["🚀 New Features", "⚡ Lightning Fast", "🔒 Enterprise Security"],
        stats: [
          { label: "Active Users", value: "50,000+" },
          { label: "Countries", value: "150+" },
          { label: "Uptime", value: "99.9%" }
        ]
      };

      // Feature sections with enhanced content
      const featureSections: Section[] = [
        {
          id: "analytics",
          title: "Advanced Analytics",
          description: "Get deep insights into your business performance with real-time dashboards and customizable reports.",
          features: [
            "Real-time data visualization",
            "Custom dashboard builder",
            "Predictive analytics",
            "Export to multiple formats"
          ],
          icon: "📊",
          color: "#667eea",
          cta: { label: "Learn More", href: "/features/analytics" }
        },
        {
          id: "automation",
          title: "Workflow Automation",
          description: "Automate repetitive tasks and create intelligent workflows that adapt to your business needs.",
          features: [
            "Drag & drop workflow builder",
            "Conditional logic",
            "API integrations",
            "Scheduled automation"
          ],
          icon: "⚡",
          color: "#f6ad55",
          cta: { label: "Explore", href: "/features/automation" }
        },
        {
          id: "collaboration",
          title: "Team Collaboration",
          description: "Foster better teamwork with integrated communication tools and project management features.",
          features: [
            "Real-time chat & video calls",
            "Project tracking",
            "File sharing & version control",
            "Team performance metrics"
          ],
          icon: "🤝",
          color: "#48bb78",
          cta: { label: "Discover", href: "/features/collaboration" }
        },
        {
          id: "security",
          title: "Enterprise Security",
          description: "Bank-grade security with advanced encryption, compliance, and access control management.",
          features: [
            "End-to-end encryption",
            "SOC 2 compliance",
            "Multi-factor authentication",
            "Audit logging"
          ],
          icon: "🔒",
          color: "#f56565",
          cta: { label: "Secure Now", href: "/features/security" }
        },
        {
          id: "integration",
          title: "Seamless Integration",
          description: "Connect with your favorite tools and services through our extensive integration library.",
          features: [
            "500+ app integrations",
            "Custom webhook support",
            "REST API access",
            "Zapier compatibility"
          ],
          icon: "🔗",
          color: "#9f7aea",
          cta: { label: "Integrate", href: "/features/integrations" }
        },
        {
          id: "mobile",
          title: "Mobile First",
          description: "Access your business data anywhere with our responsive mobile applications.",
          features: [
            "iOS & Android apps",
            "Offline functionality",
            "Push notifications",
            "Touch-optimized interface"
          ],
          icon: "📱",
          color: "#38b2ac",
          cta: { label: "Download", href: "/mobile" }
        }
      ];

      // Enhanced testimonials
      const testimonialData: Testimonial[] = [
        {
          author: "Sarah Johnson",
          role: "CTO",
          company: "TechFlow Inc.",
          quote: "BizSuite transformed our entire development workflow. We've seen a 40% increase in team productivity and much better project visibility.",
          rating: 5,
          avatar: ""
        },
        {
          author: "Michael Chen",
          role: "Operations Manager",
          company: "Global Retail Co.",
          quote: "The automation features alone saved us 20 hours per week. The ROI was immediate and the support team is incredibly responsive.",
          rating: 5,
          avatar: ""
        },
        {
          author: "Emily Rodriguez",
          role: "Product Manager",
          company: "StartupXYZ",
          quote: "As a growing startup, we needed a solution that could scale with us. BizSuite has been perfect - powerful yet simple to use.",
          rating: 5,
          avatar: ""
        }
      ];

      // Pricing tiers
      const pricingData: PricingTier[] = [
        {
          name: "Starter",
          price: "₹2,499",
          period: "month",
          description: "Perfect for small teams getting started",
          features: [
            "Up to 5 team members",
            "Basic analytics",
            "10 workflow automations",
            "Email support",
            "Mobile apps",
            "Basic integrations"
          ],
          cta: "Start Free Trial",
          href: "/signup?plan=starter"
        },
        {
          name: "Professional",
          price: "₹6,499",
          period: "month",
          description: "Ideal for growing businesses",
          features: [
            "Up to 25 team members",
            "Advanced analytics",
            "Unlimited automations",
            "Priority support",
            "Advanced integrations",
            "Custom branding",
            "API access",
            "Advanced security"
          ],
          popular: true,
          cta: "Start Free Trial",
          href: "/signup?plan=professional"
        },
        {
          name: "Enterprise",
          price: "₹16,499",
          period: "month",
          description: "For large organizations",
          features: [
            "Unlimited team members",
            "Custom analytics",
            "White-label solution",
            "Dedicated support",
            "Custom integrations",
            "Advanced compliance",
            "SLA guarantee",
            "On-premise option"
          ],
          cta: "Contact Sales",
          href: "/contact"
        }
      ];

      // Stats data
      const statsData = [
        { value: 50000, label: "Active Users", icon: "👥", color: "#667eea" },
        { value: 150, label: "Countries", icon: "🌍", color: "#48bb78" },
        { value: 99.9, label: "Uptime %", icon: "⚡", color: "#f6ad55" },
        { value: 500, label: "Integrations", icon: "🔗", color: "#9f7aea" }
      ];

      setHero(heroData);
      setSections(featureSections);
      setTestimonials(testimonialData);
      setPricingTiers(pricingData);
      setStats(statsData);
    };

    fetchAll();
  }, []);

  return (
    <div>
      <AnimatedBackground variant="gradient" intensity="high">
        <HandwrittenHero 
          heading="Run your entire business from one modern workspace."
          highlight="one modern workspace."
          subheading="Connected apps that automate work and scale with you."
          underlineWord="automate"
          primaryCta={{ label: "Start now - It's free", href: "/signup" }}
          secondaryCta={{ label: 'Meet an advisor', href: '#advisor' }}
          priceNote={"580.00 ₹ / month for ALL apps"}
        />
      </AnimatedBackground>
      <ElevateSection />

      <FeatureGrid sections={sections} />
      <GradientWaveDivider />
      {/* Keep the rest minimal and customer-centric */}
      <QuickStartSteps />
      <PricingSection tiers={pricingTiers} />
      <FloatingCTA 
        title="Ready to level up your operations?"
        subtitle="Start your 14-day free trial. No credit card required."
        ctaText="Get Started"
        href="/signup"
      />
      {/* <AnimatedBackground variant="waves" intensity="low">
        <NewsletterSignup 
          title="Stay Ahead of the Curve"
          subtitle="Get exclusive insights, product updates, and industry trends delivered to your inbox. Join 50,000+ professionals who trust us."
          buttonText={''}
        />
        <div style={{ textAlign: 'center', marginTop: -52, marginBottom: -8 }}>
          <StickerButton href="/signup">Subscribe Now</StickerButton>
        </div>
      </AnimatedBackground> */}
    </div>
  );
};


