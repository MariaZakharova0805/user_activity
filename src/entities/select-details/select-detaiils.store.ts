import { create } from "zustand";
import { selectListItem } from "./select-details.model";

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
        { id: 'non', name: 'Нет', value: 'non' },
        { id: 'quarter', name: 'Квартал', value: 'quarter' },
        { id: 'month', name: 'Месяц', value: 'month' },
        { id: 'week', name: 'Неделя', value: 'week' },
        { id: 'day', name: 'День', value: 'day' }
    ],
    headerEvents: 'События',
    listEvents: [
        { id: 'allevents', name: 'Все', value: 'allevents' },
        { id: 'common', name: 'Общий функционал', value: 'common' },
        { id: 'alcohol', name: 'Алкоголь', value: 'alcohol' },
        { id: 'mutualSettlements', name: 'Взаиморасчеты', value: 'mutualSettlements' },
        { id: 'cashier', name: 'Касса', value: 'cashier' },
        { id: 'kits', name: 'Комплекты', value: 'kits' },
        { id: 'marking', name: 'Маркировка', value: 'marking' },
        { id: 'mlk', name: 'МЛК', value: 'mlk' },
        { id: 'techMaps', name: 'Техкарты', value: 'techMaps' },
        { id: 'jeweler', name: 'Ювелирка', value: 'jeweler' },
    ],
    headerParametrs: 'Параметр',
    listParametrs: [
        { id: 'allparametrs', name: 'Все', value: 'allparametrs' },
        { id: 'app', name: 'Приложение', value: 'app' },
        { id: 'rate', name: 'Тариф', value: 'rate' },
        { id: 'addon', name: 'Аддон', value: 'addon' },
        { id: 'user', name: 'Пользователь', value: 'user' },
        { id: 'daysAI', name: 'Дней после установки', value: 'daysAI' },
        { id: 'weeksAI', name: 'Недель после установки', value: 'weeksAI' },
        { id: 'monthsAI', name: 'Месяцев после установки', value: 'monthsAI' },
    ],
    headerIndicators: 'Показатели',
    listIndicators: [
        { id: 'allIndicators', name: 'Всего событий', value: 'allIndicators' },
        { id: 'allUsers', name: 'Всего пользователей', value: 'allUsers' },
        { id: 'activeUsers', name: 'Активные пользователи', value: 'activeUsers' },
        { id: 'newUsers', name: 'Новые пользователи', value: 'newUsers' },
        { id: 'eventPerUser', name: 'Событий на пользователя', value: 'eventPerUser' },
        { id: 'aUsersPerDM', name: 'Активные пользователи за день/месяц', value: 'aUsersPerDM' },
        { id: 'aUsersPerDW', name: 'Активные пользователи за день/неделю', value: 'aUsersPerDW' },
        { id: 'aUsersPerWM', name: 'Активные пользователи за неделя/месяц', value: 'aUsersPerWM' },
    ]
}));


