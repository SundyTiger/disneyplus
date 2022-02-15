import disneyplus from "./disneyPlusServices";

const Payment = (amount) => {
  return disneyplus.post("/payment", { amount: amount });
};
const Verify = (response) => {
  return disneyplus.post("/verifyPayment", response);
};
export default { Payment, Verify };
