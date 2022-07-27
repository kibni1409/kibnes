import classes from './AreaPost.module.css';
import React from "react";
import { useForm } from "react-hook-form";

const AreaPost = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        props.AddPost(data.TextPost)
        reset();
    };

    return (
        <div >
            <form className={classes.areapost} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.textareaDiv}>
                    <textarea className={classes.textarea}
                              placeholder="Text a new Post"
                              {...register("TextPost",
                                  { required: true ,
                                      minLength: 1,
                                      maxLength: 200
                                  }
                              )}
                    />
                </div>
                <div className={classes.buttonDiv}>
                    <button type={"submit"}  className={classes.button}>
                        Add post
                    </button>
                </div>
            </form>


        </div>
    );
}

export default AreaPost;