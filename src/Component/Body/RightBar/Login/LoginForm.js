import React from "react";
import { useForm } from "react-hook-form";

let LoginForm = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
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
                    <button type={"submit"}>Submit</button>
                    {props.error === null ? null : <div>{props.error}</div>}
                </div>
            </form>
        </div>
    )
}

export default LoginForm;