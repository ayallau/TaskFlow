import type {Task} from '../types/task';

export function TaskCard({ title, status, priority, assignee }: Task) {
    return (
        <article>
            <h3>{title}</h3>
            <p>Status: {status}</p>
            <p>Priority: {priority}</p>
            <p>Assignee: {assignee}</p>
        </article>
    );
}
