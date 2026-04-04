/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { OrderCard } from "../OrderCard";

export interface IContainerComp {
  orders: any[];
  cancelOrder: (orderId: string) => void;
  updateOrder: (
    orderId: string,
    deliveryStatus?: string,
    paidStatus?: string
  ) => void;
}

export const OrderComp = ({
  orders,
  cancelOrder,
  updateOrder,
}: IContainerComp) => {
  const _orders = () => {
    return (
      <S.OrderContainer>
        {orders.map((order, id) => (
          <OrderCard
            key={id}
            individualOrder={order}
            cancelOrder={cancelOrder}
            updateOrder={updateOrder}
          />
        ))}
      </S.OrderContainer>
    );
  };

  return <div>{_orders()}</div>;
};
