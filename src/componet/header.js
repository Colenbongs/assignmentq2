
const Header = ({themeContainer, theme, setTheme}) => {
    console.log("header current theme: ", theme);

    return (
        <div style={{ display:"flex", flexDirection:"row",justifyContent:"space-between", backgroundColor:`${theme.backgroundColor}`,color:theme.text, padding:"10px"}}>
            <div><span style={{margin:"10px"}}>institution</span>
            <span style={{margin:"10px"}} color={theme.backgroundColor}>Accounting</span>
            <span style={{margin:"10px"}}>Reports</span>
            <span style={{margin:"10px"}}>Admin</span>
            <span style={{margin:"10px"}}>Self service</span></div>

            <div>
            <select name="themes" id="cars" onChange={(event) => setTheme(themeContainer[event.target.value])}>
                <option value="blue">Blue theme</option>
                <option value="red">Red theme</option>
                <option value="green">Green Theme</option>
            </select>
            </div>

        </div>
    )

}

export default Header;