export function convertTextToObject(str: string) {
  str = str.replace(/\s+|\r?\n|\r|["']/g, "");
  const ins = str.split(",");

  const object = {};
  for (let i = 0; i < ins.length; i++) {
    const items = ins[i].split(":");
    let val;
    if (items.length !== 2) return undefined;
    if (items[i][1] === "{") {
      val = convertTextToObject(items[i][1].slice(1, -1));
      if (!val) return undefined;
    } else if (items[i][1] === "[") {
    } else if (!isNaN(+items[i][1])) val = +items[i][1];

    //@ts-ignore
    object[items[i][0]] = val;
  }
  return object;
}

function convertArrayToText(array: any[], level: number) {
  let str = "[\n";

  for (let i = 0; i < array.length; i++) {
    str += " ".repeat(level * 2);
    if (Array.isArray(array[i])) str += convertArrayToText(array[i], level + 1);
    else if (typeof array[i] === "object")
      str += convertObjectToText(array[i], level + 1);
    else if (typeof array[i] === "string") str += `"${array[i]}"`;
    else if (typeof array[i] === "number") str += array[i].toString();
    else return undefined;
    if (i !== array.length - 1) str += ",";
    str += "\n";
  }

  str += " ".repeat(level * 2 - 2) + "]";
  return str;
}

export function convertObjectToText(object: any, level: number) {
  let str = "{\n";

  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    str += " ".repeat(level * 2) + `"${keys[i]}" : `;

    //@ts-ignore
    if (Array.isArray(object[keys[i]])) {
      str += convertArrayToText(object[keys[i]], level + 1);
    } else if (typeof object[keys[i]] === "object") {
      str += convertObjectToText(object[keys[i]], level + 1);
    } else if (typeof object[keys[i]] === "string") {
      str += `"${object[keys[i]]}"`;
    } else if (typeof object[keys[i]] === "number") {
      str += object[keys[i]].toString();
    }

    if (i !== keys.length - 1) str += ",";
    str += "\n";
  }

  str += " ".repeat(level * 2 - 2) + "}";
  return str;
}
