# Hussain Ahmad - AI/ML Engineer Portfolio

A modern, responsive portfolio website showcasing my AI/ML projects, work experience, and technical expertise. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Deploy this portfolio to Vercel with one click!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio-website)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with color-coded sections
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Easy to Deploy**: One-click deployment to Vercel
- **Type-Safe**: Built with TypeScript for better code quality

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn or pnpm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)**
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main portfolio page
├── public/                   # Static assets (images, etc.)
├── .gitignore               # Git ignore rules
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 Customization

### Update Personal Information

Edit the content in `app/page.tsx`:

- **Contact Info**: Update phone, email, GitHub username, location
- **Professional Summary**: Modify the summary text
- **Work Experience**: Add/edit job experiences
- **Projects**: Add/edit project details
- **Skills**: Update technical skills list
- **Certifications**: Add/edit certifications
- **Achievements**: Update achievements

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  darkblue: '#003366',
  royalblue: '#4169E1',
  // Add or modify colors
}
```

### Add Images

Place images in the `public/` folder and reference them:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Environment Variables

This project doesn't require any environment variables by default. If you add features that need them:

1. Create a `.env.local` file in the root directory
2. Add your variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Hussain Ahmad**
- Email: hussain.ahmad667744@gmail.com
- GitHub: [@AIStrikerX](https://github.com/AIStrikerX)
- Phone: +92 349 1539454

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ by Hussain Ahmad**

*Last Updated: February 2026*
