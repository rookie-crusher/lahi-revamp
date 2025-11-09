# Security & Deployment Guide

## 🔒 GitHub Security Best Practices

### 1. Protect Your Main Branch
Go to: `Settings` → `Branches` → `Add branch protection rule`

**Required Settings:**
- ✅ Branch name pattern: `main`
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass before merging
- ✅ Do not allow bypassing the above settings
- ✅ Restrict who can push to matching branches

### 2. Enable Security Features
Go to: `Settings` → `Security & analysis`

**Enable:**
- ✅ Dependency graph
- ✅ Dependabot alerts
- ✅ Dependabot security updates
- ✅ Secret scanning alerts

### 3. Add .gitignore (Already done ✅)
Ensure these are ignored:
```
node_modules/
.env
.env.local
.env.*.local
dist/
.vercel/
```

### 4. Never Commit Secrets
**NEVER commit:**
- API keys
- Environment variables
- Database credentials
- Private keys

**If you accidentally commit a secret:**
1. Immediately rotate the key (get a new one)
2. Remove it from git history using `git filter-branch` or BFG Repo-Cleaner
3. Force push (be careful!)

### 5. Set Up 2FA (Two-Factor Authentication)
- Go to GitHub Settings → Password and authentication
- Enable two-factor authentication
- Use an authenticator app (Google Authenticator, Authy)

### 6. Review Repository Access
- Go to Settings → Collaborators
- Remove anyone who no longer needs access
- Use teams for organization repos

---

## 🚀 Vercel Security & Reliability

### 1. Environment Variables (CRITICAL)
Your deployment WILL fail if environment variables are missing.

**Current Required Variables:**
```
RESEND_API_KEY=re_TVEabkbz_3CALBfZkbao6zddfBjwE73Y9
```

**How to Add/Update:**
1. Go to: https://vercel.com/lahi-projectt121/lahi-revamp/settings/environment-variables
2. Add variable name and value
3. Select environment: Production, Preview, Development
4. Click Save
5. Redeploy (Vercel auto-redeploys on save)

**Best Practice:**
- Use different API keys for Production vs Development
- Rotate keys every 90 days
- Never share API keys in screenshots or public forums

### 2. Enable Vercel Security Features

**Vercel Project Settings → Security:**
- ✅ Enable authentication for preview deployments (optional)
- ✅ Set up custom domains with SSL (auto-enabled)
- ✅ Enable DDoS protection (included by default)

### 3. Domain & SSL
- Vercel provides automatic SSL certificates
- Renews automatically - NO ACTION NEEDED
- Custom domains are free on all plans

### 4. Deployment Protection
**To prevent accidental deletions:**
- Don't delete the project in Vercel dashboard
- Don't delete the connected GitHub repository
- Keep at least one team member with access

### 5. Monitoring & Alerts

**Set up monitoring:**
1. Go to Vercel Dashboard → Your Project → Analytics
2. Monitor:
   - Function errors
   - Response times
   - Traffic patterns

**Enable deployment notifications:**
- Go to Project Settings → Notifications
- Enable Slack/Discord/Email notifications for:
  - Failed deployments
  - Successful deployments

### 6. Function Limits (Important!)

**Vercel Free Tier Limits:**
- Serverless Function Execution: 100 GB-hours/month
- Bandwidth: 100 GB/month
- Invocations: 1000 / day (for hobby accounts)

**Your current API routes use serverless functions:**
- `/api/send-email`
- `/api/quotation`
- `/api/career`

**If you exceed limits:**
- Emails will stop sending
- Forms will return errors
- Solution: Upgrade to Pro plan ($20/month) or optimize

### 7. Database & Backups
**Current setup:**
- No database (forms send emails directly)
- No data persistence needed
- Low risk of data loss

**If you add a database later:**
- Use Vercel Postgres or external service
- Enable automatic backups
- Test restoration process

---

## ⚠️ Will Vercel Deployment Stop?

**Short Answer: No, but...**

### When Deployment Stays Active:
✅ Free tier projects never expire
✅ Deployments stay live indefinitely
✅ SSL certificates auto-renew
✅ No monthly maintenance required

### When Deployment Could Fail:
❌ Environment variables are deleted
❌ GitHub repository is deleted
❌ Vercel project is manually deleted
❌ API rate limits exceeded (Resend free tier)
❌ Domain expires (if using custom domain)

### Resend Email Service Limits:
**Free Tier:**
- 100 emails/day
- 3,000 emails/month

