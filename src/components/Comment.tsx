import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "@phosphor-icons/react"

interface CommentsProps{
  content: string;
  onDeleteComment: (comment:string) => void;
}

export function Comment({ content, onDeleteComment }:CommentsProps) {

  const [likeCount, setLikeCount] = useState(0);


  const handleDeleteComment = () => {
    onDeleteComment(content)
  }

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1
    });
  }
  return (
    <div className={styles.comment}>

      <Avatar
        hasBorder={false}
        src="https://github.com/diego3g.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentAuthor}>
              <strong>Diego3g</strong>
              <time>2 hours ago</time>
            </div>
            <button onClick={handleDeleteComment} className={styles.deleteIcon} title='delete comment'>
              <Trash size={24} />
            </button>

          </header>

          <br></br>
          <p className={styles.commentContentP}>{content}</p>
        </div>
        <footer>

          <button
            onClick={handleLikeComment}
            className={styles.buttonAp} title='Applaud icon'>
            <ThumbsUp size={20} />
            Applaud <span>{likeCount}</span>
          </button>

        </footer>

      </div>
    </div>
  )
}