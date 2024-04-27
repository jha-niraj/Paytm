import "../index.css"

const InputBox = ({name, type, id, value, placeholder, onChange}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <input 
                name={name}
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="input-box m-3"
            />
        </div>
    )
}

export default InputBox;