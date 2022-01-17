import React from 'react'

const Fetch = () => {
    const [fetchedData, setfetchedData] = React.useState({})
    React.useEffect(() => {
        fetch("https://quotes.rest/qod?category=inspire")
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    return (
        <div>
            <p>biz</p>
            <h1>baz</h1>
        </div>
    )
}

export default Fetch
