import { cloneDeep } from 'lodash'
import { mainArr} from "./main";

const cloneArr = cloneDeep(mainArr)
console.log('cloneArr', cloneArr)