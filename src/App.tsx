import {Header} from "./components/Header";
import {BlocoFeed} from "./components/BlocoFeed";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import fotoTirulipa from "../src/assets/tirulipa.jpeg";
import fotoLe from "../src/assets/le.jpg";

const posts = [
{
  id: 1,
  author:{
    name: '@leandro_artilha',
    avatarUrl: fotoLe,
    role: 'developer',

  },
  publishedAt: "11:15",
  content :{
    imagem: fotoLe,
    conteudo:"Viajando o mundo em meio ao caos suburbano",
  },
},
{
  id: 2,
  author:{
    name: '@ka',
    avatarUrl: fotoTirulipa,
    role: 'desempregada=',

  },
  publishedAt: "11:15",
  content :{
    imagem:fotoTirulipa,
    conteudo:"piadinhas",
  },
}
]

function App() {

  return (
    <div >
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((postag) => {
            return (
              <BlocoFeed 
              key={postag.id}
              author = {postag.author}
              publishedAt = {postag.publishedAt}
              content = {postag.content}
            />  
            )
          })}            
        </main>
        </div>
        </div>
  );
}

export default App;
