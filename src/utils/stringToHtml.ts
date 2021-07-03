function stringToHtml(element: string): string {
  return element
    .replace(/^\s+/g, "")
    .replace(/\n\s+/g, " ")
    .replace(/\>\s\</g, "><")
    .replace(/\s$/g, "");
}

export default stringToHtml;
