import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderItemService } from "./orderItem.service";
import { OrderItemControllerBase } from "./base/orderItem.controller.base";

@swagger.ApiTags("orderItems")
@common.Controller("orderItems")
export class OrderItemController extends OrderItemControllerBase {
  constructor(protected readonly service: OrderItemService) {
    super(service);
  }
}
