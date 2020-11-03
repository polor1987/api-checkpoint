import React from "react"
export const UserList = ({name,user,email,phone}) => {
    return(
            <div className={"user-list-content"}>
                <p>Name: {name}</p>
                <p>User Name: {user}</p>
                <p>Em@il: {email}</p>
                <p>Phone: {phone}</p>
            </div>
    )
}