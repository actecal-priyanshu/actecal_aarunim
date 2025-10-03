export interface AppModuleMeta {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  integrations: string[];
  ctaLabel?: string;
}

export interface AppCategory {
  title: string;
  modules: AppModuleMeta[];
}

const createModule = (
  slug: string,
  name: string,
  category: string,
  description: string,
  longDescription: string,
  highlights: string[],
  metrics: { label: string; value: string }[],
  integrations: string[]
): AppModuleMeta => ({
  slug,
  name,
  category,
  description,
  longDescription,
  highlights,
  metrics,
  integrations,
  ctaLabel: 'Book a live demo'
});

const financeModules: AppModuleMeta[] = [
  createModule(
    'accounting',
    'Accounting',
    'Finance',
    'Automate bookkeeping, closing, and reporting for every entity.',
    'Unify multi-company books, automate reconciliation, and close the month in hours instead of weeks. Manage journals, consolidations, and approvals in a single workspace.',
    [
      'AI-assisted reconciliation and anomaly detection',
      'Multi-company, multi-currency support out of the box',
      'Realtime dashboards for CFOs and auditors'
    ],
    [
      { label: 'Avg. close time', value: '4 days' },
      { label: 'Automation coverage', value: '87%' },
      { label: 'Audit-ready exports', value: 'Yes' }
    ],
    ['Stripe', 'Plaid', 'QuickBooks Importer']
  ),
  createModule(
    'invoicing',
    'Invoicing',
    'Finance',
    'Send and reconcile professional invoices in a click.',
    'Generate, personalize, and send invoices automatically when deals close or milestones are met. Let customers pay via card, ACH, or wallets—reconciliation happens instantly.',
    [
      'Automated invoice schedules and reminders',
      'Customer portal with payment status tracking',
      'Support for deposits, installments, and credit notes'
    ],
    [
      { label: 'Payment success', value: '96%' },
      { label: 'Currencies supported', value: '45+' },
      { label: 'Reminder automation', value: 'Smart' }
    ],
    ['Stripe', 'Adyen', 'PayPal']
  ),
  createModule(
    'expenses',
    'Expenses',
    'Finance',
    'Capture receipts and approve reimbursements on the move.',
    'Employees snap a photo, AI categorizes, and managers approve from Slack or email. Expense policies, per diem rules, and analytics keep spending aligned.',
    [
      'Mobile receipt capture with OCR',
      'Custom approval chains and policies',
      'Budget vs. actual analytics in real time'
    ],
    [
      { label: 'Processing time', value: '2 hrs' },
      { label: 'Policy violations caught', value: '+34%' },
      { label: 'Mobile adoption', value: '92%' }
    ],
    ['Slack', 'Excel Export', 'NetSuite']
  ),
  createModule(
    'documents',
    'Documents',
    'Finance',
    'Centralize contracts, bills, and paperwork inside secure folders.',
    'Digitize every contract, invoice, and policy with granular access and automated retention policies. Smart tags and approvals keep critical files organized.',
    [
      'Versioning with audit trails',
      'Role-based sharing and watermarking',
      'Automated retention & destruction rules'
    ],
    [
      { label: 'Docs digitized', value: '1.2M+' },
      { label: 'Search latency', value: '< 1s' },
      { label: 'Compliance', value: 'SOC 2, GDPR' }
    ],
    ['Google Drive', 'Box', 'DocuSign']
  )
];

