<template>
	<div class="signup-bg">
		<div class="container-fluid signup-container">
			<div class="row g-0 signup-card">
				<div class="col-xl-6 col-lg-6 signup-image">
					<div class="signup-image-content">
						<div class="brand-section">
							<div class="brand-logo">
								<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
									<rect width="60" height="60" rx="15" fill="rgba(255,255,255,0.2)"/>
									<path d="M20 25h20v3H20v-3zm0 7h16v3H20v-3zm0 7h12v3H20v-3z" fill="white"/>
									<circle cx="45" cy="20" r="8" fill="#50e3c2"/>
									<circle cx="42" cy="17" r="2" fill="white"/>
								</svg>
							</div>
							<h2 class="brand-title">ChatApp</h2>
						</div>
						<div class="hero-content">
							<h3 class="hero-title">Connect with Friends</h3>
							<p class="hero-description">
								Join our community and start chatting with friends and colleagues
								in real-time. Experience seamless communication.
							</p>
						</div>
						<!-- Enhanced SVG illustration -->
						<div class="illustration-container">
							<svg
								viewBox="0 0 400 300"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="illustration">
								<!-- Background elements -->
								<ellipse cx="200" cy="280" rx="160" ry="20" fill="rgba(255,255,255,0.1)"/>
								
								<!-- Main chat window -->
								<rect x="80" y="60" width="240" height="160" rx="20" fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
								
								<!-- Header -->
								<rect x="80" y="60" width="240" height="40" rx="20" fill="rgba(80,227,194,0.2)"/>
								<circle cx="105" cy="80" r="8" fill="#50e3c2"/>
								<rect x="120" y="75" width="60" height="6" rx="3" fill="rgba(255,255,255,0.8)"/>
								<rect x="120" y="85" width="40" height="4" rx="2" fill="rgba(255,255,255,0.6)"/>
								
								<!-- Chat messages -->
								<rect x="100" y="120" width="140" height="20" rx="10" fill="rgba(74,144,226,0.15)"/>
								<rect x="100" y="150" width="100" height="20" rx="10" fill="rgba(74,144,226,0.15)"/>
								<rect x="180" y="180" width="120" height="20" rx="10" fill="rgba(80,227,194,0.3)"/>
								
								<!-- User avatars -->
								<circle cx="90" cy="130" r="12" fill="#50e3c2"/>
								<circle cx="90" cy="160" r="12" fill="#4a90e2"/>
								<circle cx="310" cy="190" r="12" fill="#ff6b6b"/>
								
								<!-- Floating elements -->
								<circle cx="50" cy="100" r="6" fill="rgba(255,255,255,0.3)"/>
								<circle cx="370" cy="120" r="8" fill="rgba(255,255,255,0.2)"/>
								<circle cx="40" cy="200" r="4" fill="rgba(80,227,194,0.4)"/>
								<circle cx="360" cy="220" r="5" fill="rgba(255,107,107,0.4)"/>
							</svg>
						</div>
						<div class="feature-badges">
							<div class="badge-item">
								<i class="bi bi-shield-check"></i>
								<span>Secure</span>
							</div>
							<div class="badge-item">
								<i class="bi bi-lightning-charge"></i>
								<span>Fast</span>
							</div>
							<div class="badge-item">
								<i class="bi bi-people"></i>
								<span>Social</span>
							</div>
						</div>
					</div>
				</div>
				
				<div class="col-xl-6 col-lg-6 signup-form">
					<div class="form-wrapper">
						<div class="form-header">
							<h1>Create Your Account</h1>
							<p>Fill in your details to get started with ChatApp</p>
						</div>
						
						<form @submit.prevent="handleSignup" autocomplete="off" novalidate class="signup-form-element">
							<div class="form-group">
								<label for="username" class="form-label">
									<i class="bi bi-person-fill label-icon"></i>
									Username
								</label>
								<div class="input-wrapper">
									<input
										type="text"
										class="form-control"
										:class="{ 'is-invalid': errors.username, 'is-valid': form.username && !errors.username }"
										id="username"
										v-model="form.username"
										placeholder="Enter your username"
										required />
								</div>
								<div class="invalid-feedback" v-if="errors.username">
									{{ errors.username }}
								</div>
							</div>
							
							<div class="form-group">
								<label for="email" class="form-label">
									<i class="bi bi-envelope-fill label-icon"></i>
									Email Address
								</label>
								<div class="input-wrapper">
									<input
										type="email"
										class="form-control"
										:class="{ 'is-invalid': errors.email, 'is-valid': form.email && !errors.email }"
										id="email"
										v-model="form.email"
										placeholder="Enter your email"
										required />
								</div>
								<div class="invalid-feedback" v-if="errors.email">
									{{ errors.email }}
								</div>
							</div>
							
							<div class="form-group">
								<label for="password" class="form-label">
									<i class="bi bi-lock-fill label-icon"></i>
									Password
								</label>
								<div class="input-wrapper password-wrapper">
									<input
										:type="showPassword ? 'text' : 'password'"
										class="form-control"
										:class="{ 'is-invalid': errors.password, 'is-valid': form.password && !errors.password }"
										id="password"
										v-model="form.password"
										placeholder="Create a password"
										required />
									<button
										class="password-toggle"
										type="button"
										@click="showPassword = !showPassword">
										<i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
									</button>
								</div>
								<div class="invalid-feedback" v-if="errors.password">
									{{ errors.password }}
								</div>
							</div>
							
							<div class="form-group">
								<label for="confirmPassword" class="form-label">
									<i class="bi bi-lock-check-fill label-icon"></i>
									Confirm Password
								</label>
								<div class="input-wrapper">
									<input
										type="password"
										class="form-control"
										:class="{ 'is-invalid': errors.confirmPassword, 'is-valid': form.confirmPassword && !errors.confirmPassword }"
										id="confirmPassword"
										v-model="form.confirmPassword"
										placeholder="Confirm your password"
										required />
								</div>
								<div class="invalid-feedback" v-if="errors.confirmPassword">
									{{ errors.confirmPassword }}
								</div>
							</div>
							
							<div class="form-group">
								<label for="verificationCode" class="form-label">
									<i class="bi bi-shield-lock-fill label-icon"></i>
									Verification Code
								</label>
								<div class="input-wrapper">
									<input
										type="text"
										class="form-control verification-input"
										:class="{ 'is-invalid': errors.code, 'is-valid': form.code && !errors.code }"
										id="verificationCode"
										v-model="form.code"
										maxlength="6"
										placeholder="Enter 6-digit code"
										required />
								</div>
								<div class="invalid-feedback" v-if="errors.code">
									{{ errors.code }}
								</div>
							</div>
							
							<div class="form-group terms-group">
								<div class="custom-checkbox">
									<input
										type="checkbox"
										id="terms"
										v-model="form.terms"
										class="checkbox-input" />
									<label for="terms" class="checkbox-label">
										<span class="checkmark"></span>
										<span class="checkbox-text">
											I agree to the 
											<a href="#" @click.prevent="showTerms = true" class="terms-link">
												Terms and Conditions
											</a> 
											and 
											<a href="#" class="terms-link">Privacy Policy</a>
										</span>
									</label>
								</div>
								<div class="invalid-feedback" v-if="errors.terms">
									{{ errors.terms }}
								</div>
							</div>
							
							<button
								type="submit"
								class="btn btn-signup"
								:disabled="loading">
								<span v-if="!loading" class="button-content">
									<i class="bi bi-person-plus-fill"></i>
									Create Account
								</span>
								<span v-else class="button-content loading">
									<div class="spinner"></div>
									Creating Account...
								</span>
							</button>
						</form>
						
						<div class="divider">
							<span>or</span>
						</div>
						
						<div class="social-buttons">
							<button class="btn btn-social btn-google">
								<svg width="20" height="20" viewBox="0 0 24 24">
									<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
									<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
									<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
									<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
								</svg>
								Continue with Google
							</button>
							<button class="btn btn-social btn-github">
								<i class="bi bi-github"></i>
								Continue with GitHub
							</button>
						</div>
						
						<div class="login-link">
							Already have an account?
							<router-link to="/login" class="login-link-text">Sign in here</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Enhanced Terms Modal -->
		<div v-if="showTerms" class="modal-overlay" @click="showTerms = false">
			<div class="modal-container" @click.stop>
				<div class="modal-header">
					<h3>Terms and Conditions</h3>
					<button class="modal-close" @click="showTerms = false">
						<i class="bi bi-x-lg"></i>
					</button>
				</div>
				<div class="modal-body">
					<div class="terms-content">
						<h4>1. Acceptance of Terms</h4>
						<p>By accessing or using ChatApp, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
						
						<h4>2. Account Security</h4>
						<p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
						
						<h4>3. Privacy Policy</h4>
						<p>Your use of ChatApp is also governed by our Privacy Policy, which describes how we collect, use, and protect your information.</p>
						
						<h4>4. Acceptable Use</h4>
						<p>You agree not to use ChatApp to upload, post, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable.</p>
						
						<h4>5. Termination</h4>
						<p>We reserve the right to terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms.</p>
						
						<h4>6. Changes to Terms</h4>
						<p>We may update these terms from time to time. We will notify you of any changes by posting the new Terms on this page.</p>
					</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-primary modal-btn" @click="showTerms = false">
						I Understand
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SignupForm",
	data() {
		return {
			form: {
				username: "",
				email: "",
				password: "",
				confirmPassword: "",
				code: "",
				terms: false,
			},
			errors: {},
			showPassword: false,
			loading: false,
			showTerms: false,
		};
	},
	methods: {
		validateForm() {
			this.errors = {};
			
			// Username validation
			if (!this.form.username) {
				this.errors.username = "Username is required";
			} else if (this.form.username.length < 3) {
				this.errors.username = "Username must be at least 3 characters";
			} else if (!/^[a-zA-Z0-9_]+$/.test(this.form.username)) {
				this.errors.username = "Username can only contain letters, numbers, and underscores";
			}
			
			// Email validation
			if (!this.form.email) {
				this.errors.email = "Email is required";
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
				this.errors.email = "Please enter a valid email address";
			}
			
			// Password validation
			if (!this.form.password) {
				this.errors.password = "Password is required";
			} else if (this.form.password.length < 8) {
				this.errors.password = "Password must be at least 8 characters";
			} else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(this.form.password)) {
				this.errors.password = "Password must contain uppercase, lowercase, and numbers";
			}
			
			// Confirm password validation
			if (!this.form.confirmPassword) {
				this.errors.confirmPassword = "Please confirm your password";
			} else if (this.form.confirmPassword !== this.form.password) {
				this.errors.confirmPassword = "Passwords do not match";
			}
			
			// Verification code validation
			if (!this.form.code) {
				this.errors.code = "Verification code is required";
			} else if (!/^\d{6}$/.test(this.form.code)) {
				this.errors.code = "Code must be exactly 6 digits";
			}
			
			// Terms validation
			if (!this.form.terms) {
				this.errors.terms = "You must agree to the Terms and Conditions";
			}
			
			return Object.keys(this.errors).length === 0;
		},
		
		handleSignup() {
			if (!this.validateForm()) {
				// Focus on first error field
				const firstErrorField = Object.keys(this.errors)[0];
				const element = document.getElementById(firstErrorField === 'terms' ? 'terms' : firstErrorField);
				if (element) element.focus();
				return;
			}
			
			this.loading = true;
			
			// Simulate API call
			setTimeout(() => {
				try {
					let allUsers = [];
					try {
						const stored = localStorage.getItem("allUsers");
						if (stored) {
							allUsers = JSON.parse(stored);
						}
					} catch (e) {
						console.warn("Error parsing stored users:", e);
					}
					
					// Check if user already exists
					const existingUser = allUsers.find(user => 
						user.email === this.form.email || user.name === this.form.username
					);
					
					if (existingUser) {
						this.errors.email = existingUser.email === this.form.email ? "Email already registered" : "";
						this.errors.username = existingUser.name === this.form.username ? "Username already taken" : "";
						this.loading = false;
						return;
					}
					
					// Add new user
					const newUser = {
						id: Date.now(),
						name: this.form.username,
						email: this.form.email,
						password: this.form.password, // In real app, this would be hashed
						code: this.form.code,
						createdAt: new Date().toISOString()
					};
					
					allUsers.push(newUser);
					localStorage.setItem("allUsers", JSON.stringify(allUsers));
					localStorage.setItem("userAllData", JSON.stringify(this.form));
					
					this.loading = false;
					
					// Show success message or redirect
					this.$router.push("/login");
					
				} catch (error) {
					console.error("Signup error:", error);
					this.loading = false;
				}
			}, 1500);
		},
	},
	
	mounted() {
		// Add some entrance animations
		const card = document.querySelector('.signup-card');
		if (card) {
			card.style.opacity = '0';
			card.style.transform = 'translateY(20px)';
			setTimeout(() => {
				card.style.transition = 'all 0.6s ease';
				card.style.opacity = '1';
				card.style.transform = 'translateY(0)';
			}, 100);
		}
	}
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* Root Variables */
:root {
	--primary-color: #4a90e2;
	--primary-dark: #3a7bc8;
	--secondary-color: #50e3c2;
	--accent-color: #ff6b6b;
	--text-primary: #2d3748;
	--text-secondary: #718096;
	--text-light: #a0aec0;
	--bg-light: #f8fafc;
	--bg-white: #ffffff;
	--border-light: #e2e8f0;
	--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);
	--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
	--shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
	--radius-sm: 8px;
	--radius-md: 12px;
	--radius-lg: 16px;
	--radius-xl: 20px;
}

