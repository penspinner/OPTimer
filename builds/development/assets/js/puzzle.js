class Puzzle
{
    constructor(puzzle)
    {
        if (puzzle)
        {
            this.puzzle = puzzle;
        } else
        {
            this.puzzle = '3x3x3';
        }
    }

    allPuzzles()
    {
        var puzzles = [
            '2x2x2',
            '3x3x3',
            '4x4x4',
            '5x5x5',
            '6x6x6',
            '7x7x7',
            'megaminx',
            'pyraminx'
        ];
    }
}