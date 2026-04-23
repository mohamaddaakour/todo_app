import { useState } from "react"

export default function  Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="bg-white p-6 rounded-xl shadow-md text-center w-64">
            <h2 className="text-xl font-semibold mb-4">Counter</h2>

            <p className="text-3xl font-bold mb-4">{count}</p>

            <div className="flex justify-center gap-3">
                <button onClick={() => setCount(count - 1)} className="px-3 py-1 bg-red-500 text-white rounded">-</button>

                <button onClick={() => setCount(count + 1)} className="px-3 py-1 bg-green-500 text-white rounded">+</button>
            </div>
        </div>
    );
}