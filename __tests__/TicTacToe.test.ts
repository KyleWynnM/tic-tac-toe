import { TicTacToe, Board } from '../src/tic-tac-toe';

describe('TicTacToe', () => {
    let game: TicTacToe;

    beforeEach(() => {
        game = new TicTacToe();
    });

    test('X horizontal win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['X', 'X', 'X', 'X'],
            ['O', '.', 'O', '.'],
            ['.', 'O', '.', '.'],
            ['.', '.', '.', '.']
        ];
        expect(game.checkWinner(board)).toBe('X');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is X!');
        expect(game.checkAllRows(board)).toBe('X');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('.');
    });

    test('O horizontal win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['X', '.', 'X', '.'],
            ['O', 'O', 'O', 'O'],
            ['.', 'X', '.', 'X'],
            ['.', '.', '.', '.']
        ];
        expect(game.checkWinner(board)).toBe('O');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is O!');
        expect(game.checkAllRows(board)).toBe('O');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('.');
    });

    test('X vertical win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['X', 'O', '.', '.'],
            ['X', '.', 'O', '.'],
            ['X', 'O', '.', '.'],
            ['X', '.', '.', '.']
        ];
        expect(game.checkWinner(board)).toBe('X');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is X!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('X');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('.');
    });

    test('O vertical win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['X', 'O', 'X', '.'],
            ['.', 'O', '.', '.'],
            ['X', 'O', 'X', '.'],
            ['.', 'O', '.', '.']
        ];
        expect(game.checkWinner(board)).toBe('O');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is O!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('O');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('.');
    });

    test('X left to right diagonal win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['X', '.', 'O', 'O'],
            ['.', 'X', '.', '.'],
            ['.', '.', 'X', 'O'],
            ['.', '.', '.', 'X']
        ];
        expect(game.checkWinner(board)).toBe('X');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is X!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('X');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('.');
    });

    test('O right to left diagonal win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['.', 'X', '.', 'O'],
            ['X', 'X', 'O', '.'],
            ['.', 'O', '.', '.'],
            ['O', '.', '.', 'X']
        ];
        expect(game.checkWinner(board)).toBe('O');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is O!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('O');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('.');
    });

    test('X four corners win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['X', '.', '.', 'X'],
            ['O', '.', 'O', 'O'],
            ['.', '.', '.', '.'],
            ['X', '.', '.', 'X']
        ];
        expect(game.checkWinner(board)).toBe('X');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is X!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('X');
        expect(game.checkAllSquares(board)).toBe('.');
    });

    test('X 2x2 square win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['X', 'X', 'O', '.'],
            ['X', 'X', '.', 'O'],
            ['O', '.', '.', '.'],
            ['.', '.', '.', '.']
        ];
        expect(game.checkWinner(board)).toBe('X');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is X!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('X');
    });

    test('O 2x2 square win, moves are left, game is over, nothing else', () => {
        const board: Board = [
            ['X', '.', '.', 'X'],
            ['X', 'O', 'O', 'O'],
            ['X', '.', 'O', 'O'],
            ['.', '.', '.', '.']
        ];
        expect(game.checkWinner(board)).toBe('O');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The winner is O!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('O');
    });

    test('No win, no moves left, game is over', () => {
        const board: Board = [
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'O'],
            ['O', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'O']
        ];
        expect(game.checkWinner(board)).toBe('NONE');
        expect(game.anyMovesLeft(board)).toBe(false);
        expect(game.isGameOver(board)).toBe('The game ends in a draw!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('.');
    });

    test('No win, moves are left, game is not over', () => {
        const board: Board = [
            ['X', 'O', '.', '.'],
            ['.', '.', '.', '.'],
            ['.', '.', '.', '.'],
            ['.', '.', '.', '.']
        ];
        expect(game.checkWinner(board)).toBe('NONE');
        expect(game.anyMovesLeft(board)).toBe(true);
        expect(game.isGameOver(board)).toBe('The game is still going!');
        expect(game.checkAllRows(board)).toBe('.');
        expect(game.checkAllColumns(board)).toBe('.');
        expect(game.checkDiagonals(board)).toBe('.');
        expect(game.checkCorners(board)).toBe('.');
        expect(game.checkAllSquares(board)).toBe('.');
    });
});
