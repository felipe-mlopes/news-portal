import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function generateDateFormated() {
    const date = dayjs();
  const dateTo = date.locale("pt-br").format("YYYY-MM-DD");
  const dateFrom = date
    .locale("pt-br")
    .subtract(1, "month")
    .format("YYYY-MM-DD");

    return {
        dateTo,
        dateFrom
    }
}