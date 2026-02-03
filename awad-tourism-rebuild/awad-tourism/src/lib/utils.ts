export function formatMoney(amount: number, currency: string) {
  try {
    return new Intl.NumberFormat("en", { style: "currency", currency }).format(amount);
  } catch {
    return `${currency} ${amount}`;
  }
}

export function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}
