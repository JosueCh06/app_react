import React from "react";

const emailRegexp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const Form = () => {
    const [email, setEmail] = React.useState({
        value: "",
        hasError: false
    });

    function handleChange(evt){
        setEmail(evt.target.value)
    }

    function handleBlur(){
        const hasError = !emailRegexp.test(email.value);
        setEmail((prevState) => ({ ...prevState, hasError}));
    }

    return(
    <div>
        <form>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                value={email.value}
                onChange={handleChange}
                onBlur={handleBlur} 
                aria-errormessage="emailErrorID"
                aria-invalid={email.hasError}
            />
            <p
                id="msgID"
                aria-live="assertive"
                style={{ visibility: email.hasError ? "visible" : "hidden" }}
            >
                Please enter a valid email
            </p>
        </form>
    </div>
    )
}

export default Form