**If exceeded:**
- Forms will fail with "Failed to send email"
- You'll need to upgrade Resend plan

---

## 🛡️ Recommended Security Checklist

### GitHub
- [ ] Enable 2FA on your account
- [ ] Protect main branch
- [ ] Enable Dependabot alerts
- [ ] Review .gitignore is complete
- [ ] Never commit .env files
- [ ] Set repository to private (if needed)

### Vercel
- [ ] Add all environment variables
- [ ] Test all three forms work
- [ ] Enable deployment notifications
- [ ] Monitor function usage
- [ ] Set up custom domain (optional)
- [ ] Enable 2FA on Vercel account

### API Keys & Services
- [ ] Verify Resend API key is valid
- [ ] Monitor Resend usage dashboard
- [ ] Rotate API keys every 3-6 months
- [ ] Keep backup of environment variables (securely)
- [ ] Document which email (contact@lahi.io) receives forms

---

## 📋 Monthly Maintenance Tasks

### Every Month:
1. Check Vercel Analytics for errors
2. Review Resend email usage
3. Test all three forms
4. Check for npm security updates: `npm audit`
5. Review GitHub Dependabot alerts

### Every 3 Months:
1. Rotate API keys (generate new Resend key)
2. Update dependencies: `npm update`
3. Review and update this documentation

### Every 6 Months:
1. Review team access on GitHub & Vercel
2. Backup your repository (clone locally)
3. Test disaster recovery (can you redeploy from scratch?)

---

## 🚨 Emergency Recovery Plan

### If Site Goes Down:

**1. Check Vercel Dashboard**
- Go to: https://vercel.com/lahi-projectt121/lahi-revamp
- Look for deployment errors
- Check function logs

**2. Verify Environment Variables**
- Settings → Environment Variables
- Ensure RESEND_API_KEY exists

**3. Redeploy**
```bash
npx vercel --prod
```

**4. Check API Services**
- Log into Resend dashboard
- Verify API key is active
- Check email sending limits

### If Forms Stop Working:

**1. Test API endpoints directly:**
```bash
curl -X POST https://your-site.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
```

**2. Check browser console for errors**
- Open Developer Tools (F12)
- Go to Console tab
- Look for API errors

**3. Review Vercel function logs**
- Dashboard → Functions tab
- Check error messages

---

## 💾 Backup Strategy

### What to Backup:

**1. Code (GitHub):**
- Already backed up in GitHub
- Clone locally periodically: `git clone https://github.com/rookie-crusher/knowwage.git`

**2. Environment Variables:**
- Save to password manager (1Password, LastPass, Bitwarden)
- Keep encrypted backup file locally

**3. Configuration:**
- vercel.json
- package.json
- This security guide

### Backup Script (Run monthly):
```bash
# Clone fresh copy
git clone https://github.com/rookie-crusher/knowwage.git backup-$(date +%Y%m%d)

# Or pull latest
cd lahi.io
git pull origin main
```

---

## 📊 Monitoring Dashboard URLs

Save these for quick access:

**Vercel:**
- Project: https://vercel.com/lahi-projectt121/lahi-revamp
- Analytics: https://vercel.com/lahi-projectt121/lahi-revamp/analytics
- Functions: https://vercel.com/lahi-projectt121/lahi-revamp/functions

**GitHub:**
- Repo: https://github.com/rookie-crusher/knowwage
- Security: https://github.com/rookie-crusher/knowwage/security

**Resend:**
- Dashboard: https://resend.com/overview
- API Keys: https://resend.com/api-keys

---

## ✅ Current Status

**GitHub:**
- ✅ Repository initialized
- ✅ Code committed
- ✅ Connected to Vercel
- ⚠️ Branch protection (recommended to set up)
- ⚠️ 2FA (recommended to enable)

**Vercel:**
- ✅ Project deployed
- ✅ Production URL active
- ⚠️ Environment variable status: CHECK DASHBOARD
- ⚠️ Deployment notifications: recommended to set up

**Forms:**
- ✅ Contact form configured
- ✅ Quote form configured
- ✅ Career form configured
- ✅ All send to: contact@lahi.io

---

## 🆘 Support Contacts

**Vercel Support:**
- Free tier: Community forum only
- Pro tier: Email support
- https://vercel.com/support

**GitHub Support:**
- https://support.github.com

**Resend Support:**
- https://resend.com/support
- Email: support@resend.com

---

**Last Updated:** November 9, 2025
**Maintained by:** Lahi Team
**Review Frequency:** Quarterly
