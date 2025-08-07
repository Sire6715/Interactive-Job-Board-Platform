
# JobBoard

JobBoard is a professional job listing platform built using Next.js, TypeScript, and Tailwind CSS. It provides an interactive interface for users to search and apply for jobs while offering a clean and responsive design tailored for both mobile and desktop devices.

## Features

- Responsive layout across devices
- Live job search with filtering
- Detailed job view with description and requirements
- Job application form with resume upload functionality
- Clear input controls for enhanced UX
- Theme-based styling with Tailwind CSS
- Smooth animations using Framer Motion
- Modular and maintainable component architecture

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- date-fns
- React Context API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/jobboard.git
cd jobboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to view the application.

## Project Structure

```
src/
├── components/
│   ├── common/         # Reusable UI components
│   ├── jobs/           # Job-related components
│   └── context/        # Context providers
├── constants/          # Static paths and icons
├── pages/
│   ├── index.tsx       # Homepage
│   └── jobs/[id].tsx   # Job details page
├── styles/             # Tailwind configuration and global styles
├── utils/              # Helper functions
├── types/              # TypeScript interfaces and types
```

##  Component Structure

- `components/common`: Reusable UI elements (`SearchBar`, `Button`, `Input`, etc.)
- `components/Job`: Job card, details, and list rendering
- `components/Form`: Form fields, validators, file upload logic
- `context/ContextProvider.tsx`: Global state for search query and mobile view tracking
- `pages`: Homepage, job details page

---

## Type Definitions

Example interface used in the application:

```ts
export interface JobApplicationProps {
  fullName: string;
  email: string;
  phone: string;
  linkedIn: string;
  coverLetter: string;
  resume: File | null;
}
```

## Footer Example

```tsx
<footer className="bg-[#56b8b5] text-white py-6">
  <div className="max-w-6xl mx-auto px-4 flex justify-between">
    <p>© 2025 JobBoard</p>
    <div className="flex gap-6 text-sm">
      <a href="#">About</a>
      <a href="#">Privacy</a>
      <a href="#">Contact</a>
    </div>
  </div>
</footer>
```

## Future Improvements

- Implement job listing pagination
- Add backend or Firebase support for storing applications
- Introduce job tags for advanced filtering
- Add loading skeletons for better UX
- Develop admin panel for job posting

## License

This project is open-source and available under the MIT License.

## Contact

**Developer:** [Uche Prince]  
**Email:** uchepibe@gmail.com  
**GitHub:** [@Sire6715](https://github.com/Sire6715)
