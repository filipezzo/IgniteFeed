import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}
interface Content{
  type: 'paragraph'|'link';
  content: string;
}
export interface PostType{
  id: number;
  author: Author;
  content: Content[];
}

interface PostProps{
  post: PostType;
}


export function Post({ post }:PostProps) {
  const [comments, setComments] = useState(['nice post'])

  const [newCommentText, setNewCommentText] = useState('');

  function handleCreateNewComment(event:FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handleNewCommmentChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Fill out this field.')
  }

  const deleteCommment = (commentToDelete:string) => {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne);
  }

  const inNewCommentEmpty = newCommentText.length === 0
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.info}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time>Publish 1h ago</time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === "link") {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form
        className={styles.commentForm}
        onSubmit={handleCreateNewComment}
      >
        <strong className={styles.feedback}>give your feedback</strong>
        <textarea
          name="comment"
          required
          onInvalid={handleNewCommentInvalid}
          placeholder="type here :D"
          onChange={handleNewCommmentChange}
          value={newCommentText}
        />

        <footer>
          <button
            type="submit"
            disabled={inNewCommentEmpty}
          >

            Publish</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment}
            onDeleteComment={deleteCommment}
            content={comment} />
        })}
      </div>

    </article>



  )
}