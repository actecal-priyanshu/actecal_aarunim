import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../styles/GetStarted.css';

// App selection data from ChooseApps page
type AppTile = { key: string; label: string; icon: string; color: string };
type AppCategory = { name: string; tiles: AppTile[] };

const APP_CATEGORIES: AppCategory[] = [
  {
    name: 'Website',
    tiles: [
      { key: 'website', label: 'Website', icon: 'fa-solid fa-globe', color: '#06b6d4' },
      { key: 'ecommerce', label: 'eCommerce', icon: 'fa-solid fa-cart-shopping', color: '#a855f7' },
      { key: 'blog', label: 'Blog', icon: 'fa-solid fa-pen-nib', color: '#ef4444' },
      { key: 'forum', label: 'Forum', icon: 'fa-solid fa-comments', color: '#10b981' },
      { key: 'elearning', label: 'eLearning', icon: 'fa-solid fa-graduation-cap', color: '#22c55e' },
      { key: 'events', label: 'Events', icon: 'fa-solid fa-calendar-days', color: '#f97316' },
    ],
  },
  {
    name: 'Sales',
    tiles: [
      { key: 'crm', label: 'CRM', icon: 'fa-solid fa-users', color: '#14b8a6' },
      { key: 'sales', label: 'Sales', icon: 'fa-solid fa-chart-line', color: '#a855f7' },
      { key: 'pos', label: 'Point of Sale', icon: 'fa-solid fa-store', color: '#f59e0b' },
      { key: 'restaurant', label: 'Restaurant', icon: 'fa-solid fa-utensils', color: '#f97316' },
      { key: 'subscriptions', label: 'Subscriptions', icon: 'fa-solid fa-arrows-rotate', color: '#06b6d4' },
      { key: 'rental', label: 'Rental', icon: 'fa-solid fa-key', color: '#8b5cf6' },
    ],
  },
  {
    name: 'Finance',
    tiles: [
      { key: 'invoicing', label: 'Invoicing', icon: 'fa-solid fa-file-invoice-dollar', color: '#3b82f6' },
      { key: 'accounting', label: 'Accounting', icon: 'fa-solid fa-coins', color: '#10b981' },
      { key: 'expenses', label: 'Expenses', icon: 'fa-solid fa-wallet', color: '#06b6d4' },
      { key: 'sign', label: 'Sign', icon: 'fa-solid fa-signature', color: '#0ea5e9' },
      { key: 'equity', label: 'Equity', icon: 'fa-solid fa-chart-pie', color: '#f59e0b' },
      { key: 'esg', label: 'ESG', icon: 'fa-solid fa-leaf', color: '#22c55e' },
    ],
  },
  {
    name: 'Services',
    tiles: [
      { key: 'project', label: 'Project', icon: 'fa-solid fa-diagram-project', color: '#10b981' },
      { key: 'timesheets', label: 'Timesheets', icon: 'fa-solid fa-stopwatch', color: '#64748b' },
      { key: 'field-service', label: 'Field Service', icon: 'fa-solid fa-bolt', color: '#f59e0b' },
      { key: 'helpdesk', label: 'Helpdesk', icon: 'fa-solid fa-headphones', color: '#10b981' },
      { key: 'appointments', label: 'Appointments', icon: 'fa-solid fa-calendar-check', color: '#a855f7' },
      { key: 'planning', label: 'Planning', icon: 'fa-solid fa-calendar-days', color: '#22c55e' },
    ],
  },
  {
    name: 'Productivity',
    tiles: [
      { key: 'documents', label: 'Documents', icon: 'fa-regular fa-file-lines', color: '#f97316' },
      { key: 'approvals', label: 'Approvals', icon: 'fa-solid fa-circle-check', color: '#22c55e' },
      { key: 'knowledge', label: 'Knowledge', icon: 'fa-solid fa-book', color: '#0ea5e9' },
    ],
  },
  {
    name: 'Supply Chain',
    tiles: [
      { key: 'inventory', label: 'Inventory', icon: 'fa-solid fa-box', color: '#a855f7' },
      { key: 'manufacturing', label: 'Manufacturing', icon: 'fa-solid fa-industry', color: '#10b981' },
      { key: 'purchase', label: 'Purchase', icon: 'fa-solid fa-cart-shopping', color: '#22c55e' },
      { key: 'maintenance', label: 'Maintenance', icon: 'fa-solid fa-screwdriver-wrench', color: '#0ea5e9' },
      { key: 'quality', label: 'Quality', icon: 'fa-solid fa-circle-check', color: '#f59e0b' },
      { key: 'repair', label: 'Repair', icon: 'fa-solid fa-wrench', color: '#ef4444' },
    ],
  },
  {
    name: 'Marketing',
    tiles: [
      { key: 'email-marketing', label: 'Email Marketing', icon: 'fa-solid fa-envelope', color: '#3b82f6' },
      { key: 'sms-marketing', label: 'SMS Marketing', icon: 'fa-solid fa-comment-dots', color: '#06b6d4' },
      { key: 'survey', label: 'Survey', icon: 'fa-solid fa-chart-simple', color: '#8b5cf6' },
      { key: 'social-marketing', label: 'Social Marketing', icon: 'fa-solid fa-heart', color: '#f97316' },
    ],
  },
  {
    name: 'Human Resources',
    tiles: [
      { key: 'employees', label: 'Employees', icon: 'fa-solid fa-user-group', color: '#8b5cf6' },
      { key: 'attendances', label: 'Attendances', icon: 'fa-solid fa-user-check', color: '#f59e0b' },
      { key: 'recruitment', label: 'Recruitment', icon: 'fa-solid fa-user-plus', color: '#22c55e' },
      { key: 'time-off', label: 'Time Off', icon: 'fa-solid fa-umbrella-beach', color: '#06b6d4' },
      { key: 'appraisals', label: 'Appraisals', icon: 'fa-solid fa-star', color: '#f59e0b' },
      { key: 'fleet', label: 'Fleet', icon: 'fa-solid fa-car-side', color: '#a855f7' },
      { key: 'payroll', label: 'Payroll', icon: 'fa-solid fa-file-invoice', color: '#ef4444' },
    ],
  },
  {
    name: 'Customizations',
    tiles: [
      { key: 'studio', label: 'Studio', icon: 'fa-solid fa-screwdriver-wrench', color: '#06b6d4' },
    ],
  },
];

