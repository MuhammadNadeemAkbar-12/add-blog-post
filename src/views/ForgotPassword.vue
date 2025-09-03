<template>
  <div class="reset-password-wrapper">
    <div class="reset-container">
      <div class="reset-header">
        <div class="logo-section">
          <div class="logo-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="logo-text">SecureApp</h2>
        </div>
        <h1 class="reset-title">Reset Your Password</h1>
        <p class="reset-subtitle">
          {{ step === 1 ? 'Enter your email and verification code to continue' : 'Create a new secure password for your account' }}
        </p>
      </div>

      <!-- Step 1: Email and Verification Code -->
      <form v-if="step === 1" @submit.prevent="verifyCode" class="reset-form">
        <div class="form-group">
          <label for="email" class="form-label">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Email Address
          </label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            :class="['form-input', { 'error': emailError }]"
            placeholder="Enter your email address"
            required 
            :disabled="loading"
          />
          <span v-if="emailError" class="error-text">{{ emailError }}</span>
        </div>

        <div class="form-group">
          <label for="verificationCode" class="form-label">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="16" r="1" fill="currentColor"/>
              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2"/>
            </svg>
            Verification Code
          </label>
          <input 
            type="text" 
            id="verificationCode" 
            v-model="code" 
            :class="['form-input', { 'error': codeError }]"
            placeholder="Enter 6-digit code"
            maxlength="6" 
            required 
            :disabled="loading"
          />
          <span v-if="codeError" class="error-text">{{ codeError }}</span>
        </div>

        <button type="submit" :class="['btn-primary', { 'loading': loading }]" :disabled="loading">
          <span v-if="loading" class="spinner"></span>
          {{ loading ? 'Verifying...' : 'Verify Code' }}
        </button>
      </form>

      <!-- Step 2: New Password -->
      <form v-else @submit.prevent="resetPassword" class="reset-form">
        <div class="form-group">
          <label for="newPassword" class="form-label">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="16" r="1" fill="currentColor"/>
              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2"/>
            </svg>
            New Password
          </label>
          <div class="password-input-wrapper">
            <input 
              :type="showNewPassword ? 'text' : 'password'" 
              id="newPassword" 
              v-model="newPassword" 
              :class="['form-input', { 'error': passwordError }]"
              placeholder="Enter new password"
              required 
              minlength="8"
              :disabled="loading"
            />
            <button 
              type="button" 
              class="password-toggle"
              @click="showNewPassword = !showNewPassword"
              :disabled="loading"
            >
              <svg v-if="showNewPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 4.02643 7.65663 6.17 6.17M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1749 15.0074 10.8016 14.8565C10.4283 14.7056 10.0899 14.481 9.80765 14.1988C9.52541 13.9166 9.30082 13.5782 9.14987 13.2049C8.99892 12.8316 8.92484 12.4312 8.93194 12.0284C8.93905 11.6256 9.02722 11.2283 9.19117 10.8603C9.35512 10.4923 9.59151 10.161 9.886 9.886L14.12 14.12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="password-requirements">
            <div :class="['requirement', { 'met': passwordRequirements.minLength }]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              At least 8 characters
            </div>
            <div :class="['requirement', { 'met': passwordRequirements.hasUppercase }]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              One uppercase letter
            </div>
            <div :class="['requirement', { 'met': passwordRequirements.hasNumber }]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="20,6 9,17 4,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              One number
            </div>
          </div>
          <span v-if="passwordError" class="error-text">{{ passwordError }}</span>
        </div>

        <div class="form-group">
          <label for="confirmPassword" class="form-label">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="16" r="1" fill="currentColor"/>
              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="currentColor" stroke-width="2"/>
            </svg>
            Confirm New Password
          </label>
          <div class="password-input-wrapper">
            <input 
              :type="showConfirmPassword ? 'text' : 'password'" 
              id="confirmPassword" 
              v-model="confirmPassword" 
              :class="['form-input', { 'error': confirmPasswordError }]"
              placeholder="Confirm new password"
              required 
              minlength="8"
              :disabled="loading"
            />
            <button 
              type="button" 
              class="password-toggle"
              @click="showConfirmPassword = !showConfirmPassword"
              :disabled="loading"
            >
              <svg v-if="showConfirmPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 4.02643 7.65663 6.17 6.17M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1749 15.0074 10.8016 14.8565C10.4283 14.7056 10.0899 14.481 9.80765 14.1988C9.52541 13.9166 9.30082 13.5782 9.14987 13.2049C8.99892 12.8316 8.92484 12.4312 8.93194 12.0284C8.93905 11.6256 9.02722 11.2283 9.19117 10.8603C9.35512 10.4923 9.59151 10.161 9.886 9.886L14.12 14.12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <span v-if="confirmPasswordError" class="error-text">{{ confirmPasswordError }}</span>
        </div>

        <button type="submit" :class="['btn-primary', { 'loading': loading }]" :disabled="loading || !isPasswordValid">
          <span v-if="loading" class="spinner"></span>
          {{ loading ? 'Resetting...' : 'Reset Password' }}
        </button>

        <div class="back-to-login">
          <button type="button" @click="goToLogin" class="btn-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polyline points="15,18 9,12 15,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Back to Login
          </button>
        </div>
      </form>

      <!-- Success Message -->
      <div v-if="success" class="alert alert-success">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4905 2.02168 11.3363C2.16356 9.18208 2.99721 7.13214 4.39828 5.49233C5.79935 3.85252 7.69279 2.71157 9.79619 2.24003C11.8996 1.76848 14.1003 1.98877 16.07 2.87" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="22,4 12,14.01 9,11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        {{ success }}
      </div>

      <!-- Error Message -->
      <div v-if="error" class="alert alert-error">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
          <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const step = ref(1)
