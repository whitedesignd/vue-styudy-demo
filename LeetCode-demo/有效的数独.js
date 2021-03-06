// 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。


// 上图是一个部分填充的有效的数独。

// 数独部分空格内已填入了数字，空白格用 '.' 表示。

// 示例 1:

// 输入:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// 输出: true
// 示例 2:

// 输入:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// 输出: false
// 解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
//      但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
// 说明:

// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
// 给定数独序列只包含数字 1-9 和字符 '.' 。
// 给定数独永远是 9x9 形式的。




var isValidSudoku = function(board) {
	let len = 9;
	let keyOne = true;
	let keyTwo = true;
	let keyThree = true;
	let dseduplication = (num,k=true) =>{
    	for(let i = 0; i < len ; i++) {
	        for(let j = 0; j < len -1 ; j++) {
	            for(let s = j+1; s < len ; s++){
	                if(num[i][j] != "." && num[i][j] == num[i][s]) {
	                    k = false;
	                    
	                }
	            }
	            
	        } 	   
	     }
	    return k;
    }  
    keyOne = dseduplication(board);
    for(let i = 0; i < len ; i++) {
        for(let j = 0; j < len -1 ; j++) {
            for(let s = j+1; s < len ; s++){
                if(board[j][i] != "." && board[j][i] == board[s][i]) {
                    keyThree = false;
                    break;
                }
            }
        } 
    }
  console.log(keyThree)
    // 把每个数组分成三个小数组
   let arr = [];
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len -2; j=j+3) {
            if( (j+1) %3 != 0)
                arr.push([...board[i][j],...board[i][j+1],...board[i][j+2]])

        }
    }
    let ov = [];
    // 把 3*3 的数组合并成一个
    for(let i = 0; i < arr.length - 6; i++) {
    		ov.push([...arr[i],...arr[i+3],...arr[i+6]]);
    		if((i+1) %3 == 0) i +=6;

    }
    keyTwo = dseduplication(ov);
    return keyOne == false || keyTwo == false || keyThree == false ? false:true;
};
console.log(isValidSudoku(
    [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]))