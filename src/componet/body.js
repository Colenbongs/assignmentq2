import "./styles.css"



const Body = ({theme}) => {

    

    return (
        <div className="body">
            <div className="buttons">
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
                <button className="btn">Change password</button>
            </div>

            <div className="card" style={{color:theme.text}}>
                <div className="info">
                    <span>Login name</span>
                    <span>demoUser</span>
                </div>
                <div className="info">
                    <span>Login name</span>
                    <span>demoUser</span>
                </div><div className="info">
                    <span>First name</span>
                    <span>Philani</span>
                </div><div className="info">
                    <span>Last name</span>
                    <span>Sigabe</span>
                </div><div className="info">
                    <span>Email</span>
                    <span>demoUser@gmail.com</span>
                </div><div className="info">
                    <span>Office</span>
                    <span>Head office</span>
                </div>
            </div>
        </div>
    )
}

export default Body