export const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState({
    domain: '',
    companyName: '',
    industry: '',
    budgetRange: '',
    timeline: '',
    contactEmail: '',
    contactPhone: '',
    projectDescription: '',
    selectedApps: [] as string[], // Add selected apps to form data
  });
  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showFormTitle, setShowFormTitle] = useState(false);
  const [showFormDesc, setShowFormDesc] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();
  const [search] = useSearchParams();

  // Form validation states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    const t2 = setTimeout(() => setShowTitle(true), 300);
    const t3 = setTimeout(() => setShowSubtitle(true), 600);
    const t4 = setTimeout(() => setShowForm(true), 900);
    const t5 = setTimeout(() => setShowFormTitle(true), 1200);
    const t6 = setTimeout(() => setShowFormDesc(true), 1400);
    const t7 = setTimeout(() => setShowFields(true), 1600);
    const t8 = setTimeout(() => setShowButtons(true), 2000);
    return () => {
      clearTimeout(t); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
      clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); clearTimeout(t8);
    };
  }, []);

  const validateField = (name: string, value: string | string[]) => {
    const newErrors = { ...errors };

    switch (name) {
      case 'domain':
        if (!value || typeof value !== 'string') {
          newErrors.domain = 'Domain is required';
        } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.[a-zA-Z]{2,}$/.test(value)) {
          newErrors.domain = 'Please enter a valid domain (e.g., yourcompany.com)';
        } else {
          delete newErrors.domain;
        }
        break;
      case 'companyName':
        if (!value || typeof value !== 'string' || !value.trim()) {
          newErrors.companyName = 'Company name is required';
        } else {
          delete newErrors.companyName;
        }
        break;
      case 'contactEmail':
        if (!value || typeof value !== 'string') {
          newErrors.contactEmail = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.contactEmail = 'Please enter a valid email address';
        } else {
          delete newErrors.contactEmail;
        }
        break;
      case 'contactPhone':
        if (!value || typeof value !== 'string') {
          newErrors.contactPhone = 'Phone number is required';
        } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(value.replace(/\s/g, ''))) {
          newErrors.contactPhone = 'Please enter a valid phone number';
        } else {
          delete newErrors.contactPhone;
        }
        break;
      case 'projectDescription':
        if (!value || typeof value !== 'string' || !value.trim()) {
          newErrors.projectDescription = 'Project description is required';
        } else if (value.trim().length < 50) {
          newErrors.projectDescription = 'Please provide at least 50 characters';
        } else {
          delete newErrors.projectDescription;
        }
        break;
      default:
        delete newErrors[name];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name as keyof typeof formData]);
  };

  const canContinue = Boolean(
    formData.domain &&
    formData.companyName.trim() &&
    formData.contactEmail &&
    formData.contactPhone &&
    formData.projectDescription.trim().length >= 50 &&
    formData.selectedApps.length > 0 &&
    Object.keys(errors).length === 0
  );

  // App selection functionality
  const toggleAppSelection = (appKey: string) => {
    setFormData(prev => ({
      ...prev,
      selectedApps: prev.selectedApps.includes(appKey)
        ? prev.selectedApps.filter(key => key !== appKey)
        : [...prev.selectedApps, appKey]
    }));
  };

  const getSelectedAppsCount = () => formData.selectedApps.length;

  const onContinue = () => {
    if (!canContinue) return;
    const brief = encodeURIComponent(JSON.stringify(formData));
    const selectedParam = search.get('selected');
    const parts = [] as string[];
    if (selectedParam) parts.push(`selected=${encodeURIComponent(selectedParam)}`);
    parts.push(`brief=${brief}`);
    const qs = parts.length ? `?${parts.join('&')}` : '';
    navigate(`/start-now${qs}`);
    handleSuccessfulSubmit();
  };

  const getFieldError = (fieldName: string) => {
    return touched[fieldName] && errors[fieldName] ? errors[fieldName] : '';
  };

  // Multi-step form functionality
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set([]));

  const steps = [
    {
      id: 1,
      title: 'Company Details',
      description: 'Basic information about your company',
      fields: ['domain', 'companyName', 'industry'],
      icon: 'fas fa-building',
    },
    {
      id: 2,
      title: 'Project Planning',
      description: 'Budget and timeline for your project',
      fields: ['budgetRange', 'timeline'],
      icon: 'fas fa-calendar-alt',
    },
    {
      id: 3,
      title: 'App Selection',
      description: 'Choose the apps you need',
      fields: ['selectedApps'],
      icon: 'fas fa-puzzle-piece',
    },
    {
      id: 4,
      title: 'Contact Information',
      description: 'How we can reach you',
      fields: ['contactEmail', 'contactPhone'],
      icon: 'fas fa-user',
    },
    {
      id: 5,
      title: 'Project Description',
      description: 'Tell us about your vision',
      fields: ['projectDescription'],
      icon: 'fas fa-lightbulb',
    },
  ];

  const getStepFields = (stepId: number) => {
    return steps.find(step => step.id === stepId)?.fields || [];
  };

  const isStepValid = (stepId: number) => {
    const stepFields = getStepFields(stepId);
    return stepFields.every(field => {
      const value = formData[field as keyof typeof formData];
      if (field === 'projectDescription') {
        return typeof value === 'string' && value.trim().length >= 50;
      }
      if (field === 'selectedApps') {
        return Array.isArray(value) && value.length > 0;
      }
      return field === 'domain' || field === 'companyName' || field === 'contactEmail' || field === 'contactPhone'
        ? (typeof value === 'string' && Boolean(value))
        : true; // Optional fields
    });
  };

  const canGoToStep = (stepId: number) => {
    // Can go to previous steps or next step if current step is valid
    if (stepId < currentStep) return true;
    if (stepId === currentStep + 1) return isStepValid(currentStep);
    return false;
  };

  const goToStep = (stepId: number) => {
    if (canGoToStep(stepId)) {
      setCurrentStep(stepId);
      if (isStepValid(currentStep) && !completedSteps.has(currentStep)) {
        setCompletedSteps(prev => new Set([...Array.from(prev), currentStep]));
      }
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length && isStepValid(currentStep)) {
      setCompletedSteps(prev => new Set([...Array.from(prev), currentStep]));
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Check if all steps are completed
  const allStepsCompleted = () => {
    return steps.every(step => isStepValid(step.id));
  };

  const getProgressPercentage = () => {
    const requiredFields = ['domain', 'companyName', 'contactEmail', 'contactPhone', 'projectDescription'];
    const filledRequired = requiredFields.filter(field => {
      const value = formData[field as keyof typeof formData];
      return field === 'projectDescription' ? (typeof value === 'string' && value.trim().length >= 50) : (typeof value === 'string' && Boolean(value));
    }).length;
    const optionalFields = ['industry', 'budgetRange', 'timeline'];
    const filledOptional = optionalFields.filter(field => {
      const value = formData[field as keyof typeof formData];
      return typeof value === 'string' && Boolean(value);
    }).length;
    const filledApps = formData.selectedApps.length > 0 ? 1 : 0;

    const requiredProgress = (filledRequired / requiredFields.length) * 60;
    const optionalProgress = (filledOptional / optionalFields.length) * 30;
    const appsProgress = filledApps * 10;
    return Math.round(requiredProgress + optionalProgress + appsProgress);
  };

  // Auto-save functionality
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load draft on component mount
  useEffect(() => {
    const savedDraft = localStorage.getItem('getStartedDraft');
    if (savedDraft) {
      try {
        const parsedData = JSON.parse(savedDraft);
        const savedTime = new Date(parsedData.timestamp);
        const hoursSinceSave = (Date.now() - savedTime.getTime()) / (1000 * 60 * 60);

        // Only restore if saved within last 24 hours
        if (hoursSinceSave < 24) {
          setFormData({
            domain: parsedData.domain || '',
            companyName: parsedData.companyName || '',
            industry: parsedData.industry || '',
            budgetRange: parsedData.budgetRange || '',
            timeline: parsedData.timeline || '',
            contactEmail: parsedData.contactEmail || '',
            contactPhone: parsedData.contactPhone || '',
            projectDescription: parsedData.projectDescription || '',
            selectedApps: parsedData.selectedApps || [],
          });
          setLastSaved(savedTime);
        } else {
          // Clear old draft
          localStorage.removeItem('getStartedDraft');
        }
      } catch (error) {
        console.error('Error loading draft:', error);
        localStorage.removeItem('getStartedDraft');
      }
    }
  }, []);

  // Clear draft when form is successfully submitted
  const handleSuccessfulSubmit = () => {
    localStorage.removeItem('getStartedDraft');
    setLastSaved(null);
  };

  const clearForm = () => {
    setFormData({
      domain: '',
      companyName: '',
      industry: '',
      budgetRange: '',
      timeline: '',
      contactEmail: '',
      contactPhone: '',
      projectDescription: '',
      selectedApps: [],
    });
    setErrors({});
    setTouched({});
    setCurrentStep(1);
    setCompletedSteps(new Set([]));
  };

  const autoSave = useCallback(() => {
    if (Object.values(formData).some(value => {
      if (Array.isArray(value)) return value.length > 0;
      return typeof value === 'string' && value.trim() !== '';
    })) {
      setIsSaving(true);
      const draftData = {
        ...formData,
        timestamp: new Date().toISOString(),
      };

      try {
        localStorage.setItem('getStartedDraft', JSON.stringify(draftData));
        setLastSaved(new Date());

        // Simulate save delay for better UX
        setTimeout(() => {
          setIsSaving(false);
        }, 500);
      } catch (error) {
        console.error('Error saving draft:', error);
        setIsSaving(false);
      }
    }
  }, [formData]);

  // Trigger auto-save on form data changes
  useEffect(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      autoSave();
    }, 2000); // Auto-save after 2 seconds of inactivity

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [formData, autoSave]);

  return (
    <main className="getstarted-fullpage">
      {/* Enhanced Background Pattern */}
      <div className="background-particles">
        {[...Array(25)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* Left-Aligned Hero Section */}
      <section className={`hero-section-full ${mounted ? 'in' : ''}`}>
        <div className={"hero-content-full"}>
          <h1 className="hero-title-full">
            <span className={`text-animate ${showTitle ? 'animate-in' : ''}`}>Start Your</span>
            <span className={`text-animate delay-1 ${showTitle ? 'animate-in' : ''}`}>Digital Journey</span>
          </h1>
          <p className={`hero-subtitle-full ${showSubtitle ? 'subtitle-animate' : ''}`}>
            Transform your business with a professional website that drives results.
            Tell us about your project and we'll create something exceptional together.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <i className="fas fa-check-circle"></i>
              <span>Professional Design</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-mobile-alt"></i>
              <span>Mobile Responsive</span>
            </div>
            <div className="feature-item">
              <i className="fas fa-search"></i>
              <span>SEO Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Left-Aligned Form Section */}
      <section className={`form-section-full ${showForm ? 'in' : ''}`}>
        <div className="form-container-full">
          <div className="form-header-full">
            <h2 className={`form-title-full ${showFormTitle ? 'title-animate' : ''}`}>
              <span className="title-word">Get</span>{' '}
              <span className="title-word">Started</span>
            </h2>
            <p className={`form-description-full ${showFormDesc ? 'desc-animate' : ''}`}>
              <span className="desc-word">Share</span>{' '}
              <span className="desc-word">your</span>{' '}
              <span className="desc-word">project</span>{' '}
              <span className="desc-word">details</span>{' '}
              <span className="desc-word">to</span>{' '}
              <span className="desc-word">begin</span>
            </p>
          </div>

          <form className="form-full-data-only" onSubmit={(e) => { e.preventDefault(); allStepsCompleted() ? onContinue() : nextStep(); }}>
            {/* Step Navigation */}
            <div className="step-navigation">
              {steps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  className={`step-nav-item ${currentStep === step.id ? 'active' : ''} ${completedSteps.has(step.id) ? 'completed' : ''} ${canGoToStep(step.id) ? 'accessible' : ''}`}
                  onClick={() => goToStep(step.id)}
                  disabled={!canGoToStep(step.id)}
                  aria-current={currentStep === step.id ? 'step' : undefined}
                >
                  <div className="step-icon">
                    <i className={step.icon}></i>
                    {completedSteps.has(step.id) && <i className="fas fa-check step-check"></i>}
                  </div>
                  <div className="step-info">
                    <span className="step-title">{step.title}</span>
                    <span className="step-description">{step.description}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="form-progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${getProgressPercentage()}%` }}
                />
              </div>
              <div className="progress-header">
                <span className="progress-text">{getProgressPercentage()}% Complete</span>
                <div className="auto-save-status">
                  {isSaving ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Saving...</span>
                    </>
                  ) : lastSaved ? (
                    <>
                      <i className="fas fa-check-circle"></i>
                      <span>Saved {lastSaved.toLocaleTimeString()}</span>
                    </>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Step Content */}
            <div className={`step-content ${showFields ? 'fields-animate' : ''}`}>
              {currentStep === 1 && (
                <div className="step-fields">
                  <h3 className="step-heading">
                    <i className="fas fa-building"></i>
                    Company Details
                  </h3>
                  <div className="form-row">
                    <div className="field-group-full">
                      <label className="field-label-full">
                        <i className="fas fa-globe"></i>
                        <span className="label-word">Company Domain</span>
                        <span className="required">*</span>
                      </label>
                      <input
                        className={`field-input-full ${getFieldError('domain') ? 'error' : ''}`}
                        placeholder="yourcompany.com"
                        value={formData.domain}
                        onChange={(e) => handleInputChange('domain', e.target.value)}
                        onBlur={() => handleBlur('domain')}
                        autoFocus
                        aria-required="true"
                        aria-invalid={Boolean(getFieldError('domain'))}
                        aria-describedby={getFieldError('domain') ? 'domain-error' : undefined}
                      />
                      {getFieldError('domain') && (
                        <div className="field-error" id="domain-error" role="alert">
                          <i className="fas fa-exclamation-circle"></i>
                          {getFieldError('domain')}
                        </div>
                      )}
                    </div>

                    <div className="field-group-full">
                      <label className="field-label-full">
                        <i className="fas fa-building"></i>
                        <span className="label-word">Company Name</span>
                        <span className="required">*</span>
                      </label>
                      <input
                        className={`field-input-full ${getFieldError('companyName') ? 'error' : ''}`}
                        placeholder="Your Company Name"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        onBlur={() => handleBlur('companyName')}
                        aria-required="true"
                        aria-invalid={Boolean(getFieldError('companyName'))}
                        aria-describedby={getFieldError('companyName') ? 'company-error' : undefined}
                      />
                      {getFieldError('companyName') && (
                        <div className="field-error" id="company-error" role="alert">
                          <i className="fas fa-exclamation-circle"></i>
                          {getFieldError('companyName')}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="field-group-full">
                    <label className="field-label-full">
                      <i className="fas fa-industry"></i>
                      <span className="label-word">Industry</span>
                    </label>
                    <select
                      className="field-input-full field-select"
                      value={formData.industry}
                      onChange={(e) => handleInputChange('industry', e.target.value)}
                    >
                      <option value="">Select your industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="retail">Retail</option>
                      <option value="education">Education</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="step-fields">
                  <h3 className="step-heading">
                    <i className="fas fa-calendar-alt"></i>
                    Project Planning
                  </h3>
                  <div className="form-row">
                    <div className="field-group-full">
                      <label className="field-label-full">
                        <i className="fas fa-dollar-sign"></i>
                        <span className="label-word">Budget Range</span>
                      </label>
                      <select
                        className="field-input-full field-select"
                        value={formData.budgetRange}
                        onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">$0 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">$100,000+</option>
                      </select>
                    </div>

                    <div className="field-group-full">
                      <label className="field-label-full">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="label-word">Project Timeline</span>
                      </label>
                      <select
                        className="field-input-full field-select"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="step-fields">
                  <h3 className="step-heading">
                    <i className="fas fa-puzzle-piece"></i>
                    App Selection
                  </h3>
                  <div className="app-selection-container">
                    <div className="selected-apps-summary">
                      <div className="apps-count">
                        <i className="fas fa-check-circle"></i>
                        <span>{getSelectedAppsCount()} apps selected</span>
                      </div>
                      {getSelectedAppsCount() === 0 && (
                        <div className="selection-hint">
                          <i className="fas fa-info-circle"></i>
                          Please select at least one app to continue
                        </div>
                      )}
                    </div>

                    <div className="apps-categories">
                      {APP_CATEGORIES.map((category) => (
                        <div key={category.name} className="apps-category">
                          <h4 className="category-title">{category.name}</h4>
                          <div className="apps-grid">
                            {category.tiles.map((app) => {
                              const isSelected = formData.selectedApps.includes(app.key);
                              return (
                                <div
                                  key={app.key}
                                  className={`app-tile ${isSelected ? 'selected' : ''}`}
                                  onClick={() => toggleAppSelection(app.key)}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                      e.preventDefault();
                                      toggleAppSelection(app.key);
                                    }
                                  }}
                                  aria-pressed={isSelected}
                                >
                                  <div className="app-icon" style={{ backgroundColor: app.color }}>
                                    <i className={app.icon}></i>
                                  </div>
                                  <div className="app-label">{app.label}</div>
                                  {isSelected && (
                                    <div className="selection-indicator">
                                      <i className="fas fa-check"></i>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="step-fields">
                  <h3 className="step-heading">
                    <i className="fas fa-user"></i>
                    Contact Information
                  </h3>
                  <div className="form-row">
                    <div className="field-group-full">
                      <label className="field-label-full">
                        <i className="fas fa-envelope"></i>
                        <span className="label-word">Contact Email</span>
                        <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className={`field-input-full ${getFieldError('contactEmail') ? 'error' : ''}`}
                        placeholder="your@email.com"
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                        onBlur={() => handleBlur('contactEmail')}
                        aria-required="true"
                        aria-invalid={Boolean(getFieldError('contactEmail'))}
                        aria-describedby={getFieldError('contactEmail') ? 'email-error' : undefined}
                      />
                      {getFieldError('contactEmail') && (
                        <div className="field-error" id="email-error" role="alert">
                          <i className="fas fa-exclamation-circle"></i>
                          {getFieldError('contactEmail')}
                        </div>
                      )}
                    </div>

                    <div className="field-group-full">
                      <label className="field-label-full">
                        <i className="fas fa-phone"></i>
                        <span className="label-word">Contact Phone</span>
                        <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        className={`field-input-full ${getFieldError('contactPhone') ? 'error' : ''}`}
                        placeholder="+1 (555) 123-4567"
                        value={formData.contactPhone}
                        onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                        onBlur={() => handleBlur('contactPhone')}
                        aria-required="true"
                        aria-invalid={Boolean(getFieldError('contactPhone'))}
                        aria-describedby={getFieldError('contactPhone') ? 'phone-error' : undefined}
                      />
                      {getFieldError('contactPhone') && (
                        <div className="field-error" id="phone-error" role="alert">
                          <i className="fas fa-exclamation-circle"></i>
                          {getFieldError('contactPhone')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="step-fields">
                  <h3 className="step-heading">
                    <i className="fas fa-lightbulb"></i>
                    Project Description
                  </h3>
                  <div className="field-group-full">
                    <label className="field-label-full">
                      <i className="fas fa-edit"></i>
                      <span className="label-word">Project Description</span>
                      <span className="required">*</span>
                      <span className="character-count">
                        {formData.projectDescription.length}/500
                      </span>
                    </label>
                    <textarea
                      className={`field-textarea-full ${getFieldError('projectDescription') ? 'error' : ''}`}
                      placeholder="Describe your business goals, target audience, key features needed, design preferences, and any specific requirements. Please be as detailed as possible to help us create the perfect solution for you..."
                      rows={6}
                      maxLength={500}
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      onBlur={() => handleBlur('projectDescription')}
                      required
                      aria-required="true"
                      aria-invalid={Boolean(getFieldError('projectDescription'))}
                      aria-describedby={getFieldError('projectDescription') ? 'description-error' : 'description-help'}
                    />
                    <div className="field-help" id="description-help">
                      <i className="fas fa-info-circle"></i>
                      Minimum 50 characters required
                    </div>
                    {getFieldError('projectDescription') && (
                      <div className="field-error" id="description-error" role="alert">
                        <i className="fas fa-exclamation-circle"></i>
                        {getFieldError('projectDescription')}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Step Navigation Buttons */}
            <div className={`form-actions-full ${showButtons ? 'buttons-animate' : ''}`}>
              <div className="step-buttons">
                {currentStep > 1 && (
                  <button type="button" className="btn btn-secondary-full" onClick={prevStep}>
                    <i className="fas fa-arrow-left"></i>
                    <span className="button-text">Previous</span>
                  </button>
                )}

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    className="btn btn-primary-full"
                    onClick={nextStep}
                    disabled={!isStepValid(currentStep)}
                  >
                    <span className="button-text">Next Step</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary-full brief-continue"
                    disabled={!allStepsCompleted()}
                  >
                    <i className="fas fa-paper-plane"></i>
                    <span className="button-text">Start Project</span>
                  </button>
                )}
              </div>

              <button type="button" className="btn btn-secondary-full clear-btn" onClick={clearForm}>
                <i className="fas fa-trash"></i>
                <span className="button-text">Clear Form</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Professional Floating Icons */}
      <div className="floating-elements">
        <div className="floating-element floating-1">
          <i className="fas fa-chart-line"></i>
        </div>
        <div className="floating-element floating-2">
          <i className="fas fa-users"></i>
        </div>
        <div className="floating-element floating-3">
          <i className="fas fa-cog"></i>
        </div>
        <div className="floating-element floating-4">
          <i className="fas fa-lightbulb"></i>
        </div>
        <div className="floating-element floating-5">
          <i className="fas fa-trophy"></i>
        </div>
      </div>
    </main>
  );
};

export default GetStarted;
