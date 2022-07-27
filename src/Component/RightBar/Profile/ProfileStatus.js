import React, {useEffect, useState} from 'react'

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

   useEffect(() => {
       setStatus(props.status)
   },[props.status])

    const ActivateEditMode = () => {
        setEditMode(true)
    }
    const DeactivateEditMode = () => {
        setEditMode(false)
        props.setStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {props.userID === "my"
                ? !editMode
                    ? <div>
                        <span
                            onDoubleClick={ActivateEditMode}>{props.status ? props.status : "No status"}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onChange={onStatusChange} onBlur={DeactivateEditMode}
                               value={status}/>
                    </div>
                : <div>
                    <span>{props.status ? props.status : "No status"}</span>
                </div>
            }

        </div>
    )
}

export default ProfileStatus;