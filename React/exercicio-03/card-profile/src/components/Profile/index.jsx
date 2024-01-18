import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"


export default function Profile(props) {
    // [valor, funcaoModificadora]
    const [followText, setFollowText] = useState("Follow")

    function handleClick(ev) {
        alert("Você agora está seguindo!")
        setFollowText("Following")
    }
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection
                className={styles.links}//normal: camelCase
                id="Links-section"
                data-test="some value"//casos unicos que usa -
                aria-label="social links"//casos unicos que usa -
            >
                <LinkButton href={props.githubUrl}>Github</LinkButton>
                <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </ProfileSection>    
        </div>
    )
}