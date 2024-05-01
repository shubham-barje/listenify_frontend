
import { Link } from "react-router-dom";
const TextWithHover = ({ displayText, active, targetLink }) => {
    return (
        <Link to={targetLink}>
            <div className="flex items-center justify-start cursor-pointer ">


                <div>
                    <div className={
                        `${active ? "text-white" : "text-gray-500"}  font-semibold hover:text-white text-lg`}
                    >

                        {displayText}
                    </div>
                </div>
            </div>
        </Link>

    )

}
export default TextWithHover;