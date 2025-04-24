import { useEffect, useState } from 'react';
import { fetchCategory } from '../api/category.api';
import { Category } from '../models/category.model';

export const useCategory = () => {
    const [category, setcategory] = useState<Category[]>([]);

    useEffect(() => {
        fetchCategory().then((category) => {
            if (!category) return;

            const categoryWithAll = [
                {
                    id: null,
                    name: "전체",
                },
                ...category,
            ];

            setcategory(categoryWithAll);
        })
    }, []);

    return { category };
};