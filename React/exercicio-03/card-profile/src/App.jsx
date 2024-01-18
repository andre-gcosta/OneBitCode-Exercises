import Profile from "./components/Profile";
import avatar from "./assets/andre.jpeg";

export default function App() {
  return(
    <div className="app">
      <Profile
        // avatar="https://randomuser.me/api/portraits/men/75.jpg"
        avatar={avatar}
        name="André Costa"
        bio="Front-end javascript react developer"
        email="andre_costa117@hotmail.com"
        phone="+55 48996228708"
        githubUrl="https://github.com/andre-gcosta"
        linkedinUrl="https://linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  )
}