import "./Comentario.modules.css";
import tiru from "../assets/le.jpg"
import lixo from "../assets/lixo.png"
import like from "../assets/like.png"
import { useState } from "react";


interface CommentProps{
    com: string;
    onDeleteComment: (commentToDelete : string) => void;
}

export function Comentario({com, onDeleteComment}:CommentProps){

    const [likeCount, setCountLike] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(com);
    }

    function handleLikeComment(){
        setCountLike(likeCount + 1)
        console.log(likeCount)
    }

    return(

        <div className="blocoComentario">
            <div className="headerFeed">
                <img className="fotoPerfil" src={tiru} alt="perfil" />
                <h1 >@leandro_artilha</h1>
                <img className="iconLixo"src={lixo} onClick={handleDeleteComment} alt="lixo"/>
            </div>
            <p className="areaComentario">{com}</p>
            <footer>
            <div >
                <button 
                onClick={handleLikeComment}>
                    <img  className="iconLike" src={like} alt="like"/>
                    Likes - 
                    <span>{likeCount}</span>
                </button>
                
            </div>
                
            </footer>
        </div>

    )

}