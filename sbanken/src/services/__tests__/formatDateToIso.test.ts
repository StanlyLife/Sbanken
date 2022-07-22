import { formatDateToIso } from '../formatDateToIso';

test('returns date in ISO format without time', () => {
    expect(formatDateToIso(new Date('11/16/1997'))).toBe('1997-11-16');
});
