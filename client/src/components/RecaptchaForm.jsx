import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

function onChange(value) {
    alert(value)
    console.log("Captcha value:", value);
}

function ReCAPTCHAForm() {
    return (
        <div>
            <form name="recaptcha">
                <br/>
                <ReCAPTCHA
                    sitekey="6LccqBkfAAAAAPNeGdYWLz1xv_mkm7z76PxGe5Gs"
                    onChange={onChange}
                />
            </form>
        </div>
    )
}

export default ReCAPTCHAForm;