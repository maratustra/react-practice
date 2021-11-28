'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';


const command =
	employers.reduce((commands, item) => {
		item = item.toLowerCase().trim();

		if (item.length > 0) {
			item = item[0].toUpperCase() + item.slice(1);
			commands.push(' ' + item);
		}

		return commands;
	}, []);


const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};


const calcCash = own => own.reduce((total, cash) => total += cash, 0);

const lesson = calcCash(data.cash);


const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';

	const sumTech = ([...data.react, ...data.add].join(', ') + ' и другие');

	console.log(`Стартует новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
	Команда Академии: ${gang}`);
	console.log(`Первое, что изучим, будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии, которые мы изучим: `);
	console.log(`${sumTech}`);
};

makeBusiness('Артем', null, lesson, command, nameCourse);
