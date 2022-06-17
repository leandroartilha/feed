
import "./BlocoFeed.modules.css";
import tiru from "../assets/le.jpg"
import like from "../assets/like.png";
import comentarioFeed from "../assets/comente.png";
import { Comentario } from "./Comentario";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Author{
    name: string;
    avatarUrl: string;
    role: string;
}

interface Content{
    imagem:string,
    conteudo: string;
}

interface Post {
    author: Author;
    publishedAt: string;
    content: Content;
}
    
   

export function BlocoFeed({author, publishedAt, content}:Post){

    const [comments, setComments] = useState([""]);

    const [newCommentText, setNewCommentText] = useState('');

    const [likeCount, setLikeCount] = useState(0);

    function handleCreateComment(event:FormEvent){
        event.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');     
    }

    function handleNewCommentChange(event:ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete:string){
        const listaSemComentarioDeletado = comments.filter(comment=>{
            return comment !== commentToDelete;
        })

        setComments(listaSemComentarioDeletado);
    }

    function handleChecarSeEstaVazio(event:InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Bunda ta errado');
    }

    function handleLikeCount(){
        setLikeCount(likeCount + 1);
    }

    const isNewCommentEmpty = newCommentText.length === 0; 
    

    return(

    <div>

<div className="Bloco">

            <header className="headerFeed">
                <img className="fotoPerfil" src={author.avatarUrl} alt="perfil" />
                <h1 >{author.name}</h1>
            </header>
            <div className="centralizar">
                <img className="fotoFeed" src={content.imagem} alt="foto" />
                <time className="horario" >Postado as {publishedAt}</time>
                <p className="textoFeed">{content.conteudo}</p>
            </div>

            <div className="botoes">
                <button onClick={handleLikeCount}><img src={like} alt="botaoLike" /></button> 
                    <span>{likeCount}</span>
                    <button><img src={comentarioFeed} alt="botaoComentario" /></button>
                </div>

            <form onSubmit={handleCreateComment}>               
                
                <input 
                className="textoPostagem" 
                value={newCommentText} 
                name="come" 
                onChange={handleNewCommentChange} 
                type="text" 
                placeholder="Escreva um comentário..."
                onInvalid={handleChecarSeEstaVazio}
                required
                />
                <button 
                disabled={isNewCommentEmpty} 
                className="botaoComentar" 
                type="submit">Comentar</button>
            </form>            
            
        </div>
        <div>{
                comments.map(comentari => {
                    return(
                        <Comentario 
                        key={comentari}
                        com={comentari}
                        onDeleteComment={deleteComment}
                        />
                    )
                })
            }
            </div>

    </div>
        

    )

}