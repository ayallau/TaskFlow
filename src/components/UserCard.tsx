type UserCardProps = {
    id: string;
    name: string;
    role: string;
    isActive: boolean; 
};

export function UserCard({ id, name, role, isActive }: UserCardProps) {
  return (
    <article>
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Role: {role}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </article>
  );
}
