export function Card({title, texto, children}) {//desestruturação de props
    return (
        <div>
            <h1>{title}</h1>{/*props.title*/}
            <p>{texto}</p>
            <p>{children}</p>
        </div>
    )
}