type TaskCardProps = {
  id: number;
  title: string;
  status: string;
  priority: string;
  assignee: string;
};

export function TaskCard({ id, title, status, priority, assignee }: TaskCardProps) {
    return (
        <article>
            <h3>{title}</h3>
            <p>ID: {id}</p>
            <p>Status: {status}</p>
            <p>Priority: {priority}</p>
            <p>Assignee: {assignee}</p>
        </article>
    );
}