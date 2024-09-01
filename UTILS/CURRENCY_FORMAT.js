/** @format */

export function CurrencyFormatter(amount) {
  if (!amount) {
    return "";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function CurrencyPrettier(num = 0, precision = 0) {
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted =
      (num / found.threshold).toFixed(precision) + " " + found.suffix;
    return formatted;
  }

  return num;
}

export function SimpleCurrencyFormatter(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
