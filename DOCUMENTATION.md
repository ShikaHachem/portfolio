# Portfolio Project Documentation

## Project Overview
This is a modern portfolio website built with Next.js 14, React 18, and TypeScript. The project uses a variety of modern web technologies and follows best practices for performance and maintainability. It features a personal portfolio with sections for work experience, education, projects, hackathons, and contact information.

## Tech Stack
- **Framework**: Next.js 14.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Custom components with Radix UI primitives
- **Animation**: Framer Motion with custom BlurFade components
- **Content**: MDX for blog posts
- **Theming**: next-themes for dark/light mode support

## Project Structure

```
├── .vscode/                # VS Code configuration
├── content/               # MDX content files for blog posts
│   └── hello-world.mdx   # Sample blog post
├── public/               # Static assets
├── src/                  # Source code
│   ├── app/             # Next.js app directory
│   │   ├── blog/        # Blog pages
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page with portfolio sections
│   ├── components/      # Reusable React components
│   │   ├── magicui/    # Custom animation components
│   │   ├── ui/         # Base UI components
│   │   ├── project-card.tsx
│   │   ├── resume-card.tsx
│   │   └── hackathon-card.tsx
│   ├── data/           # Data files
│   │   ├── blog.ts     # Blog post metadata
│   │   └── resume.tsx  # Portfolio content data
│   └── lib/            # Utility functions
├── tailwind.config.ts   # Tailwind CSS configuration
├── next.config.mjs      # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## Key Features

### 1. Portfolio Sections
- **Hero Section**: Personal introduction with avatar
- **About Section**: Detailed personal summary
- **Work Experience**: Timeline of professional experience
- **Education**: Academic background
- **Skills**: Technical skills with badge display
- **Projects**: Showcase of personal projects
- **Hackathons**: List of hackathon participations
- **Contact**: Social media and contact information

### 2. UI/UX Features
- **Animations**: Custom BlurFade animations for smooth content reveal
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: Theme switching capability
- **Modern Typography**: Clean and readable text hierarchy
- **Interactive Cards**: Project and hackathon showcases
- **Accessible Components**: Built with Radix UI primitives

### 3. Blog Support
- MDX-based blog system
- Code syntax highlighting
- Frontmatter support
- Markdown rendering with react-markdown

## Data Structure

### Resume Data (`src/data/resume.tsx`)
Contains all portfolio content including:
- Personal information
- Work experience
- Education history
- Skills
- Projects
- Hackathon participation
- Contact details

### Blog Data (`src/data/blog.ts`)
Manages blog post metadata and content organization.

## Components

### Core Components
1. **ProjectCard**: Displays project information with image/video support
2. **ResumeCard**: Reusable card for work and education entries
3. **HackathonCard**: Specialized card for hackathon experiences
4. **BlurFade**: Custom animation component for content reveal
5. **Badge**: Pill-style tags for skills and technologies

## Development

### Scripts
- `dev`: Run development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint

## Configuration Files
- `.eslintrc.json`: ESLint configuration
- `postcss.config.mjs`: PostCSS configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration
- `next.config.mjs`: Next.js configuration

## Best Practices
1. **Type Safety**: Strict TypeScript configuration
2. **Accessibility**: Built-in accessibility with Radix UI
3. **Performance**: 
   - Next.js app directory for optimal routing
   - Optimized images and animations
   - Lazy loading of content
4. **Maintainability**: 
   - Organized project structure
   - Centralized data management
   - Component-based architecture
5. **Content Management**: 
   - MDX for blog posts
   - Structured data files for portfolio content

## Future Improvements
1. Add testing setup (Jest/React Testing Library)
2. Implement CI/CD pipeline
3. Add SEO optimization
4. Implement analytics
5. Add more interactive features to blog posts
6. Add search functionality for blog posts
7. Implement contact form functionality
8. Add project filtering and sorting

## License
This project is licensed under the standard license included in the repository. 
