import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    logo: null as File | null,
    companyName: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const { login } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.companyName) newErrors.companyName = 'Company name is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // basic validation: <= 2MB and image type
      const maxBytes = 2 * 1024 * 1024;
      if (!/^image\//.test(file.type)) {
        setErrors((prev: any) => ({ ...prev, form: 'Logo must be an image file.' }));
        return;
      }
      if (file.size > maxBytes) {
        setErrors((prev: any) => ({ ...prev, form: 'Logo must be less than 2MB.' }));
        return;
      }
      setFormData({ ...formData, logo: file });
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('companyName', formData.companyName);
      if (formData.logo) {
        payload.append('logo', formData.logo);
      }

      try {
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          body: payload,
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.message || `Failed to create account (code ${res.status})`);
        }

        const data = await res.json();
        await login(data.token);
        setSubmitted(true);
      } catch (err: any) {
        setErrors({ form: err.message || 'Something went wrong' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <section style={{ padding: '60px 24px' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ marginBottom: 24 }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#667eea' }}>← Back to Home</Link>
          </div>
          <h1 style={{ margin: '0 0 12px' }}>Signup</h1>
          <p style={{ color: '#4a5568', margin: '0 0 24px' }}>Registration Successful!</p>
          <p style={{ color: '#4a5568', margin: '0 0 24px' }}>Thank you for signing up. You are now logged in.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#667eea' }}>← Back to Home</Link>
        </div>
        <h1 style={{ margin: '0 0 12px' }}>Signup</h1>
        <p style={{ color: '#4a5568', margin: '0 0 24px' }}>Create your account.</p>

        {errors.form && (
          <div style={{ background: '#FED7D7', color: '#742A2A', padding: '10px 12px', borderRadius: 8, marginBottom: 12 }}>
            {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
          <input
            type="text"
            name="name"
            required
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            autoFocus
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          {errors.name && <small style={{ color: '#E53E3E' }}>{errors.name}</small>}

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          {errors.email && <small style={{ color: '#E53E3E' }}>{errors.email}</small>}

          <input
            type="text"
            name="companyName"
            required
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          {errors.companyName && <small style={{ color: '#E53E3E' }}>{errors.companyName}</small>}

          <input
            id="file-upload"
            type="file"
            name="logo"
            onChange={handleFileChange}
            style={{ padding: '10px', border: '1px solid #e2e8f0', borderRadius: 8 }}
            accept="image/*"
          />
          {formData.logo && <small style={{ color: '#4a5568' }}>{formData.logo.name}</small>}

          {logoPreview && (
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 8 }}>
              <img src={logoPreview} alt="Logo Preview" style={{ maxWidth: '100%', display: 'block' }} />
            </div>
          )}

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </button>
        </form>
        <div style={{ marginTop: 12, color: '#4a5568' }}>
          Already have an account? <Link to="/login" style={{ color: '#667eea' }}>Log in</Link>
        </div>
        <p style={{ marginTop: 12, color: '#718096' }}>
          By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  );
};
