export const calcPrice = (cartItems?: any[], setTotalPrice?: any) => {
  if (cartItems) {
    const totalPriceArray: any[] = cartItems?.map(
      (item: any) => item.price * item.quantity
    );
    if (totalPriceArray.length > 0)
      setTotalPrice(
        totalPriceArray &&
          totalPriceArray.reduce(
            (initial: number, current: number) => initial + current
          )
      );
  }
};
