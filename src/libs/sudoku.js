class Sudoku {
  constructor(gridSize = 9) {
    this.gridSize = gridSize;
    this.grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(' '));
  }

  rowCheck(val, index) {
    return this.grid[index].includes(val);
  }

  colCheck(val, index) {
    for (let i = 0; i < this.gridSize; i++) {
      if (this.grid[i][index] === val) {
        return true;
      }
    }
    return false;
  }

  subgrid(val, row, col) {
    const subgridRows = Math.floor(Math.sqrt(this.gridSize));
    const subgridCols = Math.ceil(this.gridSize / subgridRows);

    const startRow = Math.floor(row / subgridRows) * subgridRows;
    const startCol = Math.floor(col / subgridCols) * subgridCols;

    for (let i = startRow; i < startRow + subgridRows; i++) {
      for (let j = startCol; j < startCol + subgridCols; j++) {
        if (this.grid[i][j] === val) {
          return true;
        }
      }
    }
    return false;
  }

  generateSudoku(dif) {
    let num = Array.from({ length: this.gridSize }, (_, i) => i + 1).join('');
    for (let i = 0; num.length > 0 && i < this.gridSize; i++) {
      let index = Math.floor(Math.random() * num.length);
      let val = num.substring(index, index + 1);
      this.grid[0][i] = val;
      num = num.replace(val, '');
    }

    this.solver();

    this.removeValues(dif);
  }

  removeValues(dif) {
    for (let i = 0; i < dif; i++) {
      let row = Math.floor(Math.random() * this.gridSize);
      let col = Math.floor(Math.random() * this.gridSize);
      this.grid[row][col] = ' ';
    }
  }

  solver() {
    for (let i = 0; i < this.gridSize; i++) {
      for (let j = 0; j < this.gridSize; j++) {
        if (this.grid[i][j] === ' ') {
          for (let val = 1; val <= this.gridSize; val++) {
            let strVal = val.toString();
            if (
              !(this.rowCheck(strVal, i) || this.colCheck(strVal, j) || this.subgrid(strVal, i, j))
            ) {
              this.grid[i][j] = strVal;
              if (this.solver()) {
                return true;
              }
              this.grid[i][j] = ' ';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
}

export default Sudoku;
