import React, { useEffect } from "react";
import Body from "./componet/body";
import Header from "./componet/header";

function Results(){

  const themeContainer = {
    blue:{
      backgroundColor:"blue",
      text:"pink"
    },
    red: {
      backgroundColor:"red",
      text:"yellow"
    },
    green: {
      backgroundColor:"green",
      text:"orange"
    }
  }

  console.log("current theme: ", themeContainer["red"]);

  const [theme, setTheme] = React.useState({});

  useEffect(() => {
    setTheme(themeContainer["blue"]);
  },[])

  return(
    <div>
      <Header themeContainer={themeContainer} theme={theme} setTheme={setTheme} />
      <Body theme={theme}/>
    </div>
  )
}
export default Results;
