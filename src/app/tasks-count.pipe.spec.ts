import { TasksCountPipe } from "./tasks-count.pipe"

describe('TasksCountPipe', () => {

    it('0 zadań', () => {
        const res = new TasksCountPipe().transform(0);
        expect(res).toBe('Brak zadań');
    });

    for(let liczba = 5; liczba < 10; ++liczba){
        it(liczba + `zadań`, () => {
            const res = new TasksCountPipe().transform(liczba);
        })
    }
});
