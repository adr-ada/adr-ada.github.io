import { Button } from "./ui/button";
import { Link } from 'react-router-dom'
const Tassy = () => {
    return (
        <>
            <Link to="/tassyspage">
                <Button>For Tassy's eyes only !!!</Button>
            </Link>
        </>
    )
}

export default Tassy