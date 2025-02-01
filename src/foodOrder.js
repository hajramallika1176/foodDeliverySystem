const display = (time, orderState, orderDetails) => {
  console.log(`[${time}s]`, orderState, orderDetails ?? "");
};

const getTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minuits = currentTime.getMinutes();
  return hours > 12 ? `${hours - 12}:${minuits} PM` : `${hours}:${minuits} AM`;
};

const timeElapse = (orderedTime) => {
  return ((Date.now() - orderedTime) / 1000).toFixed(2);
};

const task = (begin, finish, next, delay) => (startTime, orderDetails) => {
  const beginDetails = begin(startTime, orderDetails);
  setTimeout(() => {
    const nextdetails = finish(startTime, beginDetails);
    next(startTime, nextdetails);
  }, delay);
};

const deliverOrder = task(
  (orderedTime, orderDetails) => {
    const currentTime = timeElapse(orderedTime);
    display(currentTime, "Delivering order...");
    return orderDetails;
  },

  (orderedTime, nextdetails) => {
    const currentTime = timeElapse(orderedTime);
    const time = getTime();
    nextdetails.deliveryDetails = `Delivered by John at ${time}`;
    display(currentTime, "Order delivered", nextdetails);
    return nextdetails;
  },
  (orderedTime) => {
    const currentTime = timeElapse(orderedTime);
    display(currentTime, "Order delivered finished");
  },
  5000
);

const packOrder = task(
  (orderedTime, orderDetails) => {
    const currentTime = timeElapse(orderedTime);
    display(currentTime, "Packing order...");
    return orderDetails;
  },
  (orderedTime, nextdetails) => {
    const currentTime = timeElapse(orderedTime);
    nextdetails.packageDetails = "Packed in eco-friendly box";
    display(currentTime, "Order packed:", nextdetails);
    return nextdetails;
  },

  (orderedTime, nextdetails) => deliverOrder(orderedTime, nextdetails),
  2000
);

const prepareFood = task(
  (orderedTime, orderDetails) => {
    const currentTime = timeElapse(orderedTime);
    display(currentTime, "Preparing food...");
    return orderDetails;
  },
  (orderedTime, nextdetails) => {
    const currentTime = timeElapse(orderedTime);
    display(currentTime, "Food is ready: ", nextdetails);
    return nextdetails;
  },
  (orderedTime, nextdetails) => packOrder(orderedTime, nextdetails),
  3000
);

const getOrderDetails = task(
  (orderedTime, item) => {
    const currentTime = timeElapse(orderedTime);
    display(currentTime, "Order reciving...");
    const orderId = Math.floor(Math.random() * 1000);
    return { orderId: orderId, foodDetails: item };
  },
  (orderedTime, nextdetails) => {
    const currentTime = timeElapse(orderedTime);
    display(currentTime, "Order received:", nextdetails);
    return nextdetails;
  },
  (orderedTime, nextdetails) => {
    prepareFood(orderedTime, nextdetails);
  },

  3000
);

export { getOrderDetails };
