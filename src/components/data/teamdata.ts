export interface MenuItem {
	image: string;
	name: string;
	role: string;
	description?: string;
	emoji?: string;
	linkedin?: string;
	github?: string;
	website?: string;
}

export const items: MenuItem[] = [
	{
		image: '/images/execs/troy.webp',
		name: 'Troy Leishman',
		role: 'President',
		description: 'Leading the team with vision and energy',
		emoji: '🦌',
		linkedin: 'www.linkedin.com/in/troyleishman/',
	},
	{
		image: '/images/execs/johaan.webp',
		name: 'Johaan Khan',
		role: 'Chief Operating Officer',
		description: 'Keeping operations running smoothly',
		emoji: '⚡',
		linkedin: 'www.linkedin.com/in/johaan-khan-3889611a9/',
	},
	{
		image: '/images/execs/justiny.webp',
		name: 'Justin Yee',
		role: 'Chief Product Officer',
		description: 'Shaping the product experience',
		emoji: '🚀',
		linkedin: 'https://www.linkedin.com/in/justin-yee8/',
	},
	{
		image: '/images/execs/justin.webp',
		name: 'Justin Liu',
		role: 'Chief Product Officer',
		description: 'Building amazing products',
		emoji: '💡',
		linkedin: 'www.linkedin.com/in/zhangjinliu/',
	},
	{
		image: "/images/execs/kevin.webp",
		name: "Kevin Shang",
		role: "Co-VP Finance",
		description: 'Managing the numbers',
		emoji: '💰',
		linkedin: "www.linkedin.com/in/kevin--shang/",
	},
	{
		image: "/images/execs/seth.jpg",
		name: "Seth Evans",
		role: "VP Education",
		description: 'Spreading knowledge',
		emoji: '📚',
		linkedin: "www.linkedin.com/in/s-j-evans",
	},
	{
		image: "/images/execs/sabrina.webp",
		name: "Sabrina Luo",
		role: "VP Marketing/Media",
		description: 'Creating engaging content',
		emoji: '🎨',
		linkedin: "www.linkedin.com/in/sabrina-luo861/",
	},
	{
		image: "/images/execs/emma.webp",
		name: "Emma Zhang",
		role: "VP Events",
		description: 'Organizing memorable experiences',
		emoji: '🎉',
		linkedin: "https://www.linkedin.com/in/emma-zhang-z/",
	},
	{
		image: "/images/execs/thomson.webp",
		name: "Thomson Lam",
		role: "VP Development",
		description: 'Building the tech',
		emoji: '💻',
		linkedin: "www.linkedin.com/in/thomson-lam-260b67292/",
	},
	{
		image: "/images/execs/josh.webp",
		name: "Josh Muszka",
		role: "VP Development",
		description: 'Coding the future',
		emoji: '🔧',
		linkedin: "www.linkedin.com/in/jmuszka",
	},
	{
		image: "/images/execs/cadeau.webp",
		name: "Cadeau Hayimana",
		role: "VP Technical Support",
		description: 'Supporting the team',
		emoji: '🛠️',
		linkedin: "www.linkedin.com/in/cadeau-hayimana-81b89b218/",
	},
	{
		image: "/images/execs/doris-headshot.png",
		name: "Doris Wang",
		role: "VP Communications",
		description: 'Connecting with the community',
		emoji: '💬',
		linkedin: "www.linkedin.com/in/doris-w-949aa7222/",
	},
]	
