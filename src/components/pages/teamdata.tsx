export type Exec = {
	name: string;
	title: string;
	src: string;
	alt: string;
	url: string;
	bgColor: string;
  };
  
  const execs: Exec[] = [
	{
	  name: "Troy Leishman",
	  title: "President",
	  src: "/images/troy.webp",
	  alt: "Troy Leishman, President of 3DW",
	  url: "www.linkedin.com/in/troyleishman/",
	  bgColor: "bg-red-500",
	},
	{
	  name: "Johaan Khan",
	  title: "Chief Operating Officer",
	  src: "/images/johaan.webp", // TODO: Get image
	  alt: "Johaan Khan, Chief Operating Officer",
	  url: "www.linkedin.com/in/johaan-khan-3889611a9/",
	  bgColor: "bg-purple-500",
	},
	{
	  name: "Justin Yee",
	  title: "Chief Product Officer",
	  src: "/images/justiny.webp",
	  alt: "Justin Yee, Chief Product Officer",
	  url: "www.linkedin.com/in/justin-yee8/",
	  bgColor: "bg-purple-500",
	},
	{
	  name: "Justin Liu",
	  title: "Chief Product Officer",
	  src: "/images/justin.webp",
	  alt: "Justin Liu, Chief Product Officer",
	  url: "www.linkedin.com/in/zhangjinliu/",
	  bgColor: "bg-purple-500",
	},
  ];
  
  const cooVps: Exec[] = [
	{
	  name: "Kevin Shang",
	  title: "VP Finance",
	  src: "/images/kevin.webp",
	  alt: "Kevin Shang, VP Finance",
	  url: "www.linkedin.com/in/kevin--shang/",
	  bgColor: "bg-purple-500",
	},
	{
	  name: "Seth Evans",
	  title: "VP Education",
	  src: "/images/seth.webp",
	  alt: "Seth Evans, VP Education",
	  url: "www.linkedin.com/in/s-j-evans",
	  bgColor: "bg-purple-500",
	},
  ];
  
  const cpoVps: Exec[] = [
	{
	  name: "Sabrina Luo",
	  title: "VP Marketing/Media",
	  src: "/images/sabrina.webp", // TODO: Get image
	  alt: "Sabrina Luo, VP Marketing/Media",
	  url: "www.linkedin.com/in/sabrina-luo861/",
	  bgColor: "bg-teal-500",
	},
	{
	  name: "Emma Zhang",
	  title: "VP Events",
	  src: "/images/emma.webp",
	  alt: "Emma Zhang, VP Events",
	  url: "",
	  bgColor: "bg-teal-500",
	},
	{
	  name: "Kyler See",
	  title: "VP Outreach",
	  src: "", // TODO: Get image
	  alt: "Kyler See, VP Outreach",
	  url: "www.linkedin.com/in/kyler-see/?originalSubdomain=ca",
	  bgColor: "bg-purple-500",
	},
	{
	  name: "Doris Wang",
	  title: "VP Communications",
	  src: "/images/doris-headshot.png",
	  alt: "Doris Wang, Communications",
	  url: "www.linkedin.com/in/doris-w-949aa7222/",
	  bgColor: "bg-teal-500",
	},
  ];
  
  const ctoVps: Exec[] = [
	{
	  name: "Thomson Lam",
	  title: "VP Development",
	  src: "/images/thomson.webp", // TODO: Get image
	  alt: "Thomson Lam, VP Development",
	  url: "www.linkedin.com/in/thomson-lam-260b67292/",
	  bgColor: "bg-purple-500",
	},
	{
	  name: "Josh Muszka",
	  title: "VP Development",
	  src: "/images/josh.webp", // TODO: Get image
	  alt: "Josh Muszka, VP Development",
	  url: "www.linkedin.com/in/jmuszka",
	  bgColor: "bg-purple-500",
	},
	{
	  name: "Cadeau Hayimana",
	  title: "VP Technology",
	  src: "", // TODO: Get image
	  alt: "Cadeau Hayimana, VP Technical Support",
	  url: "www.linkedin.com/in/cadeau-hayimana-81b89b218/",
	  bgColor: "bg-purple-500",
	},
  ];
  
  export { execs, cooVps, cpoVps, ctoVps };
  