* {
	font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Main Layout */
.signup-bg {
	min-height: 100vh;
	width: 100%;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	position: relative;
	overflow-x: hidden;
}

.signup-bg::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: 
		radial-gradient(circle at 20% 80%, rgba(120, 200, 255, 0.3) 0%, transparent 50%),
		radial-gradient(circle at 80% 20%, rgba(255, 120, 200, 0.3) 0%, transparent 50%);
	pointer-events: none;
}

.signup-container {
	max-width: 1200px;
	width: 100%;
	position: relative;
	z-index: 1;
}

.signup-card {
	border-radius: var(--radius-xl);
	overflow: hidden;
	box-shadow: var(--shadow-lg);
	background: var(--bg-white);
	min-height: 700px;
}

/* Left Side - Image/Branding */
.signup-image {
	background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
	color: white;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	overflow: hidden;
}

.signup-image::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: 
		radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
		radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
	pointer-events: none;
}

.signup-image-content {
	position: relative;
	z-index: 2;
	width: 100%;
	max-width: 400px;
}

.brand-section {
	margin-bottom: 2rem;
}

.brand-logo {
	margin-bottom: 1rem;
}

.brand-title {
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 0;
}

.hero-content {
	margin-bottom: 2rem;
}

.hero-title {
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 1rem;
}

