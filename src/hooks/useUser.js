import { useState } from "react";

import userData from "../data/userData";

const useUser = () => {
  const [user, setUser] = useState(userData);

  const updateUser = (updatedData) => {
    setUser((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  const updateProfile = ({
    name,
    email,
    phone,
    department,
  }) => {
    setUser((prev) => ({
      ...prev,
      name,
      email,
      phone,
      department,
    }));
  };

  const updateStatus = (status) => {
    setUser((prev) => ({
      ...prev,
      status,
    }));
  };

  return {
    user,
    updateUser,
    updateProfile,
    updateStatus,
  };
};

export default useUser;