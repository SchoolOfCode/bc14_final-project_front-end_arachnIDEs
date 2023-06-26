import RegForm from "../Components/RegForm/regForm"

//this is importing a component into a giveHelp page
export default function RegFormPage({session}) {
    console.log("Here is the session at the RegFormPage level: ", session)
    return <RegForm session={session}/>

}