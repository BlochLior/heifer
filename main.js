import {moo} from "./moo.js";
import { say } from "cowsay";

const NAME = "lior";
const str = moo(NAME)
console.log(say({text: str,}));