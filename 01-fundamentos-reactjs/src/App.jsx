import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
	{
		id: 1,
		author: {
			avatar_url: 'https://github.com/ocai0.png',
			name: 'Caio',
			role: 'Dev Branchless',
		},
		publishedAt: new Date('2022-09-01 15:42:59'),
		content: [
			{ 
				type: 'paragraph',
				 content: 'Fala galeraa 👋' 
			},
			{
				type: 'paragraph',
				content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
			},
			{ 
				type: 'link', 
				content: 'jane.design/doctorcare' 
			},
		],
	},
	{
		id: 2,
		author: {
			avatar_url: 'https://github.com/pomerwe.png',
			name: 'Estevão Alves',
			role: 'Back-end Dev',
		},
		publishedAt: new Date('2022-09-01 15:43:42'),
		content: [
			{ 
				type: 'paragraph', 
				content: 'Fala pessoal 👋' 
			},
			{ 
				type: 'paragraph',
				content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'
			},
			{ 
				type: 'link', 
				content: 'devonlane.design' 
			},
		],
	},
];

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(({id, author, publishedAt, content}) => {
						return (
							<Post
								key={id}
								author={author}
								publishedAt={publishedAt}
								content={content}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
