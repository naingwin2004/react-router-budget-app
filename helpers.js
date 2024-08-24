const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`;
};
//local storage
export const fetchData = key => {
    return JSON.parse(localStorage.getItem(key));
};
export const createBudget = ({ name, amount }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    };
    const existingBudgets = fetchData("budgets") ?? [];
    return localStorage.setItem(
        "budgets",
        JSON.stringify([...existingBudgets, newItem])
    );
};
export const createExpense = ({ name, amount,budgetId }) => {
    const newItem = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        budgetId,
    };
    const existingExpenses = fetchData("Expenses") ?? [];
    return localStorage.setItem(
        "expenses",
        JSON.stringify([...existingExpenses, newItem])
    );
};

export const deleteItem = key => {
    return localStorage.removeItem(key);
};
