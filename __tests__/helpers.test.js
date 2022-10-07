const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-10-07 00:34:14');
    expect(format_date(date)).toBe('7/10/2022');
});