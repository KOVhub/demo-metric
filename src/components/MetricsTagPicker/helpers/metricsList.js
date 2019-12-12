export default class metricsList {
  
  _metricsList = [
    {
      groupName: 'Визиты. Базовые метрики',
      label: 'Визиты',
      value: 'ym:s:visits'
    },
    {
      groupName: 'Визиты. Базовые метрики',
      label: 'Просмотры',
      value: 'ym:s:pageviews'
    },
    {
      groupName: 'Визиты. Базовые метрики',
      label: 'Посетители',
      value: 'ym:s:users'
    },
    {
      groupName: 'Визиты. Поведение',
      label: 'Отказы',
      value: 'ym:s:bounceRate'
    },
    {
      groupName: 'Визиты. Поведение',
      label: 'Глубина просмотра',
      value: 'ym:s:pageDepth'
    },
    {
      groupName: 'Визиты. Поведение',
      label: 'Время на сайте',
      value: 'ym:s:avgVisitDurationSeconds'
    },
    {
      groupName: 'Визиты. Поведение',
      label: 'Визитов в день',
      value: 'ym:s:visitsPerDay'
    },
    {
      groupName: 'Визиты. Поведение',
      label: 'Визитов в час',
      value: 'ym:s:visitsPerHour'
    },
    {
      groupName: 'Визиты. Поведение',
      label: 'Визитов в минуту',
      value: 'ym:s:visitsPerMinute'
    },
    {
      groupName: 'Визиты. Поведение',
      label: 'Роботность',
      value: 'ym:s:robotPercentage'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии',
      label: 'Конверсия',
      value: 'ym:s:goal<goal_id>conversionRate'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии',
      label: 'Конверсия посетителей',
      value: 'ym:s:goal<goal_id>userConversionRate'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии',
      label: 'Целевые посетители',
      value: 'ym:s:goal<goal_id>users'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии',
      label: 'Целевые визиты',
      value: 'ym:s:goal<goal_id>visits'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии',
      label: 'Достижения цели',
      value: 'ym:s:goal<goal_id>reaches'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии',
      label: 'Достижения на посетителя',
      value: 'ym:s:goal<goal_id>reachesPerUser'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии',
      label: 'Доход',
      value: 'ym:s:goal<goal_id>revenue'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии',
      label: 'Доход в валюте',
      value: 'ym:s:goal<goal_id><currency>revenue'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии - любые цели',
      label: 'Конверсия по любой цели',
      value: 'ym:s:anyGoalConversionRate'
    },
    {
      groupName: 'Визиты. Поведение. Конверсии - любые цели',
      label: 'Достижения любой цели',
      value: 'ym:s:sumGoalReachesAny'
    },
    {
      groupName: 'Визиты. Параметры визитов',
      label: 'Количество параметров визитов',
      value: 'ym:s:paramsNumber'
    },
    {
      groupName: 'Визиты. Параметры визитов',
      label: 'Сумма параметров визитов',
      value: 'ym:s:sumParams',
    },
    {
      groupName: 'Визиты. Параметры визитов',
      label: 'Среднее параметров визитов',
      value: 'ym:s:avgParams'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Доля новых посетителей',
      value: 'ym:s:percentNewVisitors'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Новые посетители',
      value: 'ym:s:newUsers'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Доля визитов новых посетителей',
      value: 'ym:s:newUserVisitsPercentage'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Новизна менее одного дня',
      value: 'ym:s:upToDaySinceFirstVisitPercentage'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Новизна 1‑7 дней',
      value: 'ym:s:upToWeekSinceFirstVisitPercentage'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Новизна 8‑31 день',
      value: 'ym:s:upToMonthSinceFirstVisitPercentage'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Новизна 32‑90 дней',
      value: 'ym:s:upToQuarterSinceFirstVisitPercentage'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Новизна 91‑365 дней',
      value: 'ym:s:upToYearSinceFirstVisitPercentage'
    },
    {
      groupName: 'Визиты. История. Новизна',
      label: 'Новизна более 365 дней',
      value: 'ym:s:overYearSinceFirstVisitPercentage'
    },
    {
      groupName: 'Визиты. История. Визитов в истории',
      label: '1 визит посетителя',
      value: 'ym:s:oneVisitPerUserPercentage'
    },
    {
      groupName: 'Визиты. История. Визитов в истории',
      label: '2‑3 визита посетителя',
      value: 'ym:s:upTo3VisitsPerUserPercentage'
    },
    {
      groupName: 'Визиты. История. Визитов в истории',
      label: '4‑7 визитов посетителя',
      value: 'ym:s:upTo7VisitsPerUserPercentage'
    },
    {
      groupName: 'Визиты. История. Визитов в истории',
      label: '8‑31 визит посетителя',
      value: 'ym:s:upTo31VisitsPerUserPercentage'
    },
    {
      groupName: 'Визиты. История. Визитов в истории',
      label: 'Более чем 32 визита посетителя',
      value: 'ym:s:over32VisitsPerUserPercentage'
    },
    {
      groupName: 'Визиты. История. Периодичность',
      label: 'Периодичность 1 день',
      value: 'ym:s:oneDayBetweenVisitsPercentage'
    },
    {
      groupName: 'Визиты. История. Периодичность',
      label: 'Периодичность 2‑7 дней',
      value: 'ym:s:upToWeekBetweenVisitsPercentage'
    },
    {
      groupName: 'Визиты. История. Периодичность',
      label: 'Периодичность 8‑31 день',
      value: 'ym:s:upToMonthBetweenVisitsPercentage'
    },
    {
      groupName: 'Визиты. История. Периодичность',
      label: 'Периодичность более чем 31 день',
      value: 'ym:s:overMonthBetweenVisitsPercentage'
    },
    {
      groupName: 'Визиты. История. Время возврата',
      label: 'Вернувшиеся: 1 день',
      value: 'ym:s:upToDayUserRecencyPercentage'
    },
    {
      groupName: 'Визиты. История. Время возврата',
      label: 'Вернувшиеся: 2‑7 дней',
      value: 'ym:s:upToWeekUserRecencyPercentage'
    },
    {
      groupName: 'Визиты. История. Время возврата',
      label: 'Вернувшиеся: 8‑31 день',
      value: 'ym:s:upToMonthUserRecencyPercentage'
    },
    {
      groupName: 'Визиты. История. Время возврата',
      label: 'Вернувшиеся: 32‑90 дней',
      value: 'ym:s:upToQuarterUserRecencyPercentage'
    },
    {
      groupName: 'Визиты. История. Время возврата',
      label: 'Вернувшиеся: 91‑365 дней',
      value: 'ym:s:upToYearUserRecencyPercentage'
    },
    {
      groupName: 'Визиты. История. Время возврата',
      label: 'Вернувшиеся: более чем 365 дней',
      value: 'ym:s:overYearUserRecencyPercentage'
    },
    {
      groupName: 'Визиты. История. Лояльность',
      label: 'Дней между визитами',
      value: 'ym:s:avgDaysBetweenVisits'
    },
    {
      groupName: 'Визиты. История. Лояльность',
      label: 'Дней от первого визита',
      value: 'ym:s:avgDaysSinceFirstVisit'
    },
    {
      groupName: 'Визиты. История. Лояльность',
      label: 'Дней от предыдущего визита',
      value: 'ym:s:userRecencyDays'
    },
    {
      groupName: 'Визиты. Аудитория. Пол',
      label: 'Доля мужчин',
      value: 'ym:s:manPercentage'
    },
    {
      groupName: 'Визиты. Аудитория. Пол',
      label: 'Доля женщин',
      value: 'ym:s:womanPercentage'
    },
    {
      groupName: 'Визиты. Аудитория. Возраст',
      label: 'Менее 18 лет',
      value: 'ym:s:under18AgePercentage'
    },
    {
      groupName: 'Визиты. Аудитория. Возраст',
      label: '18‑24 лет',
      value: 'ym:s:upTo24AgePercentage'
    },
    {
      groupName: 'Визиты. Аудитория. Возраст',
      label: '25‑34 лет',
      value: 'ym:s:upTo34AgePercentage'
    },
    {
      groupName: 'Визиты. Аудитория. Возраст',
      label: '35‑45 лет',
      value: 'ym:s:upTo44AgePercentage'
    },
    {
      groupName: 'Визиты. Аудитория. Возраст',
      label: 'Более 45 лет',
      value: 'ym:s:over44AgePercentage'
    },
    {
      groupName: 'Визиты. Технологии',
      label: 'Поддержка сookies',
      value: 'ym:s:cookieEnabledPercentage'
    },
    {
      groupName: 'Визиты. Технологии',
      label: 'Поддержка Java',
      value: 'ym:s:javaEnabledPercentage'
    },
    {
      groupName: 'Визиты. Технологии',
      label: 'Поддержка JavaScript',
      value: 'ym:s:jsEnabledPercentage'
    },
    {
      groupName: 'Визиты. Технологии',
      label: 'Поддержка Flash',
      value: 'ym:s:flashEnabledPercentage'
    },
    {
      groupName: 'Визиты. Технологии',
      label: 'Поддержка Silverlight',
      value: 'ym:s:silverlightEnabledPercentage'
    },
    {
      groupName: 'Визиты. Технологии',
      label: 'Мобильность',
      value: 'ym:s:mobilePercentage'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Просмотры товаров',
      value: 'ym:s:productImpressions'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Посетители, просмотревшие товар',
      value: 'ym:s:productImpressionsUniq'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Товаров добавлено в корзину',
      value: 'ym:s:productBasketsQuantity'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Стоимость добавленных в корзину товаров',
      value: 'ym:s:productBasketsPrice'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Количество посетителей, добавивших товар в корзину',
      value: 'ym:s:productBasketsUniq'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Товаров куплено',
      value: 'ym:s:productPurchasedQuantity'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Стоимость купленных товаров',
      value: 'ym:s:productPurchasedPrice'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Количество посетителей, купивших товар',
      value: 'ym:s:productPurchasedUniq'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Количество покупок',
      value: 'ym:s:ecommercePurchases'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Доход',
      value: 'ym:s:ecommerceRevenue'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Средний доход визита',
      value: 'ym:s:ecommerceRevenuePerVisit'
    },
    {
      groupName: 'Визиты. Электронная коммерция',
      label: 'Средний доход покупки',
      value: 'ym:s:ecommerceRevenuePerPurchase'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Количество звонков',
      value: 'ym:s:offlineCalls'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Количество пропущенных звонков',
      value: 'ym:s:offlineCallsMissed'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Доля пропущенных звонков',
      value: 'ym:s:offlineCallsMissedPercentage'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Количество первичных звонков',
      value: 'ym:s:offlineCallsFirstTimeCaller'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Доля первичных звонков',
      value: 'ym:s:offlineCallsFirstTimeCallerPercentage'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Количество звонков с уникальных номеров',
      value: 'ym:s:offlineCallsUniq'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Среднее время разговора',
      value: 'ym:s:offlineCallTalkDurationAvg'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Среднее время ожидания до ответа',
      value: 'ym:s:offlineCallHoldDurationTillAnswerAvg'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Среднее время ожидания до отказа',
      value: 'ym:s:offlineCallHoldDurationTillMissAvg'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Среднее время звонка',
      value: 'ym:s:offlineCallDurationAvg'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Средняя цена звонка',
      value: 'ym:s:offlineCallRevenueAvg'
    },
    {
      groupName: 'Визиты. Звонки',
      label: 'Суммарная цена звонка',
      value: 'ym:s:offlineCallRevenue'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Запросы',
      value: 'ym:s:yanRequests'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Отрисовки',
      value: 'ym:s:yanRenders'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Показы',
      value: 'ym:s:yanShows'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Расчетный доход',
      value: 'ym:s:yanPartnerPrice'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'CPMV',
      value: 'ym:s:yanCPMV',
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'eCPM',
      value: 'ym:s:yanECPM'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'RPM',
      value: 'ym:s:yanRPM'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Процент видимости',
      value: 'ym:s:yanVisibility'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'ARPU',
      value: 'ym:s:yanARPU'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Отрисовки на посетителя',
      value: 'ym:s:yanRendersPerUser'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Расчетный доход визита',
      value: 'ym:s:yanRevenuePerVisit'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Расчетный доход просмотра',
      value: 'ym:s:yanRevenuePerHit'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Отрисовки на визит',
      value: 'ym:s:yanRendersPerVisit'
    },
    {
      groupName: 'Визиты. Монетизация РСЯ',
      label: 'Отрисовки на просмотр',
      value: 'ym:s:yanRendersPerHit'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Запросы кода Adfox',
      value: 'ym:s:adfoxRequests'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Отрисовки Adfox',
      value: 'ym:s:adfoxRenders'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Загрузки по умолчанию',
      value: 'ym:s:adfoxRendersDefault'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Показы Adfox',
      value: 'ym:s:adfoxShows'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Клики Adfox',
      value: 'ym:s:adfoxClicks'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Процент видимости Adfox',
      value: 'ym:s:adfoxVisibility'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Отрисовки на посетителя Adfox',
      value: 'ym:s:adfoxRendersPerUser'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Отрисовки на визит Adfox',
      value: 'ym:s:adfoxRendersPerVisit'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Отрисовки на просмотр Adfox',
      value: 'ym:s:adfoxRendersPerHit'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Суммарный доход Adfox',
      value: 'ym:s:adfoxPrice'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'CPMV Adfox',
      value: 'ym:s:adfoxCPMV'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'eCPM Adfox',
      value: 'ym:s:adfoxECPM'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'RPM Adfox',
      value: 'ym:s:adfoxRPM'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'ARPU Adfox',
      value: 'ym:s:adfoxARPU'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Расчетный доход на посетителя Adfox',
      value: 'ym:s:adfoxPricePerUser'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Расчетный доход визита Adfox',
      value: 'ym:s:adfoxPricePerVisit'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Расчетный доход просмотра Adfox',
      value: 'ym:s:adfoxPricePerHit'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Расчетный доход, Прямые продажи',
      value: 'ym:s:adfoxPriceStrict'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Расчетный доход, РСЯ',
      value: 'ym:s:adfoxPriceYan'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Расчетный доход, Google',
      value: 'ym:s:adfoxPriceGoogle'
    },
    {
      groupName: 'Визиты. Монетизация Adfox',
      label: 'Расчетный доход, Header bidding',
      value: 'ym:s:adfoxPriceHeaderBidding'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Общее время чтения',
      value: 'ym:s:sumPublisherArticleInvolvedTimeSeconds'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Время на материал',
      value: 'ym:s:avgPublisherArticleInvolvedTimeSeconds'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Просмотры материалов',
      value: 'ym:s:publisherviews'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Просмотры материалов в день',
      value: 'ym:s:publisherviewsPerDay'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Просмотры материалов в час',
      value: 'ym:s:publisherviewsPerHour'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Просмотры материалов в минуту',
      value: 'ym:s:publisherviewsPerMinute'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Посетители материалов',
      value: 'ym:s:publisherusers'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Рециркуляция, посетители',
      value: 'ym:s:publisherArticleUsersRecircled'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Рециркуляция',
      value: 'ym:s:publisherArticleRecirculation'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Просмотры материалов с доскроллом',
      value: 'ym:s:publisherViewsFullScroll'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Доля просмотров материалов с доскроллом',
      value: 'ym:s:publisherArticleViewsFullScrollShare'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Дочтения материалов',
      value: 'ym:s:publisherViewsFullRead'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Доля дочтений материалов',
      value: 'ym:s:publisherArticleFullReadShare'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Мобильные просмотры материалов',
      value: 'ym:s:publisherMobileOrTabletViews'
    },
    {
      groupName: 'Визиты. Контентная аналитика',
      label: 'Доля мобильных просмотров материалов',
      value: 'ym:s:publisherMobileOrTabletViewsShare'
    },
    {
      groupName: 'Визиты. Прочее',
      label: 'Аффинити‑индекс (старая версия)',
      value: 'ym:s:affinityIndexInterests'
    },
    {
      groupName: 'Визиты. Прочее',
      label: 'Аффинити‑индекс',
      value: 'ym:s:affinityIndexInterests2'
    },
    {
      groupName: 'Визиты. Прочее',
      label: 'Доля GCLID',
      value: 'ym:s:GCLIDPercentage'
    },
    {
      groupName: 'Просмотры. Базовые метрики',
      label: 'Просмотры',
      value: 'ym:pv:pageviews'
    },
    {
      groupName: 'Просмотры. Базовые метрики',
      label: 'Посетители',
      value: 'ym:pv:users'
    },
    {
      groupName: 'Просмотры. Поведение',
      label: 'Просмотров в день',
      value: 'ym:pv:pageviewsPerDay'
    },
    {
      groupName: 'Просмотры. Поведение',
      label: 'Просмотров в час',
      value: 'ym:pv:pageviewsPerHour'
    },
    {
      groupName: 'Просмотры. Поведение',
      label: 'Просмотров в минуту',
      value: 'ym:pv:pageviewsPerMinute'
    },
    {
      groupName: 'Просмотры. Технологии',
      label: 'Поддержка сookies',
      value: 'ym:pv:cookieEnabledPercentage'
    },
    {
      groupName: 'Просмотры. Технологии',
      label: 'Поддержка Java',
      value: 'ym:pv:javaEnabledPercentage'
    },
    {
      groupName: 'Просмотры. Технологии',
      label: 'Поддержка JavaScript',
      value: 'ym:pv:jsEnabledPercentage'
    },
    {
      groupName: 'Просмотры. Технологии',
      label: 'Поддержка Flash',
      value: 'ym:pv:flashEnabledPercentage'
    },
    {
      groupName: 'Просмотры. Технологии',
      label: 'Поддержка Silverlight',
      value: 'ym:pv:silverlightEnabledPercentage'
    },
    {
      groupName: 'Просмотры. Технологии',
      label: 'Мобильность',
      value: 'ym:pv:mobilePercentage'
    },
    {
      groupName: 'Клики. Базовые метрики',
      label: 'Визиты',
      value: 'ym:ad:visits'
    },
    {
      groupName: 'Клики. Базовые метрики',
      label: 'Клики',
      value: 'ym:ad:clicks'
    },
    {
      groupName: 'Клики. Базовые метрики',
      label: 'Стоимость кликов',
      value: 'ym:ad:<currency>AdCost'
    },
    {
      groupName: 'Клики. Базовые метрики',
      label: 'Средняя стоимость визита',
      value: 'ym:ad:<currency>AdCostPerVisit'
    },
    {
      groupName: 'Клики. Базовые метрики',
      label: 'Средняя стоимость достижения цели',
      value: 'ym:ad:goal<goal_id><currency>CPA'
    },
    {
      groupName: 'Клики. Базовые метрики',
      label: 'Средняя стоимость целевого визита',
      value: 'ym:ad:goal<goal_id><currency>AdCostPerVisit'
    },
    {
      groupName: 'Параметры посетителей',
      label: 'Параметры',
      value: 'ym:up:params'
    },
    {
      groupName: 'Параметры посетителей',
      label: 'Посетители',
      value: 'ym:up:users'
    }
  ];

  getAllMetrics = () => {
    return this._metricsList;
  };
}