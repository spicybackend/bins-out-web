# Setup Instructions for Bins Out Website

Follow these steps to get your Bins Out website up and running on GitHub Pages.

## 🚀 Quick Setup

### 1. Update Configuration

First, update the Astro configuration with your GitHub username:

**File: `astro.config.mjs`**
```js
export default defineConfig({
  site: "https://YOUR_GITHUB_USERNAME.github.io", // Replace with your GitHub username
  // ... rest of config
});
```

### 2. Create GitHub Repository

1. Create a new repository on GitHub named `bins-out-web`
2. Push this code to the repository:

```bash
git init
git add .
git commit -m "Initial commit: Bins Out website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bins-out-web.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The deployment workflow will automatically trigger

### 4. Update Site URL (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Update the `site` URL in `astro.config.mjs`
3. Configure DNS settings with your domain provider

## 🛠️ Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Making Changes

1. Make your changes locally
2. Test with `npm run build`
3. Commit and push to `main` branch
4. GitHub Actions will automatically deploy

## 📱 App Store Preparation

### Before App Store Submission

1. **Update Contact Emails**: Replace placeholder emails in:
   - Privacy policy (`src/pages/privacy.astro`)
   - Terms of service (`src/pages/terms.astro`)
   - Footer (`src/layouts/BaseLayout.astro`)

2. **Add Real App Store Badge**:
   - Download official badge from Apple
   - Replace `public/app-store-badge.svg`
   - Update the AppStoreBadge component to use real App Store link

3. **Create Apple Touch Icon**:
   - Create a 180x180 PNG icon
   - Save as `public/apple-touch-icon.png`
   - Uncomment the apple-touch-icon link in `BaseLayout.astro`

4. **Add Open Graph Image**:
   - Create a 1200x630 PNG image
   - Save as `public/og-image.png`

### App Store Requirements Checklist

- ✅ Privacy Policy (included)
- ✅ Terms of Service (included)
- ✅ Contact information (update placeholders)
- ✅ Website URL for App Store listing
- ⏳ App Store badge (update when app is ready)

## 🎨 Customization

### Colors and Styling

Edit `src/styles/global.css` to customize:
- Color palette (CSS custom properties)
- Glass effects intensity
- Typography
- Spacing and layout

### Content Updates

- **Homepage**: `src/pages/index.astro`
- **Privacy Policy**: `src/pages/privacy.astro`
- **Terms**: `src/pages/terms.astro`
- **Navigation**: `src/layouts/BaseLayout.astro`

### Adding New Pages

1. Create new `.astro` file in `src/pages/`
2. Add navigation link in `BaseLayout.astro`
3. Update sitemap if needed

## 🔧 Troubleshooting

### Build Failures

- Check TypeScript errors: `npm run astro check`
- Verify all imports and file paths
- Ensure all required dependencies are installed

### Deployment Issues

- Verify GitHub Pages is enabled
- Check Actions tab for deployment logs
- Ensure `site` and `base` URLs are correct in config

### Styling Issues

- CSS is processed by Astro - avoid external imports
- Use CSS custom properties for consistency
- Test on different devices and browsers

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Apple App Store Guidelines](https://developer.apple.com/app-store/guidelines/)
- [iOS App Store Marketing Guidelines](https://developer.apple.com/app-store/marketing/guidelines/)

## 🆘 Support

If you encounter issues:

1. Check the build logs in GitHub Actions
2. Verify all file paths and imports
3. Test locally with `npm run build`
4. Review Astro documentation for troubleshooting

---

**Ready to launch?** Once everything is configured, your site will be available at:
`https://YOUR_GITHUB_USERNAME.github.io/bins-out-web`
