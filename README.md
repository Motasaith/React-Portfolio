# Abdul Rauf Azhar - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a stunning design with dark mode support, smooth animations, and optimized performance.

## 🌟 Features

- ✨ **Modern Design** - Clean, professional design with gradient accents
- 🌙 **Dark Mode Toggle** - Seamless light/dark theme switching
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- 🎭 **Smooth Animations** - Beautiful animations using Framer Motion
- ⚡ **Fast Loading** - Optimized images and lazy loading
- 🔧 **Interactive Elements** - Floating skill cards, typing animation, parallax effects
- 📧 **Contact Form** - Working contact form with EmailJS integration
- 🎨 **Case Studies** - Detailed project breakdowns with expandable sections

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd abdul-rauf-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📧 EmailJS Setup

To enable the contact form, you'll need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Update the EmailJS credentials in `src/components/Contact.js`:

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',     // Replace with your service ID
  'YOUR_TEMPLATE_ID',    // Replace with your template ID
  formRef.current,
  'YOUR_PUBLIC_KEY'      // Replace with your public key
);
```

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

1. **Hero Section** (`src/components/Hero.js`):
   - Update name and typing animation strings

2. **About Section** (`src/components/About.js`):
   - Update bio, image, and statistics

3. **Skills Section** (`src/components/Skills.js`):
   - Add/remove skills and adjust proficiency levels

4. **Projects Section** (`src/components/Projects.js`):
   - Update project information, images, and links

5. **Contact Section** (`src/components/Contact.js`):
   - Update contact information and social links

### Resume

Replace `public/resume.pdf` with your actual resume file.

### Images

- Replace project placeholder images with actual screenshots
- Update the profile image in the About section
- Optimize images for better performance

### Colors & Styling

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

## 📦 Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
npm run deploy
```

## 🛠️ Technologies Used

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **EmailJS** - Email service for contact form
- **React Intersection Observer** - Scroll animations
- **Typewriter Effect** - Typing animation
- **React Lazy Load Image Component** - Image lazy loading

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+

## ⚡ Performance Features

- Lazy loading images
- Optimized animations
- Efficient re-renders with React hooks
- Minimal bundle size
- Fast loading with code splitting

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: abdulrauf.azhar@proton.me
- **Phone**: 03363855120
- **Location**: RYK, Punjab, Pakistan

---

Built with ❤️ by Abdul Rauf Azhar
