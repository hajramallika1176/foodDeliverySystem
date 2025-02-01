import { getOrderDetails } from "./foodOrder.js";

const main = () => {
  getOrderDetails(Date.now(),"burger")
};

main();