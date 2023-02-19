import React, { useState} from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Blog = () => {
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (ev) =>{
        ev.preventDefault();

        if (content.length < 140){
            setError(true);
        }else {
            setError(false)
        }
    };
    return(
        <div className="blog-container">
            <Logo/>
            <Navigation/>
            <h1>Blog</h1>
            {/*formulaire du blog que le user peut remplir*/}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Nom"/>
                <textarea
                    style={{ border: error ? "1px solid red" : "1px solid #61dafb"}}
                    placeholder='Message' onChangeCapture={(ev) => setContent(ev.target.value)} />
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input type="submit" value='Envoyer' />
            </form>
            <ul></ul>
        </div>
    )

}
export default Blog;