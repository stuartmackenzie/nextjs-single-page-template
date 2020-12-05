import { parseISO, format } from "date-fns";

export default function Date({ children, template = "LLLL io, yyyy" }) {
  const date = parseISO(children);
  return <time dateTime={children}>{format(date, template)}</time>;
}
