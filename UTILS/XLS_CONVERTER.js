/** @format */

import { utils, writeFile } from "xlsx";

export default function xlsConverter(data, filename) {
  const sheet = utils.json_to_sheet(data);
  const wb = utils.book_new();
  utils.book_append_sheet(wb, sheet, "Order List");
  writeFile(wb, `${filename}.xlsx`);
}
