import InfiniteMenu, { MenuItem } from './InfiniteMenu';
import { items } from './teamdata';

export const ExecSphere = () => {
	return (
		<section style={{ height: '100vh', width: 'full', position: 'relative' }}>
			<InfiniteMenu items={items} />
		</section>
	);
}
