import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
  price?: number | null;
  stock?: number | null;
};
