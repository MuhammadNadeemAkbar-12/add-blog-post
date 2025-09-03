<template>
	<div class="login-bg">
		<div class="container-fluid login-wrapper">
			<div class="row g-0 min-vh-100">
				<!-- Left Side: Welcome Section -->
				<div class="col-xl-5 col-lg-6 d-none d-lg-flex login-hero">
					<div class="hero-content">
						<div class="hero-header">
							<div class="logo-section">
								<div class="logo-icon">
									<i class="bi bi-chat-dots-fill"></i>
								</div>
								<h2 class="brand-name">ChatApp</h2>
							</div>
						</div>

						<div class="hero-main">
							<h1 class="hero-title">Welcome Back!</h1>
							<p class="hero-subtitle">
								Sign in to continue your conversations and connect with your
								community.
							</p>

							<div class="feature-list">
								<div class="feature-item">
									<i class="bi bi-shield-check"></i>
									<span>Secure Authentication</span>
								</div>
								<div class="feature-item">
									<i class="bi bi-people"></i>
									<span>Connect with Friends</span>
								</div>
								<div class="feature-item">
									<i class="bi bi-chat-heart"></i>
									<span>Real-time Messaging</span>
								</div>
							</div>
						</div>

						<div class="hero-illustration">
							<svg viewBox="0 0 400 300" class="illustration-svg">
								<!-- Background circles -->
								<defs>
									<linearGradient
										id="grad1"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="100%">
										<stop
											offset="0%"
											style="stop-color: #667eea; stop-opacity: 0.8" />
										<stop
											offset="100%"
											style="stop-color: #764ba2; stop-opacity: 0.8" />
									</linearGradient>
								</defs>

								<!-- Chat bubbles -->
								<ellipse
									cx="120"
									cy="80"
									rx="80"
									ry="25"
									fill="url(#grad1)"
									opacity="0.3" />
								<ellipse
									cx="280"
									cy="140"
									rx="90"
									ry="30"
									fill="url(#grad1)"
									opacity="0.2" />

								<!-- Main chat window -->
								<rect
									x="80"
									y="100"
									width="240"
									height="120"
									rx="15"
									fill="rgba(255,255,255,0.95)"
									stroke="rgba(102,126,234,0.2)"
									stroke-width="2" />

								<!-- Chat messages -->
								<rect
									x="100"
									y="120"
									width="140"
									height="15"
									rx="8"
									fill="#667eea"
									opacity="0.6" />
								<rect
									x="190"
									y="145"
									width="120"
									height="15"
									rx="8"
									fill="#764ba2"
									opacity="0.6" />
								<rect
									x="100"
									y="170"
									width="100"
									height="15"
									rx="8"
									fill="#667eea"
									opacity="0.6" />
								<rect
									x="210"
									y="195"
									width="100"
									height="15"
									rx="8"
									fill="#764ba2"
									opacity="0.6" />

								<!-- User avatars -->
								<circle cx="110" cy="110" r="6" fill="#50e3c2" />
								<circle cx="310" cy="200" r="8" fill="#ff6b6b" opacity="0.7" />
								<circle cx="90" cy="180" r="5" fill="#4ecdc4" opacity="0.8" />
							</svg>
						</div>
					</div>
				</div>

				<!-- Right Side: Login Form -->
				<div class="col-xl-7 col-lg-6 col-12 login-form-section">
					<div class="form-container">
						<!-- Mobile Header -->
						<div class="mobile-header d-lg-none">
							<div class="mobile-logo">
								<i class="bi bi-chat-dots-fill"></i>
								<span>ChatApp</span>
							</div>
						</div>

						<div class="form-content">
							<div class="form-header">
								<h1 class="form-title">Sign In</h1>
								<p class="form-subtitle">Access your account</p>
							</div>

							<form
								@submit.prevent="handleSubmit"
								class="login-form"
								autocomplete="off"
								novalidate>
								<!-- Name Field - Hidden for Login -->
								<div class="form-group" style="display: none;">
									<label for="name" class="form-label">Full Name</label>
									<div class="input-wrapper">
										<div class="input-icon">
											<i class="bi bi-person"></i>
										</div>
										<input
											type="text"
											class="form-input"
											:class="getInputClass('name')"
											id="name"
											v-model="form.name"
											placeholder="Enter your full name"
											@blur="validateField('name')"
											@input="clearFieldError('name')" />
										<div class="input-status" v-if="valid.name">
											<i class="bi bi-check-circle-fill"></i>
										</div>
									</div>
									<transition name="error">
										<div class="error-message" v-if="errors.name">
											<i class="bi bi-exclamation-circle"></i>
											{{ errors.name }}
										</div>
									</transition>
								</div>

								<!-- Email Field -->
								<div class="form-group">
									<label for="email" class="form-label">Email Address</label>
									<div class="input-wrapper">
										<div class="input-icon">
											<i class="bi bi-envelope"></i>
										</div>
										<input
											type="email"
											class="form-input"
											:class="getInputClass('email')"
											id="email"
											v-model="form.email"
											placeholder="Enter your email"
											@blur="validateField('email')"
											@input="clearFieldError('email')"
											required />
										<div class="input-status" v-if="valid.email">
											<i class="bi bi-check-circle-fill"></i>
										</div>
									</div>
									<transition name="error">
										<div class="error-message" v-if="errors.email">
											<i class="bi bi-exclamation-circle"></i>
											{{ errors.email }}
										</div>
									</transition>
								</div>

								<!-- Password Field -->
								<div class="form-group">
									<label for="password" class="form-label">Password</label>
									<div class="input-wrapper">
										<div class="input-icon">
											<i class="bi bi-lock"></i>
										</div>
										<input
											:type="showPassword ? 'text' : 'password'"
											class="form-input"
											:class="getInputClass('password')"
											id="password"
											v-model="form.password"
											placeholder="Enter your password"
											@blur="validateField('password')"
											@input="clearFieldError('password')"
											required />
										<button
											type="button"
											class="password-toggle"
											@click="showPassword = !showPassword"
											tabindex="-1">
											<i
												:class="
													showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'
												"></i>
										</button>
									</div>
									<transition name="error">
										<div class="error-message" v-if="errors.password">
											<i class="bi bi-exclamation-circle"></i>
											{{ errors.password }}
										</div>
									</transition>
								</div>

								<!-- Verification Code Field - Hidden for Login -->
								<div class="form-group" style="display: none;">
									<label for="verificationCode" class="form-label"
										>Verification Code</label
									>
									<div class="input-wrapper">
										<div class="input-icon">
											<i class="bi bi-shield-check"></i>
										</div>
										<input
											type="text"
											class="form-input code-input"
											:class="getInputClass('code')"
											id="verificationCode"
											v-model="form.code"
											maxlength="6"
											placeholder="000000"
											@blur="validateField('code')"
											@input="handleCodeInput" />
										<div class="input-status" v-if="valid.code">
											<i class="bi bi-check-circle-fill"></i>
										</div>
									</div>
									<transition name="error">
										<div class="error-message" v-if="errors.code">
											<i class="bi bi-exclamation-circle"></i>
											{{ errors.code }}
										</div>
									</transition>
								</div>

								<!-- Form Options -->
								<div class="form-options">
									<label class="checkbox-wrapper">
										<input type="checkbox" v-model="form.remember" />
										<span class="checkmark"></span>
										<span class="checkbox-label">Remember me</span>
									</label>
									<router-link to="/forgot" class="forgot-link">
										Forgot password?
									</router-link>
								</div>

								<!-- Submit Button -->
								<button
									type="submit"
									class="submit-btn"
									>
									<span v-if="!loading" class="btn-content">
										<i class="bi bi-box-arrow-in-right"></i>
										Sign In
									</span>
									<span v-else class="btn-content">
										<div class="spinner"></div>
										Signing in...
									</span>
								</button>

								<!-- Login Error Alert -->
								<transition name="alert">
									<div v-if="loginError" class="alert alert-error">
										<i class="bi bi-exclamation-triangle-fill"></i>
										<span>{{ loginError }}</span>
									</div>
								</transition>
							</form>

							<!-- Sign Up Link -->
							<div class="signup-prompt">
								<span class="prompt-text">Don't have an account?</span>
								<router-link to="/signup" class="signup-link">
									Create Account
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "LoginForm",
		data() {
			return {
				form: {
					name: "",
					email: "",
					password: "",
					code: "",
					remember: false,
				},
				errors: {},
				valid: {},
				showPassword: false,
				loading: false,
				loginError: "",
			};
		},
		computed: {
			isFormValid() {
				// For login, only email and password are required
				return (
					this.valid.email && 
					this.valid.password &&
					Object.keys(this.errors).length === 0
				);
			},
		},
		methods: {
			getInputClass(field) {
				if (this.errors[field]) return "error";
				if (this.valid[field]) return "success";
				return "";
			},

			clearFieldError(field) {
				if (this.errors[field]) {
					delete this.errors[field];
					this.$forceUpdate();
				}
				this.loginError = "";
			},

			validateField(field) {
				const value = this.form[field];

				switch (field) {
					case "name":
						if (!value.trim()) {
							this.errors.name = "Full name is required";
							delete this.valid.name;
						} else if (value.trim().length < 2) {
							this.errors.name = "Name must be at least 2 characters";
							delete this.valid.name;
						} else {
							this.valid.name = true;
							delete this.errors.name;
						}
						break;

					case "email": {
						const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
						if (!value) {
							this.errors.email = "Email address is required";
							delete this.valid.email;
						} else if (!emailRegex.test(value)) {
							this.errors.email = "Please enter a valid email address";
							delete this.valid.email;
						} else {
							this.valid.email = true;
							delete this.errors.email;
						}
						break;
					}

					case "password":
						if (!value) {
							this.errors.password = "Password is required";
							delete this.valid.password;
						} else if (value.length < 6) {
							this.errors.password = "Password must be at least 6 characters";
							delete this.valid.password;
						} else {
							this.valid.password = true;
							delete this.errors.password;
						}
						break;

					case "code":
						if (!value) {
							this.errors.code = "Verification code is required";
							delete this.valid.code;
						} else if (!/^\d{6}$/.test(value)) {
							this.errors.code = "Code must be exactly 6 digits";
							delete this.valid.code;
						} else {
							this.valid.code = true;
							delete this.errors.code;
						}
						break;
				}

				this.$forceUpdate();
			},

			handleCodeInput(event) {
				// Only allow numbers
				const value = event.target.value.replace(/\D/g, "");
				this.form.code = value;
				this.clearFieldError("code");
			},

			validateForm() {
				// Only validate email and password for login
				this.validateField("email");
				this.validateField("password");

				return this.isFormValid;
			},

			handleSubmit() {
				if (!this.validateForm()) return;

				this.loading = true;
				this.loginError = "";

				setTimeout(() => {
					// Get all users from localStorage
					let allUsers = [];
					try {
						allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
					} catch (e) {
						console.warn("Error parsing user data");
					}

					// Find user with matching credentials (only email and password for login)
					const found = allUsers.find(
						(u) =>
							u.email === this.form.email &&
							u.password === this.form.password
					);

					if (!found) {
						this.loading = false;
						this.loginError =
							"Invalid credentials. Please check your information and try again.";
						return;
					}

					// Success: login and redirect
					localStorage.setItem("isLoggedIn", "true");
					localStorage.setItem("userName", found.name);
					localStorage.setItem("userEmail", found.email);
					localStorage.setItem("userAllData", JSON.stringify(found));

					this.loading = false;
					this.$router.push("/UserDashboard");
				}, 1500);
			},
		},
	};
