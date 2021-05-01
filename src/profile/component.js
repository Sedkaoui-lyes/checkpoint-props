const Profile =(props)=>{

    return (
        <div onClick= {props.sayhello} >
            <h1>Fullename :{props.fullename} </h1>
            <h1>Bio : {props.bio} </h1>
            <h1>Profession : {props.profession} </h1>

        </div>


    )


}
export default Profile