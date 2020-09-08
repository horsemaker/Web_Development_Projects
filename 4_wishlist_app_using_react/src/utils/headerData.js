import { getFakeHeaderData } from "../services/getFakeAPIData";
export function headerData(str) {
  return getFakeHeaderData()[str];
}
