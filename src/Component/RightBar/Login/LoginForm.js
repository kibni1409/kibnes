import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";

const LoginForm = (props) => {

    let navigate = useNavigate();
    let location = useLocation();
    let state = location.state;
    let from = state ? state.from.pathname : '/profile/my';
    if (from === "/") from = "/profile/my";

    useEffect(() =>{
        if(props.isAuth === true) return navigate(from, { replace: true });
    },[props.isAuth])


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        props.login(data.email, data.password, data.rememberMe, data.captcha)
        reset();
    };
    return (
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder="email" {...register("email",
                            { required: false ,
                                minLength: 8,
                                maxLength: 20
                            }
                        )}
                    />
                    {errors.email && errors.email.type ==="required" && <p>This field is required</p>}
                    {errors.email && errors.email.type ==="minLength" && <p>Min length 8</p>}
                    {errors.email && errors.email.type ==="maxLength" && <p>Max length 20</p>}
                </div>
                <div>
                    <input placeholder="Password" type={"password"} {...register("password", { required: true })} />
                    {errors.password && errors.password.type ==="required" && <p>This field is required</p>}
                </div>
                <div>
                    <input type={"checkbox"} {...register("rememberMe")} />Remember me
                </div>
                <div>
                    {props.captchaURL
                        ? <div>
                            <img src={props.captchaURL} alt="captcha"/><br/>
                            <input placeholder="captcha" {...register("captcha")}/>
                        </div>
                        : null
                    }
                </div>
                <div>
                    <button type={"submit"}>Submit</button>
                    {props.error === null ? null : <div>{props.error}</div>}
                </div>
            </form>
        </div>
    )
}

export default LoginForm;