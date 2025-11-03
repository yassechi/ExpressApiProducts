import { format } from "date-fns";
import path from "path";
import { promises as fsPromise } from "fs";

const PATH_LOGS = path.join(__dirname, "logs.txt");

export function writeLog(msg: string, id: number = 0) {
  if (id === 0) {
    fsPromise.writeFile(
      PATH_LOGS,
      `${msg} -> ${format(new Date(), "dd-MM-yyy h:mm:ss")}\n`,
      {
        flag: "a",
      }
    );
  } else {
    fsPromise.writeFile(
      PATH_LOGS,
      `${msg} ${id} -> ${format(new Date(), "dd-MM-yyy h:mm:ss")}\n`,
      {
        flag: "a",
      }
    );
  }
}