import { users } from "../data/users";

const UserTable = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="mb-3">Recent Users</h5>

        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span
                    className={`badge ${
                      user.status === "Active"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
