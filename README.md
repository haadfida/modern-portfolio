# Modern Portfolio 🚀

A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Theme**: Eye-friendly dark theme with gradient accents
- **Smooth Animations**: Powered by Framer Motion
- **Fast Loading**: Optimized with Vite for lightning-fast performance
- **SEO Ready**: Optimized for search engines
- **Free Hosting**: Deploy for free on GitHub Pages, Vercel, or Netlify

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/modern-portfolio.git
   cd modern-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Customization

### Personal Information
Edit `src/App.tsx` and update:
- Your name in the hero section
- Your description and bio
- Your skills and experience
- Your project information
- Your contact information and social links

### Styling
- Colors: Modify the gradient colors in `src/App.tsx`
- Layout: Adjust spacing and layout in the component sections
- Animations: Customize Framer Motion animations

## 🌐 Free Deployment Options

### Option 1: GitHub Pages (Free)
1. **Setup GitHub Pages**
   ```bash
   npm install
   npm run deploy
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Your site will be available at `https://yourusername.github.io/modern-portfolio/`

### Option 2: Vercel (Free)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Import your repository
5. Deploy with one click!

### Option 3: Netlify (Free)
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Sign up with GitHub
4. Connect your repository
5. Deploy automatically!

## 📁 Project Structure

```
modern-portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.tsx          # Main component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Customization Guide

### Adding New Sections
1. Create a new section in `App.tsx`
2. Add navigation link to the nav array
3. Implement smooth scrolling with `scrollToSection`

### Changing Colors
Update the gradient colors throughout the app:
- Hero section: `from-purple-400 via-pink-400 to-red-400`
- Buttons: `from-purple-600 to-pink-600`
- Accents: `purple-400`, `pink-400`

### Adding Projects
Update the `projects` array in `App.tsx`:
```tsx
{
  title: "Your Project",
  description: "Project description...",
  image: "project-image-url",
  tech: ["React", "TypeScript", "etc."],
  github: "github-repo-url",
  demo: "live-demo-url"
}
```

## 📧 Support

If you have any questions or need help customizing your portfolio, feel free to open an issue!

## 📄 License

This project is open source and available under the [MIT License](LICENSE). 