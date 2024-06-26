import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
