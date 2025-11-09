# Bins Out - Website

A modern, liquid glass-styled static website for the Bins Out iPhone application. Built with Astro and deployed to GitHub Pages.

## 🗑️ About Bins Out

Bins Out is a simple iPhone app that helps you never miss bin collection day again. With smart notifications, a beautiful home screen widget, and flexible scheduling, it's the perfect solution for managing your waste collection reminders.

### Key Features

- **Smart Notifications** - Get timely reminders before collection day
- **Home Screen Widget** - See upcoming collections at a glance
- **Flexible Scheduling** - Custom cycles for different bin types
- **Privacy First** - No data collection, everything stays on your device
- **Completely Free** - No subscriptions, no ads, no hidden costs
- **Blazing Fast** - Native iPhone app

## 🚀 Website Features

- **Minimalistic Design** - Clean, modern aesthetic inspired by premium Mac apps
- **Cream/Beige Theme** - Soft, professional color palette
- **Simple Icons & Typography** - Clean interface without overwhelming colors
- **Responsive Design** - Works perfectly on all devices
- **Privacy & Terms Pages** - Required for App Store submission
- **GitHub Pages Deployment** - Automated deployment workflow
- **SEO Optimized** - Meta tags, Open Graph, and structured data

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bins-out-web.git
cd bins-out-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
bins-out-web/
├── src/
│   ├── layouts/           # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/             # Page routes
│   │   ├── index.astro    # Homepage
│   │   ├── privacy.astro  # Privacy policy
│   │   └── terms.astro    # Terms of service
│   └── styles/            # Global styles
│       └── global.css
├── public/                # Static assets
│   ├── favicon.svg
│   └── app-store-badge.svg
├── .github/
│   └── workflows/         # GitHub Actions
│       └── deploy.yml     # Deployment workflow
└── astro.config.mjs      # Astro configuration
```

## 🎨 Design System

The website uses a minimalistic aesthetic inspired by premium Mac apps like Klack and Alcove:

- **Colors**: Cream/beige background (#f5f4f0) with clean whites and grays
- **Typography**: SF Pro Display system fonts with careful spacing
- **Icons**: Simple SVG icons instead of emojis or complex graphics
- **Buttons**: Clean Apple-style buttons with subtle shadows
- **Layout**: Generous whitespace and focused content hierarchy

### CSS Custom Properties

```css
--bg-primary: #f5f4f0;
--bg-secondary: #ffffff;
--text-primary: #2c2c2c;
--accent-color: #000000;
```

## 🚀 Deployment

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The deployment workflow:

1. Builds the Astro site
2. Uploads the build artifacts
3. Deploys to GitHub Pages

### Manual Deployment

You can also trigger a deployment manually from the GitHub Actions tab.

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory
2. Update the `site` URL in `astro.config.mjs`
3. Configure your DNS settings

## 📱 App Store Requirements

The website includes:

- **Privacy Policy** - Details how no data is collected
- **Terms of Service** - Standard terms for app usage
- **App Store Badge** - Clean download button with Apple logo
- **Contact Information** - Support email addresses

## 🔧 Configuration

### Astro Config

Update `astro.config.mjs` for your setup:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  // ... other options
});
```

### GitHub Pages

Ensure GitHub Pages is enabled in your repository settings and set to deploy from GitHub Actions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build locally
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Website**: [binsout.app](https://binsout.app)
- **Support**: support@spicybackend.dev
- **Privacy**: privacy@spicybackend.dev
- **Legal**: legal@spicybackend.dev

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Deployed on [GitHub Pages](https://pages.github.com/)
- Design inspiration from [Klack](https://tryklack.com/) and [Alcove](https://tryalcove.com/)
- Icons from Lucide React icon set
- Minimalistic design philosophy
