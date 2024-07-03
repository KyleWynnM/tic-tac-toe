// custom types to represent board state
export type Row = ('X' | 'O' | '.')[];
export type Board = Row[];

export class TicTacToe {
    
    // THREE MAIN FUNCTIONS
    
    /**
     * checkWinner summizes all helper functions to check the board for all possible wins by checking any possible win condition
     * @param board the game state
     * @returns either the winner or NONE to denote a lack of one
     */
    public checkWinner(board : Board): string {
        // check the board for a horizontal win, if there is none, move on
        let rowsResult = this.checkAllRows(board);

        if (rowsResult !== '.') {
            // terminates the function upon a win, continues otherwise
            return rowsResult;
        }

        // check the board for a vertical win, if there is none, move on
        let colsResult = this.checkAllColumns(board);

        if (colsResult !== '.') {
            // terminates the function upon a win, continues otherwise
            return colsResult;
        }

        // check the board for a diagonal win, if there is none, move on
        let diagonalsResult = this.checkDiagonals(board);

        if (diagonalsResult !== '.') {
            // terminates the function upon a win, continues otherwise
            return diagonalsResult;
        }

        // check the board for a corner win, if there is none, move on
        let cornersResult = this.checkCorners(board);

        if (cornersResult !== '.') {
            // terminates the function upon a win, continues otherwise
            return cornersResult;
        }

        // check the board for a square win, if there is none, move on
        let squaresResult = this.checkAllSquares(board);

        if (squaresResult !== '.') {
            // terminates the function upon a win, continues otherwise
            return squaresResult;
        }

        return 'NONE';
    }

    /**
     * anyMovesLeft checks if there are any possible moves to fulfill left on the board, being any empty spaces
     * @param board the game state
     * @returns a boolean stating if there are any moves left
     */
    public anyMovesLeft(board : Board) : boolean {
        // go through all rows in the board
        for (let row of board) {
            // go through all cells in the row
            for (let space of row) {
                // if it's empty, return true and stop the function
                if (space === '.') {
                    return true;
                }
            }
        }

        return false
    }

    /**
     * isGameOver summizes anyMovesLeft and checkWinner by seeing if either there are no moves left and it's a draw, or if the game is over
     * @param board the game state
     * @returns a string describing the current state win/draw/not over
     */
    public isGameOver(board : Board) : string {
        let anyMovesLeftResult = this.anyMovesLeft(board);
        let checkWinnerResult = this.checkWinner(board);

        if (checkWinnerResult !== 'NONE') {
            return "The winner is " + checkWinnerResult + "!";
        }

        if (!anyMovesLeftResult) {
            return "The game ends in a draw!";
        }

        return "The game is still going!";
    }

    // HELPER FUNCTIONS
    
    /**
     * checkRow checks an individual row in the board for a win there. By checking if all four values are equal a winner is determined
     * @param row the row being checked
     * @returns either the winner or a . to denote a lack of one
     */
    public checkRow(row : Row) : string {
        // take one item from the row for comparison, then check if all other items match it
        let ref = row[0];

        if (ref === row[1] && 
            ref === row[2] && 
            ref === row[3]) {
            // no need to check if the reference is not an X or an O, if they are all empty the result is still "."
            return ref;
        }
        
        // if no win is detected, return a blank
        return '.';
    }

    /**
     * checkAllRows iterates through the rows in the board with the checkRow function to scan the entire board for a horizontal win
     * @param board the game state
     * @returns either the winner or a . to denote a lack of one
     */
    public checkAllRows(board : Board) : string {
        let rowResult;
        for (let i = 0; i < 4; i++) {
            // check the next row in the loop
            rowResult = this.checkRow(board[i]);

            // check if that row contained a win
            if (rowResult !== '.') {
                // no need to continue the loop upon a win, stop the function there
                return rowResult;
            }
        }

        // if no win is detected, return a blank
        return '.';
    }

