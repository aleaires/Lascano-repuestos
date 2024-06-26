import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderItems?: OrderItemListRelationFilter;
};
