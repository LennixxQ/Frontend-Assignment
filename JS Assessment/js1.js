let orderArray = [];

function takeOrder() {
  let customerName = prompt("Enter Name");
  let orders = prompt("Enter Order");
  if (!orders.trim()) {
    alert("No items entered. Order skipped!");
    return;
  }

  let newOrder = String(orders)
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());

  orderArray.push(orders);

  console.log(customerName);
  console.log(newOrder);
  console.log(orderArray);

  document.getElementById("order-display").innerHTML = `
    Hello ${customerName}! Your order ${newOrder} will be ready soon.`;
}
