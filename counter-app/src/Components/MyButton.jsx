function MyButton({onClick, title}){
    return (
        <button onClick={onClick}>{title}</button>
    )
}

export default MyButton;