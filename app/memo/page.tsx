"use client";

import { useState, useMemo } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "Keyboard", price: 100 },
];

export default function ProductList() {
    const [search, setSearch] = useState<string>("");

    const filteredProducts = useMemo(() => {
        console.log("Sorting and filtering products...");
        return products
            .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => a.price - b.price);
    }, [search]);

    return (
        <div>
            <h2>Products</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
            />

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    );
}