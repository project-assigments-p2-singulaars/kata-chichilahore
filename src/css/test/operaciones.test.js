describe('Operaciones matemáticas', () => {
    test('suma de dos números', () => {
        expect(suma(1, 2)).toBe(3);
        expect(suma(-1, 2)).toBe(1);
    });

    test('resta de dos números', () => {
        expect(resta(2, 1)).toBe(1);
        expect(resta(-1, 2)).toBe(-3);
    });

    test('multiplicación de dos números', () => {
        expect(multiplicacion(2, 3)).toBe(6);
        expect(multiplicacion(-1, 2)).toBe(-2);
    });

    test('división de dos números', () => {
        expect(division(4, 2)).toBe(2);
        expect(() => division(1, 0)).toThrow("No se puede dividir por cero");
    });
});