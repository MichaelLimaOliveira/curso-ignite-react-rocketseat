import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
	const [comments, setComments] = useState([]);

	const [newCommentText, setNewCommentText] = useState('');

	const isNewCommentOnlyWhiteSpaces = (newCommentText.match(/^[ \t]+$/));

	const isNewCommentEmpty = newCommentText.length === 0 || isNewCommentOnlyWhiteSpaces;

	const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	});

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	function handleCreatedNewComment() {
		event.preventDefault();

		setComments([...comments, newCommentText]);

		setNewCommentText('');
	}

	function handleNewCommentChange() {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	}
	
	function handleNewCommentInvalid() {
		console.log(event);
		event.target.setCustomValidity('Esse campo é obrigatório!');
	}

	function deleteComment(commentToDelete) {
		const commentsWithoutDeletedOne = comments.filter(comment => {
			return comment !== commentToDelete;
		});
		setComments(commentsWithoutDeletedOne);
	}

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatar_url} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
					{publishedDateRelativeToNow}
				</time>
			</header>
			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === 'link') {
						return (
							<p key={line.content}>
								<a href=''>{line.content}</a>
							</p>
						);
					}
				})}
			</div>
			<form onSubmit={handleCreatedNewComment} className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea
					name='comment'
					placeholder='Deixe um comentario'
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleNewCommentInvalid}
					required
				/>
				<footer>
					<button 
						type='Submit' 
						disabled={isNewCommentEmpty}
					>
						Comentar
					</button>
				</footer>
			</form>
			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comment 
							key={comment}
							content={comment} 
							onDeleteComment={deleteComment}
						/>
					)
				})}
			</div>
		</article>
	);
}
