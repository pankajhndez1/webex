'use client';
import { deleteUser, fetchUsers } from '@/redux/reducers/users';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const status = useSelector(state => state.users.status);
  const error = useSelector(state => state.users.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-semibold mb-4">User Table</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left border-b">ID</th>
            <th className="px-4 py-2 text-left border-b">Title</th>
            <th className="px-4 py-2 text-left border-b">Body</th>
            <th className="px-4 py-2 text-left border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{user.id}</td>
              <td className="px-4 py-2 border-b">{user.title}</td>
              <td className="px-4 py-2 border-b">{user.body}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
