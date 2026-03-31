export interface Review {
  id: string
  name: string
  rating: number
  excerpt: string
  date: string
  location: string
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Jennifer M.',
    rating: 5,
    excerpt: 'Called on a Saturday morning when my spring snapped and the car was trapped in the garage. They had a technician out within 2 hours. Fixed everything same-day and the price was exactly what they quoted. Will never use anyone else.',
    date: 'January 2024',
    location: 'Lakeland, FL',
  },
  {
    id: '2',
    name: 'Robert T.',
    rating: 5,
    excerpt: 'I have used this company twice now and both times have been excellent. They answer the phone immediately — a real person every time! Fast, professional, and fair pricing. My garage door works better than it ever did.',
    date: 'February 2024',
    location: 'Winter Haven, FL',
  },
  {
    id: '3',
    name: 'Maria S.',
    rating: 5,
    excerpt: 'Replaced our entire garage door and opener. The technician was on time, explained everything clearly, and left the area cleaner than he found it. The new door looks amazing. Highly recommend to anyone in Polk County.',
    date: 'December 2023',
    location: 'Bartow, FL',
  },
  {
    id: '4',
    name: 'David L.',
    rating: 5,
    excerpt: 'Had an emergency at 7pm — door would not close and I had to leave for work. Called and got a real human immediately. Tech arrived within the hour, diagnosed a cable issue, and fixed it on the spot. Incredible service.',
    date: 'March 2024',
    location: 'Kissimmee, FL',
  },
  {
    id: '5',
    name: 'Sandra K.',
    rating: 5,
    excerpt: 'These guys are the real deal. No upselling, no pressure, just honest work at a fair price. They told me exactly what was wrong and what it would cost before touching anything. That kind of transparency is rare.',
    date: 'November 2023',
    location: 'Orlando, FL',
  },
  {
    id: '6',
    name: 'Chris B.',
    rating: 5,
    excerpt: 'Used them for our commercial property in Plant City. Three roll-up doors needed service and they came out the same week. Professional crew, finished ahead of schedule, and the invoice matched the quote exactly.',
    date: 'January 2024',
    location: 'Plant City, FL',
  },
  {
    id: '7',
    name: 'Patricia H.',
    rating: 5,
    excerpt: 'I was nervous about a big purchase but the salesman (who was also the installer) was patient and knowledgeable. He helped me pick the right door for my budget. Installation was smooth and fast. Love the result.',
    date: 'October 2023',
    location: 'Clermont, FL',
  },
  {
    id: '8',
    name: 'Michael R.',
    rating: 5,
    excerpt: 'Five stars is not enough. This is a local company that actually cares about their customers. Fast response, great work, and they stood behind it when I had a minor issue a week later — no questions asked.',
    date: 'February 2024',
    location: 'Haines City, FL',
  },
]
