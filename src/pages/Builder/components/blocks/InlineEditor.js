import { useState } from "react"

export default function ToggleEdit(props){
    const {value, onChange, onBlur} = props
    const [editing, setEditing] = useState(false)
    return (
        <div>
        <p>
            {!editing ? 
            <span 
            onClick={() => setEditing(true)}
            >
             {value.value || value.default}
            </span> : 
            
            <textarea 
            onChange={(e) => onChange(e)} 
            onBlur={() => {
                setEditing(false)
                onBlur()
                }}>

            </textarea>
            }
            
        </p>
       
    </div>
    )
}