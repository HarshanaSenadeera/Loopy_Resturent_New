import React, { createContext, useContext, useState } from 'react';

interface Order {
    OrderNum: string;
    orderType:string;
    type1:string;
    tableOrRoomNumber:string;
    address: string;
    email: string;
    phone: string;
    item: string;
    item2:string;
    type: string;
}

interface OrderContextType {
    buyerList: Order[];
    updateSettingTable: (newOrder: Order) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrderContext must be used within an OrderProvider');
    }
    return context;
};

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [buyerList, setBuyerList] = useState<Order[]>([]);

    const updateSettingTable = (newOrder: Order) => {
        setBuyerList(prevList => [...prevList, newOrder]);
    };

    return (
        <OrderContext.Provider value={{ buyerList, updateSettingTable }}>
            {children}
        </OrderContext.Provider>
    );
};