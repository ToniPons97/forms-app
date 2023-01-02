const Sum = ({numbers}) => {
    return <h1>The sum is: {numbers.reduce((a, b) => a + b, 0)}.</h1>
}

export default Sum;