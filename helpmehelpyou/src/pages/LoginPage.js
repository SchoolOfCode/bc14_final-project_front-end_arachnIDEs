import Login from "../Components/Login/login";

//this is importing a component into a giveHelp page
export default function LoginPage({session, setSession}) {
    return <Login session={session} setSession={setSession}/>

}