.hero-description {
	font-size: 1rem;
	opacity: 0.9;
	line-height: 1.6;
	margin-bottom: 0;
}

.illustration-container {
	margin: 2rem 0;
}

.illustration {
	width: 100%;
	max-width: 300px;
	height: auto;
	opacity: 0.9;
}

.feature-badges {
	display: flex;
	justify-content: center;
	gap: 1.5rem;
	margin-top: 2rem;
}

.badge-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.875rem;
	opacity: 0.9;
}

.badge-item i {
	font-size: 1.25rem;
}

/* Right Side - Form */
.signup-form {
	background: var(--bg-white);
	padding: 0;
	display: flex;
	align-items: center;
}

.form-wrapper {
	width: 100%;
	max-width: 480px;
	margin: 0 auto;
	padding: 3rem 2rem;
}

.form-header {
	text-align: center;
	margin-bottom: 2rem;
}

.form-header h1 {
	font-size: 2rem;
	font-weight: 700;
	color: var(--text-primary);
	margin-bottom: 0.5rem;
}

.form-header p {
	color: var(--text-secondary);
	font-size: 1rem;
	margin-bottom: 0;
}

/* Form Styling */
.signup-form-element {
	margin-bottom: 2rem;
}

.form-group {
	margin-bottom: 1.5rem;
}

