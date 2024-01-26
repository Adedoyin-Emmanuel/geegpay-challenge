
import React from "react";
import {Link, useNavigate} from "react-router-dom";
const dashboard:React.FC = (): JSX.Element => {
    const navigateTo = useNavigate();
    return (
        <div>
            <h1>dashboard works!</h1>
        </div>
    );  
}

export default dashboard;
    