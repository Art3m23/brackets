module.exports = function check(str, bracketsConfig) {
  while(str !== ''){
        let j = 0
        for (let i=0;i<bracketsConfig.length;i++) {
            let string = bracketsConfig[i][0] + bracketsConfig[i][1]
            if (str.includes(string)){
                str = str.replace(string, '')
                j++
            }
        }
        if (j === 0) break
    }
    if (str === '') 
		return true
    return false
}
