### **Assignment: Simulating an Asynchronous Workflow with Data Passing and Time Tracking**  

#### **Objective**  
In this assignment, you will simulate a **food delivery system** where each task happens asynchronously, **passes data to the next step**, and **tracks the time elapsed from the moment the order is placed**. This will help you understand how asynchronous callbacks handle sequential execution and time measurement.  

#### **Scenario**  
Your system processes a food order in the following sequence:  

1. **Order Received** (Happens immediately, records the `startTime` and generates an `orderId`).  
2. **Preparing Food** (Takes 3 seconds, adds `foodDetails`).  
3. **Packing Order** (Takes 2 seconds, adds `packageDetails`).  
4. **Delivering Order** (Takes 5 seconds, adds `deliveryDetails`).  
5. **Order Delivered** (Final step, logs the full order summary and time elapsed).  

Each step must:  
✔ Receive **data from the previous step**  
✔ Modify the data and pass it forward  
✔ Log the **time elapsed from order placement**  

---

### **Task**  
- Implement each step as an **asynchronous function** using **callbacks**.  
- Use `setTimeout` to introduce delays.  
- Track the **time elapsed** from order placement using `Date.now()`.  

---

### **Example Output (Time Elapsed Included)**  [0.00s] Order received: { orderId: 123 }
[0.00s] Order received: { orderId: 123 }
[3.01s] Preparing food...
[3.01s] Food is ready: { orderId: 123, foodDetails: 'Burger & Fries' }
[5.02s] Packing order...
[5.02s] Order packed: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box' }
[10.04s] Delivering order...
[10.04s] Order delivered: { orderId: 123, foodDetails: 'Burger & Fries', packageDetails: 'Packed in eco-friendly box', deliveryDetails: 'Delivered by John at 7:30 PM' }
*(The times are approximate and will vary slightly due to JavaScript’s event loop.)*  
