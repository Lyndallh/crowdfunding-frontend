import useUsers from "../../hooks/use-users";

function PledgeCard(props) {
    const { pledge} = props; // destructuring the props object
        return (
        <>
        <ul className="pledges">
             <li>
             {pledge.supporter} pledged 
             ${pledge.amount} and said 
              <i>"{pledge.comment}"</i>
            </li>
        </ul>
        </>
    );
}
export default PledgeCard;