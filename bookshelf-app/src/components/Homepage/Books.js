import React from 'react'

function Books(props) {
    return (
        <ul>
            {
                props.books.map(item => {
                    return <li key = {item.id}>{item.title}</li>
                })
            }
        </ul>
    )
}

export default Books