//array users and list_messages

let users = [
    {
        "id": 1,
        "name": "Andriy",
        "photo": "images/user02.png",
        "message": "Привіт! З перемогою!",
        "contacts": {
            "email": "andrey@i.ua",
            "phone": "0672356845"
        }
    },
    {
        "id": 2,
        "name": "Irishka",
        "photo": "images/user03.png",
        "message": "Привіт! НАВЗАЄМ!",
        "contacts": {
            "email": "irishka@i.ua",
            "phone": "06723568745"
        }
    },
    {
        "id": 3,
        "name": "Leo",
        "photo": "images/user02.png",
        "message": "Приєднуюсь!",
        "contacts": {
            "email": "leo@i.ua",
            "phone": "06723578456"
        }
    },
    {
        "id": 4,
        "name": "Oleg",
        "photo": "images/user02.png",
        "message": "Будьмо щасливі і успішні!)",
        "contacts": {
            "email": "oleg@i.ua",
            "phone": "06825478515"
        }
    },
    {
        "id": 5,
        "name": "Kate",
        "photo": "images/user03.png",
        "message": "Нехай всі наші мрії збуваються!",
        "contacts": {
            "email": "kate@i.ua",
            "phone": "0672465445"
        }
    },
    {
        "id": 6,
        "name": "Kiti",
        "photo": "images/user03.png",
        "message": "Бажаю реалізувати всі заплановані проекти в нашій країні!",
        "contacts": {
            "email": "kiti@i.ua",
            "phone": "0672356845"
        }
    },
    {
        "id": 7,
        "name": "Inna",
        "photo": "images/user03.png",
        "message": "Щастя і миру!",
        "contacts": {
            "email": "inna@i.ua",
            "phone": "0672356845"
        }
    }

];

// масив повідомлень користувачів у блоці list-messange
list_messages = [
    {
        "id": 1,
        "user_id_from": users[0]["id"],
        "user_id_to": users[1]["id"], //id користувача, якому відправлено плвідомлення
        "message": users[0]["message"],
        "time": "21:00"
    },
    {
        "id": 2,
        "user_id_from": users[1]["id"],
        "user_id_to": users[0]["id"], //id користувача, якому відправлено повідомлення
        "message": users[1]["message"],
        "time": "21:00"
    },
    {
        "id": 3,
        "user_id_from": users[0]["id"],
        "user_id_to": users[1]["id"], //id користувача, якому відправлено плвідомлення
        "message": "Як святкуватимеш?",
        "time": "21:00"
    },
    {
        "id": 4,
        "user_id_from": users[1]["id"],
        "user_id_to": users[0]["id"], //id користувача, якому відправлено плвідомлення
        "message": "Дома із сімєю)",
        "time": "21:00"
    },
    {
        "id": 5,
        "user_id_from": users[1]["id"],
        "user_id_to": users[0]["id"], //id користувача, якому відправлено плвідомлення
        "message": "А ти як із ким?",
        "time": "21:00"
    },
    {
        "id": 6,
        "user_id_from": users[0]["id"],
        "user_id_to": users[1]["id"], //id користувача, якому відправлено плвідомлення
        "message": "Я теж дома, адже треба, і святкувати, і працювати))",
        "time": "21:00"
    },
    {
        "id": 7,
        "user_id_from": users[1]["id"], // від користувача, наприклад який авторизується
        "user_id_to": users[0]["id"], //id користувача, якому відправлено повідомлення
        "message": "Гарних вихідних! Не перетруджуйся!)",
        "time": "21:00"
    },
    {
        "id": 8,
        "user_id_from": users[2]["id"],
        "user_id_to": users[3]["id"], //id користувача, якому відправлено плвідомлення
        "message": "Я теж дома, адже треба, і святкувати, і працювати))",
        "time": "21:00"
    },
    {
        "id": 9,
        "user_id_from": users[3]["id"],
        "user_id_to": users[2]["id"], //id користувача, якому відправлено плвідомлення
        "message": "Гарних вихідних! Не перетруджуйся!)",
        "time": "21:00"
    }
];
