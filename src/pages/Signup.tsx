import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import '../styles/Signup.css';

const useQuery = () => new URLSearchParams(useLocation().search);

export const Signup: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    logo: null as File | null,
    companyName: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const { signup } = useAuth();
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'Name is required';
{{ ... }}
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
{{ ... }}
          const data = await res.json().catch(() => ({}));
          throw new Error(data.message || `Failed to create account (code ${res.status})`);
        }

        const data = await res.json();
        await signup(data.token);
        setSubmitted(true);
      } catch (err: any) {
        setErrors({ ...errors, form: err.message || 'Something went wrong' });
      }
    }
  };

  if (submitted) {
    return (
      <div className="signup-container">
        <h2>Registration Successful!</h2>
        <p>Thank you for signing up. You are now logged in.</p>
    Already have an account? <Link to="/login" style={{ color: '#667eea' }}>Log in</Link>
      </div>
    );
  }

  return (
{{ ... }}
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          {errors.companyName && <p className="error-message">{errors.companyName}</p>}
        </div>
        <div className="form-group">
          <label>Logo</label>
          <input
            type="file"
            name="logo"
            onChange={handleFileChange}
          />
        </div>
        {logoPreview && (
          <div className="logo-preview">
            <img src={logoPreview} alt="Logo Preview" />
          </div>
        )}
        {errors.form && <p className="error-message">{errors.form}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
