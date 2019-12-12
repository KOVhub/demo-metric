import * as dateFns from 'date-fns';

const _rangesConfig = [
  {
    label: 'Прошлый месяц',
    value: [
      dateFns.subMonths(dateFns.startOfMonth(new Date()), 1),
      dateFns.subMonths(dateFns.endOfMonth(new Date()), 1)
    ]
  },
  {
    label: 'Текущий месяц',
    value: [dateFns.startOfMonth(new Date()), new Date()]
  },
  {
    label: 'Прошлая неделя',
    value: [
      dateFns.subWeeks(
        dateFns.startOfWeek(new Date(), { weekStartsOn: 1 }),
        1
      ),
      dateFns.subDays(
        dateFns.startOfWeek(new Date(), { weekStartsOn: 1 }),
        1
      )
    ]
  },
  {
    label: 'Последние 7 дней',
    value: [dateFns.subDays(new Date(), 6), new Date()]
  }
];
export default _rangesConfig;