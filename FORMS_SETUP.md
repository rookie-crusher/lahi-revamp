# Lahi.io - Contact Forms Setup

## ✅ All Forms Configured

All three contact forms are now properly configured to send emails to `contact@lahi.io`:

1. **Contact Page** (`/contact`) - General inquiries
2. **Get a Quote** (Homepage) - Service quotations  
3. **Careers Page** (`/careers`) - Resume submissions

## 📧 Email Configuration

All emails are sent via **Resend** to: `contact@lahi.io`

### Environment Variables Required

Your `.env.local` file should contain:
```env
RESEND_API_KEY=re_TVEabkbz_3CALBfZkbao6zddfBjwE73Y9
TO_EMAIL=contact@lahi.io
```

## 🚀 Deployment to Vercel

### 1. Install Vercel CLI (if not already installed)
```bash
npm i -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
vercel --prod
```

### 4. Set Environment Variables in Vercel Dashboard
Go to your project settings on Vercel and add:
- `RESEND_API_KEY` = `re_TVEabkbz_3CALBfZkbao6zddfBjwE73Y9`
- `TO_EMAIL` = `contact@lahi.io`

## 📁 API Endpoints

- `/api/send-email` - Contact form submissions
- `/api/quotation` - Quote request submissions
- `/api/career` - Career/resume submissions

## 🧪 Testing Locally

To test the forms locally:

```bash
npm run dev
```

Note: The API routes will only work when deployed to Vercel, as they require serverless function support.

## 📋 Form Fields

### Contact Form
- Name (required)
- Email (required)
- Subject (required)
- Message (required)

### Quote Form
- Name (required)
- Email (required)
- Service (dropdown: Game Development, Mobile App, Website, Digital Media)
- Message/Requirements (required)

### Career Form
- Name (required)
- Email (required)
- Phone (required)
- LinkedIn (optional)
- Portfolio (optional)
- Resume file (required - PDF, DOC, DOCX)

## ✨ What Was Fixed

1. ✅ Added `resend` and `formidable` dependencies
2. ✅ Created Vercel-compatible API routes in `/api` folder
3. ✅ Fixed all email destinations to `contact@lahi.io`
4. ✅ Added CORS headers for API routes
5. ✅ Fixed Contact form duplicate handler
6. ✅ Wired up Quote form to backend
7. ✅ Added logging for debugging
8. ✅ Fixed Career form endpoint path

## 🔍 Verifying Setup

After deployment, test each form:
1. Fill out the form completely
2. Submit
3. Check `contact@lahi.io` inbox for the email
4. Check Vercel function logs if issues occur

## 📞 Support

If you encounter any issues, check:
- Vercel function logs in the dashboard
- Environment variables are set correctly
- Resend API key is valid and domain is verified
