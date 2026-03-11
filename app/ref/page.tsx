"use client";

import { useRef, useState } from 'react';

const CounterRef = () => {
    const countRef = useRef<number>(0);
    const [, forceRender] = useState(0);

    console.log("Rendering page!");

    const increment = () => {
        countRef.current += 1;
        console.log(`Counter (countRef): ${countRef.current}`);
    }

    const showCount = () => {
        forceRender((prev) => prev + 1);
    };

    return (
        <div>
            <h2>Counter with useRef</h2>
            {/* eslint-disable-next-line react-hooks/refs */}
            <p>Current count: {countRef.current}</p>

            <button
                onClick={increment}
            >
                Increment Ref Counter
            </button>

            <button
                onClick={showCount}
            >
                Update Display (force render)
            </button>

        </div>
    )
}

export default CounterRef;