    /**
     * 
     * @param colIndex the index of the column that is being examined within the board
     * @param board the game state
     * @returns either the winner or a . to denote a lack of one
     */
    public checkColumn(colIndex : number, board : Board) : string {
        // take one item from the column for comparison, then check if all other items in the column match it
        let ref = board[0][colIndex];

        if (ref === board[1][colIndex] && 
            ref === board[2][colIndex] && 
            ref === board[3][colIndex]) {
            // no need to check if the reference is not an X or an O, if they are all empty the result is still "."
            return ref;
        }

        // if no win is detected, return a blank
        return '.';
    }

    /**
     * checkAllColumns iterates through all the columns with the checkColumn function to scan the entire board for a vertical win
     * @param board the game state
     * @returns either the winner or a . to denote a lack of one
     */
    public checkAllColumns(board : Board) : string {
        let colResult;
        for (let i = 0; i < 4; i++) {
            // check the next column in the loop
            colResult = this.checkColumn(i, board);

            // check if that column contained a win
            if (colResult !== '.') {
                // no need to continue the loop upon a win, stop the function there
                return colResult;
            }
        }

        // if no win is detected, return a blank
        return '.';
    }

    /**
     * checkDiagonals checks both possible diagonals on the board to see if there is a win there
     * @param board the game state
     * @returns either the winner or a . to denote a lack of one
     */
    public checkDiagonals(board : Board) : string {
        // check top left to bottom right
        // take top left as reference and see if all other ones in line match that
        let ref = board[0][0];

        // additionally, make sure that you are not checking for matching empty squares, as that will terminate the function before the
        // other diagonal is checked
        if (ref !== '.' &&
            ref === board[1][1] && 
            ref === board[2][2] && 
            ref === board[3][3]) {
            return ref
        }

        // check top right to bottom left
        // take top right as reference and see if all other ones in line match that
        ref = board[0][3];

        if (ref === board[1][2] && 
            ref=== board[2][1] && 
            ref === board[3][0]) {
            return ref
        }

        // if no win is detected, return a blank
        return '.';
    }

    /**
     * checkCorners checks all corners of the board to see if there is a win there
     * @param board the game state
     * @returns either the winner or a . to denote a lack of one
     */
    public checkCorners(board : Board) : string {
        // take top left as reference and see if all other corners match it
        // it's okay if they are all matching '.'s, as that will not be processed as a win
        let ref = board[0][0];

        if (ref === board[0][3] && 
            ref === board[3][0] && 
            ref === board[3][3]) {
            return ref;
        }

        // if no win is detected, return a blank
        return '.';
    }

    /**
     * checkASquare checks an individual 2x2 square to see if all match and there is a win there
     * @param topLeftRow the index of the row in the board containing the top left square we will use as a starting point
     * @param topLeftCol the index of the column in the board containing the top left square we will use as a starting point
     * @param board the game state
     * @returns either the winner or a . to denote a lack of one
     */
    public checkASquare(topLeftRow : number, topLeftCol : number, board : Board) : string {
        // take top left unit of square as reference and see if other parts of square match it
        let ref = board[topLeftRow][topLeftCol];

        if (ref === board[topLeftRow][topLeftCol + 1] && 
            ref === board[topLeftRow + 1][topLeftCol] && 
            ref === board[topLeftRow + 1][topLeftCol + 1]) {
            return ref;
        }

        // if no win is detected, return a blank
        return '.';
    }

    /**
     * checkAllSquares iterates through the board for possible 2x2 square wins
     * @param board the game state
     * @returns either the winner or a . to denote a lack of one
     */
    public checkAllSquares(board : Board) : string {
        let squareResult;
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                // take square at that point and see if all four units match
                squareResult = this.checkASquare(row, col, board);
                
                if (squareResult !== '.') {
                    // no need to continue the loop upon a win, stop the function there
                    return squareResult;
                }
            }
        }

        // if no win is detected, return a blank
        return '.';
    }
}

