//helpers
import {
    formetCurrency,
    calculateSpentByBudget,
    formatPercentage
} from "../helpers.js";

const BudgetItem = ({ budget }) => {
    const { name, amount, id ,color} = budget;
    const spent = calculateSpentByBudget(id);
    return (
        <div className="budget" style={{"--accent":color}}>
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formetCurrency(amount)} Budgeted</p>
            </div>
            <progress max={amount} value={spent}>
                {formatPercentage(spent / amount)}
            </progress>
            <div className="progress-text">
                <small>{formetCurrency(spent)} spent</small>
                <small>{formetCurrency(amount - spent)} remaining</small>
            </div>
        </div>
    );
};

export default BudgetItem;