.form-label {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-weight: 500;
	color: var(--text-primary);
	margin-bottom: 0.5rem;
	font-size: 0.875rem;
}

.label-icon {
	color: var(--primary-color);
}

.input-wrapper {
	position: relative;
}

.form-control {
	width: 100%;
	padding: 0.875rem 1rem;
	border: 2px solid var(--border-light);
	border-radius: var(--radius-md);
	font-size: 0.95rem;
	transition: all 0.2s ease;
	background: var(--bg-white);
	color: var(--text-primary);
}

.form-control:focus {
	border-color: var(--primary-color);
	box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
	outline: none;
}

.form-control.is-valid {
	border-color: #10b981;
}

.form-control.is-invalid {
	border-color: #ef4444;
}

.form-control::placeholder {
	color: var(--text-light);
}

/* Password field */
.password-wrapper {
	position: relative;
}

.password-toggle {
	position: absolute;
	right: 0.75rem;
	top: 50%;
	transform: translateY(-50%);
	background: none;
	border: none;
	color: var(--text-secondary);
	cursor: pointer;
	padding: 0.25rem;
	border-radius: 4px;
	transition: color 0.2s ease;
}

.password-toggle:hover {
	color: var(--primary-color);
}

/* Verification Input */
.verification-input {
	text-align: center;
	font-size: 1.25rem;
	font-weight: 600;
	letter-spacing: 0.5rem;
}

/* Custom Checkbox */
.terms-group {
	margin-bottom: 2rem;
}

