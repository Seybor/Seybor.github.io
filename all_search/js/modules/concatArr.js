import { A0_A1 } from '../DATA/New-A0-A1/all_A0_A1.js'
import { A } from "../DATA/BeginEnglish/a.js"

import IR_A2 from '../DATA/A2/IR_A2.js'
import PH_A2 from '../DATA/A2/PH_A2.js'
import PV_A2 from '../DATA/A2/PV_A2.js'
import R_A2 from '../DATA/A2/R_A2.js'
import W_A2 from '../DATA/A2/W_A2.js'

const A2 = IR_A2.concat(PH_A2.concat(PV_A2.concat(R_A2.concat(W_A2))))
const BE = A

for (let i = 0; i < A0_A1.length; i++) {
	A0_A1[i].from = 'A0-A1'
}
for (let i = 0; i < A2.length; i++) {
	A2[i].from = 'A2'
}
for (let i = 0; i < BE.length; i++) {
	BE[i].from = 'BE'
}

const ALL_ARRAY = A0_A1.concat(A2.concat(BE))

export default ALL_ARRAY