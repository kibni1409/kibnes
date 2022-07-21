import React from 'react'

class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps,prevState){
        console.log("2")
        if(prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        });
    }

    ActivateEditMode = () => {
        this.setState({
                editMode: true
            }
        )
    }
    DeactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
        this.props.setStatus(this.state.status)
    }
    onStatusChange = (e) => {
        console.log("1")
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        return (
            <div>
                {this.props.userID === "my"
                    ? !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.ActivateEditMode}>{this.props.status ? this.props.status : "No status"}</span>
                        </div>
                        : <div>
                            <input autoFocus={true} onChange={this.onStatusChange} onBlur={this.DeactivateEditMode}
                                   value={this.state.status}/>
                        </div>
                    : <div>
                            <span>{this.props.status ? this.props.status : "No status"}</span>
                    </div>
                }

            </div>
        )
    }

}

export default ProfileStatus;