const salesModules: AppModuleMeta[] = [
  createModule(
    'crm',
    'CRM',
    'Sales',
    'Track leads, meetings, and pipelines with advanced reporting.',
    'Visual pipelines, forecasting, and AI nudges keep reps focused on the right deals. Embedded emails, calls, and notes ensure every touchpoint is captured.',
    [
      'Kanban, list, and calendar pipeline views',
      'Predictive scoring and next-best actions',
      'Forecast categories with weighted rollups'
    ],
    [
      { label: 'Pipeline coverage', value: '98%' },
      { label: 'Win-rate improvement', value: '+23%' },
      { label: 'Integrations', value: '40+' }
    ],
    ['Gmail', 'Outlook', 'LinkedIn Sales Navigator']
  ),
  createModule(
    'sales',
    'Sales',
    'Sales',
    'Quote faster and close deals with automated follow-ups.',
    'Configure quotes, contracts, and upsells with guided selling workflows. Self-service ordering keeps customers engaged while automation handles the busy work.',
    [
      'CPQ with product configurator',
      'Smart contract and renewal reminders',
      'Customer self-service portal'
    ],
    [
      { label: 'Quote-to-close', value: '42% faster' },
      { label: 'Renewal capture', value: '+18%' },
      { label: 'Avg. order value', value: '+11%' }
    ],
    ['DocuSign', 'HubSpot', 'Zapier']
  ),
  createModule(
    'pos',
    'POS',
    'Sales',
    'Unified point of sale that syncs inventory in real time.',
    'Run modern retail, pop-ups, or restaurants with offline-ready POS that syncs inventory, loyalty, and analytics instantly.',
    [
      'Works on iPad, Android, or dedicated terminals',
      'Integrated loyalty and gift cards',
      'Offline mode with automatic sync'
    ],
    [
      { label: 'Stores per tenant', value: 'Unlimited' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Avg. checkout', value: '35 sec' }
    ],
    ['Square', 'Clover', 'Shopify']
  ),
  createModule(
    'subscriptions',
    'Subscriptions',
    'Sales',
    'Manage recurring revenue and self-service portals.',
    'Launch subscription plans, manage trials, and automate renewals with churn analytics that keep revenue predictable.',
    [
      'Self-service upgrades and downgrades',
      'Usage-based billing with proration',
      'Churn and MRR dashboards'
    ],
    [
      { label: 'ARR managed', value: '$450M+' },
      { label: 'Churn reduction', value: '-12%' },
      { label: 'Billing models', value: 'Flat, tiered, usage' }
    ],
    ['Stripe Billing', 'Chargebee', 'Salesforce']
  )
];

const websiteModules: AppModuleMeta[] = [
  createModule(
    'website',
    'Website Builder',
    'Websites',
    'Design responsive sites with drag-and-drop blocks.',
    'Build landing pages, documentation hubs, or microsites in minutes with brand-safe components and localization.',
    [
      'Drag-and-drop editor with theming',
      'A/B testing for sections and CTAs',
      'Localization and multi-site support'
    ],
    [
      { label: 'Page build time', value: '10 min' },
      { label: 'SEO score', value: '90+' },
      { label: 'Page variants', value: 'Unlimited' }
    ],
    ['Google Analytics', 'Figma', 'HubSpot Forms']
  ),
  createModule(
    'ecommerce',
    'eCommerce',
    'Websites',
    'Launch a unified storefront with integrated payments.',
    'Manage catalog, fulfillment, and customer journeys from checkout to returns in one place.',
    [
      'Unified catalog & inventory sync',
      'Abandoned cart automation',
      'Native subscriptions and bundles'
    ],
    [
      { label: 'Conversion lift', value: '+17%' },
      { label: 'Payment providers', value: '50+' },
      { label: 'Daily orders', value: '120K' }
    ],
    ['Shopify', 'Klaviyo', 'ShipStation']
  ),
  createModule(
    'blog',
    'Blog',
    'Websites',
    'Publish articles, podcasts, and updates to grow search traffic.',
    'Collaborate on an editorial calendar with SEO scoring, multimedia embeds, and pillar page templates.',
    [
      'AI-assisted outline and keyword suggestions',
      'Reusable content blocks & embeds',
      'Approval workflows and scheduled publishing'
    ],
    [
      { label: 'SEO uplift', value: '+38%' },
      { label: 'Writers collaborating', value: '250+' },
      { label: 'Publishing cadence', value: 'Flexible' }
    ],
    ['Ahrefs', 'WordPress Importer', 'Twitter']
  ),
  createModule(
    'forum',
    'Forum',
    'Websites',
    'Engage your community with discussions and Q&A.',
    'Launch a branded forum with moderation controls, gamification, and integrated knowledge base links.',
    [
      'Threaded discussions with rich media',
      'Reputation scores and gamification',
      'Moderation queue with alerts'
    ],
    [
      { label: 'Active members', value: '40K+' },
      { label: 'Avg. resolution time', value: '3 hrs' },
      { label: 'Languages', value: '26' }
    ],
    ['Discourse Importer', 'Slack', 'Zendesk']
  )
];

const supplyChainModules: AppModuleMeta[] = [
  createModule(
    'inventory',
    'Inventory',
    'Supply Chain',
    'Real-time stock moves, barcode operations, and replenishment.',
    'Get real-time visibility across warehouses with barcode scanning, wave picking, and replenishment rules.',
    [
      'Advanced routes and putaway strategies',
      'Wave, batch, and zone picking flows',
      'Cycle counting and lot traceability'
    ],
    [
      { label: 'Inventory accuracy', value: '99.3%' },
      { label: 'Lead-time reduction', value: '-21%' },
      { label: 'Warehouses supported', value: '75+' }
    ],
    ['UPS', 'FedEx', 'Flexport']
  ),
  createModule(
    'manufacturing',
    'Manufacturing',
    'Supply Chain',
    'Plan work orders, BoMs, and shop floor tablets.',
    'Orchestrate production with dynamic scheduling, MES tablets, and maintenance alerts that prevent downtime.',
    [
      'Gantt and calendar scheduling',
      'Work order tablets with instructions',
      'Quality checkpoints and alerts'
    ],
    [
      { label: 'Overall equipment effectiveness', value: '+14%' },
      { label: 'Downtime reduction', value: '-18%' },
      { label: 'Supported BoMs', value: 'Multi-level' }
    ],
    ['MES API', 'Autodesk', 'Power BI']
  ),
  createModule(
    'purchase',
    'Purchase',
    'Supply Chain',
    'Streamline procurement with vendor portals and approvals.',
    'Automate RFQs, approvals, and vendor scorecards with consolidated purchasing analytics.',
    [
      'Vendor portal with SLA tracking',
      'Approval workflows & delegation',
      'Spend analytics and budget tracking'
    ],
    [
      { label: 'Procurement cycle', value: '-27%' },
      { label: 'Vendors onboarded', value: '3.5K' },
      { label: 'Savings identified', value: '+12%' }
    ],
    ['Coupa', 'Oracle', 'SAP Ariba']
  ),
  createModule(
    'quality',
    'Quality',
    'Supply Chain',
    'Deploy checks, measures, and alerts across every process.',
    'Capture non-conformities, launch corrective actions, and keep auditors happy with digital trails.',
    [
      'Incoming, in-process, and final checks',
      'CAPA workflows with ownership',
      'Inspection plans with device readings'
    ],
    [
      { label: 'Defect reduction', value: '-31%' },
      { label: 'CAPA closure rate', value: '96%' },
      { label: 'Audit readiness', value: 'Continuous' }
    ],
    ['Jira', 'Tableau', 'ServiceNow']
  )
];

const hrModules: AppModuleMeta[] = [
  createModule(
    'recruitment',
    'Recruitment',
    'Human Resources',
    'Publish openings and collaborate on hiring pipelines.',
    'Plan headcount, sync referrals, and score candidates collaboratively with automated scheduling and feedback requests.',
    [
      'Multi-stage pipelines with scorecards',
      'Calendar integrations and interview kits',
      'Offer letter templates and e-signatures'
    ],
    [
      { label: 'Time-to-hire', value: '-22%' },
      { label: 'Candidate NPS', value: '65' },
      { label: 'Channels tracked', value: '15+' }
    ],
    ['Greenhouse Import', 'Calendly', 'DocuSign']
  ),
  createModule(
    'timeoff',
    'Time Off',
    'Human Resources',
    'Schedule vacations and approvals without spreadsheets.',
    'Self-service leave requests, global policies, and calendar visibility reduce back-and-forth emails.',
    [
      'Policy builder with accrual rules',
      'Team calendar visibility',
      'Slack/Teams notifications'
    ],
    [
      { label: 'Manual work reduced', value: '-70%' },
      { label: 'Compliance regions', value: '40+' },
      { label: 'Employees onboarded', value: '12K' }
    ],
    ['Slack', 'Teams', 'Google Calendar']
  ),
  createModule(
    'payroll',
    'Payroll',
    'Human Resources',
    'Automate payroll runs with localized rules and digital payslips.',
    'Run payroll across countries with localized tax engines, self-service payslips, and consolidated reporting.',
    [
      'Localized compliance packs',
      'Self-service payslips and tax forms',
      'Gross-to-net simulations'
    ],
    [
      { label: 'Payroll accuracy', value: '99.8%' },
      { label: 'Payroll cycles automated', value: '95%' },
      { label: 'Countries supported', value: '34' }
    ],
    ['ADP', 'Workday', 'Xero']
  ),
  createModule(
    'appraisals',
    'Appraisals',
    'Human Resources',
    'Plan performance reviews with goals and feedback loops.',
    'Coordinate review cycles, calibrate scores, and gather 360° feedback aligned to company goals.',
    [
      'Competency libraries and goal tracking',
      'Automated reminders and due dates',
      'Calibration dashboards for managers'
    ],
    [
      { label: 'Completion rate', value: '98%' },
      { label: 'Cycle duration', value: '-35%' },
      { label: 'Recognition increase', value: '+44%' }
    ],
    ['Lattice Import', 'Slack', 'PowerPoint Export']
  )
];

const marketingModules: AppModuleMeta[] = [
  createModule(
    'email',
    'Email Marketing',
    'Marketing',
    'Create segmented email campaigns with drag-and-drop templates.',
    'Design and send personalized campaigns using dynamic content, deliverability tools, and analytics built for B2B growth.',
    [
      'Drag-and-drop editor with dynamic blocks',
      'Deliverability guardrails and inbox previews',
      'Advanced segmentation with behavioral triggers'
    ],
    [
      { label: 'Avg. open rate', value: '38%' },
      { label: 'Deliverability', value: '99.2%' },
      { label: 'Segmentation rules', value: 'Unlimited' }
    ],
    ['SendGrid', 'Amazon SES', 'HubSpot']
  ),
  createModule(
    'sms',
    'SMS Marketing',
    'Marketing',
    'Notify customers instantly with personalized SMS journeys.',
    'Design two-way SMS journeys with personalized branching and automatic opt-out compliance.',
    [
      'Multi-step journeys with branching',
      'Built-in compliance and consent management',
      'Short link tracking and analytics'
    ],
    [
      { label: 'Response rate', value: '24%' },
      { label: 'Opt-out compliance', value: '100%' },
      { label: 'Supported regions', value: '160+' }
    ],
    ['Twilio', 'MessageBird', 'Klaviyo']
  ),
  createModule(
    'automation',
    'Marketing Automation',
    'Marketing',
    'Design lead nurturing flows with multi-step triggers.',
    'Orchestrate email, SMS, and in-app messages across the funnel with AI-driven scoring and attribution.',
    [
      'Visual journey builder with branching',
      'Lead scoring and attribution modeling',
      'Adaptive send times per contact'
    ],
    [
      { label: 'MQL conversion', value: '+29%' },
      { label: 'Journeys automated', value: '420+' },
      { label: 'Channels orchestrated', value: '5' }
    ],
    ['Salesforce', 'Marketo', 'Segment']
  ),
  createModule(
    'surveys',
    'Surveys',
    'Marketing',
    'Collect insights and NPS scores from every interaction.',
    'Launch branded surveys across channels, automate branching logic, and analyze results with AI categorization.',
    [
      'Question banks with templated logic',
      'Real-time dashboards & AI summaries',
      'Multilingual delivery and translation'
    ],
    [
      { label: 'Response volume', value: '2.1M' },
      { label: 'Completion rate', value: '64%' },
      { label: 'Sentiment accuracy', value: '92%' }
    ],
    ['Typeform Import', 'Zapier', 'Slack']
  )
];

const servicesModules: AppModuleMeta[] = [
  createModule(
    'projects',
    'Projects',
    'Services',
    'Plan tasks, milestones, and budgets with Gantt and Kanban.',
    'Plan capacity, track deadlines, and collaborate across clients with workloads, Gantt charts, and automations.',
    [
      'Portfolio-level Gantt and roadmap views',
      'Workload balancing and utilization alerts',
      'Client portals with approvals'
    ],
    [
      { label: 'On-time delivery', value: '+19%' },
      { label: 'Billable utilization', value: '+11%' },
      { label: 'Templates provided', value: '60+' }
    ],
    ['Asana Import', 'Jira', 'Slack']
  ),
  createModule(
    'timesheets',
    'Timesheets',
    'Services',
    'Record billable hours from desktop or mobile.',
    'Capture time with timers, calendar sync, and approvals that flow straight into invoicing and payroll.',
    [
      'Timer, calendar, and manual entry options',
      'AI suggestions based on meetings and commits',
      'Approval chains with reminders'
    ],
    [
      { label: 'Time captured', value: '+28%' },
      { label: 'Billing leakage', value: '-14%' },
      { label: 'Platforms supported', value: 'Web, iOS, Android' }
    ],
    ['Harvest Import', 'GitHub', 'Google Calendar']
  ),
  createModule(
    'field-service',
    'Field Service',
    'Services',
    'Dispatch technicians with routing and offline capabilities.',
    'Optimize schedules, routes, and parts for field teams; capture signatures, photos, and payments onsite.',
    [
      'Drag-and-drop scheduling board',
      'Mobile app with offline workflows',
      'Onsite signature and payment capture'
    ],
    [
      { label: 'Dispatch efficiency', value: '+32%' },
      { label: 'First-time fix rate', value: '+18%' },
      { label: 'Technicians onboarded', value: '5K+' }
    ],
    ['Google Maps', 'SAP', 'QuickBooks']
  ),
  createModule(
    'appointments',
    'Appointments',
    'Services',
    'Offer self-service scheduling and automated reminders.',
    'Manage bookings across teams, rooms, or equipment with smart reminders and payment collection.',
    [
      'Booking widgets for web & email',
      'Automated reminders and follow-ups',
      'Resources and room scheduling'
    ],
    [
      { label: 'No-shows reduced', value: '-41%' },
      { label: 'Bookings per day', value: '2.5K' },
      { label: 'Payment capture', value: 'Optional' }
    ],
    ['Zoom', 'Calendly Import', 'Stripe']
  )
];

const productivityModules: AppModuleMeta[] = [
  createModule(
    'discuss',
    'Discuss',
    'Productivity',
    'Team chat, voice, and video made for hybrid teams.',
    'Bring async and live collaboration together with chat, voice channels, and built-in task capture.',
    [
      'Channels, threads, and shared inboxes',
      'VoIP calling with screen share',
      'Built-in tasks and follow-up reminders'
    ],
    [
      { label: 'Messages/day', value: '480K' },
      { label: 'Voice uptime', value: '99.99%' },
      { label: 'Teams onboarded', value: '2.1K' }
    ],
    ['Slack Import', 'Zoom', 'Google Drive']
  ),
  createModule(
    'knowledge',
    'Knowledge',
    'Productivity',
    'Build an internal wiki with verified, searchable articles.',
    'Publish SOPs, runbooks, and project documentation with verification workflows and AI answers.',
    [
      'Tree, card, and search-first navigation',
      'Verification cadences for owners',
      'AI assistant for instant answers'
    ],
    [
      { label: 'Search success', value: '94%' },
      { label: 'Docs reviewed quarterly', value: '3.4K' },
      { label: 'Languages supported', value: '32' }
    ],
    ['Confluence Import', 'Slack', 'Notion']
  ),
  createModule(
    'voip',
    'VoIP',
    'Productivity',
    'Connect calls, queues, and analytics inside one platform.',
    'Launch virtual phone systems with call routing, IVRs, and real-time coaching for sales and support teams.',
    [
      'IVR builder and call routing rules',
      'Live coach, whisper, and barge-in',
      'Transcripts with sentiment analysis'
    ],
    [
      { label: 'Call quality', value: '4.8 / 5' },
      { label: 'Countries covered', value: '120+' },
      { label: 'Compliance', value: 'HIPAA, GDPR' }
    ],
    ['Twilio', 'Aircall', 'Salesforce']
  ),
  createModule(
    'whatsapp',
    'WhatsApp',
    'Productivity',
    'Conversational messaging with templates and broadcast lists.',
    'Coordinate customer success, support, and sales outreach with verified WhatsApp numbers and flows.',
    [
      'Template manager with approvals',
      'Multi-agent inbox with auto-routing',
      'Broadcast campaigns with analytics'
    ],
    [
      { label: 'Response SLA', value: '< 5 min' },
      { label: 'Agents supported', value: '1K+' },
      { label: 'Compliance', value: 'WhatsApp BSP' }
    ],
    ['Twilio', '360dialog', 'Zendesk']
  )
];

export const appCategories: AppCategory[] = [
  { title: 'Finance', modules: financeModules },
  { title: 'Sales', modules: salesModules },
  { title: 'Websites', modules: websiteModules },
  { title: 'Supply Chain', modules: supplyChainModules },
  { title: 'Human Resources', modules: hrModules },
  { title: 'Marketing', modules: marketingModules },
  { title: 'Services', modules: servicesModules },
  { title: 'Productivity', modules: productivityModules }
];

export const appModules = appCategories.flatMap((category) => category.modules);
