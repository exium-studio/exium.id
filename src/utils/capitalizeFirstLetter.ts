export default function capitalizeFirstLetter(string: string) {
  if (typeof string !== "string" || string.length === 0) {
    return "";
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase();
}
