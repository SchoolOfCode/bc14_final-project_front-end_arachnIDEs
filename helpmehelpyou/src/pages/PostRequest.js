import PostRequest from "../Components/PostRequest/postRequest";

//this is importing a component into a giveHelp page
export default function PostRequestPage({session, user, setUser}) {
    return <PostRequest session={session} user={user} setUser={setUser}/>

}