.custom-checkbox {
	position: relative;
}

.checkbox-input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
}

.checkbox-label {
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
	cursor: pointer;
	font-size: 0.875rem;
	color: var(--text-secondary);
	line-height: 1.5;
}

.checkmark {
	width: 20px;
	height: 20px;
	border: 2px solid var(--border-light);
	border-radius: 4px;
	position: relative;
	flex-shrink: 0;
	transition: all 0.2s ease;
	background: var(--bg-white);
}

.checkbox-input:checked + .checkbox-label .checkmark {
	background: var(--primary-color);
	border-color: var(--primary-color);
}

.checkbox-input:checked + .checkbox-label .checkmark::after {
	content: '';
	position: absolute;
	left: 6px;
	top: 2px;
	width: 6px;
	height: 10px;
	border: solid white;
	border-width: 0 2px 2px 0;
	transform: rotate(45deg);
}

.terms-link {
	color: var(--primary-color);
	text-decoration: none;
	font-weight: 500;
}

.terms-link:hover {
	text-decoration: underline;
}

/* Submit Button */
.btn-signup {
	width: 100%;
	padding: 1rem;
	background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
	color: white;
	border: none;
	border-radius: var(--radius-md);
	font-weight: 600;
	font-size: 1rem;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;
}

.btn-signup:hover:not(:disabled) {
	transform: translateY(-2px);
	box-shadow: 0 8px 25px rgba(74, 144, 226, 0.3);
}

.btn-signup:active {
	transform: translateY(0);
}

.btn-signup:disabled {
	opacity: 0.7;
	cursor: not-allowed;
}

.button-content {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
}

.button-content.loading {
	opacity: 0.9;
}

.spinner {
	width: 20px;
	height: 20px;
	border: 2px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	border-top-color: white;
	animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
	to { transform: rotate(360deg); }
}

/* Divider */
.divider {
	position: relative;
	text-align: center;
	margin: 2rem 0 1.5rem;
	color: var(--text-light);
	font-size: 0.875rem;
}

.divider::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	height: 1px;
	background: var(--border-light);
}

.divider span {
	background: var(--bg-white);
	padding: 0 1rem;
	position: relative;
	z-index: 1;
}

/* Social Buttons */
.social-buttons {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-bottom: 2rem;
}

.btn-social {
	width: 100%;
	padding: 0.875rem;
	border: 2px solid var(--border-light);
	border-radius: var(--radius-md);
	background: var(--bg-white);
	color: var(--text-primary);
	font-weight: 500;
	font-size: 0.875rem;
	transition: all 0.2s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.75rem;
}

.btn-social:hover {
	border-color: var(--primary-color);
	background: var(--bg-light);
	transform: translateY(-1px);
}

.btn-google:hover {
	border-color: #4285F4;
}

.btn-github:hover {
	border-color: #333;
}

/* Login Link */
.login-link {
	text-align: center;
	color: var(--text-secondary);
	font-size: 0.875rem;
}

.login-link-text {
	color: var(--primary-color);
	text-decoration: none;
	font-weight: 600;
	margin-left: 0.25rem;
}

.login-link-text:hover {
	text-decoration: underline;
}

/* Validation Messages */
.invalid-feedback {
	color: #ef4444;
	font-size: 0.8rem;
	margin-top: 0.25rem;
	display: flex;
	align-items: center;
	gap: 0.25rem;
}

.invalid-feedback::before {
	content: '⚠';
	font-size: 0.75rem;
}

/* Modal Styles */
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	padding: 1rem;
	backdrop-filter: blur(4px);
}

.modal-container {
	background: var(--bg-white);
	border-radius: var(--radius-lg);
	box-shadow: var(--shadow-lg);
	max-width: 600px;
	width: 100%;
	max-height: 80vh;
	display: flex;
	flex-direction: column;
	animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
	from {
		opacity: 0;
		transform: scale(0.9) translateY(-20px);
	}
	to {
		opacity: 1;
		transform: scale(1) translateY(0);
	}
}

.modal-header {
	padding: 1.5rem 2rem;
	border-bottom: 1px solid var(--border-light);
	display: flex;
	justify-content: between;
	align-items: center;
}

.modal-header h3 {
	margin: 0;
	color: var(--text-primary);
	font-weight: 600;
	flex: 1;
}

.modal-close {
	background: none;
	border: none;
	color: var(--text-secondary);
	cursor: pointer;
	padding: 0.5rem;
	border-radius: var(--radius-sm);
	transition: all 0.2s ease;
}

