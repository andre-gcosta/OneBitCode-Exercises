import styles from "./styles.module.css"

export function RestParams(props) {
    return (
        <div
            {...props}
            className={`${styles.wrapper} ${props.className} bg-blue`} /*é possivel passar várias classes usando template literals com um espaço de string*/
        >

        </div>
    )
}