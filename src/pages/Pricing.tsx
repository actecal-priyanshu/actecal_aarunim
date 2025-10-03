import React from 'react';
import { PricingSection } from '../components/PricingSection';

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '₹2,499',
      period: 'month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 5 team members',
        'Basic analytics',
        '10 workflow automations',
        'Email support',
        'Mobile apps',
        'Basic integrations'
      ],
      cta: 'Start Free Trial',
      href: '/signup?plan=starter'
    },
    {
      name: 'Professional',
      price: '₹6,499',
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced analytics',
        'Unlimited automations',
        'Priority support',
        'Advanced integrations',
        'Custom branding',
        'API access',
        'Advanced security'
      ],
      popular: true,
      cta: 'Start Free Trial',
      href: '/signup?plan=professional'
    },
    {
      name: 'Enterprise',
      price: '₹16,499',
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Custom analytics',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced compliance',
        'SLA guarantee',
        'On-premise option'
      ],
      cta: 'Contact Sales',
      href: '/contact-sales?plan=enterprise'
    }
  ];

  return (
    <div>
      <PricingSection tiers={tiers} />
    </div>
  );
};


