import axios from "axios"
import { useEffect, useState } from "react"
import "./get.css"
import { Link } from "react-router-dom"

const GetCalculatedValue = () => {
    const [value, setValue] = useState([])

    const getCalculatedValue = async () => {
        try {
            const response = await axios.get("https://localhost:7101/api/Calculator/all")
            setValue(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error.response)
        }
    }
    useEffect(() => {
        getCalculatedValue()
    }, [])
    return (
        <div className="container">
            <Link to={"/cal"}>
                <button>Calculate</button>
            </Link>
            {value.length ? (
                <table className="table-container" style={{ width: "50%", marginTop: "2em" }}>
                    <thead>
                        < tr className="header">
                            <th>Operation</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {value.map(item =>
                            <tr className="body">
                                <td>{item.operation}</td>
                                <td>{item.result}</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            ) : <p>No item to display</p>}
        </div >
    )
}
export default GetCalculatedValue