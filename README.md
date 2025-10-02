# Sahil Adhikari - Portfolio Website

A modern, responsive portfolio website showcasing skills, experience, projects, awards, and contact information. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion animations.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Fully responsive across all devices
- **Dark Mode Support**: Automatic dark/light mode switching
- **Smooth Scrolling**: Elegant navigation between sections
- **Interactive Components**: Hover effects and micro-interactions
- **Performance Optimized**: Fast loading with Next.js optimization

## Sections

- **Hero**: Introduction with call-to-action buttons
- **About**: Personal information and education details
- **Skills**: Technical skills organized by category with icons
- **Experience**: Professional experience with timeline design
- **Projects**: Featured projects with detailed descriptions
- **Awards**: Certifications and achievements
- **Contact**: Contact form and information

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives
- **Font**: Geist Sans & Geist Mono

## Getting Started

1. **Clone the repository**:
```bash
git clone <repository-url>
cd portfolio-website
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Project Structure

```
src/
├── app/                   # Next.js app router
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main page component
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── sections/        # Page sections
│   ├── navigation.tsx   # Navigation component
│   └── footer.tsx       # Footer component
├── data/                # Static data
│   └── portfolio-data.ts # Personal information and content
└── lib/                 # Utility functions
    └── utils.ts         # Utility functions
```

## Customization

To customize this portfolio for your own use:

1. **Update Personal Information**: Edit `src/data/portfolio-data.ts` with your information
2. **Modify Colors**: Adjust CSS variables in `src/app/globals.css`
3. **Add/Remove Sections**: Modify components in `src/components/sections/`
4. **Update Content**: Change text, add projects, experience, etc.

## Performance Features

- **Static Generation**: Pre-rendered pages for optimal performance
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loading
- **SEO Optimized**: Proper meta tags and semantic HTML

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Sahil Adhikari**
- Email: sahiladhikari6412@gmail.com
- LinkedIn: [sahil-adhikari-57b445250](https://www.linkedin.com/in/sahil-adhikari-57b445250/)
- Location: Chennai, India

---

Built with ❤️ using Next.js and TypeScript
