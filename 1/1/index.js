// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.
// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:
// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }
// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
  {
    title: "1",
    artist: "1",
    year: "1",
  },
  {
    title: "2",
    artist: "1",
    year: "1",
  },
  {
    title: "3",
    artist: "1",
    year: "1",
  },
];

musicCollection[Symbol.iterator] = function () {
  return {
    curent: 0,
    to: this.length,
    next() {
      return this.curent < this.to
        ? { value: musicCollection[this.curent++], done: false }
        : { done: true };
    },
  };
};

for (const albom of musicCollection) {
  console.log(
    `Название альбома ${albom.title}- Исполнитель (Год выпуска) ${albom.artist} (${albom.year})`
  );
}
