// TodoFilter.tsx
import React, { useEffect, useMemo, useState } from 'react';

const TodoFilter: React.FC<any> = ({ todos, onFilterChange }) => {
    // filter here
    const [complitionFilter, setComplitionFilter] = useState('all');
    const [visiblityFilter, setVisiblityFilter] = useState('isNotArchived');
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');

    // Memoized filteredTodos based on completion, visibility, and date filters
    const filteredTodos = useMemo(() => {
        let filtered = todos || [];

        // Filter based on isCompleted status
        if (complitionFilter === 'completed') {
            filtered = filtered.filter((task: any) => task.isCompleted === true);
        } else if (complitionFilter === 'pending') {
            filtered = filtered.filter((task: any) => task.isCompleted === false);
        }

        // Filter based on visibility status
        if (visiblityFilter === 'isNotArchived') {
            filtered = filtered.filter((task: any) => task.isVisible === true);
        } else if (visiblityFilter === 'isArchived') {
            filtered = filtered.filter((task: any) => task.isVisible === false);
        }

        // Filter by date range if both fromDate and toDate are set
        if (fromDate && toDate) {
            const from = new Date(fromDate);
            const to = new Date(toDate);
            filtered = filtered.filter((task: any) => {
                const taskDate = new Date(task.created_at);
                return taskDate >= from && taskDate <= to;
            });
        }

        return filtered;
    }, [todos, complitionFilter, visiblityFilter, fromDate, toDate]);
    // Use useEffect to trigger the callback whenever filteredTodos change
    useEffect(() => {
        onFilterChange(filteredTodos);
    }, [filteredTodos, onFilterChange]);

    return (
        <div className="flex mt-2 gap-8   ">
            <div className="mb-4 flex w-full flex-col">
                <label htmlFor="completion">Filter by status</label>
                <select
                    className="border border-gray-300 p-2  focus:border-blue-500"
                    value={complitionFilter}
                    onChange={(e) => setComplitionFilter(e.target.value)}
                >
                    <option value="all">All Tasks</option>
                    <option value="completed">Completed Tasks</option>
                    <option value="pending">Pending Tasks</option>
                </select>
            </div>

            <div className="mb-4 w-full flex flex-col">
                <label htmlFor="visibility">Filter by visibility</label>
                <select
                    className="border border-gray-300 p-2  focus:border-blue-500"
                    value={visiblityFilter}
                    onChange={(e) => setVisiblityFilter(e.target.value)}
                >
                    <option value="all">All Tasks</option>
                    <option value="isArchived">Archived Tasks</option>
                    <option value="isNotArchived">Visible Tasks</option>
                </select>
            </div>

            <div className="mb-4 w-full flex flex-col">
                <label>From:</label>
                <input
                    type="date"
                    className="border border-gray-300 p-2  focus:border-blue-500"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                />
            </div>

            <div className="mb-4 w-full flex flex-col">
                <label>To:</label>
                <input
                    type="date"
                    className="border border-gray-300 p-2  focus:border-blue-500"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                />
            </div>
        </div>

    );
};

export default TodoFilter;
