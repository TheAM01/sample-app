"use client";

import { useReducer } from "react";

// customer ->  order -> kitchen -> meal;
// dispatch -> action -> reducer -> new state;

interface State {
    balance: number;
}

type Action = 
    { type: "withdraw", amount: number}
    | { type: "deposit", amount: number}
    | { type: "reset"}

function reducer(state: State, action: Action): State {
    if (action.type === 'deposit') {
        return { balance: state.balance + action.amount }
    } else if (action.type === 'withdraw') {
        return { balance: state.balance - action.amount }
    } else if (action.type === 'reset') {
        return { balance: 0 }
    }

    return state;
}

export default function Bank() {
    const [state, dispatch] = useReducer(reducer, { balance: 100 });

    return (
        <div>
            <p>Balance: {state.balance}</p>

            <button
                onClick={() => dispatch({ type: 'deposit', amount: 50 })}
            >
                Deposit
            </button>
            <button
                onClick={() => dispatch({ type: 'withdraw', amount: 20 })}
            >
                Withdraw
            </button>
        </div>
    )
}