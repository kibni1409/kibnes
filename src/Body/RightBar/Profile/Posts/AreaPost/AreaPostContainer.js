import React from "react";
import {AddPostAction, ChangeTextPostAction} from "../../../../../Redux/ProfileReduser";
import AreaPost from "./AreaPost";
import Posts from "../Posts";
import StoreContext from "../../../../../Store-Context";


const AreaPostContainer = () => {


    return <StoreContext.Consumer>
        { store => {

            let state = store.getState();

            let PostText = (text) => {
                let action = AddPostAction(text);
                store.dispatch(action);
            }

            let TextPostChange = (text) => {
                let action = ChangeTextPostAction(text);
                store.dispatch(action);
            }

            return (
                <div>
                    <Posts
                        Post_elements={state.ProfilePage.posts}
                    />
                    <AreaPost
                        ChangeTextPost={TextPostChange}
                        AddPost={PostText}
                        TextPost={state.ProfilePage.NewTextPost}
                    />
                </div>
            )
        }
        }
    </StoreContext.Consumer>
}

export default AreaPostContainer;