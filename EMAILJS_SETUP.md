# EmailJS Configuration Setup

This portfolio uses EmailJS to handle contact form submissions. Follow these steps to configure it:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{name}}

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abc123def456`)

## 5. Update Contact Form Component

In `/components/ui/contact-form.tsx`, update these values around line 70:

```typescript
// Replace these with your actual EmailJS credentials
const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

## 6. Test the Configuration

1. Save the changes
2. Run your development server: `npm run dev`
3. Navigate to the contact page
4. Fill out and submit the form
5. Check your email to confirm it works

## Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update the contact form to use these variables:

```typescript
const result = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  templateParams,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
```

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Emails not received**: Verify your email service configuration
- **Template variables not working**: Ensure template variable names match form field names
- **Rate limiting**: EmailJS free plan has monthly limits

## EmailJS Free Plan Limits

- 200 emails per month
- 2 email services
- 2 email templates
- EmailJS branding in emails

For production use, consider upgrading to a paid plan for higher limits and custom branding.