const email = ref('')
const code = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)
const loading = ref(false)
const error = ref('')
const success = ref('')

// Individual field errors
const emailError = ref('')
const codeError = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')

// Password requirements
const passwordRequirements = computed(() => ({
  minLength: newPassword.value.length >= 8,
  hasUppercase: /[A-Z]/.test(newPassword.value),
  hasNumber: /\d/.test(newPassword.value)
}))

const isPasswordValid = computed(() => {
  return Object.values(passwordRequirements.value).every(req => req) && 
         newPassword.value === confirmPassword.value
})

// Clear errors when values change
watch(email, () => { emailError.value = '' })
watch(code, () => { codeError.value = '' })
watch(newPassword, () => { passwordError.value = '' })
watch(confirmPassword, () => { confirmPasswordError.value = '' })

const validateEmail = () => {
  if (!email.value) {
    emailError.value = 'Email is required'
    return false
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'Please enter a valid email address'
    return false
  }
  return true
}

const validateCode = () => {
  if (!code.value) {
    codeError.value = 'Verification code is required'
    return false
  }
  if (!/^\d{6}$/.test(code.value)) {
    codeError.value = 'Please enter a valid 6-digit code'
    return false
  }
  return true
}

const validatePasswords = () => {
  let valid = true

  if (!newPassword.value) {
    passwordError.value = 'Password is required'
    valid = false
  } else if (!Object.values(passwordRequirements.value).every(req => req)) {
    passwordError.value = 'Password does not meet requirements'
    valid = false
  }

  if (!confirmPassword.value) {
    confirmPasswordError.value = 'Please confirm your password'
    valid = false
  } else if (newPassword.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Passwords do not match'
    valid = false
  }

  return valid
}

const verifyCode = async () => {
  error.value = ''
  
  if (!validateEmail() || !validateCode()) {
    return
  }

  loading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    step.value = 2
  } catch (err) {
    error.value = 'Verification failed. Please try again.'
  } finally {
    loading.value = false
  }
}

const resetPassword = async () => {
  error.value = ''
  
  if (!validatePasswords()) {
    return
  }

  loading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    success.value = 'Password reset successful! Redirecting to login...'
    
    setTimeout(() => {
      // Replace with actual router navigation
      // this.$router.push('/login')
      console.log('Redirecting to login...')
    }, 2000)
  } catch (err) {
    error.value = 'Password reset failed. Please try again.'
  } finally {
    loading.value = false
  }
}

const goToLogin = () => {
  // Replace with actual router navigation
  // this.$router.push('/login')
  console.log('Navigating to login...')
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.reset-password-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

.reset-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  padding: 48px;
  width: 100%;
  max-width: 480px;
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reset-header {
  text-align: center;
  margin-bottom: 32px;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.reset-title {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
}

.reset-subtitle {
  color: #6b7280;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

.reset-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-weight: 600;
  color: #374151;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.form-label svg {
  color: #6b7280;
}

.form-input {
  padding: 16px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: #fafafa;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.error {
  border-color: #ef4444;
  background: #fef2f2;
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.password-input-wrapper {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.password-toggle:hover {
  color: #374151;
  background: #f3f4f6;
}

.password-toggle:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.password-requirements {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
}

.requirement {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;
  transition: all 0.2s ease;
}

.requirement.met {
  color: #059669;
}

.requirement svg {
  width: 16px;
  height: 16px;
  opacity: 0.3;
  transition: all 0.2s ease;
}

.requirement.met svg {
  opacity: 1;
  color: #059669;
}

.error-text {
  color: #ef4444;
  font-size: 13px;
  margin-top: 4px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
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
  to {
    transform: rotate(360deg);
  }
}

.back-to-login {
  text-align: center;
  margin-top: 16px;
}

.btn-link {
  background: none;
  border: none;
  color: #667eea;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.btn-link:hover {
  background: #f8fafc;
  color: #5a67d8;
}

.alert {
  padding: 16px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  margin-top: 24px;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.alert-success {
  background: #f0fdf4;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.alert-error {
  background: #fef2f2;
  color: #dc2626;
  border: 1px solid #fecaca;
}

@media (max-width: 640px) {
  .reset-container {
    padding: 32px 24px;
    margin: 16px;
  }
  
  .reset-title {
    font-size: 24px;
  }
  
  .logo-text {
    font-size: 20px;
  }
}
</style>