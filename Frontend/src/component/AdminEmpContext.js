import React, { createContext, useContext, useState } from 'react';

const AdminEmpContext = createContext();

export const AdminEmpProvider = ({ children }) => {
    const [admin_emp, setAdminEmp] = useState(1);

    return (
        <AdminEmpContext.Provider value={{ admin_emp, setAdminEmp }}>
            {children}
        </AdminEmpContext.Provider>
    );
};

export const useAdminEmp = () => {
    return useContext(AdminEmpContext);
};