.modal-close:hover {
	background: var(--bg-light);
	color: var(--text-primary);
}

.modal-body {
	padding: 2rem;
	overflow-y: auto;
	flex: 1;
}

.terms-content h4 {
	color: var(--text-primary);
	font-weight: 600;
	font-size: 1.1rem;
	margin: 1.5rem 0 0.75rem;
}

.terms-content h4:first-child {
	margin-top: 0;
}

.terms-content p {
	color: var(--text-secondary);
	line-height: 1.6;
	margin-bottom: 1rem;
}

.modal-footer {
	padding: 1.5rem 2rem;
	border-top: 1px solid var(--border-light);
	display: flex;
	justify-content: flex-end;
}

.modal-btn {
	background: var(--primary-color);
	color: white;
	border: none;
	padding: 0.75rem 1.5rem;
	border-radius: var(--radius-md);
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;
}

.modal-btn:hover {
	background: var(--primary-dark);
	transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 1199.98px) {
	.form-wrapper {
		padding: 2.5rem 1.5rem;
	}
}

@media (max-width: 991.98px) {
	.signup-card {
		flex-direction: column;
	}
	
	.signup-image {
		min-height: 300px;
		padding: 1.5rem;
	}
	
	.hero-title {
		font-size: 1.25rem;
	}
	
	.hero-description {
		font-size: 0.9rem;
	}
	
	.feature-badges {
		gap: 1rem;
	}
	
	.illustration {
		max-width: 250px;
	}
	
	.form-wrapper {
		padding: 2rem 1.5rem;
	}
	
	.form-header h1 {
		font-size: 1.75rem;
	}
}

@media (max-width: 767.98px) {
	.signup-bg {
		padding: 0.5rem;
	}
	
	.signup-card {
		border-radius: var(--radius-lg);
		min-height: auto;
	}
	
	.signup-image {
		min-height: 250px;
		padding: 1rem;
	}
	
	.brand-title {
		font-size: 1.5rem;
	}
	
	.hero-title {
		font-size: 1.125rem;
	}
	
	.hero-description {
		font-size: 0.875rem;
	}
	
	.feature-badges {
		flex-direction: row;
		gap: 0.75rem;
	}
	
	.badge-item {
		font-size: 0.75rem;
	}
	
	.badge-item i {
		font-size: 1rem;
	}
	
	.illustration {
		max-width: 200px;
	}
	
	.form-wrapper {
		padding: 1.5rem 1rem;
	}
	
	.form-header h1 {
		font-size: 1.5rem;
	}
	
	.form-header p {
		font-size: 0.875rem;
	}
	
	.social-buttons {
		flex-direction: column;
	}
	
	.modal-container {
		margin: 1rem;
		max-height: 90vh;
	}
	
	.modal-header,
	.modal-body,
	.modal-footer {
		padding: 1.25rem;
	}
}

@media (max-width: 575.98px) {
	.signup-bg {
		padding: 0.25rem;
	}
	
	.signup-image {
		min-height: 200px;
		padding: 0.75rem;
	}
	
	.brand-section {
		margin-bottom: 1rem;
	}
	
	.hero-content {
		margin-bottom: 1rem;
	}
	
	.illustration-container {
		margin: 1rem 0;
	}
	
	.feature-badges {
		margin-top: 1rem;
	}
	
	.form-wrapper {
		padding: 1rem 0.75rem;
	}
	
	.form-group {
		margin-bottom: 1.25rem;
	}
	
	.verification-input {
		font-size: 1.125rem;
		letter-spacing: 0.25rem;
	}
	
	.checkbox-label {
		font-size: 0.8rem;
	}
}

/* High DPI Displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
	.illustration {
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
	}
}

/* Dark mode support (if needed) */
@media (prefers-color-scheme: dark) {
	:root {
		--text-primary: #f7fafc;
		--text-secondary: #cbd5e0;
		--text-light: #a0aec0;
		--bg-white: #1a202c;
		--bg-light: #2d3748;
		--border-light: #4a5568;
	}
}

/* Focus management for accessibility */
.form-control:focus,
.checkbox-input:focus + .checkbox-label .checkmark,
.btn:focus,
.terms-link:focus {
	outline: 2px solid var(--primary-color);
	outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}

/* Print styles */
@media print {
	.signup-bg {
		background: white !important;
	}
	
	.signup-image {
		display: none;
	}
	
	.social-buttons {
		display: none;
	}
}
</style>