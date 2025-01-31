// class Order{
//   #orderId;
//   #startTime;
//   constructor(startTime,orderId) {
//     this.#startTime = startTime;
//     this.#orderId=orderId
//   }

// }

const display = (time, orderState, details) => {
  console.log(`[${time}s]`, orderState, details ?? "");
};

const getTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minuits = currentTime.getMinutes();
  return hours > 12 ? `${hours - 12}:${minuits} PM` : `${hours}:${minuits} AM`;
};

const deliverOrder = (startTime, orderDetails) => {
  const currentTime = timeElapse(startTime);
  display(currentTime, "Delivering order...");

  setTimeout(() => {
    const time = getTime();
    const deliveredDetails = `Delivered by John at ${time}`;
    const nextTime = timeElapse(startTime);
    orderDetails.deliveryDetails = deliveredDetails;
    display(nextTime, "Order delivered:", orderDetails);
  }, 5000);
};

const packOrder = (startTime, orderDetails) => {
  const currentTime = timeElapse(startTime);
  display(currentTime, "Packing order...");
  const packingDetails = "Packed in eco-friendly box";

  setTimeout(() => {
    const nextTime = timeElapse(startTime);
    orderDetails.packageDetails = packingDetails;
    display(nextTime, "Order packed:", orderDetails);
    deliverOrder(startTime, orderDetails);
  }, 2000);
};

const prepareFood = (startTime, orderDetails, foodItem) => {
  const currentTime = timeElapse(startTime);
  display(currentTime, "Preparing food...");

  setTimeout(() => {
    const nextTime = timeElapse(startTime);

    orderDetails.foodDetails = foodItem;
    display(nextTime, "Food is ready:", orderDetails);
    packOrder(startTime, orderDetails);
  }, 3000);
};
const timeElapse = (orderedTime) => {
  return ((Date.now() - orderedTime) / 1000).toFixed(2);
};


const getOrderDetails = (startTime, foodItem) => {
  const currentTime = timeElapse(startTime);
  const orderId = Math.floor(Math.random() * 1000);
  const orderDetails = { orderId: orderId };
  display(currentTime, "Ordered received:", orderDetails);

  prepareFood(startTime, orderDetails, foodItem);
};
// getOrderDetails(123);

// const main()
export { getOrderDetails };
