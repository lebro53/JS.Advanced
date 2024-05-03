// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.
// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.
// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

//Кухня

// Повара и их специализации
const cooks = new Map();
cooks.set("Виктор", ["Пицца"]);
cooks.set("Ольга", ["Суши"]);
cooks.set("Дмитрий", ["Десерты"]);

// Блюда и их повара
const dishes = new Map();
dishes.set('Пицца "Маргарита"', "Виктор");
dishes.set('Пицца "Пепперони"', "Виктор");
dishes.set('Суши "Филадельфия"', "Ольга");
dishes.set('Суши "Калифорния"', "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

// Заказы клиентов

const alex = { name: "Алексей" };
const maria = { name: "Мария" };
const irina = { name: "Ирина" };

const orders = new Map();
orders.set(alex, ['Пицца "Пепперони"', "Тирамису"]);
orders.set(maria, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set(irina, ["Чизкейк"]);

// Функция для получения повара по блюду
function getCookForDish(dish) {
  return dishes.get(dish);
}

// Функция для получения блюд, заказанных клиентом
function getDishesForClient(client) {
  return orders.get(client);
}

// Пример использования функций
console.log(
  `Повар для блюда 'Пицца "Пепперони"' - ${getCookForDish('Пицца "Пепперони"')}`
);
console.log(
  `Блюда, заказанные клиентом Алексеем - ${getDishesForClient(alex)}`
);