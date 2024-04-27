const Heading = ({label}) => {
    return (
        <h1 className="text-4xl font-semibold font-serif capitalize text-center">
            {
                label == "signup" ? "Sign Up" : "Sign In"
            }
        </h1>
    )
}

export default Heading;