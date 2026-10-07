import { useState } from "react";

const useSettings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@library.com",
    phone: "+91 9876543210",
    role: "Administrator",
    address: "Library Main Branch",
  });

  const [library, setLibrary] = useState({
    libraryName: "Central Library",
    email: "library@example.com",
    phone: "+91 9876543210",
    address: "Nandyal, Andhra Pradesh",
    maxBooks: 5,
    loanPeriod: 15,
    finePerDay: 10,
    workingHours: "09:00 AM - 06:00 PM",
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactor: true,
    autoLogout: true,
    strongPassword: true,
  });

  const [system, setSystem] = useState({
    theme: "Light",
    language: "English",
    dateFormat: "DD/MM/YYYY",
    timeZone: "Asia/Kolkata",
    backup: "Daily",
    emailNotification: true,
    smsNotification: false,
    desktopNotification: true,
  });

  return {
    activeTab,
    setActiveTab,

    profile,
    setProfile,

    library,
    setLibrary,

    security,
    setSecurity,

    system,
    setSystem,
  };
};

export default useSettings;