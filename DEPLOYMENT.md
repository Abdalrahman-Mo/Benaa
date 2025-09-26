# Netlify Deployment Guide

This guide will help you deploy your Binaa construction platform to Netlify.

## Prerequisites

1. A Netlify account (free at [netlify.com](https://netlify.com))
2. Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Method 1: Deploy via Netlify Dashboard (Recommended)

1. **Connect your repository:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Choose your Git provider and select your repository

2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or latest LTS)

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Configuration Files

The following files have been configured for Netlify deployment:

- `netlify.toml` - Main Netlify configuration
- `public/_redirects` - SPA routing redirects
- Updated `vite.config.ts` - Optimized build configuration
- Updated `package.json` - Build scripts

## Build Optimization

The project has been optimized for production with:

- **Code splitting**: Vendor, router, and UI libraries are split into separate chunks
- **Asset optimization**: Images and CSS are optimized
- **Caching headers**: Static assets are cached for better performance
- **Security headers**: Basic security headers are configured

## Environment Variables

If you need to set environment variables:

1. Go to your Netlify site dashboard
2. Navigate to Site settings > Environment variables
3. Add your variables (e.g., API keys, database URLs)

## Custom Domain

To add a custom domain:

1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

## Continuous Deployment

Once connected to Git, Netlify will automatically:
- Deploy when you push to your main branch
- Run preview deployments for pull requests
- Show build logs and deployment status

## Troubleshooting

### Build Failures
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Routing Issues
- The `_redirects` file handles SPA routing
- All routes redirect to `index.html` for client-side routing

### Performance Issues
- Check the build output for large assets
- Consider image optimization for large images
- Monitor Core Web Vitals in Netlify dashboard

## Support

For issues specific to this deployment:
- Check Netlify documentation: [docs.netlify.com](https://docs.netlify.com)
- Review build logs in Netlify dashboard
- Ensure all configuration files are properly committed to your repository
