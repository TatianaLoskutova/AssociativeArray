const user = {
    name: 'Dimych',
    age: 12,
    address: {
        city: {
            title: 'Minsk'
        }
    }
}
// Достучаться можно разными способами. Оба верные
user.address.city.title
user['address']['city']['title'] // т.к в этом варианте динамическая структура и строки, мы можем их легко менять

const city = {} //  у объекта нет свойств
city.title = 'Spb' // добавили свойство
city['citizentsCounst'] = 100 // опять создали

const users = ['Dimych', 'Natasha', 'Valera', 'Katya']
users['map']((el) => el.toUpperCase()) // это тоже самое только через []
users.map((e) => e.toUpperCase())

const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
userObj['0']
userObj['привет как дела'] = 'хорошеёёё' // мы добавим такое в свойства объека, и сможем только через [''] обратиться

const user2 = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
Object.keys(user2) // метод keys класса Object вернет! нам массив [из ключей]
Object.values(user2) // метод keys класса Object вернет! нам массив [из значений]

userObj[null] = 'хорошеёёё' // null превратится в строку и станет свойством
users[ {} ] = 'hello' // [object Object]: 'hello'  JS превратит в массив
users[ {name: 'tanya'} ] // [object Object]: 'tanya'

users[ {name: 'tanya', toString(){return 'blabla'}} ] = 'value of blabla' // blabla: 'value of blabla'