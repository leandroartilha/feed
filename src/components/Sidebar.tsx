import "./Sidebar.modules.css";

export function Sidebar(){

return(

    <aside className="sidebar">
        <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80" alt="imagemDoBaile"/>
        <div className="profile">
            <strong>Leandro Artilha</strong>
            <span>Web Developer</span>
        </div>
        <footer>
            <a href="#">
                Editar seu perfil
            </a>
        </footer>
    </aside>

)

}