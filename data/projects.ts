export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  category: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  features: string[]
  challenge?: string
  solution?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'TaxiWheel - Ride Booking Platform',
    description: 'Complete ride booking platform with admin dashboard for managing drivers, transactions, and bookings',
    fullDescription: 'A comprehensive ride booking platform built with React and Express.js. Features an admin dashboard for complete fleet management, real-time ride tracking, and transaction monitoring.',
    category: 'Full Stack',
    image: '/images/taxiwheel.jpg',
    technologies: ['React', 'Express.js', 'MySQL', 'Tailwind CSS', 'JWT', 'Socket.io'],
    liveUrl: 'https://taxiwheel.vercel.app',
    githubUrl: '#',
    features: [
      'Admin dashboard with driver management',
      'Real-time transaction tracking',
      'Ride history and analytics',
      'Booking management system',
      'User authentication and authorization',
      'Real-time ride status updates'
    ],
    challenge: 'Implementing real-time tracking and managing concurrent ride requests efficiently',
    solution: 'Used Socket.io for real-time updates and implemented a queue system for ride allocation'
  },
  {
    id: '2',
    title: 'OrgHierarchy - Organization Management System',
    description: 'Hierarchical organization management with CTE-powered pagination, drag-drop editing, and role-based access',
    fullDescription: 'Advanced organization hierarchy management system built with Next.js and PostgreSQL. Features infinite scroll pagination using Common Table Expressions (CTE) for optimal performance.',
    category: 'Enterprise',
    image: '/images/org-hierarchy.jpg',
    technologies: ['Next.js', 'PostgreSQL', 'Drizzle ORM', 'Hono', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'View, edit, and delete hierarchical structures',
      'CTE-powered pagination for large datasets',
      'Drag-and-drop hierarchy editing',
      'Add descriptions and metadata to nodes',
      'Role-based access control',
      'Real-time hierarchy visualization'
    ],
    challenge: 'Efficiently paginating hierarchical data without performance degradation',
    solution: 'Implemented recursive CTE queries in PostgreSQL for lightning-fast hierarchical data retrieval'
  }
]