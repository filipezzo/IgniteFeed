import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar';
import { Post,PostType } from './components/Post'
import './global.css'

import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/filipezzo.png',
      name: "Filipe Avanzzo",
      role: "Dev"
    },

    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },

      {
        type: 'paragraph', content: "I just uploaded another project to my portfolio.It's a project I made during NLW Return."
      },

      { type: 'paragraph', content: "The project's name is DoctorCare 🚀." },

      { type: 'link', content: "github.com/filipezzo" }
    ],


  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Maykbrito",
      role: "Educator Rocketseat"
    },

    content: [
      { type: 'paragraph', content: 'Hey guys 👋' },

      {
        type: 'paragraph', content: "I just uploaded another project to my portfolio.It's a project I made during NLW Return."
      },

      { type: 'paragraph', content: "The project's name is DoctorCare 🚀." },
      { type: 'link', content: "github.com/maykbrito" },

    ],



  },


]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
                
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}


