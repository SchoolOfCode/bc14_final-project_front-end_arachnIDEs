import UserProfile from "../Components/UserProfile/userProfile";

//this is importing a component into a giveHelp page
export default function UserProfilePage({ session }) {
  console.log("here is the session in UserProfilePage: ", session);
  return <UserProfile session={session} />;
}
