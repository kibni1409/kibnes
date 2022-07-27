import classes from './AreaMessage.module.css';
import React from "react";
import { useForm } from "react-hook-form";

const AreaMessage = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        props.MessageText(data.message);
        reset();
    };

    return (
        <div className={classes.area_message}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className={classes.textareaDiv}>
                    <textarea className={classes.textarea}
                              placeholder="Text a new message"
                        {...register("message")}

                    />
                </div>
                <div className={classes.buttonDiv}>
                    <button type={"submit"} className={classes.button}>
                        Send message
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AreaMessage;