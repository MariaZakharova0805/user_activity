import { create } from "zustand";
import { selectListItem } from "./select.model";

type ReportProps = {
    headerDetails: string,
    listDetails: selectListItem[],
    headerEvents: string,
    listEvents: selectListItem[],
    headerParametrs: string,
    listParametrs: selectListItem[],
    headerIndicators: string,
    listIndicators: selectListItem[],
}

export const useSelectStore = create<ReportProps>(() => ({
    headerDetails: 'Детализация отчета',
    listDetails: [
        { id: 'nonD', name: 'Нет', value: 'nonD', disabled: false },
        { id: 'quarterD', name: 'Квартал', value: 'quarterD', disabled: true },
        { id: 'monthD', name: 'Месяц', value: 'monthD', disabled: false },
        { id: 'weekD', name: 'Неделя', value: 'weekD', disabled: false },
        { id: 'dayD', name: 'День', value: 'dayD', disabled: true }
    ],
    headerEvents: 'События',
    listEvents: [
        { id: 'allE', name: 'Все', value: 'allE', disabled: false },
        { id: 'commonE', name: 'Общий функционал', value: 'commonE', disabled: false },
        { id: 'alcoholE', name: 'Алкоголь', value: 'alcoholE', disabled: false },
        { id: 'mutualSettlementsE', name: 'Взаиморасчеты', value: 'mutualSettlementsE', disabled: false },
        { id: 'cashierE', name: 'Касса', value: 'cashierE', disabled: false },
        { id: 'kitsE', name: 'Комплекты', value: 'kitsE', disabled: false },
        { id: 'markingE', name: 'Маркировка', value: 'markingE', disabled: false },
        { id: 'mlkE', name: 'МЛК', value: 'mlk', disabled: false },
        { id: 'techMapsE', name: 'Техкарты', value: 'techMapsE', disabled: false },
        { id: 'jewelerE', name: 'Ювелирка', value: 'jewelerE', disabled: false },
    ],
    headerParametrs: 'Параметр',
    listParametrs: [
        { id: 'nonP', name: 'Нет', value: 'nonP', disabled: false },
        { id: 'appP', name: 'Приложение', value: 'appP', disabled: true },
        { id: 'rateP', name: 'Тариф', value: 'rateP', disabled: false },
        { id: 'addonP', name: 'Аддон', value: 'addonP', disabled: true },
        { id: 'userP', name: 'Пользователь', value: 'userP', disabled: false },
        { id: 'daysAIP', name: 'Дней после установки', value: 'daysAIP', disabled: true },
        { id: 'weeksAIP', name: 'Недель после установки', value: 'weeksAIP', disabled: true },
        { id: 'monthsAIP', name: 'Месяцев после установки', value: 'monthsAIP', disabled: true },
    ],
    headerIndicators: 'Показатели',
    listIndicators: [
        { id: 'allI', name: 'Всего событий', value: 'allI', disabled: false },
        { id: 'allUsersI', name: 'Всего пользователей', value: 'allUsersI', disabled: false },
        { id: 'activeUsersI', name: 'Активные пользователи', value: 'activeUsersI', disabled: true },
        { id: 'newUsersI', name: 'Новые пользователи', value: 'newUsersI', disabled: true },
        { id: 'eventPerUserI', name: 'Событий на пользователя', value: 'eventPerUserI', disabled: true },
        { id: 'aUsersPerDMI', name: 'Активные пользователи за день/месяц', value: 'aUsersPerDMI', disabled: true },
        { id: 'aUsersPerDWI', name: 'Активные пользователи за день/неделю', value: 'aUsersPerDWI', disabled: true },
        { id: 'aUsersPerWMI', name: 'Активные пользователи за неделя/месяц', value: 'aUsersPerWMI', disabled: true },
    ]
}));


