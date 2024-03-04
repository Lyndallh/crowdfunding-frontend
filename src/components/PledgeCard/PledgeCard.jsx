import useUsers from "../../hooks/use-users";
import "./PledgeCard.css";

function PledgeCard(props) {
    const { pledge} = props; // destructuring the props object
        return (
        <>
                <li className="single-pledge">
                {pledge.supporter} pledged 
                ${pledge.amount} and said 
                <i>"{pledge.comment}"</i>
                </li>
        </>
    );
}
export default PledgeCard;