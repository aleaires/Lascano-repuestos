import * as graphql from "@nestjs/graphql";
import { OrderItemResolverBase } from "./base/orderItem.resolver.base";
import { OrderItem } from "./base/OrderItem";
import { OrderItemService } from "./orderItem.service";

@graphql.Resolver(() => OrderItem)
export class OrderItemResolver extends OrderItemResolverBase {
  constructor(protected readonly service: OrderItemService) {
    super(service);
  }
}
