export interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	image: string;
	alt: string;
	href: string;
}

export const blogPosts: BlogPost[] = [
	{
		id: '1',
		title: 'MyCase, Transforming Legal Practice',
		excerpt:
			'Our commitment to providing value extends beyond the features of our products or services. We believe in fostering long-term partnerships by ensuring that our pricing plans fit every stage of growth. Many legal professionals find it difficult to accurately keep track of all case-related time, which often results in billable time slipping through the cracks.',
		date: '22 Dec 2023',
		image: '/images/blog/placeholder-1.jpg',
		alt: 'Legal professionals in a meeting discussing case management',
		href: '/blog/mycase-transforming-legal-practice',
	},
	{
		id: '2',
		title: 'The Future of AI in Entrepreneurship',
		excerpt:
			'Artificial intelligence is rapidly reshaping how entrepreneurs build, scale, and operate their businesses. From automated customer support to intelligent market analysis, the tools available today would have seemed like science fiction a decade ago. We explore what this means for the next generation of founders.',
		date: '15 Jan 2024',
		image: '/images/blog/placeholder-2.jpg',
		alt: 'Entrepreneur working with AI tools on a laptop',
		href: '/blog/future-of-ai-in-entrepreneurship',
	},
	{
		id: '3',
		title: 'Building a Strong Startup Culture from Day One',
		excerpt:
			'Culture is not something you can bolt on later — it is built in every early hiring decision, every team ritual, and every value trade-off you make under pressure. This guide walks through the principles our most successful alumni used to create cultures that scaled with them.',
		date: '03 Feb 2024',
		image: '/images/blog/placeholder-3.jpg',
		alt: 'Startup team collaborating around a whiteboard',
		href: '/blog/building-startup-culture',
	},
	{
		id: '4',
		title: 'How to Nail Your First Pitch to Investors',
		excerpt:
			'Getting in front of investors is hard enough — fumbling the pitch when you are there is a costly mistake. Drawing on feedback from real VCs and angel investors, we break down the anatomy of a compelling pitch deck and the storytelling techniques that turn curiosity into commitment.',
		date: '20 Feb 2024',
		image: '/images/blog/placeholder-4.jpg',
		alt: 'Founder presenting a pitch deck to a panel of investors',
		href: '/blog/nail-your-first-pitch',
	},
	{
		id: '5',
		title: 'Lessons Learned from Our First Hackathon',
		excerpt:
			'Last month we ran our inaugural 48-hour hackathon and the results blew us away. Teams tackled problems in healthcare, climate tech, and fintech — and three projects have already moved into formal incubation. Here is what we learned about running a great hackathon and what we will do differently next time.',
		date: '10 Mar 2024',
		image: '/images/blog/placeholder-5.jpg',
		alt: 'Participants coding late at night during the hackathon',
		href: '/blog/lessons-from-first-hackathon',
	},
];