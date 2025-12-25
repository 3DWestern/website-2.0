import InfiniteMenu from './InfiniteMenu'

const items = [
	{
		image: 'https://picsum.photos/300/300?grayscale',
		link: 'https://facebook.com/',
		title: 'Item 1',
		description: 'AAAAAAAAAAAAAAA'
	},
	{
		image: 'https://picsum.photos/400/400?grayscale',
		link: 'https://linkedin.com/',
		title: 'Item 2',
		description: 'BBBBBBBBBBBBBBB'
	},
	{
		image: 'https://picsum.photos/500/500?grayscale',
		link: 'https://twitter.com/',
		title: 'Item 3',
		description: 'CCCCCCCCCCCCCCCCC'
	},
	{
		image: 'https://picsum.photos/600/600?grayscale',
		link: 'https://instagram.com/',
		title: 'Item 4',
		description: 'DDDDDDDDDDDDDD'
	}
];

export const ExecSphere = () => {
	return (
		<section style={{ height: '100vh', width: 'full', position: 'relative' }}>
			<InfiniteMenu items={items} />
		</section>

	);
}