</script>

<style scoped>
	@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css");
	@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

	* {
		box-sizing: border-box;
	}

	.login-bg {
		font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		min-height: 100vh;
		position: relative;
	}

	.login-bg::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
				circle at 20% 80%,
				rgba(120, 119, 198, 0.3) 0%,
				transparent 50%
			),
			radial-gradient(
				circle at 80% 20%,
				rgba(255, 255, 255, 0.1) 0%,
				transparent 50%
			),
			radial-gradient(
				circle at 40% 40%,
				rgba(120, 119, 198, 0.2) 0%,
				transparent 50%
			);
	}

	.login-wrapper {
		position: relative;
		z-index: 1;
		padding: 0;
	}

	/* Hero Section */
	.login-hero {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border-right: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 3rem 2rem;
		color: white;
	}

	.hero-content {
		max-width: 400px;
		text-align: center;
	}

	.logo-section {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.logo-icon {
		width: 60px;
		height: 60px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		backdrop-filter: blur(10px);
	}

	.brand-name {
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0;
		letter-spacing: -0.02em;
	}

	.hero-title {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		line-height: 1.2;
		letter-spacing: -0.02em;
	}

	.hero-subtitle {
		font-size: 1.1rem;
		opacity: 0.9;
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	.feature-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.feature-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.95rem;
		opacity: 0.9;
	}

	.feature-item i {
		font-size: 1.1rem;
		color: #50e3c2;
	}

	.illustration-svg {
		width: 100%;
		max-width: 350px;
		height: auto;
		margin-top: 1rem;
	}

	/* Form Section */
	.login-form-section {
		background: rgba(255, 255, 255, 0.98);
		backdrop-filter: blur(10px);
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.form-container {
		width: 100%;
		max-width: 480px;
		padding: 2rem;
	}

	.mobile-header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		margin-bottom: 2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #f0f0f0;
	}

	.mobile-logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.25rem;
		font-weight: 700;
		color: #667eea;
	}

	.mobile-logo i {
		font-size: 1.5rem;
	}

	.form-content {
		width: 100%;
	}

	.form-header {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.form-title {
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a1a;
		margin-bottom: 0.5rem;
		letter-spacing: -0.02em;
	}

	.form-subtitle {
		font-size: 1rem;
		color: #666;
		margin: 0;
	}

	/* Form Styles */
	.login-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		position: relative;
	}

	.form-label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
		color: #374151;
		font-size: 0.9rem;
	}

	.input-wrapper {
		position: relative;
		display: flex;
		align-items: center;
	}

	.input-icon {
		position: absolute;
		left: 1rem;
		z-index: 2;
		color: #9ca3af;
		transition: color 0.2s ease;
	}

	.form-input {
		width: 100%;
		padding: 1rem 1rem 1rem 2.75rem;
		border: 2px solid #e5e7eb;
		border-radius: 12px;
		font-size: 1rem;
		background: #fff;
		transition: all 0.2s ease;
		outline: none;
	}

	.form-input:focus {
		border-color: #667eea;
		box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
	}

	.form-input:focus + .input-icon {
		color: #667eea;
	}

	.form-input.success {
		border-color: #10b981;
		background: #f0fdf4;
	}

	.form-input.success:focus {
		border-color: #10b981;
		box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
	}

	.form-input.error {
		border-color: #ef4444;
		background: #fef2f2;
	}

	.form-input.error:focus {
		border-color: #ef4444;
		box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
	}

	.input-status {
		position: absolute;
		right: 1rem;
		color: #10b981;
		font-size: 1.1rem;
	}

	.password-toggle {
		position: absolute;
		right: 1rem;
		background: none;
		border: none;
		color: #9ca3af;
		cursor: pointer;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 0.2s ease;
	}

	.password-toggle:hover {
		color: #667eea;
	}

	.code-input {
		font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas,
			"Courier New", monospace;
		letter-spacing: 0.25em;
		text-align: center;
	}

	.error-message {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: #ef4444;
		font-size: 0.85rem;
		margin-top: 0.5rem;
	}

	.error-message i {
		font-size: 0.9rem;
	}

	/* Form Options */
	.form-options {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.5rem 0;
	}

	.checkbox-wrapper {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		font-size: 0.9rem;
		color: #374151;
	}

	.checkbox-wrapper input[type="checkbox"] {
		display: none;
	}

	.checkmark {
		width: 18px;
		height: 18px;
		border: 2px solid #d1d5db;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.checkbox-wrapper input:checked + .checkmark {
		background: #667eea;
		border-color: #667eea;
	}

	.checkbox-wrapper input:checked + .checkmark::after {
		content: "✓";
		color: white;
		font-size: 12px;
		font-weight: bold;
	}

	.forgot-link {
		color: #667eea;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.forgot-link:hover {
		color: #5a67d8;
		text-decoration: underline;
	}

	/* Submit Button */
	.submit-btn {
		width: 100%;
		padding: 1rem;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border: none;
		border-radius: 12px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		position: relative;
		overflow: hidden;
		margin-top: 0.5rem;
	}

	.submit-btn:hover:not(:disabled) {
		transform: translateY(-1px);
		box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
	}

	.submit-btn:active:not(:disabled) {
		transform: translateY(0);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
		transform: none;
	}

	.btn-content {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
	}

	.spinner {
		width: 18px;
		height: 18px;
		border: 2px solid rgba(255, 255, 255, 0.3);
		border-top: 2px solid white;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	/* Alert */
	.alert {
		padding: 1rem;
		border-radius: 8px;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		margin-top: 1rem;
	}

	.alert-error {
		background: #fef2f2;
		color: #dc2626;
		border: 1px solid #fecaca;
	}

	/* Sign Up Prompt */
	.signup-prompt {
		text-align: center;
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #f3f4f6;
	}

	.prompt-text {
		color: #6b7280;
		font-size: 0.95rem;
	}

	.signup-link {
		color: #667eea;
		text-decoration: none;
		font-weight: 600;
		margin-left: 0.5rem;
		transition: color 0.2s ease;
	}

	.signup-link:hover {
		color: #5a67d8;
		text-decoration: underline;
	}

	/* Animations */
	.error-enter-active,
	.error-leave-active {
		transition: all 0.3s ease;
	}

	.error-enter-from,
	.error-leave-to {
		opacity: 0;
		transform: translateY(-10px);
	}

	.alert-enter-active,
	.alert-leave-active {
		transition: all 0.3s ease;
	}

	.alert-enter-from,
	.alert-leave-to {
		opacity: 0;
		transform: translateY(-10px);
	}

	/* Responsive Design */
	@media (max-width: 1199.98px) {
		.hero-title {
			font-size: 2.2rem;
		}

		.form-title {
			font-size: 1.8rem;
		}
	}

	@media (max-width: 991.98px) {
		.login-form-section {
			min-height: 100vh;
			padding: 2rem 1rem;
		}

		.form-container {
			max-width: 500px;
			padding: 1.5rem;
		}
	}

	@media (max-width: 767.98px) {
		.form-container {
			padding: 1rem;
			max-width: 100%;
		}

		.form-title {
			font-size: 1.6rem;
		}

		.form-options {
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}

		.login-form {
			gap: 1.25rem;
		}
	}

	@media (max-width: 575.98px) {
		.login-bg {
			background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		}

		.login-form-section {
			background: rgba(255, 255, 255, 0.95);
			padding: 1rem 0.5rem;
		}

		.form-container {
			padding: 1rem 0.75rem;
		}

		.form-header {
			margin-bottom: 2rem;
		}

		.form-title {
			font-size: 1.5rem;
		}

		.form-input {
			padding: 0.875rem 0.875rem 0.875rem 2.5rem;
		}

		.submit-btn {
			padding: 0.875rem;
		}
	}

	/* High-resolution displays */
	@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
		.form-input,
		.submit-btn {
			border-width: 1px;
		}
	}

	/* Dark mode support */
	@media (prefers-color-scheme: dark) {
		.login-form-section {
			background: rgba(17, 24, 39, 0.95);
		}

		.form-container {
			color: #f9fafb;
		}

		.form-title {
			color: #f9fafb;
		}

		.form-subtitle,
		.form-label {
			color: #d1d5db;
		}

		.form-input {
			background: rgba(31, 41, 55, 0.8);
			border-color: #4b5563;
			color: #f9fafb;
		}

		.form-input::placeholder {
			color: #9ca3af;
		}

		.mobile-header {
			border-bottom-color: #374151;
		}

		.signup-prompt {
			border-top-color: #374151;
		}

		.prompt-text {
			color: #9ca3af;
		}
	}

	/* Accessibility improvements */
	@media (prefers-reduced-motion: reduce) {
		*,
		::before,
		::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	/* Focus visible for keyboard navigation */
	.form-input:focus-visible,
	.submit-btn:focus-visible,
	.forgot-link:focus-visible,
	.signup-link:focus-visible {
		outline: 2px solid #667eea;
		outline-offset: 2px;
	}

	/* Loading state improvements */
	.submit-btn:disabled .spinner {
		animation: spin 1s linear infinite;
	}

	/* Enhanced hover states */
	.checkbox-wrapper:hover .checkmark {
		border-color: #667eea;
	}

	.input-wrapper:hover .input-icon {
		color: #667eea;
	}

	/* Print styles */
	@media print {
		.login-bg {
			background: white !important;
			color: black !important;
		}

		.login-hero {
			display: none !important;
		}

		.form-container {
			box-shadow: none !important;
			border: 1px solid #ccc !important;
		}
	}
</style>
