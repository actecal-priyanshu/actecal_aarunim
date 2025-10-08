import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import '../styles/Signup.css';

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
      setFormData({ ...formData, logo: file });
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
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
      }
    }
  };

  if (submitted) {
    return (
      <div className="signup-container">
        <h2>Registration Successful!</h2>
        <p>Thank you for signing up. You are now logged in.</p>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Name</label>
          <div className="input-with-icon">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <div className="input-with-icon">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <div className="input-with-icon">
            <i className="fas fa-building"></i>
            <input
              type="text"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          {errors.companyName && <p className="error-message">{errors.companyName}</p>}
        </div>
        <div className="form-group">
          <label>Logo</label>
          <label htmlFor="file-upload" className="file-upload-label">
            <i className="fas fa-cloud-upload-alt"></i> Choose a Logo
          </label>
          <input
            id="file-upload"
            type="file"
            name="logo"
            onChange={handleFileChange}
          />
          {formData.logo && <span className="file-name">{formData.logo.name}</span>}
        </div>
        {logoPreview && (
          <div className="logo-preview">
            <img src={logoPreview} alt="Logo Preview" />
          </div>
        )}
        {errors.form && <p className="error-message">{errors.form}</p>}
        <button type="submit">Create Account</button>
        <p className="terms-text">
          By signing up, you agree to our <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </form>
    </div>
  );
};
