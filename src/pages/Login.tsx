import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError(null);
		setIsSubmitting(true);
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});
			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				if (res.status === 401) throw new Error(data.message || 'Invalid credentials');
				throw new Error(data.message || `Login failed (code ${res.status})`);
			}
			const data = await res.json();
			await login(data.token);
			navigate('/');
		} catch (err: any) {
			setError(err.message || 'Something went wrong');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section style={{ padding: '60px 24px' }}>
			<div style={{ maxWidth: 600, margin: '0 auto' }}>
				<div style={{ marginBottom: 24 }}>
					<Link to="/" style={{ textDecoration: 'none', color: '#667eea' }}>← Back to Home</Link>
				</div>
				<h1 style={{ margin: '0 0 12px' }}>Login</h1>
				<p style={{ color: '#4a5568', margin: '0 0 24px' }}>Access your account.</p>
				{error && (
					<div style={{ background: '#FED7D7', color: '#742A2A', padding: '10px 12px', borderRadius: 8, marginBottom: 12 }}>
						{error}
					</div>
				)}
				<form onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
					<input
						type="email"
						required
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
					/>
					<input
						type={showPassword ? 'text' : 'password'}
						required
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
					/>
					<label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
						<input
							type="checkbox"
							checked={showPassword}
							onChange={(e) => setShowPassword(e.target.checked)}
						/>
						Show password
					</label>
					<button type="submit" className="btn btn-primary" disabled={isSubmitting}>
						{isSubmitting ? 'Logging in...' : 'Login'}
					</button>
				</form>
				<div style={{ marginTop: 12, color: '#4a5568' }}>
					Don't have an account? <Link to="/signup" style={{ color: '#667eea' }}>Sign up</Link>
				</div>
			</div>
		</section>
	);
};
