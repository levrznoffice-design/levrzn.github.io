/* ============================================================
   LEV'S SCENT — script.js
   Персональный парфюмерный дашборд
   ============================================================ */

/* ===== DATA ===== */

const FRAGRANCES = [
  {
    id: 'qahwa',
    name: 'Khamrah Qahwa',
    house: 'Lattafa',
    family: 'Кофе · Сладкий · Алкогольный',
    image: 'levs-scent/bottles/qahwa.png',
    vibe: 'levs-scent/vibes/qahwa-vibe.png',
    accent: '#c68642',
    gradient: 'linear-gradient(135deg, #4b2c20 0%, #8B5A3C 55%, #c68642 100%)',
    total: 6,
    refreshHours: 7,
    overspray: true,
    maxCapped: false,
    notes: {
      top: ['Кардамон', 'Корица', 'Мускатный орех'],
      heart: ['Финики', 'Пралине', 'Майский цветок'],
      base: ['Ваниль', 'Тонка', 'Бензоин', 'Мирра']
    },
    seasons: { winter: 'day+night', autumn: 'day+night', spring: 'night', summer: 'night-only' },
    vibeCaption: 'Арабский кофе, финики, кардамон. Уют как в холодное утро.',
    variations: [
      {
        label: 'Классика (6 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок под волосы', detail: 'Генератор шлейфа' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи одежды', detail: 'Левое и правое — держится весь день' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'Личное облако' }
        ]
      },
      {
        label: 'Шлейф-вариант (6 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок', detail: 'Максимум шлейфа' },
          { spot: 'spot-hair.png', n: 1, title: 'Волосы', detail: 'Парфюм держится на волосах дольше всего' },
          { spot: 'spot-shoulder-blades.png', n: 2, title: 'Лопатки на одежду', detail: 'Сзади, чтобы не бить в нос спереди' }
        ]
      },
      {
        label: 'Интимный (4 пшика)',
        points: [
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'Для близкого контакта' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя', detail: 'Игра аромата при движении' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Не тереть' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 4,
        note: 'В школе не перебарщивай — сидишь в помещении 6 часов.',
        points: [
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'На кожу, футболка сверху — аромат греется телом' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань куртки/худи — держится до вечера' }
        ]
      },
      gym: { total: 0, forbidden: true, message: 'Лёва, ПОЩАДИ людей в зале. Надень Fakhar или Fursan.' },
      date: {
        total: 5,
        note: 'Она должна хотеть подойти ближе.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок под волосы', detail: 'Генератор шлейфа — на кожу' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'Открытая кожа — при приближении она почувствует' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Одно плечо на одежду', detail: 'На ткань — фоновый шлейф сбоку' }
        ]
      },
      walk: {
        total: 6,
        note: 'Полная доза. Холодный Ольтен съест половину.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок под волосы', detail: 'На кожу — генератор шлейфа' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань куртки — левое и правое' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'На кожу, под застёгнутую куртку — личное облако' }
        ]
      },
      home: {
        total: 3,
        note: 'Кайф-режим. Для себя.',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'Поднесёшь к носу — кайф. Не тереть' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под футболку', detail: 'На кожу — тепло тела раскрывает ноты' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Плечо на одежду', detail: 'На ткань домашней кофты — фоновый аромат' }
        ]
      }
    },
    masterWarning: null,
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'caution', night: 'full' },
      summer: { day: 'forbidden', night: 'caution' },
      autumn: { day: 'full', night: 'full' }
    }
  },
  {
    id: 'brun',
    name: 'Liquid Brun',
    house: 'Fragrance World',
    family: 'Сладкий · Пряный · Ванильный',
    image: 'levs-scent/bottles/brun.png',
    vibe: 'levs-scent/vibes/brun-vibe.png',
    accent: '#c69362',
    gradient: 'linear-gradient(135deg, #5a3825 0%, #8B6B4A 55%, #c69362 100%)',
    total: 7,
    refreshHours: 7,
    overspray: true,
    maxCapped: false,
    notes: {
      top: ['Корица', 'Яблоко', 'Гвоздика'],
      heart: ['Ваниль', 'Пралине'],
      base: ['Тонка', 'Мускус', 'Бензоин']
    },
    seasons: { winter: 'day+night', autumn: 'day+night', spring: 'night', summer: 'forbidden' },
    vibeCaption: 'Корица, ваниль, тёплые специи. Магнит комплиментов.',
    variations: [
      {
        label: 'Классика (7 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок', detail: 'Генератор шлейфа' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'Тепло тела раскроет аромат' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи одежды', detail: 'Держится весь день на ткани' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя', detail: 'Движение руки усиливает шлейф' }
        ]
      },
      {
        label: 'Максимум шлейфа (7 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок', detail: 'Максимальная проекция' },
          { spot: 'spot-hair.png', n: 1, title: 'Волосы', detail: 'Держится дольше всего' },
          { spot: 'spot-neck-back.png', n: 1, title: 'Шея сзади', detail: 'Дополнительный шлейф' },
          { spot: 'spot-shoulder-blades.png', n: 2, title: 'Лопатки на одежду', detail: 'Сзади — для тех, кто идёт за тобой' }
        ]
      },
      {
        label: 'Свидание (5 пшиков)',
        points: [
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'Интимная зона' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя', detail: 'При объятии раскроется' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястья', detail: 'Не тереть друг о друга' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь', detail: 'Личное облако тепла' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 5,
        note: 'В классе хватит с головой.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Под волосы — шлейф для тех, кто сзади' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'На кожу, под футболку — тепло тела раскрывает ваниль' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Одно плечо на одежду', detail: 'На ткань куртки — хватит одного' }
        ]
      },
      gym: { total: 0, forbidden: true, message: 'Лёва, ПОЩАДИ людей в зале. Надень Fakhar или Fursan.' },
      date: {
        total: 6,
        note: 'Ваниль — твоё оружие.',
        points: [
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на открытую кожу', detail: 'Если ворот открыт — прямой удар на близкой дистанции' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя на кожу', detail: 'При объятии раскроется корица' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'Не тереть друг о друга' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'На кожу — личное облако тепла' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Плечо на одежду', detail: 'На ткань — фоновая стабильность' }
        ]
      },
      walk: {
        total: 7,
        note: 'Полная доза. Корица на морозе звучит божественно.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Под волосы — генератор шлейфа' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'На кожу, под куртку — тепло тела = ванильный кокон' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань куртки — левое и правое' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя на кожу', detail: 'Движение руки усиливает шлейф' }
        ]
      },
      home: {
        total: 3,
        note: 'Кайф-режим для себя.',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'Подносишь к носу — наслаждаешься' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под футболку', detail: 'На кожу — ваниль поднимается от тепла' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Плечо на одежду', detail: 'На ткань домашней кофты — фоновый кайф' }
        ]
      }
    },
    masterWarning: null,
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'caution', night: 'full' },
      summer: { day: 'forbidden', night: 'forbidden' },
      autumn: { day: 'full', night: 'full' }
    }
  },
  {
    id: 'fakhar',
    name: 'Fakhar Black',
    house: 'Lattafa',
    family: 'Свежий · Древесный · Амбровый',
    image: 'levs-scent/bottles/fakhar.png',
    vibe: 'levs-scent/vibes/fakhar-vibe.png',
    accent: '#6A6FB5',
    gradient: 'linear-gradient(135deg, #2d2f5e 0%, #4a4d8a 55%, #6A6FB5 100%)',
    total: 9,
    refreshHours: 4,
    overspray: false,
    maxCapped: false,
    notes: {
      top: ['Бергамот', 'Яблоко'],
      heart: ['Герань', 'Шалфей'],
      base: ['Амбровуд', 'Ветивер']
    },
    seasons: { winter: 'day', autumn: 'day+night', spring: 'day+night', summer: 'day+night' },
    vibeCaption: 'Свежий, чистый, YSL Y стиль. Им можно поливаться.',
    variations: [
      {
        label: 'Классика (9 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок + шея', detail: 'Основной генератор свежести' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи одежды', detail: 'Стабильная проекция' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь', detail: 'Облако при расстёгнутой куртке' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья', detail: 'Свежесть при жестикуляции' }
        ]
      },
      {
        label: 'Зал (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок', detail: 'Минимум, но достаточно' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястья', detail: 'Лёгкий акцент' }
        ]
      },
      {
        label: 'Утро в школу (7 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок', detail: 'Основа' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи одежды', detail: 'Для коридоров' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'Личный кайф' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Финальный штрих' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 9,
        note: 'Fakhar безопасен — поливайся. Свежесть не давит в помещении.',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок + шея на кожу', detail: 'На кожу — основной генератор свежести' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань куртки/рубашки — стабильная проекция в коридорах' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь под одежду', detail: 'На кожу, под футболку — облако при расстёгнутой куртке' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — свежесть при жестикуляции' }
        ]
      },
      gym: {
        total: 3,
        note: 'Свежесть без агрессии. Fakhar — один из немногих для зала.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — минимум, но достаточно' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — лёгкий акцент' }
        ]
      },
      date: {
        total: 7,
        note: 'Свежесть + чистота = доверие.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу под волосы — шлейф' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — стабильный фон' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'На кожу, под рубашку — при расстёгнутом воротнике' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — финальный штрих' }
        ]
      },
      walk: {
        total: 9,
        note: 'Полная доза. На воздухе испаряется быстро.',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок + шея на кожу', detail: 'На кожу — основной генератор' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань куртки — стабильная проекция' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь под одежду', detail: 'На кожу — облако при расстёгнутой молнии' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — свежесть при жестикуляции' }
        ]
      },
      home: {
        total: 4,
        note: 'Лёгкий фоновый режим.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — основа' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под футболку', detail: 'На кожу — поднимается от тепла' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — для себя' }
        ]
      }
    },
    masterWarning: null,
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'caution' },
      spring: { day: 'full', night: 'full' },
      summer: { day: 'full', night: 'full' },
      autumn: { day: 'full', night: 'full' }
    }
  },
  {
    id: 'fursan',
    name: 'Qaed Al Fursan',
    house: 'Lattafa',
    family: 'Фруктовый · Дымный · Древесный',
    image: 'levs-scent/bottles/fursan.png',
    vibe: 'levs-scent/vibes/fursan-vibe.png',
    accent: '#d4a017',
    gradient: 'linear-gradient(135deg, #5c4400 0%, #8B7020 55%, #d4a017 100%)',
    total: 10,
    refreshHours: 4,
    overspray: false,
    maxCapped: false,
    notes: {
      top: ['Ананас', 'Шафран'],
      heart: ['Роза', 'Чёрный перец'],
      base: ['Пачули', 'Уд', 'Амбра']
    },
    seasons: { winter: 'day+night', autumn: 'day+night', spring: 'day+night', summer: 'day' },
    vibeCaption: 'Ананасовый взрыв с дымной древесиной.',
    variations: [
      {
        label: 'Классика (10 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок', detail: 'Мощная база шлейфа' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Одежда', detail: 'Плечи + воротник' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши', detail: 'Проекция при разговоре' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья', detail: 'Активные точки' }
        ]
      },
      {
        label: 'Зал (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок', detail: 'Минимум' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Лёгкий акцент' }
        ]
      },
      {
        label: 'Вечер (8 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок', detail: 'Максимальный шлейф' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'Ночная зона' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи одежды', detail: 'Стабильность' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Финальный штрих' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 8,
        note: 'Ананас заходит всем. Можно смело.',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок на кожу', detail: 'На кожу под волосы — мощная база шлейфа' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Плечи + воротник на одежду', detail: 'На ткань куртки — ананас держится на ткани отлично' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — активные точки при движении' }
        ]
      },
      gym: {
        total: 3,
        note: 'Свежий фрукт в зале — ок.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — минимум' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — лёгкий акцент' }
        ]
      },
      date: {
        total: 8,
        note: 'Дымный ананас — интрига.',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок на кожу', detail: 'На кожу — максимальный шлейф' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на открытую кожу', detail: 'На кожу — ночная зона, она почувствует при приближении' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — стабильность на весь вечер' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — финальный штрих' }
        ]
      },
      walk: {
        total: 10,
        note: 'Полная доза. Ананас на холоде = бомба.',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок на кожу', detail: 'На кожу — мощная база' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Одежда: плечи + воротник', detail: 'На ткань куртки — держится весь день' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — проекция при разговоре' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — активные точки' }
        ]
      },
      home: {
        total: 4,
        note: 'Фоновый кайф.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — основа' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под футболку', detail: 'На кожу — тепло тела раскрывает ананас' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — для себя' }
        ]
      }
    },
    masterWarning: null,
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'full', night: 'full' },
      summer: { day: 'full', night: 'caution' },
      autumn: { day: 'full', night: 'full' }
    }
  },
  {
    id: 'encelade',
    name: 'Encelade',
    house: 'Marc-Antoine Barrois',
    family: 'Зелёный · Металлик · Мускусный',
    image: 'levs-scent/bottles/encelade.png',
    vibe: 'levs-scent/vibes/encelade-vibe.png',
    accent: '#7ab851',
    gradient: 'linear-gradient(135deg, #2d4a1e 0%, #4a7a30 55%, #7ab851 100%)',
    total: 3,
    refreshHours: null,
    overspray: true,
    maxCapped: true,
    notes: {
      top: ['Ревень', 'Артемизия'],
      heart: ['Ирис', 'Металлик-аккорд'],
      base: ['Ветивер', 'Мускус', 'Амбра']
    },
    seasons: { winter: 'day+night', autumn: 'day+night', spring: 'day+night', summer: 'night' },
    vibeCaption: 'Монстр стойкости и шлейфа. Нишевый флекс.',
    masterWarning: 'Больше трёх пшиков — и ты пахнешь термоядерной зеленью. Считай по пальцам.',
    variations: [
      {
        label: 'Стандарт (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок', detail: 'Один пшик — хватит для шлейфа' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Живот на одежду', detail: 'Скрытая точка' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Для себя' }
        ]
      },
      {
        label: 'Флекс (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок', detail: 'Основа' },
          { spot: 'spot-behind-ears.png', n: 1, title: 'За уши', detail: 'Нишевый flex при разговоре' },
          { spot: 'spot-shoulder-blades.png', n: 1, title: 'Лопатка', detail: 'Шлейф сзади' }
        ]
      },
      {
        label: 'Минимум (2 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок', detail: 'Единственный генератор' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Для личного контроля' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 2,
        note: 'В классе Encelade ОЧЕНЬ громкий. Только 2.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу под волосы — одного хватит на весь класс' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — для личного контроля' }
        ]
      },
      gym: { total: 0, forbidden: true, message: 'Лёва, Encelade в зале — это преступление. Fakhar или Fursan.' },
      date: {
        total: 3,
        note: 'Она спросит "что это?". Твой ответ: "нишевый."',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — основа' },
          { spot: 'spot-behind-ears.png', n: 1, title: 'За уши на кожу', detail: 'На кожу — нишевый флекс при близком разговоре' },
          { spot: 'spot-shoulder-blades.png', n: 1, title: 'Лопатка на одежду', detail: 'На ткань — шлейф сзади при уходе' }
        ]
      },
      walk: {
        total: 3,
        note: 'На улице раскроется в полную силу.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — один пшик для шлейфа' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Живот/плечо на одежду', detail: 'На ткань — скрытая точка' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — для себя' }
        ]
      },
      home: {
        total: 2,
        note: 'Минимум. Для кайфа.',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — подносишь к носу, наслаждаешься' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под футболку', detail: 'На кожу — зелёный металлик поднимается от тепла' }
        ]
      }
    },
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'full', night: 'full' },
      summer: { day: 'caution', night: 'full' },
      autumn: { day: 'full', night: 'full' }
    }
  },
  {
    id: 'tobacco',
    name: 'Red Tobacco',
    house: 'Mancera',
    family: 'Табачный · Пряный · Амбровый',
    image: 'levs-scent/bottles/tobacco.png',
    vibe: 'levs-scent/vibes/tobacco-vibe.png',
    accent: '#B01A1A',
    gradient: 'linear-gradient(135deg, #3d0a0a 0%, #7a1515 55%, #B01A1A 100%)',
    total: 3,
    refreshHours: null,
    overspray: true,
    maxCapped: true,
    notes: {
      top: ['Красный перец', 'Табак'],
      heart: ['Кедр', 'Мускатный орех'],
      base: ['Амбра', 'Ваниль', 'Мирра']
    },
    seasons: { winter: 'day+night', autumn: 'night', spring: 'forbidden', summer: 'forbidden' },
    vibeCaption: 'Ядерный табак со специями. Король холодного вечера.',
    masterWarning: 'НЕ пшикай на шею спереди. Через час у тебя самого заболит голова.',
    variations: [
      {
        label: 'Классика (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок под волосы', detail: 'Единственная точка спереди — нет' },
          { spot: 'spot-shoulder-blades.png', n: 2, title: 'Лопатки на одежду', detail: 'Табак держится на ткани невероятно' }
        ]
      },
      {
        label: 'Вечер-выход (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок', detail: 'Основа' },
          { spot: 'spot-shoulder-blades.png', n: 1, title: 'Спина-лопатка', detail: 'Шлейф для тех, кто сзади' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Контроль дозы' }
        ]
      },
      {
        label: 'Летний запрет-режим (1 пшик)',
        points: [
          { spot: 'spot-behind-knees.png', n: 1, title: 'Под колени', detail: 'Единственный безопасный вариант летом' }
        ]
      }
    ],
    scenarios: {
      school: { total: 0, forbidden: true, message: 'Red Tobacco в школе? Нет. Учителя вызовут скорую.' },
      gym: { total: 0, forbidden: true, message: 'Нет. Просто нет. Никогда.' },
      date: {
        total: 3,
        note: 'Табак на свидании зимой — это власть.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок под волосы на кожу', detail: 'На кожу — единственная точка спереди нет! Только затылок' },
          { spot: 'spot-shoulder-blades.png', n: 2, title: 'Лопатки на одежду', detail: 'На ткань куртки — табак держится на ткани невероятно. Шлейф сзади' }
        ]
      },
      walk: {
        total: 3,
        note: 'Холодный Ольтен + Red Tobacco = магия.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — основа. НЕ на шею спереди!' },
          { spot: 'spot-shoulder-blades.png', n: 1, title: 'Лопатка на одежду', detail: 'На ткань — шлейф для тех, кто идёт за тобой' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — контроль дозы, можно понюхать' }
        ]
      },
      home: {
        total: 2,
        note: 'Тёплый кайф.',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — подносишь к носу, наслаждаешься табаком' },
          { spot: 'spot-shoulder-blades.png', n: 1, title: 'Лопатка на одежду', detail: 'На ткань домашней кофты — фоновый табачный шлейф' }
        ]
      }
    },
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'forbidden', night: 'caution' },
      summer: { day: 'forbidden', night: 'forbidden' },
      autumn: { day: 'caution', night: 'full' }
    }
  },
  {
    id: 'ninepm',
    name: 'Afnan 9PM',
    house: 'Afnan',
    family: 'Сладкий · Яблочный · Ванильный',
    image: 'levs-scent/bottles/9pm.png',
    vibe: 'levs-scent/vibes/9pm-vibe.png',
    accent: '#C9A227',
    gradient: 'linear-gradient(135deg, #4a3a08 0%, #8a7218 55%, #C9A227 100%)',
    total: 6,
    refreshHours: 5,
    overspray: false,
    maxCapped: false,
    notes: {
      top: ['Яблоко', 'Лаванда', 'Кардамон'],
      heart: ['Корица', 'Кедр'],
      base: ['Ваниль', 'Амбра', 'Тонка']
    },
    seasons: { winter: 'day+night', autumn: 'day+night', spring: 'night', summer: 'night-only' },
    vibeCaption: 'Яблоко, корица, ваниль, амбра. Сладкий, молодой, комплиментарный.',
    masterWarning: null,
    variations: [
      {
        label: 'Классика (6 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок', detail: 'Основа шлейфа' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'Личное тепло' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи одежды', detail: 'Стабильная проекция' }
        ]
      },
      {
        label: 'Свидание (5 пшиков)',
        points: [
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'Интимная зона' },
          { spot: 'spot-behind-ears.png', n: 1, title: 'За уши', detail: 'При поцелуе в щёку' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя', detail: 'При объятии' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Не тереть' }
        ]
      },
      {
        label: 'Школа (4 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок', detail: 'Один — достаточно' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи одежды', detail: 'Лёгкий фон' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье', detail: 'Для себя' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 4,
        note: '9PM — универсальный комплиментарный. В школе хватит 4.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу под волосы — один достаточно' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань куртки — лёгкий яблочный фон' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — для себя' }
        ]
      },
      gym: { total: 0, forbidden: true, message: 'Сладкий в зале — плохая идея. Fakhar или Fursan.' },
      date: {
        total: 5,
        note: 'Яблоко + ваниль = непобедимо.',
        points: [
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на открытую кожу', detail: 'На кожу — интимная зона, она почувствует при приближении' },
          { spot: 'spot-behind-ears.png', n: 1, title: 'За уши на кожу', detail: 'На кожу — при поцелуе в щёку' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя на кожу', detail: 'На кожу — раскроется при объятии' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — не тереть' }
        ]
      },
      walk: {
        total: 6,
        note: 'Полная доза. Классика для прогулки.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу под волосы — основа шлейфа' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'На кожу, под куртку — личное тепло' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань куртки — стабильная проекция' }
        ]
      },
      home: {
        total: 3,
        note: 'Уютно. Для себя.',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — подносишь к носу, наслаждаешься' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под футболку', detail: 'На кожу — яблоко + ваниль поднимаются от тепла' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Плечо на одежду', detail: 'На ткань домашней кофты — фоновый аромат' }
        ]
      }
    },
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'caution', night: 'full' },
      summer: { day: 'forbidden', night: 'caution' },
      autumn: { day: 'full', night: 'full' }
    }
  },
  {
    id: 'angels-share',
    name: "Angels' Share",
    house: 'By Kilian',
    family: 'Гурманский · Пряный · Восточный',
    image: 'levs-scent/bottles/angels-share.png',
    vibe: 'levs-scent/vibes/angels-share-vibe.png',
    accent: '#B85D19',
    gradient: 'linear-gradient(135deg, #4a2508 0%, #8B4A12 55%, #B85D19 100%)',
    total: 3,
    refreshHours: null,
    overspray: true,
    maxCapped: true,
    notes: {
      top: ['Коньяк'],
      heart: ['Корица', 'Бобы тонка', 'Дуб'],
      base: ['Пралине', 'Ваниль', 'Сандал']
    },
    seasons: { winter: 'day+night', autumn: 'day+night', spring: 'night', summer: 'forbidden' },
    vibeCaption: 'Пьянящий аромат выдержанного коньяка, тёплой корицы и пралине, создающий атмосферу дорогого уюта.',
    masterWarning: 'Очень стойкий, сладкий и плотный — не пшикай больше 3-4 раз, чтобы не задушить себя и окружающих.',
    variations: [
      {
        label: 'Лёгкий шлейф (2 пшика)',
        points: [
          { spot: 'spot-neck-back.png', n: 1, title: 'Шея сзади на кожу', detail: 'Для красивого шлейфа позади' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'На кожу — для личного удовольствия' }
        ]
      },
      {
        label: 'Классика (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок / волосы', detail: 'На волосы — отлично держится весь день' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'По одному на каждое — согревается пульсом' }
        ]
      },
      {
        label: 'Вечернее облако (4 пшика)',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'Близко к лицу собеседника' },
          { spot: 'spot-collarbones-skin.png', n: 1, title: 'Ключица на кожу', detail: 'Тёплая база' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок / волосы', detail: 'Максимальная стойкость' }
        ]
      }
    ],
    scenarios: {
      school: { total: 0, forbidden: true, message: 'Слишком тяжёлый, алкогольный и сладкий для учёбы или тесного офиса.' },
      gym: { total: 0, forbidden: true, message: 'Сладкая гурманика в спортзале задушит абсолютно всех, включая тебя.' },
      date: {
        total: 3,
        note: 'Идеальный вариант для прохладного вечера, звучит дорого и притягательно.',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — для сближения, она почувствует при разговоре' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'На кожу — будет отдавать тепло весь вечер' }
        ]
      },
      walk: {
        total: 4,
        note: 'На морозном воздухе корица и коньяк раскрываются бесподобно.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок / волосы', detail: 'На волосы — шлейф на ветру' },
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'На кожу — бьёт в нос при расстёгнутой куртке' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань пальто/шарфа — держится вечно' }
        ]
      },
      home: {
        total: 1,
        note: 'Для максимального уюта с чашкой чая.',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'Одно запястье, затем прикоснуться ко второму — чтобы чувствовать самому' }
        ]
      }
    },
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'caution', night: 'caution' },
      summer: { day: 'forbidden', night: 'forbidden' },
      autumn: { day: 'full', night: 'full' }
    }
  },

  /* ---------- OPULENT DUBAI ---------- */
  {
    id: 'opulent-dubai',
    name: 'Lattafa Opulent Dubai EDP',
    house: 'Lattafa',
    family: 'Тропический · Цитрусовый · Древесный',
    image: 'levs-scent/bottles/opulent-dubai.png',
    vibe: 'levs-scent/vibes/opulent-dubai-vibe.png',
    accent: '#e68a00',
    gradient: 'linear-gradient(135deg, #5c3600 0%, #b36b00 55%, #e68a00 100%)',
    total: 7,
    refreshHours: 6,
    overspray: true,
    maxCapped: false,
    notes: {
      top: ['Манго', 'Грейпфрут', 'Лимон', 'Имбирь'],
      heart: ['Жасмин', 'Кедр', 'Фиалка'],
      base: ['Серая амбра', 'Бензоин', 'Дубовый мох', 'Древесные ноты']
    },
    seasons: { winter: 'day+night', autumn: 'day+night', spring: 'day+night', summer: 'day+night' },
    vibeCaption: 'Сочный тропический старт из манго и грейпфрута с переходом в теплую амброво-древесную базу.',
    masterWarning: 'Амбра в базе довольно стойкая, 7-8 пшиков вполне достаточно для шлейфа на весь день.',
    variations: [
      {
        label: 'Стандарт (7 пшиков)',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — манго и имбирь ударят собеседнику в первые минуты' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — шлейф тропического дерева за спиной' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — амбра и кедр раскроются от тепла тела' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — стойкий фон на весь день' }
        ]
      },
      {
        label: 'Легкий (4 пшика)',
        points: [
          { spot: 'spot-neck-back.png', n: 2, title: 'Шея сзади на кожу', detail: 'На кожу — деликатный шлейф с имбирём' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — по одному на каждое, нюхать самому в течение дня' }
        ]
      },
      {
        label: 'Вечер (10 пшиков)',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — манго в зоне декольте' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — двойной удар для максимального шлейфа' },
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'На ткань — по два на каждое плечо, облако тропиков' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь под одежду', detail: 'На кожу — амбра будет греть из-под рубашки' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 5,
        note: 'Фруктово-древесный, не раздражает, но шлейф заметный.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — лёгкий шлейф позади' },
          { spot: 'spot-neck-back.png', n: 2, title: 'Шея сзади на кожу', detail: 'На кожу — манго и грейпфрут ненавязчиво' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — держится до конца учёбы' }
        ]
      },
      gym: {
        total: 3,
        note: 'Минимально — свежий старт не будет мешать.',
        points: [
          { spot: 'spot-neck-back.png', n: 1, title: 'Шея сзади на кожу', detail: 'На кожу — лёгкий цитрусовый фон' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — по одному на каждое, свежий имбирь' }
        ]
      },
      date: {
        total: 6,
        note: 'Манго + амбра на свидании — экзотика и притяжение.',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — она почувствует манго при разговоре' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — амбра и жасмин раскроются от тепла' },
          { spot: 'spot-inner-elbow.png', n: 2, title: 'Сгиб локтя на кожу', detail: 'На кожу — по одному, тропический аккорд при движениях' }
        ]
      },
      walk: {
        total: 9,
        note: 'На свежем воздухе можно дать больше — шлейф будет красивым.',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — грейпфрут и манго на ветру' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — мощный древесный шлейф' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Плечи на одежду', detail: 'На ткань — облако вокруг' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь под одежду', detail: 'На кожу — амбра греет из-под куртки' }
        ]
      },
      home: {
        total: 3,
        note: 'Тропический уют для себя.',
        points: [
          { spot: 'spot-chest.png', n: 1, title: 'Грудь на кожу', detail: 'На кожу — для собственного удовольствия' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — нюхать манго весь вечер' }
        ]
      }
    },
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'full', night: 'full' },
      summer: { day: 'full', night: 'full' },
      autumn: { day: 'full', night: 'full' }
    }
  },

  /* ---------- PACIFIC AURA ---------- */
  {
    id: 'pacific-aura',
    name: 'Rayhaan Pacific Aura EDP',
    house: 'Rayhaan',
    family: 'Акватический · Зеленый · Свежий',
    image: 'levs-scent/bottles/pacific-aura.png',
    vibe: 'levs-scent/vibes/pacific-aura-vibe.png',
    accent: '#3dbba6',
    gradient: 'linear-gradient(135deg, #1a5c50 0%, #2d9080 55%, #3dbba6 100%)',
    total: 9,
    refreshHours: 4,
    overspray: false,
    maxCapped: false,
    notes: {
      top: ['Цитрон', 'Мята', 'Смородина', 'Апельсин'],
      heart: ['Абрикос', 'Базилик', 'Роза'],
      base: ['Инжир', 'Финики', 'Амброксан']
    },
    seasons: { winter: 'night', autumn: 'day+night', spring: 'day+night', summer: 'day+night' },
    vibeCaption: 'Ледяной морской бриз с мятой, сочным инжиром и чистыми зелеными аккордами.',
    masterWarning: null,
    variations: [
      {
        label: 'Свежий старт (9 пшиков)',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — мята и цитрон бьют свежестью' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — акватический шлейф позади' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Плечи на одежду', detail: 'На ткань — морской бриз вокруг' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — инжир и амброксан раскроются от тепла' }
        ]
      },
      {
        label: 'Офис/Учеба (6 пшиков)',
        points: [
          { spot: 'spot-neck-back.png', n: 2, title: 'Шея сзади на кожу', detail: 'На кожу — деликатная свежесть' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — ненавязчивый фон' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — мята и смородина при жестикуляции' }
        ]
      },
      {
        label: 'Интенсив (12 пшиков)',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — ледяной удар мяты' },
          { spot: 'spot-neck-back.png', n: 2, title: 'Шея сзади на кожу', detail: 'На кожу — двойной охват шеи' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — мощный шлейф' },
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'На ткань — по два на каждое, океанское облако' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь под одежду', detail: 'На кожу — инжир и финики из-под рубашки' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 7,
        note: 'Свежий и чистый — идеально для учёбы, не будет мешать.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — акватический шлейф' },
          { spot: 'spot-neck-back.png', n: 2, title: 'Шея сзади на кожу', detail: 'На кожу — мята и цитрон деликатно' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Плечи на одежду', detail: 'На ткань — свежесть весь день' }
        ]
      },
      gym: {
        total: 5,
        note: 'Мятный и акватический — освежает даже во время тренировки.',
        points: [
          { spot: 'spot-neck-back.png', n: 2, title: 'Шея сзади на кожу', detail: 'На кожу — мята охлаждает' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — свежесть при каждом движении' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь на кожу', detail: 'На кожу — лёгкий акватический фон' }
        ]
      },
      date: {
        total: 8,
        note: 'Чистая свежесть с инжирной глубиной — притягивает.',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — мята и роза при сближении' },
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — свежесть в зоне декольте' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — амброксан и инжир от тепла тела' },
          { spot: 'spot-inner-elbow.png', n: 2, title: 'Сгиб локтя на кожу', detail: 'На кожу — по одному, свежесть при касаниях' }
        ]
      },
      walk: {
        total: 11,
        note: 'На воздухе можно смело — акватика не давит.',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — мята на ветру' },
          { spot: 'spot-neck-back.png', n: 1, title: 'Шея сзади на кожу', detail: 'На кожу — зелёный аккорд' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — морской шлейф' },
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'На ткань — по два на каждое, океанский бриз' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь под одежду', detail: 'На кожу — инжир из-под куртки' }
        ]
      },
      home: {
        total: 4,
        note: 'Свежесть дома — как открытое окно на море.',
        points: [
          { spot: 'spot-chest.png', n: 2, title: 'Грудь на кожу', detail: 'На кожу — инжир и мята для себя' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — нюхать свежесть весь вечер' }
        ]
      }
    },
    seasonTimeMatrix: {
      winter: { day: 'caution', night: 'caution' },
      spring: { day: 'full', night: 'full' },
      summer: { day: 'full', night: 'full' },
      autumn: { day: 'full', night: 'full' }
    }
  },

  /* ---------- AETHER ---------- */
  {
    id: 'aether',
    name: 'French Avenue Aether Extrait De Parfum',
    house: 'Fragrance World',
    family: 'Зелёный · Фруктовый · Свежий',
    image: 'levs-scent/bottles/aether.png',
    vibe: 'levs-scent/vibes/aether-vibe.png',
    accent: '#2b5e3d',
    gradient: 'linear-gradient(135deg, #143021 0%, #1f4a30 55%, #2b5e3d 100%)',
    total: 10,
    refreshHours: 4,
    overspray: false,
    maxCapped: false,
    notes: {
      top: ['Зеленое яблоко', 'Бергамот', 'Мандарин'],
      heart: ['Кедр', 'Кашмеран', 'Петитгрейн', 'Фиалка'],
      base: ['Дубовый мох', 'Мускус', 'Амбровуд']
    },
    seasons: { winter: 'day', autumn: 'day+night', spring: 'day+night', summer: 'day+night' },
    vibeCaption: 'Хрустящая чистота дорогого яблочного шампуня с благородной древесной базой.',
    masterWarning: null,
    variations: [
      {
        label: 'Уличный оверспрей (10 пшиков)',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'На одежду — создаёт огромное зелёное облако вокруг тебя при ходьбе' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — для диффузности и смешивания с теплом тела' },
          { spot: 'spot-hair.png', n: 2, title: 'Волосы', detail: 'На волосы — отлично держит фруктовый старт' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — главный генератор шлейфа при повороте головы' }
        ]
      },
      {
        label: 'Легкий шлейф (6 пшиков)',
        points: [
          { spot: 'spot-chest.png', n: 2, title: 'Грудь на кожу', detail: 'На кожу — разогревается под рубашкой/футболкой' },
          { spot: 'spot-inner-elbow.png', n: 2, title: 'Сгиб локтя на кожу', detail: 'На кожу — пульсирует при движении руками' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — оставляет приятный шлейф позади' },
          { spot: 'spot-hair.png', n: 1, title: 'Волосы', detail: 'На волосы — продлевает стойкость свежести' }
        ]
      },
      {
        label: 'Максимальный режим (12 пшиков)',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'На одежду — максимальное закрепление базы' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — громкий старт прямо тебе в нос' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь на кожу', detail: 'На кожу — глубокое раскрытие базы' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — резкий, мощный шлейф' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — для активной жестикуляции' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 5,
        note: 'Хрустящий и чистый, не задушит соседей по парте.',
        points: [
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — основной источник аромата' },
          { spot: 'spot-inner-elbow.png', n: 2, title: 'Сгиб локтя на кожу', detail: 'На кожу — мягкий шлейф при движении руками' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — аккуратный хвост' }
        ]
      },
      gym: {
        total: 3,
        note: 'Идеален для спорта, даёт вайб геля для душа.',
        points: [
          { spot: 'spot-chest.png', n: 1, title: 'Грудь на кожу', detail: 'На кожу — быстро разогреется и даст свежесть' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'Под одежду — сдержит напор, оставив только чистоту' }
        ]
      },
      date: {
        total: 6,
        note: 'Пахнет ухоженным и чистым парнем.',
        points: [
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'На кожу — для близкого контакта' },
          { spot: 'spot-neck-back.png', n: 1, title: 'Шея сзади на кожу', detail: 'На кожу — для шлейфа при прощании' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — при жестикуляции за столом' },
          { spot: 'spot-hair.png', n: 2, title: 'Волосы', detail: 'На волосы — девушки любят, когда волосы пахнут шампунем' }
        ]
      },
      walk: {
        total: 10,
        note: 'Идеальная среда для этого парфюма, ветер разнесёт его на метры.',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'На одежду — закрепит шлейф на ветру' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — стабильное облако' },
          { spot: 'spot-hair.png', n: 2, title: 'Волосы', detail: 'На волосы — будет играть на ветру' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — дополнительная диффузность' }
        ]
      },
      home: {
        total: 2,
        note: 'Для себя, чтобы кайфовать от чистоты.',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — чтобы периодически ловить носом' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь на кожу', detail: 'На кожу — для уютного кокона' }
        ]
      }
    },
    seasonTimeMatrix: {
      winter: { day: 'caution', night: 'forbidden' },
      spring: { day: 'full', night: 'full' },
      summer: { day: 'full', night: 'full' },
      autumn: { day: 'full', night: 'caution' }
    }
  },

  /* ---------- TURATHI BLUE ---------- */
  {
    id: 'turathi-blue',
    name: 'Afnan Turathi Blue EDP',
    house: 'Afnan',
    family: 'Цитрусовый · Амбровый · Пряный',
    image: 'levs-scent/bottles/turathi-blue.png',
    vibe: 'levs-scent/vibes/turathi-blue-vibe.png',
    accent: '#183c66',
    gradient: 'linear-gradient(135deg, #0c1e33 0%, #12304d 55%, #183c66 100%)',
    total: 7,
    refreshHours: 6,
    overspray: true,
    maxCapped: true,
    notes: {
      top: ['Грейпфрут', 'Мандарин'],
      heart: ['Амброксан', 'Древесные ноты'],
      base: ['Мускус', 'Пачули', 'Специи']
    },
    seasons: { winter: 'day', autumn: 'day+night', spring: 'day+night', summer: 'day+night' },
    vibeCaption: 'Статусный, сочный грейпфрут на мощной и чистой амброксановой подложке.',
    masterWarning: 'Не пшикай больше 8 — амброксан ослепит твои рецепторы, ты перестанешь его слышать, хотя шлейф будет сбивать с ног окружающих.',
    variations: [
      {
        label: 'Стандарт (7 пшиков)',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — классика для шлейфа' },
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'Под одежду — сдерживает амброксан, не даёт ему стать резким' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — амброксан любит пульсовые зоны' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — длиннющий шлейф' }
        ]
      },
      {
        label: 'Шлейф босса (8 пшиков)',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — громкий старт' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На одежду — зацепится за ткань до стирки' },
          { spot: 'spot-chest.png', n: 2, title: 'Грудь на кожу', detail: 'На кожу — сердцевина аромата' },
          { spot: 'spot-hair.png', n: 2, title: 'Волосы', detail: 'На волосы — раскрывает сочность грейпфрута' }
        ]
      },
      {
        label: 'Близко к телу (4 пшика)',
        points: [
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'На кожу — для тебя и собеседника' },
          { spot: 'spot-neck-back.png', n: 1, title: 'Шея сзади на кожу', detail: 'На кожу — лёгкий след' },
          { spot: 'spot-inner-elbow.png', n: 2, title: 'Сгиб локтя на кожу', detail: 'На кожу — мягкое раскрытие специй и дерева' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 5,
        note: 'Звучит взросло, собранно и дорого.',
        points: [
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'Под одежду — строго, но ощутимо' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — приятный след в коридорах' },
          { spot: 'spot-inner-elbow.png', n: 2, title: 'Сгиб локтя на кожу', detail: 'На кожу — ненавязчивая диффузность за партой' }
        ]
      },
      gym: { total: 0, forbidden: true, message: 'Слишком мощный амброксан и специи, в жаре зала может стать едким.' },
      date: {
        total: 4,
        note: 'Притягательно, статусно, но не кричаще.',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — идеально при объятиях' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — классика для романтического ужина' }
        ]
      },
      walk: {
        total: 8,
        note: 'Оверспрей в пределах нормы, ветер — друг амброксана.',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — ловит ветер' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На одежду — мощная база' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — двойной удар для длинного шлейфа' },
          { spot: 'spot-hair.png', n: 2, title: 'Волосы', detail: 'На волосы — свежесть грейпфрута на весь день' }
        ]
      },
      home: {
        total: 2,
        note: 'Достаточно для кайфа.',
        points: [
          { spot: 'spot-chest.png', n: 2, title: 'Грудь на кожу', detail: 'На кожу — уютная древесно-мускусная база' }
        ]
      }
    },
    seasonTimeMatrix: {
      winter: { day: 'caution', night: 'forbidden' },
      spring: { day: 'full', night: 'full' },
      summer: { day: 'full', night: 'full' },
      autumn: { day: 'full', night: 'full' }
    }
  },
  {
    id: 'marwa',
    name: 'Arabiyat Prestige Marwa',
    house: 'Arabiyat Prestige',
    family: 'Цитрусовый · Чайный · Свежий',
    image: 'levs-scent/bottles/marwa.png',
    vibe: 'levs-scent/vibes/marwa-vibe.png',
    accent: '#D4AF37',
    gradient: 'linear-gradient(135deg, #8B7D3C 0%, #C4A84D 55%, #D4AF37 100%)',
    total: 8,
    refreshHours: 4,
    overspray: true,
    maxCapped: false,
    notes: {
      top: ['Бергамот', 'Апельсин', 'Лимон'],
      heart: ['Черный чай', 'Имбирь', 'Нероли'],
      base: ['Амброксан', 'Кедр', 'Древесные ноты']
    },
    seasons: { winter: 'night-only', autumn: 'day+night', spring: 'day+night', summer: 'day+night' },
    vibeCaption: 'Запах абсолютной ухоженности, дорогого мыла и прохладного чая, вдохновленный эстетикой LV Imagination.',
    variations: [
      {
        label: 'Чистая эстетика (6 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'База для шлейфа' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Для стойкости' },
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'Для собственного удовольствия' }
        ]
      },
      {
        label: 'Оверспрей бро (8 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок на кожу', detail: 'Максимальный шлейф назад' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На плечи худи/футболки' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На оба запястья' },
          { spot: 'spot-collarbones-under-clothes.png', n: 1, title: 'Ключицы под одежду', detail: 'Для интимной ауры' }
        ]
      },
      {
        label: 'Громкий старт (10 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок на кожу', detail: 'Мощный хвост' },
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'Жесткая фиксация на ткани' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'По одному за каждое ухо' },
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'Контрольный выстрел' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 6,
        note: 'Идеально. Пахнет чисто, никого не задушит, создаст образ опрятного парня.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Шлейф в коридорах' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Долгая жизнь аромата' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На пульсирующие точки' }
        ]
      },
      gym: {
        total: 4,
        note: 'Отличный свежак для тренировки, не химозит.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Шлейф позади тебя на беговой дорожке' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'Легкая свежесть для себя' }
        ]
      },
      date: {
        total: 8,
        note: 'Девочки обожают этот запах "дорогого чистого парня".',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'База для шлейфа' },
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'Для близкого контакта' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Уверенная стойкость' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'Будет слышно при жестикуляции' }
        ]
      },
      walk: {
        total: 8,
        note: 'Ветер отлично разносит чайные и цитрусовые ноты.',
        points: [
          { spot: 'spot-nape.png', n: 3, title: 'Затылок на кожу', detail: 'Для длинного хвоста на ветру' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Плечи на одежду', detail: 'Чтобы ветер не сдул быстро' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'По одному за ухо для диффузности' }
        ]
      },
      home: {
        total: 3,
        note: 'Для релакса и ощущения свежести после душа.',
        points: [
          { spot: 'spot-chest.png', n: 1, title: 'Грудь на кожу', detail: 'Уютно для себя' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'По одному на каждую руку' }
        ]
      }
    },
    masterWarning: null,
    seasonTimeMatrix: {
      winter: { day: 'caution', night: 'forbidden' },
      spring: { day: 'full', night: 'caution' },
      summer: { day: 'full', night: 'full' },
      autumn: { day: 'full', night: 'caution' }
    }
  },
  {
    id: 'blonde-amber',
    name: 'XXI Art Deco Blonde Amber',
    house: 'Clive Christian',
    family: 'Амбровый · Сладкий · Табачный',
    image: 'levs-scent/bottles/blonde-amber.png',
    vibe: 'levs-scent/vibes/blonde-amber-vibe.png',
    accent: '#D27D2D',
    gradient: 'linear-gradient(135deg, #5C3A1E 0%, #A0632A 55%, #D27D2D 100%)',
    total: 4,
    refreshHours: null,
    overspray: false,
    maxCapped: true,
    notes: {
      top: ['Апельсин', 'Имбирь', 'Красный перец'],
      heart: ['Тубероза', 'Табак', 'Жасмин'],
      base: ['Амбра', 'Тонка', 'Ваниль', 'Мирра']
    },
    seasons: { winter: 'day+night', autumn: 'night', spring: 'night', summer: 'forbidden' },
    vibeCaption: 'Экстремально роскошный, густой и дурманящий амброво-табачный эликсир. Король зимних вечеров.',
    variations: [
      {
        label: 'Богатая аура (2 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Достаточно для плотного шлейфа' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'Будет греть весь день' }
        ]
      },
      {
        label: 'Королевский выход (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Шлейф' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'По одному за каждое ухо' }
        ]
      },
      {
        label: 'Максимальный лимит (4 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Только для открытого морозного воздуха' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Останется на ткани на неделю' }
        ]
      }
    ],
    scenarios: {
      school: { total: 0, forbidden: true, message: 'Слишком дорого, тяжело и роскошно для парты.' },
      gym: { total: 0, forbidden: true, message: 'Удушит весь зал мгновенно.' },
      date: {
        total: 3,
        note: 'Шикарно для вечернего свидания в дорогом месте.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Тонкий шлейф' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'По одному пшику за ухо для близкого контакта' }
        ]
      },
      walk: {
        total: 4,
        note: 'В морозную погоду раскроется божественно.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Плотный хвост на морозе' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Зацепится за куртку/пальто намертво' }
        ]
      },
      home: {
        total: 1,
        note: 'Капля на запястье для медитации.',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На одно запястье, чтобы наслаждаться базой' }
        ]
      }
    },
    masterWarning: 'СТРОГО БЕЗ ОВЕРСПРЕЯ! Аромат невероятной плотности и стойкости, максимум 4 пшика.',
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'caution', night: 'full' },
      summer: { day: 'forbidden', night: 'forbidden' },
      autumn: { day: 'caution', night: 'full' }
    }
  },
  {
    id: 'asad-bourbon',
    name: 'Lattafa Asad Bourbon',
    house: 'Lattafa',
    family: 'Пряный · Ванильный · Алкогольный',
    image: 'levs-scent/bottles/asad-bourbon.png',
    vibe: 'levs-scent/vibes/asad-bourbon-vibe.png',
    accent: '#C67139',
    gradient: 'linear-gradient(135deg, #1f1412 0%, #5c3a21 55%, #a46036 100%)',
    total: 5,
    refreshHours: null,
    overspray: false,
    maxCapped: true,
    notes: {
      top: ['Чёрный перец', 'Бурбон', 'Специи'],
      heart: ['Табак', 'Кедр', 'Пачули'],
      base: ['Ваниль', 'Амбра', 'Древесные ноты']
    },
    seasons: { winter: 'day+night', spring: 'night-only', summer: 'forbidden', autumn: 'day+night' },
    vibeCaption: 'Терпкий бурбон, черная ваниль и табак. Согревающий и статусный вечерний аромат.',
    variations: [
      {
        label: 'Деловой вечер (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'База для ненавязчивого шлейфа' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'Для теплой ванильной ауры вокруг себя' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястья на кожу', detail: 'Распределить на оба запястья' }
        ]
      },
      {
        label: 'Статусный выход (5 пшиков)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Уверенный и густой шлейф' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Фиксация алкогольных нот на ткани' },
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'Контрольный пшик' }
        ]
      },
      {
        label: 'Холодная улица (6 пшиков — максимум)',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Пробивать морозный воздух' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Для максимальной стойкости на куртке' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'По одному за каждое ухо' }
        ]
      }
    ],
    scenarios: {
      school: { total: 0, forbidden: true, message: 'Слишком алкогольно и тяжело для учебного заведения.' },
      gym: { total: 0, forbidden: true, message: 'Удушит всех ванилью и специями.' },
      date: {
        total: 4,
        note: 'Отлично подходит для вечернего свидания в ресторане.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Тонкий шлейф' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'Загадочная аура' },
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'Для близкого контакта' }
        ]
      },
      walk: {
        total: 5,
        note: 'Идеально для холодной осени или зимы.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Хвост на ветру' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Плечи на одежду', detail: 'Зацепится за ткань' }
        ]
      },
      home: {
        total: 2,
        note: 'Уютный вечер за книгой или фильмом.',
        points: [
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'По одному на каждую руку' }
        ]
      }
    },
    masterWarning: 'Аромат очень плотный и стойкий. Не рекомендуется наносить более 5 пшиков, чтобы не задушить окружающих.',
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'caution', night: 'full' },
      summer: { day: 'forbidden', night: 'forbidden' },
      autumn: { day: 'full', night: 'full' }
    }
  },
  {
    id: 'vintage-radio',
    name: 'Lattafa Vintage Radio',
    house: 'Lattafa',
    family: 'Фруктовый · Древесный · Фужерный',
    image: 'levs-scent/bottles/vintage-radio.png',
    vibe: 'levs-scent/vibes/vintage-radio-vibe.png',
    accent: '#DDA0DD',
    gradient: 'linear-gradient(135deg, #1a0f2e 0%, #4b0082 55%, #9370db 100%)',
    total: 5,
    refreshHours: 7,
    overspray: true,
    maxCapped: false,
    notes: {
      top: ['Слива', 'Шалфей', 'Лаванда'],
      heart: ['Пало Санто', 'Чёрный перец'],
      base: ['Сандал', 'Уд']
    },
    seasons: { winter: 'day+night', spring: 'day+night', summer: 'night-only', autumn: 'day+night' },
    vibeCaption: 'Сливовая сочность в облаке шалфея и благородного сандала. Аромат-спокойствие.',
    variations: [
      {
        label: 'Медитация (3 пшика)',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Базовый шлейф' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'Для собственного наслаждения' }
        ]
      },
      {
        label: 'Городской ритм (5 пшиков)',
        points: [
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'Яркость' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Стойкость сливы' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Шлейф' }
        ]
      },
      {
        label: 'Максимум (8 пшиков)',
        points: [
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'Фруктовое облако' },
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'Максимальная стойкость' },
          { spot: 'spot-hair.png', n: 2, title: 'Волосы', detail: 'Слива на волосах весь день' }
        ]
      }
    ],
    scenarios: {
      school: {
        total: 4,
        note: 'Приятный, не кричащий.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Мягкий шлейф' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Стойкость без агрессии' }
        ]
      },
      gym: {
        total: 3,
        note: 'Только если 1-2 пшика.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Легкий фон' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Останется на ткани' }
        ]
      },
      date: {
        total: 5,
        note: 'Очень необычный и притягательный.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Интригующий шлейф' },
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'Яркость при близком контакте' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Стойкость сливы' }
        ]
      },
      walk: {
        total: 5,
        note: 'Идеально раскрывается на ветру.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Шлейф на ветру' },
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Плечи на одежду', detail: 'Слива на куртке' }
        ]
      },
      home: {
        total: 5,
        note: 'Уютный и расслабляющий.',
        points: [
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'Наслаждение базой' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'Личное облако' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Фоновый шлейф' }
        ]
      }
    },
    masterWarning: 'Дай флакону отстояться (мацерация) 3-4 недели для глубины древесных нот.',
    seasonTimeMatrix: {
      winter: { day: 'full', night: 'full' },
      spring: { day: 'full', night: 'full' },
      summer: { day: 'caution', night: 'full' },
      autumn: { day: 'full', night: 'full' }
    }
  }
];

/* ===== NOTE IMAGE MAP ===== */

const NOTE_MAP = {
  'Амбра': 'amber', 'Серая амбра': 'ambergris', 'Амбровуд': 'amberwood', 'Амброксан': 'ambroxan',
  'Яблоко': 'apple', 'Абрикос': 'apricot', 'Артемизия': 'artemisia', 'Базилик': 'basil',
  'Бензоин': 'benzoin', 'Бергамот': 'bergamot', 'Чёрный перец': 'black-pepper', 'Кардамон': 'cardamom',
  'Кедр': 'cedar', 'Корица': 'cinnamon', 'Цитрон': 'citron', 'Гвоздика': 'clove',
  'Коньяк': 'cognac', 'Смородина': 'currant', 'Финики': 'dates', 'Инжир': 'fig',
  'Герань': 'geranium', 'Грейпфрут': 'grapefruit', 'Ирис': 'iris', 'Жасмин': 'jasmine',
  'Лаванда': 'lavender', 'Лимон': 'lemon', 'Манго': 'mango', 'Майский цветок': 'may_flower',
  'Металлик-аккорд': 'metallic_accords', 'Мята': 'mint', 'Мускус': 'musk', 'Мирра': 'myrrh',
  'Мускатный орех': 'nutmeg', 'Дуб': 'oak', 'Дубовый мох': 'oakmoss', 'Апельсин': 'orange',
  'Уд': 'oud', 'Пачули': 'patchouli', 'Ананас': 'pineapple', 'Пралине': 'praline',
  'Красный перец': 'red-pepper', 'Ревень': 'rhubarb', 'Роза': 'rose', 'Шафран': 'saffron',
  'Шалфей': 'sage', 'Сандал': 'sandalwood', 'Бобы тонка': 'tonka_bean', 'Тонка': 'tonka_bean',
  'Ваниль': 'vanilla', 'Ветивер': 'vetiver', 'Фиалка': 'violet', 'Древесные ноты': 'wood_notes',
  'Табак': 'tobacco', 'Имбирь': 'ginger',
  'Кашмеран': 'cashmeran', 'Петитгрейн': 'petitgrain', 'Специи': 'spices',
  'Зеленое яблоко': 'apple', 'Мандарин': 'orange',
  'Черный чай': 'black_tea', 'Нероли': 'neroli', 'Тубероза': 'tuberose',
  'Бурбон': 'bourbon',
  'Слива': 'plum', 'Пало Санто': 'palo-santo'
};

const NOTE_FILES = {
  'amber': 'png', 'ambergris': 'png', 'amberwood': 'png', 'ambroxan': 'png',
  'apple': 'png', 'apricot': 'png', 'artemisia': 'png', 'basil': 'png',
  'benzoin': 'png', 'bergamot': 'webp', 'black-pepper': 'png', 'cardamom': 'png',
  'cedar': 'png', 'cinnamon': 'webp', 'citron': 'webp', 'clove': 'webp',
  'cognac': 'webp', 'currant': 'png', 'dates': 'png', 'fig': 'webp',
  'geranium': 'webp', 'grapefruit': 'png', 'iris': 'png', 'jasmine': 'png',
  'lavender': 'png', 'lemon': 'png', 'mango': 'webp', 'may_flower': 'png',
  'metallic_accords': 'webp', 'mint': 'png', 'musk': 'webp', 'myrrh': 'png',
  'nutmeg': 'png', 'oak': 'png', 'oakmoss': 'png', 'orange': 'png',
  'oud': 'png', 'patchouli': 'webp', 'pineapple': 'png', 'praline': 'webp',
  'red-pepper': 'png', 'rhubarb': 'png', 'rose': 'png', 'saffron': 'webp',
  'sage': 'webp', 'sandalwood': 'webp', 'tonka_bean': 'webp',
  'tobacco': 'png', 'ginger': 'png', 'cashmeran': 'png', 'petitgrain': 'png', 'spices': 'png',
  'vanilla': 'png', 'vetiver': 'webp', 'violet': 'png', 'wood_notes': 'webp',
  'black_tea': 'webp', 'neroli': 'webp', 'tuberose': 'png',
  'bourbon': 'webp',
  'plum': 'webp', 'palo-santo': 'webp'
};

function getNoteImage(noteName) {
  const key = NOTE_MAP[noteName];
  if (!key) return null;
  const ext = NOTE_FILES[key];
  if (!ext) return null;
  return `levs-scent/assets/notes/${key}.${ext}`;
}

/* ===== WEATHER BACKGROUNDS ===== */

const WEATHER_BG = {
  sun: 'levs-scent/assets/weather/sunny.png',
  clouds: 'levs-scent/assets/weather/cloudy.png',
  rain: 'levs-scent/assets/weather/rainy.png',
  snow: 'levs-scent/assets/weather/snowy.png',
  fog: 'levs-scent/assets/weather/foggy.png'
};

/* ===== QUOTE BACKGROUNDS ===== */

const QUOTE_IMAGES = [
  'levs-scent/assets/quotes/quote1.jpg',
  'levs-scent/assets/quotes/quote2.jpg',
  'levs-scent/assets/quotes/quote3.jpg',
  'levs-scent/assets/quotes/quote4.jpg',
  'levs-scent/assets/quotes/quote5.png',
  'levs-scent/assets/quotes/quote6.jpg',
  'levs-scent/assets/quotes/quote7.jpg',
  'levs-scent/assets/quotes/quote8.jpg',
  'levs-scent/assets/quotes/quote9.jpg',
  'levs-scent/assets/quotes/quote10.jpg',
  'levs-scent/assets/quotes/quote11.jpg',
  'levs-scent/assets/quotes/quote12.jpg',
  'levs-scent/assets/quotes/quote13.jpg',
  'levs-scent/assets/quotes/quote14.jpg',
  'levs-scent/assets/quotes/quote15.jpg'
];

/* ===== COMBINATIONS ===== */

/* Season tabs for combinations — order defines tab order */
const COMBO_SEASON_TABS = [
  { key: 'all',       emoji: '🔥', label: 'Все' },
  { key: 'summer',    emoji: '☀️', label: 'Лето' },
  { key: 'spring',    emoji: '🌸', label: 'Весна' },
  { key: 'autumn',    emoji: '🍂', label: 'Осень' },
  { key: 'winter',    emoji: '❄️', label: 'Зима' },
  { key: 'universal', emoji: '🌐', label: 'Универсальные' }
];

const COMBINATIONS = [
  {
    id: 'winter-gourmet',
    name: 'Зимний гурман',
    fragrances: ['brun', 'fursan'],
    sub: 'Liquid Brun + Qaed Al Fursan',
    season: 'Зима · Осень',
    seasonGroups: ['winter', 'autumn'],
    totalSprays: 8,
    layers: [
      {
        order: 1,
        fragName: 'Liquid Brun',
        fragId: 'brun',
        instruction: 'Нанеси первым — база комбинации',
        points: [
          { spot: 'spot-chest.png', n: 3, title: 'Грудь под одежду', detail: 'На кожу, под куртку — ваниль и корица создают тёплую базу' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу под волосы — генератор сладкого шлейфа' }
        ]
      },
      {
        order: 2,
        fragName: 'Qaed Al Fursan',
        fragId: 'fursan',
        instruction: 'Через 30 секунд — верхний слой',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань куртки — ананас держится на ткани и перекрывает Brun сверху' },
          { spot: 'spot-behind-ears.png', n: 1, title: 'За уши на кожу', detail: 'На кожу — дымный ананас при разговоре' }
        ]
      }
    ],
    effect: 'Ананас оседает в карамельной ванили. Зимой играет как $300 ниша.'
  },
  {
    id: 'date-combo',
    name: 'Свидание',
    fragrances: ['qahwa', 'ninepm'],
    sub: 'Khamrah Qahwa + Afnan 9PM',
    season: 'Осень · Зима · Прохладная весна',
    seasonGroups: ['autumn', 'winter', 'spring'],
    totalSprays: 5,
    layers: [
      {
        order: 1,
        fragName: 'Afnan 9PM',
        fragId: 'ninepm',
        instruction: 'Нанеси первым — сладкая база ближнего контакта',
        points: [
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'На кожу, под рубашку — яблоко + ваниль греются телом, она почувствует при приближении' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — при касании руки' }
        ]
      },
      {
        order: 2,
        fragName: 'Khamrah Qahwa',
        fragId: 'qahwa',
        instruction: 'Через 30 секунд — кофейная верхушка',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу под волосы — кофейный шлейф при уходе' },
          { spot: 'spot-shoulders-clothes.png', n: 1, title: 'Плечо на одежду', detail: 'На ткань — одно плечо, кардамон на ткани стабильнее' }
        ]
      }
    ],
    effect: 'Сладкий шлейф кофе + яблочная ваниль. Она не выдержит.'
  },
  {
    id: 'dark-evening',
    name: 'Мрачный вечер',
    fragrances: ['tobacco', 'brun'],
    sub: 'Red Tobacco + Liquid Brun',
    season: 'Зима · Поздняя осень (только вечер)',
    seasonGroups: ['winter', 'autumn'],
    totalSprays: 5,
    layers: [
      {
        order: 1,
        fragName: 'Liquid Brun',
        fragId: 'brun',
        instruction: 'Нанеси первым — кремовая подложка для табака',
        points: [
          { spot: 'spot-chest.png', n: 2, title: 'Грудь под одежду', detail: 'На кожу, под куртку — ваниль смягчит табак снизу' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя на кожу', detail: 'На кожу — при движении руки раскроется корица' }
        ]
      },
      {
        order: 2,
        fragName: 'Red Tobacco',
        fragId: 'tobacco',
        instruction: 'Через 30 секунд — табак сверху',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу под волосы — НЕ на шею спереди! Только затылок' },
          { spot: 'spot-shoulder-blades.png', n: 1, title: 'Лопатка на одежду', detail: 'На ткань куртки — табак на ткани = мощный шлейф сзади' }
        ]
      }
    ],
    effect: 'Табак в кремовой оправе. Холодная ночь Ольтена — твоя.'
  },
  {
    id: 'summer-flex',
    name: 'Летний флекс',
    fragrances: ['encelade', 'fursan'],
    sub: 'Encelade + Qaed Al Fursan',
    season: 'Весна · Лето · Тёплая осень',
    seasonGroups: ['spring', 'summer', 'autumn'],
    totalSprays: 5,
    layers: [
      {
        order: 1,
        fragName: 'Qaed Al Fursan',
        fragId: 'fursan',
        instruction: 'Нанеси первым — фруктовая база',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 3, title: 'Плечи + воротник на одежду', detail: 'На ткань — ананас на ткани держится отлично и не давит на кожу в жару' },
          { spot: 'spot-behind-ears.png', n: 1, title: 'За уши на кожу', detail: 'На кожу — фруктовая проекция при разговоре' }
        ]
      },
      {
        order: 2,
        fragName: 'Encelade',
        fragId: 'encelade',
        instruction: 'Через 30 секунд — СТРОГО один пшик',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — один и только один. Зелёный металлик пробьётся через ананас' }
        ]
      }
    ],
    effect: 'Ананас с металлическим зелёным послевкусием. Нишевая загадка.'
  },
  {
    id: 'office-study',
    name: 'Офис / Учёба',
    fragrances: ['fakhar', 'ninepm'],
    sub: 'Fakhar Black + Afnan 9PM',
    season: 'Весь год (кроме жаркого лета)',
    seasonGroups: ['universal'],
    totalSprays: 5,
    layers: [
      {
        order: 1,
        fragName: 'Fakhar Black',
        fragId: 'fakhar',
        instruction: 'Нанеси первым — свежая база',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань рубашки/куртки — свежесть держится на ткани стабильно' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — бергамот + ветивер = чистый фон' }
        ]
      },
      {
        order: 2,
        fragName: 'Afnan 9PM',
        fragId: 'ninepm',
        instruction: 'Через 30 секунд — тёплый слой',
        points: [
          { spot: 'spot-collarbones-under-clothes.png', n: 1, title: 'Ключица под одежду', detail: 'На кожу, под рубашку — ваниль снизу добавляет глубину' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — яблоко + корица при жестикуляции' }
        ]
      }
    ],
    effect: 'Свежесть + тёплая ваниль снизу. Профессионально, но не стерильно.'
  },
  {
    id: 'cognac-evening',
    name: 'Коньячный вечер',
    fragrances: ['brun', 'angels-share'],
    sub: "Liquid Brun + Angels' Share",
    season: 'Зима · Осень (вечер)',
    seasonGroups: ['winter', 'autumn'],
    totalSprays: 4,
    layers: [
      {
        order: 1,
        fragName: 'Liquid Brun',
        fragId: 'brun',
        instruction: 'Нанеси первым — кремовая ванильная база',
        points: [
          { spot: 'spot-chest.png', n: 2, title: 'Грудь под одежду', detail: 'На кожу, под куртку — ваниль + корица Brun создают кремовую подложку для коньяка' },
          { spot: 'spot-collarbones-under-clothes.png', n: 1, title: 'Ключица под одежду', detail: 'На кожу — тепло тела раскроет тонку и бензоин' }
        ]
      },
      {
        order: 2,
        fragName: "Angels' Share",
        fragId: 'angels-share',
        instruction: 'Через 30 секунд — один пшик коньяка сверху',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — ОДИН пшик. Коньяк пробьётся через ваниль Brun и создаст глубину. Экономит Kilian.' }
        ]
      }
    ],
    effect: "Кремовая ваниль снизу, коньяк и пралине сверху — как дорогой бар в Цюрихе. И ты тратишь 1 пшик Kilian вместо 3."
  },
  {
    id: 'sweet-contrast',
    name: 'Сладкий контраст',
    fragrances: ['fakhar', 'angels-share'],
    sub: "Fakhar Black + Angels' Share",
    season: 'Осень · Тёплая зима · Прохладная весна',
    seasonGroups: ['autumn', 'winter', 'spring'],
    totalSprays: 4,
    layers: [
      {
        order: 1,
        fragName: "Angels' Share",
        fragId: 'angels-share',
        instruction: 'Нанеси первым — скрытая тёплая база на кожу',
        points: [
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — коньяк + пралине как скрытый тёплый слой' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'На кожу — Angels\' Share проступит через 30 минут, когда Fakhar сядет' }
        ]
      },
      {
        order: 2,
        fragName: 'Fakhar Black',
        fragId: 'fakhar',
        instruction: 'Через 30 секунд — свежий верхний слой на одежду',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — свежий бергамот + ветивер перекрывает сладость. Через полчаса коньяк начнёт проступать из-под свежести' }
        ]
      }
    ],
    effect: "Сначала свежесть, потом — коньячная глубина. Fakhar балансирует Angels' Share, и можно носить даже осенью днём."
  },
  {
    id: 'icy-mango',
    name: 'Ледяное Манго',
    fragrances: ['opulent-dubai', 'pacific-aura'],
    sub: 'Opulent Dubai + Pacific Aura',
    season: 'Весна · Лето',
    seasonGroups: ['spring', 'summer'],
    totalSprays: 9,
    layers: [
      {
        order: 1,
        fragName: 'Opulent Dubai',
        fragId: 'opulent-dubai',
        instruction: 'Нанеси первым — тропическая фруктовая база',
        points: [
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'На кожу — манго и имбирь как тёплый фундамент' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — амбра и кедр раскроются от тепла тела' }
        ]
      },
      {
        order: 2,
        fragName: 'Pacific Aura',
        fragId: 'pacific-aura',
        instruction: 'Через 30 секунд — ледяной свежий слой поверх',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу (поверх)', detail: 'На кожу — мята и цитрон охлаждают манго Dubai' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — акватический шлейф позади' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — морской бриз вокруг' }
        ]
      }
    ],
    effect: 'Pacific Aura охлаждает композицию мятной акватикой, а Dubai дает глубокий фруктовый шлейф манго.'
  },
  {
    id: 'tropical-storm',
    name: 'Тропический Шторм',
    fragrances: ['opulent-dubai', 'fursan'],
    sub: 'Opulent Dubai + Qaed Al Fursan',
    season: 'Лето · Теплая осень',
    seasonGroups: ['summer', 'autumn'],
    totalSprays: 10,
    layers: [
      {
        order: 1,
        fragName: 'Opulent Dubai',
        fragId: 'opulent-dubai',
        instruction: 'Нанеси первым — манговая тропическая база',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — манго и грейпфрут как сочный фундамент' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — амбра Dubai даст глубину' }
        ]
      },
      {
        order: 2,
        fragName: 'Qaed Al Fursan',
        fragId: 'fursan',
        instruction: 'Через 30 секунд — ананасово-удовый штурм поверх',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — ананас и уд дают дымный шлейф' },
          { spot: 'spot-shoulders-clothes.png', n: 4, title: 'Плечи на одежду', detail: 'На ткань — по два на каждое, фруктовый взрыв' }
        ]
      }
    ],
    effect: 'Мощный микс манго и ананаса на древесно-дымной базе. Максимальный шлейф.'
  },
  {
    id: 'cyber-jungle',
    name: 'Кибер-Джунгли',
    fragrances: ['encelade', 'pacific-aura'],
    sub: 'Encelade + Pacific Aura',
    season: 'Весна · Лето',
    seasonGroups: ['spring', 'summer'],
    totalSprays: 7,
    layers: [
      {
        order: 1,
        fragName: 'Encelade',
        fragId: 'encelade',
        instruction: 'Нанеси первым — он ОЧЕНЬ мощный, минимум!',
        points: [
          { spot: 'spot-neck-back.png', n: 1, title: 'Шея сзади на кожу', detail: 'На кожу — ОДИН пшик! Encelade пробьёт что угодно' },
          { spot: 'spot-lower-back.png', n: 1, title: 'Поясница на кожу', detail: 'На кожу — зелёная металлика будет проступать снизу' }
        ]
      },
      {
        order: 2,
        fragName: 'Pacific Aura',
        fragId: 'pacific-aura',
        instruction: 'Через 30 секунд — мятная акватика смягчает Encelade',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — мята и цитрон охлаждают агрессию Encelade' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — инжир и амброксан как акватический шлейф' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — по одному, свежесть при каждом движении' }
        ]
      }
    ],
    effect: 'Холодная мята и инжир Pacific Aura смягчают агрессивную металлическую зелень Encelade.'
  },
  {
    id: 'mango-mousse',
    name: 'Манговый Мусс',
    fragrances: ['brun', 'opulent-dubai'],
    sub: 'Liquid Brun + Opulent Dubai',
    season: 'Осень · Зима · Прохладный вечер',
    seasonGroups: ['autumn', 'winter'],
    totalSprays: 8,
    layers: [
      {
        order: 1,
        fragName: 'Liquid Brun',
        fragId: 'brun',
        instruction: 'Нанеси первым — сливочная ванильная база',
        points: [
          { spot: 'spot-neck-back.png', n: 2, title: 'Шея сзади на кожу', detail: 'На кожу — корица и ваниль как кремовый фундамент' },
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — тонка и бензоин создадут сладкую подушку' }
        ]
      },
      {
        order: 2,
        fragName: 'Opulent Dubai',
        fragId: 'opulent-dubai',
        instruction: 'Через 30 секунд — тропический слой поверх сливок',
        points: [
          { spot: 'spot-neck-front.png', n: 2, title: 'Шея спереди на кожу', detail: 'На кожу — манго и имбирь поверх ванили = десерт' },
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — амбра Dubai + тонка Brun в шлейфе' }
        ]
      }
    ],
    effect: 'Сливочная ваниль и специи превращают тропическое манго в изысканный гурманский десерт.'
  },
  {
    id: 'tropical-waterfall',
    name: 'Тропический водопад',
    fragrances: ['aether', 'fursan'],
    sub: 'Aether Extrait + Qaed Al Fursan',
    season: 'Весна · Лето (день)',
    seasonGroups: ['spring', 'summer'],
    totalSprays: 6,
    layers: [
      {
        order: 1,
        fragName: 'Aether Extrait',
        fragId: 'aether',
        instruction: 'Нанеси первым — зелёная яблочная база',
        points: [
          { spot: 'spot-collarbones-skin.png', n: 2, title: 'Ключицы на кожу', detail: 'На кожу — создаёт зелёную яблочную базу' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На одежду — закрепляет эффект свежести надолго' }
        ]
      },
      {
        order: 2,
        fragName: 'Qaed Al Fursan',
        fragId: 'fursan',
        instruction: 'Через 30 секунд — ананасовый акцент поверх',
        points: [
          { spot: 'spot-chest.png', n: 1, title: 'Грудь на кожу', detail: 'На кожу — ананасовая сладость в центр' },
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — для фруктового шлейфа сзади' }
        ]
      }
    ],
    effect: 'Яблочно-древесный Aether смешивается с сочным ананасом Al Fursan, создавая вайб супер-дорогого нишевого фруктового коктейля.'
  },
  {
    id: 'ultimate-fresh',
    name: 'Ультимативный Свежак',
    fragrances: ['turathi-blue', 'opulent-dubai'],
    sub: 'Turathi Blue + Opulent Dubai',
    season: 'Лето (жара)',
    seasonGroups: ['summer'],
    totalSprays: 7,
    layers: [
      {
        order: 1,
        fragName: 'Turathi Blue',
        fragId: 'turathi-blue',
        instruction: 'Нанеси первым — амброксаново-грейпфрутовая мощь',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — амброксановая и грейпфрутовая мощь' },
          { spot: 'spot-wrists.png', n: 2, title: 'Запястья на кожу', detail: 'На кожу — диффузность при движении' }
        ]
      },
      {
        order: 2,
        fragName: 'Opulent Dubai',
        fragId: 'opulent-dubai',
        instruction: 'Через 30 секунд — тропическая свежесть поверх',
        points: [
          { spot: 'spot-collarbones-under-clothes.png', n: 2, title: 'Ключицы под одежду', detail: 'Под одежду — тропическая свежесть манго' },
          { spot: 'spot-hair.png', n: 1, title: 'Волосы', detail: 'На волосы — энергичный фруктовый вайб сверху' }
        ]
      }
    ],
    effect: 'Мощный цитрусово-амбровый скелет Turathi обрастает тропической свежестью Opulent Dubai, идеальная броня против жары.'
  },
  {
    id: 'green-tea-ceremony',
    name: 'Чайная церемония',
    fragrances: ['marwa', 'encelade'],
    sub: 'Marwa + Encelade',
    season: 'Весна · Осень (день)',
    seasonGroups: ['spring', 'autumn'],
    totalSprays: 7,
    layers: [
      {
        order: 1,
        fragName: 'Encelade',
        fragId: 'encelade',
        instruction: 'Нанеси первым — зелёная металлическая база (минимум!)',
        points: [
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'На кожу — ОДИН пшик. Зелёный ирис как скрытый фундамент' },
          { spot: 'spot-lower-back.png', n: 1, title: 'Поясница на кожу', detail: 'На кожу — металлика будет проступать снизу через час' }
        ]
      },
      {
        order: 2,
        fragName: 'Arabiyat Prestige Marwa',
        fragId: 'marwa',
        instruction: 'Через 30 секунд — чайная свежесть поверх',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — чёрный чай и бергамот создают шлейф' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — цитрусы держатся дольше на ткани' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — нероли при жестикуляции' }
        ]
      }
    ],
    effect: 'Зелёный металлик Encelade придаёт чайной свежести Marwa нишевую глубину. Два зелёных характера, но совершенно разные текстуры.'
  },
  {
    id: 'citrus-ambroxan',
    name: 'Цитрусовый амброксан',
    fragrances: ['marwa', 'turathi-blue'],
    sub: 'Marwa + Turathi Blue',
    season: 'Весь год',
    seasonGroups: ['universal'],
    totalSprays: 8,
    layers: [
      {
        order: 1,
        fragName: 'Turathi Blue',
        fragId: 'turathi-blue',
        instruction: 'Нанеси первым — амброксановый скелет',
        points: [
          { spot: 'spot-behind-ears.png', n: 2, title: 'За уши на кожу', detail: 'На кожу — грейпфрут и амброксан как мощная база проекции' },
          { spot: 'spot-collarbones-skin.png', n: 1, title: 'Ключица на кожу', detail: 'На кожу — специи Turathi создают глубину' }
        ]
      },
      {
        order: 2,
        fragName: 'Arabiyat Prestige Marwa',
        fragId: 'marwa',
        instruction: 'Через 30 секунд — чайная мягкость поверх',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'На кожу — бергамот и чёрный чай смягчают агрессию Turathi' },
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'На ткань — нероли и кедр на ткани для стойкости' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — лимон при жестикуляции' }
        ]
      }
    ],
    effect: 'Два амброксановых аромата усиливают друг друга: Turathi даёт мощь и статус, Marwa — чайную элегантность. Универсальная комбинация на каждый день.'
  },
  {
    id: 'amber-cognac',
    name: 'Амбровый коньяк',
    fragrances: ['blonde-amber', 'angels-share'],
    sub: "Blonde Amber + Angels' Share",
    season: 'Зима · Холодная осень (вечер)',
    seasonGroups: ['winter', 'autumn'],
    totalSprays: 4,
    layers: [
      {
        order: 1,
        fragName: "Angels' Share",
        fragId: 'angels-share',
        instruction: 'Нанеси первым — коньячная база',
        points: [
          { spot: 'spot-collarbones-under-clothes.png', n: 1, title: 'Ключица под одежду', detail: 'На кожу — коньяк и корица как тёплая подложка' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястье на кожу', detail: 'На кожу — пралине при близком контакте' }
        ]
      },
      {
        order: 2,
        fragName: 'Blonde Amber',
        fragId: 'blonde-amber',
        instruction: 'Через 30 секунд — ОДИН пшик амбры! Больше не нужно.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — амбра и тубероза превращают коньяк в роскошный десерт' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'На кожу, под куртку — ваниль и мирра будут греть весь вечер' }
        ]
      }
    ],
    effect: "Коньяк Angels' Share + густая амбра Blonde Amber = дурманящий зимний эликсир. Два пшика Blonde Amber достаточно — он невероятно плотный."
  },
  {
    id: 'tobacco-amber',
    name: 'Табак и амбра',
    fragrances: ['blonde-amber', 'tobacco'],
    sub: 'Blonde Amber + Red Tobacco',
    season: 'Зима (вечер, мороз)',
    seasonGroups: ['winter'],
    totalSprays: 4,
    layers: [
      {
        order: 1,
        fragName: 'Blonde Amber',
        fragId: 'blonde-amber',
        instruction: 'Нанеси первым — амбровая сладкая база',
        points: [
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'На кожу — амбра и тубероза как бархатный фундамент для табака' },
          { spot: 'spot-inner-elbow.png', n: 1, title: 'Сгиб локтя на кожу', detail: 'На кожу — ваниль и тонка при движении руки' }
        ]
      },
      {
        order: 2,
        fragName: 'Red Tobacco',
        fragId: 'tobacco',
        instruction: 'Через 30 секунд — табак поверх, СТРОГО 2 пшика!',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'На кожу — табак и красный перец как дымный шлейф' },
          { spot: 'spot-shoulder-blades.png', n: 1, title: 'Лопатка на одежду', detail: 'На ткань — табак на ткани держится сутками' }
        ]
      }
    ],
    effect: 'Два зимних короля вместе: амбровая сладость Blonde Amber смягчает агрессию Red Tobacco. Результат — дымный, бархатный, невероятно дорогой шлейф. Только для мороза.'
  },
  {
    id: 'spiced-bourbon-apple',
    name: 'Пряный Яблочный Бурбон',
    fragrances: ['asad-bourbon', 'ninepm'],
    sub: 'Asad Bourbon + Afnan 9PM',
    season: 'Осень · Зима',
    seasonGroups: ['autumn', 'winter'],
    totalSprays: 6,
    layers: [
      {
        order: 1,
        fragName: 'Lattafa Asad Bourbon',
        fragId: 'asad-bourbon',
        instruction: 'Нанеси первым как темную, алкогольную и пряную базу.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Глубокий шлейф' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'Сердцевина комбинации' }
        ]
      },
      {
        order: 2,
        fragName: 'Afnan 9PM',
        fragId: 'ninepm',
        instruction: 'Добавь сверху для яркой, сладкой яблочной свежести.',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Диффузная сладость' },
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'Для собственного шлейфа' }
        ]
      }
    ],
    effect: 'Напоминает дорогой зимний коктейль — бурбон с запеченным яблоком, корицей и ванилью.'
  },
  {
    id: 'billionaire-club',
    name: 'Клуб Миллиардеров',
    fragrances: ['blonde-amber', 'asad-bourbon'],
    sub: 'Blonde Amber + Asad Bourbon',
    season: 'Зима (только вечер)',
    seasonGroups: ['winter'],
    totalSprays: 4,
    layers: [
      {
        order: 1,
        fragName: 'XXI Art Deco Blonde Amber',
        fragId: 'blonde-amber',
        instruction: 'Всего два пшика этого эликсира создадут роскошную амбровую базу.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Роскошный хвост' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'Долгоиграющая база' }
        ]
      },
      {
        order: 2,
        fragName: 'Lattafa Asad Bourbon',
        fragId: 'asad-bourbon',
        instruction: 'Дополни сверху для добавления брутальных алкогольных и пряных нот.',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Пряный алкогольный акцент' }
        ]
      }
    ],
    effect: 'Абсолютно бескомпромиссный, тяжелый и дорогой шлейф, который заполнит собой любую комнату.'
  },
  {
    id: 'vintage-pineapple',
    name: 'Сливовый Ананас',
    fragrances: ['vintage-radio', 'fursan'],
    sub: 'Vintage Radio + Qaed Al Fursan',
    season: 'Весь год',
    seasonGroups: ['universal', 'summer', 'spring'],
    totalSprays: 6,
    layers: [
      {
        order: 1,
        fragName: 'Lattafa Vintage Radio',
        fragId: 'vintage-radio',
        instruction: 'Нанеси первым — сливовая фруктовая база с шалфеем.',
        points: [
          { spot: 'spot-nape.png', n: 2, title: 'Затылок на кожу', detail: 'Сливовый шлейф' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'Пало санто как фундамент' }
        ]
      },
      {
        order: 2,
        fragName: 'Qaed Al Fursan',
        fragId: 'fursan',
        instruction: 'Через 30 секунд — ананас поверх сливы.',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Ананасовая диффузия' },
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'Фруктовый контраст' }
        ]
      }
    ],
    effect: 'Мощный фруктовый коктейль. Ананас усиливает сливу, создавая эффект нишевого свежака.'
  },
  {
    id: 'mystical-aether',
    name: 'Эфирная Слива',
    fragrances: ['vintage-radio', 'aether'],
    sub: 'Vintage Radio + Aether',
    season: 'Весна · Лето',
    seasonGroups: ['spring', 'summer'],
    totalSprays: 5,
    layers: [
      {
        order: 1,
        fragName: 'Lattafa Vintage Radio',
        fragId: 'vintage-radio',
        instruction: 'Нанеси первым — сливовая древесная база.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Мягкий сливовый фон' },
          { spot: 'spot-wrists.png', n: 1, title: 'Запястья на кожу', detail: 'Пало санто при движении' }
        ]
      },
      {
        order: 2,
        fragName: 'French Avenue Aether Extrait',
        fragId: 'aether',
        instruction: 'Через 30 секунд — молекулярная свежесть поверх.',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Свежее яблоко на ткани' },
          { spot: 'spot-neck-front.png', n: 1, title: 'Шея спереди на кожу', detail: 'Невесомая аура' }
        ]
      }
    ],
    effect: 'Aether добавляет молекулярный объем и свежесть яблока, делая Vintage Radio невесомым.'
  },
  {
    id: 'boozy-plum',
    name: 'Пьяная Слива',
    fragrances: ['vintage-radio', 'asad-bourbon'],
    sub: 'Vintage Radio + Asad Bourbon',
    season: 'Зима · Осень',
    seasonGroups: ['winter', 'autumn'],
    totalSprays: 4,
    layers: [
      {
        order: 1,
        fragName: 'Lattafa Vintage Radio',
        fragId: 'vintage-radio',
        instruction: 'Нанеси первым — сливовая база с пало санто.',
        points: [
          { spot: 'spot-nape.png', n: 1, title: 'Затылок на кожу', detail: 'Фруктовый шлейф' },
          { spot: 'spot-chest.png', n: 1, title: 'Грудь под одежду', detail: 'Сандал и уд как фундамент' }
        ]
      },
      {
        order: 2,
        fragName: 'Lattafa Asad Bourbon',
        fragId: 'asad-bourbon',
        instruction: 'Через 30 секунд — бурбон и специи поверх сливы.',
        points: [
          { spot: 'spot-shoulders-clothes.png', n: 2, title: 'Плечи на одежду', detail: 'Алкогольный пряный акцент' }
        ]
      }
    ],
    effect: 'Глубокий, тяжелый вечерний аромат. Бурбон и специи превращают сливу в дорогой ликер.'
  }
];

/* ===== QUOTES ===== */

const QUOTES = [
  /* ── Оригинальные ── */
  'Парфюм должен приходить на секунду раньше тебя и уходить на секунду позже.',
  'Запах на тебе. Не ты в запахе.',
  'Лучше два пшика, которые запомнят, чем десять, от которых уйдут.',
  'Шлейф — это подпись. Не подделывай её количеством.',
  'Сладкое не значит детское. Холодное не значит взрослое.',
  'Если ты сомневаешься — один пшик. Всегда.',
  'Затылок — это твой главный инструмент. Остальное — декор.',
  'Духи нюхают те, кто рядом. Ты — последний, кто должен их слышать.',
  'Оверспрей — это крик. Дозировка — это шёпот. Шёпот громче.',
  'Парфюм без повода — лучший повод.',
  'В помещении — меньше. На улице — средне. На свидании — как всегда.',
  'Красивый человек в плохом парфюме — грустная история.',
  'Аромат — это невидимый аксессуар, который запоминают дольше всего.',
  'Один пшик на затылок стоит пяти на рубашку.',
  'Парфюм не меняет тебя. Он показывает ту версию, которую ты выбрал сегодня.',
  /* ── Реальные цитаты ── */
  'Духи — это невидимый, но незабываемый аксессуар. — Коко Шанель',
  'Женщина, которая не пользуется духами, не имеет будущего. — Коко Шанель',
  'Наносите духи туда, где вы хотите, чтобы вас поцеловали. — Коко Шанель',
  'Духи женщины говорят о ней больше, чем её почерк. — Кристиан Диор',
  'Хорошие манеры и хороший одеколон превращают мужчину в джентльмена. — Том Форд',
  'Парфюм — самая интенсивная форма памяти. — Жан-Поль Герлен',
  'Великие духи опознаются по тому почти физическому шоку, который ты испытываешь, встречая их впервые. — Эдмон Рудницка',
  'Парфюмер — это переводчик эмоций на язык запахов. — Жан-Клод Эллена',
  'Аромат — это искусство, которое делает память живой. — Франсис Куркджян',
  'Создание аромата — это как написание музыки: нужна гармония нот. — Жак Польж',
  'В каждом флаконе — маленькая вселенная. — Серж Лютенс',
  'Я не создаю духи. Я создаю мечты. — Эсте Лаудер',
  'Парфюм должен быть загадкой, а не объявлением. — Джорджо Армани',
  'Аромат — это автограф вашей души. — Кароль Синьяр',
  /* ── Новые оригинальные ── */
  'Твой парфюм помнят дольше, чем твои слова.',
  'Аромат не спрашивает разрешения — он заходит первым.',
  'Три пшика на затылок — и ты уже не такой, как все.',
  'Сначала парфюм. Потом всё остальное.',
  'Шлейф должен звучать как музыка, а не как сирена.',
  'Парфюм — единственный аксессуар, который невозможно подделать стилем.',
  'Нишевый не значит лучший. Подходящий — значит лучший.',
  'Утро начинается не с кофе. Утро начинается с выбора аромата.',
  'Чем тише аромат — тем ближе хочется подойти.',
  'Парфюм на одежде — это удобно. Парфюм на коже — это искусство.',
  'У каждого дня свой аромат. Не навязывай вчерашний.',
  'Настоящий шлейф — это когда тебя вспоминают по запаху.',
  'Зимний вечер без уда — потерянный вечер.',
  'Парфюм не носят. Парфюм проживают.',
  'Запах — это первое впечатление, которое невозможно стереть.',
  'Один аромат на весь год — это как один плейлист навсегда.',
  'Хороший парфюм — как хороший костюм: сидит идеально и не кричит.',
  'Ваниль зимой, ветивер летом. Остальное — интуиция.',
  'Аромат на запястье — для себя. Аромат на затылке — для мира.',
  'Лучший комплимент парфюму — когда спрашивают: что это на тебе?',
  'Парфюм — это роскошь, которую ты надеваешь каждый день. — Ив Сен-Лоран'
];

/* ===== SCENT-OF-DAY REASONS ===== */

const REASONS = {
  qahwa: {
    cold: [
      'Кофе и кардамон идеально раскрываются в холодном воздухе.',
      'Qahwa создаёт уютное облако, когда за окном минус.',
      'Финики и пралине — лучшие компаньоны для холода.'
    ],
    warm: [
      'Вечер тёплого дня — кофейные ноты не будут давить.',
      'Лёгкая прохлада раскрывает кардамон идеально.'
    ]
  },
  brun: {
    cold: [
      'Корица и ваниль — магнит комплиментов в холодный день.',
      'Liquid Brun на морозе звучит как кремовый десерт.',
      'Тонка и бензоин создают тёплый кокон вокруг тебя.'
    ],
    warm: [
      'Вечерний Brun в переходную погоду — мягкий и элегантный.'
    ]
  },
  fakhar: {
    cold: [
      'Свежесть Fakhar пробьёт даже серый зимний день.'
    ],
    warm: [
      'Fakhar создан для тёплой погоды — бергамот и ветивер на солнце.',
      'Жарко и влажно? Только Fakhar. Остальные поплывут.',
      'Свежий аромат для свежего дня. Без компромиссов.'
    ]
  },
  fursan: {
    cold: [
      'Ананас + уд на холоде — дымная фруктовая бомба.'
    ],
    warm: [
      'Ананас Fursan раскрывается на тёплом воздухе невероятно.',
      'Тёплый день + Fursan = шлейф на 3 метра.',
      'Qaed Al Fursan в тепле — это летний флекс.'
    ]
  },
  encelade: {
    cold: [
      'Encelade в прохладе — зелёный металлик без агрессии.',
      'Идеальная температура для ириса и ветивера.'
    ],
    warm: [
      'Нишевый зелёный аккорд на тёплом вечере — интрига.'
    ]
  },
  tobacco: {
    cold: [
      'Red Tobacco — король мороза. Табак и перец в ледяном воздухе.',
      'Холодный вечер Ольтена заслуживает Red Tobacco.',
      'Ниже нуля? Время для ядерного табака.'
    ],
    warm: []
  },
  ninepm: {
    cold: [
      'Яблоко и корица 9PM — как тёплый сидр на холоде.',
      '9PM в прохладе — мягкий, молодой, комплиментарный.'
    ],
    warm: [
      'Лёгкий вечер для лёгкой сладости 9PM.',
      '9PM на прогулке в тёплый вечер — классика.'
    ]
  },
  'angels-share': {
    cold: [
      'Идеально согревает нотами коньяка и корицы.',
      'Звучит уютно, дорого и как раз раскрывается на холодном воздухе.',
      'Сладкая база из пралине поднимет настроение в серый день.'
    ],
    warm: []
  },
  'opulent-dubai': {
    cold: [
      'Амброво-древесная база отлично согревает, а имбирь добавляет пикантности в мороз.',
      'Манго звучит ярко и необычно на фоне зимнего холода.'
    ],
    warm: [
      'Тропический профиль идеально раскрывается в жару, создавая атмосферу отдыха.',
      'Древесные ноты и жасмин в тепле звучат благородно и дорого.'
    ]
  },
  'pacific-aura': {
    cold: [
      'Мята и цитрон на холоде становятся хрустальными и звенящими.',
      'Амброксан дает ощущение морозной чистоты.'
    ],
    warm: [
      'Настоящее спасение в жару — мята и инжир работают как ледяной душ.',
      'Легкая акватика не душит и создает свежую ауру вокруг.'
    ]
  },
  aether: {
    cold: [
      'Зеленое яблоко звучит кристально и звонко на прохладном воздухе.',
      'Напоминает о лете в серые дни.'
    ],
    warm: [
      'Идеальный эффект свежевымытых волос и дорогого шампуня.',
      'В жару это как глоток холодного зеленого чая с яблоком.',
      'Максимальная природная свежесть, которая не душит.'
    ]
  },
  'turathi-blue': {
    cold: [
      'Амброксан и специи пробивают холодный воздух мощным шлейфом.',
      'Солидно звучит с курткой или пальто.'
    ],
    warm: [
      'Сочный, реалистичный грейпфрут идеально освежает в теплый день.',
      'Звучит дорого, статусно и дарит энергию.',
      'Амброксан на горячей коже создает невероятную ауру чистоты.'
    ]
  },
  marwa: {
    cold: [
      'Зелёный чай и нероли Marwa звучат свежо даже в прохладе.'
    ],
    warm: [
      'Лёгкий зелёный аромат идеально ложится на тёплую кожу.',
      'Чёрный чай и мускус создают ощущение чистоты и спокойствия.',
      'Marwa в жару — это стиль без усилий, свежесть без приторности.'
    ]
  },
  'blonde-amber': {
    cold: [
      'Тубероза и ваниль Blonde Amber — уютный шлейф в холодный вечер.',
      'Амбровая база идеально раскрывается в морозном воздухе.',
      'Сладкий, но не приторный — тонка и пачули звучат благородно на холоде.'
    ],
    warm: [
      'Вечером в тёплую погоду Blonde Amber звучит мягко и соблазнительно.'
    ]
  },
  'asad-bourbon': {
    cold: [
      'Бурбон и ваниль идеально согревают.',
      'Пряности раскрываются максимально богато на морозе.'
    ],
    warm: [
      'Слишком плотный и сладкий для тепла.',
      'Специи могут звучать тяжело и удушливо.'
    ]
  },
  'vintage-radio': {
    cold: [
      'Слива становится более густой и сладкой.',
      'Древесные ноты пало санто согревают.'
    ],
    warm: [
      'Аромат достаточно легок для летних вечеров.',
      'Шалфей дает необходимую фужерную свежесть.'
    ]
  }
};

/* ===== WEATHER AI PROMPT ===== */

const AI_PROMPT = `Дай прогноз погоды для города Ольтен, Швейцария. Разбей ответ на блоки: 08:00-12:00, 12:00-17:00, 17:00-22:00. Для каждого блока укажи:
- Температура: [число]°C
- Условия: [солнечно / облачно / дождь / снег / туман]
- Ветер: [слабый / средний / сильный]
- Влажность: [низкая / средняя / высокая]
В конце дай общий вердикт одной фразой. Без лишних слов.`;

/* ===== HELPERS ===== */

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getCurrentSeason() {
  const m = new Date().getMonth();
  if (m >= 2 && m <= 4) return 'spring';
  if (m >= 5 && m <= 7) return 'summer';
  if (m >= 8 && m <= 10) return 'autumn';
  return 'winter';
}

function getDaytime() {
  const h = new Date().getHours();
  return h >= 6 && h < 18 ? 'day' : 'night';
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pluralize(n, one, few, many) {
  const abs = Math.abs(n) % 100;
  const n1 = abs % 10;
  if (abs > 10 && abs < 20) return many;
  if (n1 > 1 && n1 < 5) return few;
  if (n1 === 1) return one;
  return many;
}

function sprayWord(n) {
  return pluralize(n, 'пшик', 'пшика', 'пшиков');
}

/* ===== WEATHER ===== */

function getWeatherKey() { return 'levs-weather-' + todayKey(); }

function loadWeather() {
  // Clean old keys
  const prefix = 'levs-weather-';
  const today = todayKey();
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const k = localStorage.key(i);
    if (k && k.startsWith(prefix) && k !== prefix + today) {
      localStorage.removeItem(k);
    }
  }
  const raw = localStorage.getItem(getWeatherKey());
  return raw ? JSON.parse(raw) : null;
}

function saveWeather(data) {
  localStorage.setItem(getWeatherKey(), JSON.stringify(data));
}

function getWeatherState() {
  return loadWeather() || {
    temp: 10,
    condition: null,
    wind: 'weak',
    humidity: 'medium'
  };
}

/* ===== SCENT OF THE DAY ALGORITHM v2 (Revolution Update) ===== */

/*
 * Сезон определяется по warmthScore, НЕ по календарю.
 * score <= -1  → 'winter'  (холодная погода)
 * score >= 1   → 'summer'  (тёплая/жаркая погода)
 * score === 0  → 'spring' или 'autumn' (берём лучший из двух для каждого аромата)
 */
function getSeasonFromScore(score) {
  if (score <= -1) return 'winter';
  if (score >= 1) return 'summer';
  return 'transitional'; // spring/autumn — выберем лучший вариант для каждого аромата
}

function computeWarmthScore(weather) {
  let score = 0;
  const t = weather.temp;
  if (t < 0) score = -2;
  else if (t <= 10) score = -1;
  else if (t <= 18) score = 0;
  else if (t <= 25) score = 1;
  else score = 2;

  // Conditions adjust
  if (['rain', 'snow', 'fog'].includes(weather.condition)) score -= 1;
  if (weather.wind === 'strong') score -= 1;
  if (weather.condition === 'sun' && weather.wind === 'weak') score += 1;

  return score;
}

/*
 * Ароматы, которые "удушливы" при высокой влажности + тепле (>20°C).
 * Доминирующие ноты: ваниль, табак, тяжёлая сладость, гурманские.
 * При высокой влажности + score >= 1 эти ароматы принудительно исключаются.
 */
const HUMIDITY_HEAVY_IDS = ['qahwa', 'brun', 'tobacco', 'ninepm', 'angels-share', 'blonde-amber', 'asad-bourbon'];

/*
 * Получить статус матрицы сезон/время для аромата.
 * При transitional (score=0) берём лучший статус из spring и autumn.
 * Приоритет: full > caution > forbidden
 */
function getMatrixStatus(frag, weatherSeason, daytime) {
  const m = frag.seasonTimeMatrix;
  if (!m) return 'forbidden';

  if (weatherSeason === 'transitional') {
    const statusSpring = m.spring ? m.spring[daytime] : 'forbidden';
    const statusAutumn = m.autumn ? m.autumn[daytime] : 'forbidden';
    const rank = { full: 2, caution: 1, forbidden: 0 };
    return (rank[statusSpring] || 0) >= (rank[statusAutumn] || 0) ? statusSpring : statusAutumn;
  }

  const row = m[weatherSeason];
  return row ? row[daytime] : 'forbidden';
}

function getScentOfDay(weather) {
  if (!weather.condition) return null;

  const score = computeWarmthScore(weather);
  const weatherSeason = getSeasonFromScore(score);
  const daytime = getDaytime();
  let candidateIds = [];

  /* --- Подбор кандидатов по warmth score --- */
  if (score <= -3) {
    // Экстремальный холод: только самые тяжёлые
    candidateIds = ['tobacco', 'brun', 'qahwa', 'angels-share', 'blonde-amber', 'asad-bourbon'];
  } else if (score === -2) {
    candidateIds = ['tobacco', 'brun', 'qahwa', 'angels-share', 'ninepm', 'opulent-dubai', 'blonde-amber', 'asad-bourbon', 'vintage-radio'];
  } else if (score === -1) {
    candidateIds = ['qahwa', 'brun', 'angels-share', 'ninepm', 'opulent-dubai', 'fursan', 'blonde-amber', 'asad-bourbon', 'vintage-radio'];
  } else if (score === 0) {
    candidateIds = ['encelade', 'ninepm', 'fursan', 'opulent-dubai', 'aether', 'turathi-blue', 'marwa', 'asad-bourbon', 'vintage-radio'];
  } else if (score === 1) {
    candidateIds = ['fursan', 'fakhar', 'opulent-dubai', 'pacific-aura', 'aether', 'turathi-blue', 'marwa', 'vintage-radio'];
  } else if (score === 2) {
    candidateIds = ['fakhar', 'pacific-aura', 'aether', 'turathi-blue', 'fursan', 'marwa'];
  } else {
    // score >= 3: экстремальная жара — только свежаки
    candidateIds = ['fakhar', 'pacific-aura', 'aether', 'turathi-blue', 'marwa'];
  }

  /* --- Фильтр влажности: высокая + тепло → убрать тяжёлые --- */
  if (weather.humidity === 'high' && weather.temp > 20) {
    candidateIds = candidateIds.filter(id => !HUMIDITY_HEAVY_IDS.includes(id));
  }

  /* --- Классифицируем каждого кандидата по матрице --- */
  const perfect = [];   // status = 'full'
  const caution = [];   // status = 'caution'

  candidateIds.forEach(id => {
    const frag = FRAGRANCES.find(f => f.id === id);
    if (!frag) return;
    const status = getMatrixStatus(frag, weatherSeason, daytime);
    if (status === 'full') perfect.push(frag);
    else if (status === 'caution') caution.push(frag);
    // forbidden — не добавляем вообще
  });

  if (perfect.length === 0 && caution.length === 0) return null;

  /* --- Приоритезация: "универсальные солдаты" вниз при жаре --- */
  if (score >= 2) {
    // В жару свежие ароматы важнее универсальных
    const freshIds = ['fakhar', 'pacific-aura', 'aether', 'turathi-blue'];
    perfect.sort((a, b) => {
      const aFresh = freshIds.includes(a.id) ? 0 : 1;
      const bFresh = freshIds.includes(b.id) ? 0 : 1;
      return aFresh - bFresh;
    });
  }

  /* --- Формируем результат --- */
  const condLabels = { sun: 'солнечно', clouds: 'облачно', rain: 'дождь', snow: 'снег', fog: 'туман' };
  const condText = condLabels[weather.condition] || '';
  const summary = `${condText}, ${weather.temp > 0 ? '+' : ''}${weather.temp}°C`;
  const isWarm = score >= 0;

  function buildResult(frag) {
    const reasonsObj = REASONS[frag.id];
    let reason = frag.vibeCaption;
    if (reasonsObj) {
      const pool = isWarm ? reasonsObj.warm : reasonsObj.cold;
      const all = [...reasonsObj.cold, ...reasonsObj.warm];
      reason = pool.length > 0 ? randomFrom(pool) : (all.length > 0 ? randomFrom(all) : frag.vibeCaption);
    }
    return { fragrance: frag, reason, summary };
  }

  return {
    perfect: perfect.map(buildResult),
    caution: caution.map(buildResult)
  };
}

/* ===== DOM ELEMENTS ===== */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ===== INIT ===== */

document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initWeather();
  initCopyPrompt();
  initCollection();
  initCombinations();
  initDiary();
  initQuote();
  initNav();
  initSituationFilter();
  updateScentOfDay();
  initRefreshTimers();
  initMaceration();
});

/* ===== HERO ===== */

function initHero() {
  const loc = $('#heroLocation');
  if (loc) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' });
    loc.textContent = 'Ольтен · ' + dateStr;
  }
}

/* ===== NAVIGATION ===== */

function initNav() {
  const btns = $$('.nav-btn');
  const views = ['mainView', 'diaryView', 'macerationView'];

  function hideAll() {
    views.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('hidden');
        el.classList.remove('visible');
      }
    });
  }

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      const scroll = btn.dataset.scroll;

      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      hideAll();

      if (view === 'diary') {
        $('#diaryView').classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderDiary();
      } else if (view === 'maceration') {
        const macView = $('#macerationView');
        macView.classList.remove('hidden');
        macView.classList.add('visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderMaceration();
      } else {
        $('#mainView').classList.remove('hidden');
        if (scroll) {
          setTimeout(() => {
            const target = document.getElementById(scroll);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    });
  });
}

/* ===== WEATHER PICKER ===== */

function initWeather() {
  const state = getWeatherState();

  // Temperature slider
  const slider = $('#tempSlider');
  const tempNum = $('#tempNum');
  if (slider) {
    slider.value = state.temp;
    tempNum.textContent = state.temp;
    slider.addEventListener('input', () => {
      const v = parseInt(slider.value);
      tempNum.textContent = v;
      state.temp = v;
      saveWeather(state);
      updateScentOfDay();
    });
  }

  // Conditions
  const weatherSection = $('#weather');
  const condBtns = $$('#conditionRow .cond-btn');
  function setWeatherBg(val) {
    if (!weatherSection) return;
    let bgDiv = weatherSection.querySelector('.weather-bg');
    if (val && WEATHER_BG[val]) {
      if (!bgDiv) {
        bgDiv = document.createElement('div');
        bgDiv.className = 'weather-bg';
        weatherSection.insertBefore(bgDiv, weatherSection.firstChild);
      }
      bgDiv.style.backgroundImage = `url('${WEATHER_BG[val]}')`;
    } else if (bgDiv) {
      bgDiv.remove();
    }
  }
  condBtns.forEach(btn => {
    if (btn.dataset.val === state.condition) btn.classList.add('active');
    btn.addEventListener('click', () => {
      condBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.condition = btn.dataset.val;
      setWeatherBg(state.condition);
      saveWeather(state);
      updateScentOfDay();
    });
  });
  setWeatherBg(state.condition);

  // Wind
  initPillRow('#windRow', state.wind, (val) => {
    state.wind = val;
    saveWeather(state);
    updateScentOfDay();
  });

  // Humidity
  initPillRow('#humidityRow', state.humidity, (val) => {
    state.humidity = val;
    saveWeather(state);
    updateScentOfDay();
  });

  // Reset
  const resetBtn = $('#resetWeather');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      localStorage.removeItem(getWeatherKey());
      location.reload();
    });
  }
}

function initPillRow(selector, activeVal, onChange) {
  const btns = $$(selector + ' .pill-btn');
  btns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.val === activeVal);
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onChange(btn.dataset.val);
    });
  });
}

/* ===== COPY PROMPT ===== */

function initCopyPrompt() {
  const btn = $('#copyPrompt');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(AI_PROMPT);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = AI_PROMPT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    btn.classList.add('copied');
    const svg = btn.querySelector('svg');
    if (svg) svg.style.color = '#22c55e';
    setTimeout(() => {
      btn.classList.remove('copied');
      if (svg) svg.style.color = '';
    }, 2000);
  });
}

/* ===== SCENT OF THE DAY ===== */

let currentSituation = 'any';

function initSituationFilter() {
  const btns = $$('#situationRow .pill-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSituation = btn.dataset.situation;
      updateScentOfDay();
    });
  });
}

function updateScentOfDay() {
  const container = $('#scentOfDayCard');
  if (!container) return;

  const weather = getWeatherState();
  const result = getScentOfDay(weather);

  if (!result) {
    container.innerHTML = '<div class="sotd-empty">Выбери погоду выше, чтобы получить рекомендацию</div>';
    return;
  }

  let { perfect, caution } = result;

  // Filter by situation
  if (currentSituation !== 'any') {
    const sitFilter = r => {
      const sc = r.fragrance.scenarios[currentSituation];
      return sc && !sc.forbidden;
    };
    perfect = perfect.filter(sitFilter);
    caution = caution.filter(sitFilter);
  }

  if (perfect.length === 0 && caution.length === 0) {
    container.innerHTML = '<div class="sotd-empty">Нет подходящих ароматов для этой комбинации погоды и ситуации</div>';
    return;
  }

  function buildCards(arr, delay0) {
    return arr.map((r, i) => {
      const f = r.fragrance;
      return `
        <div class="sotd-slide fade-in" style="animation-delay:${(delay0 + i) * 0.08}s">
          <div class="sotd-card">
            <div class="sotd-vibe" style="background-image:url('${f.vibe}')"></div>
            <div class="sotd-content">
              <div class="sotd-house">${f.house}</div>
              <div class="sotd-name">${f.name}</div>
              <div class="sotd-reason">${r.summary} — ${r.reason}</div>
              <button class="sotd-btn" onclick="openFragCard('${f.id}')">Открыть инструкцию</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  let html = '';

  /* Perfect Match block */
  if (perfect.length > 0) {
    const label = perfect.length > 1
      ? `<div class="sotd-count">Perfect Match · ${perfect.length} ${pluralize(perfect.length, 'аромат', 'аромата', 'ароматов')}</div>`
      : `<div class="sotd-count">Perfect Match</div>`;
    html += `${label}<div class="sotd-scroll">${buildCards(perfect, 0)}</div>`;
  }

  /* Caution block */
  if (caution.length > 0) {
    html += `
      <div class="sotd-caution-divider">⚠️ Можно, но с осторожностью</div>
      <div class="sotd-scroll sotd-scroll-caution">${buildCards(caution, perfect.length)}</div>
    `;
  }

  container.innerHTML = html;
}

function openFragCard(id) {
  // Switch to main view if on diary
  $('#mainView').classList.remove('hidden');
  $('#diaryView').classList.add('hidden');
  $$('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.scroll === 'collection' && b.dataset.view === 'main');
  });

  // Find and open card
  const card = document.querySelector(`.frag-card[data-id="${id}"]`);
  if (card) {
    // Close others
    $$('.frag-card.open').forEach(c => c.classList.remove('open'));
    card.classList.add('open');
    setTimeout(() => {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

/* ===== COLLECTION ===== */

function initCollection() {
  renderCollection();
  initViewToggle();
}

function sortFragrances() {
  // Always alphabetical
  const list = [...FRAGRANCES];
  list.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
  return list;
}

function initViewToggle() {
  const mode = localStorage.getItem('levs-view-mode') || 'normal';
  applyViewMode(mode);

  $$('.view-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
    btn.addEventListener('click', () => {
      $$('.view-toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const m = btn.dataset.mode;
      localStorage.setItem('levs-view-mode', m);
      applyViewMode(m);
    });
  });
}

function applyViewMode(mode) {
  const grid = $('#collectionGrid');
  if (!grid) return;
  if (mode === 'showcase') {
    grid.classList.add('showcase');
    // Block clicks on cards in showcase mode
    grid.querySelectorAll('.frag-card').forEach(card => {
      card.style.pointerEvents = 'none';
    });
  } else {
    grid.classList.remove('showcase');
    grid.querySelectorAll('.frag-card').forEach(card => {
      card.style.pointerEvents = '';
    });
  }
}

function renderCollection() {
  const grid = $('#collectionGrid');
  if (!grid) return;
  const sorted = sortFragrances();
  grid.innerHTML = sorted.map(f => buildFragCard(f)).join('');
  attachFragListeners();
  // Re-apply view mode after render
  const mode = localStorage.getItem('levs-view-mode') || 'normal';
  applyViewMode(mode);
}

function buildScenarioPoints(sc) {
  if (!sc || sc.forbidden || !sc.points || !sc.points.length) return '';
  return sc.points.map(p => `
    <div class="spray-point">
      <img class="spray-spot" src="levs-scent/spots/${p.spot}" alt="${p.title}" loading="lazy">
      <div class="spray-info">
        <span class="spray-n">${p.n}</span><span class="spray-title">${p.title}</span>
        <div class="spray-detail">${p.detail}</div>
      </div>
    </div>
  `).join('');
}

function buildFragCard(f) {
  const season = getCurrentSeason();
  const chips = [];
  if (f.overspray) chips.push('<span class="frag-chip warn">\u26A0 Оверспрей-риск</span>');
  if (f.refreshHours === null) chips.push('<span class="frag-chip norefresh">\u221E Не обновлять</span>');
  if (!f.overspray && !f.maxCapped) chips.push('<span class="frag-chip universal">\u2713 Универсал</span>');

  // Season time matrix
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const seasonLabels = { winter: 'Зима', spring: 'Весна', summer: 'Лето', autumn: 'Осень' };
  const matrixIcons = { full: '\u2713', caution: '\u25B3', forbidden: '\u2715' };
  const matrixClasses = { full: 'matrix-full', caution: 'matrix-caution', forbidden: 'matrix-forbidden' };

  let matrixRows = seasons.map(s => {
    const m = f.seasonTimeMatrix[s];
    const isCurrent = s === season;
    return `<tr>
      <td class="${isCurrent ? 'current' : ''}">${seasonLabels[s]}</td>
      <td class="${isCurrent ? 'current ' : ''}${matrixClasses[m.day]}"><span>${matrixIcons[m.day]}</span></td>
      <td class="${isCurrent ? 'current ' : ''}${matrixClasses[m.night]}"><span>${matrixIcons[m.night]}</span></td>
    </tr>`;
  }).join('');

  // Notes with images
  const noteChips = (label, arr) => {
    if (!arr || !arr.length) return '';
    const items = arr.map(n => {
      const img = getNoteImage(n);
      if (img) {
        return `<div class="note-item"><img class="note-icon" src="${img}" alt="${n}" loading="lazy"><span class="note-label">${n}</span></div>`;
      }
      return `<div class="note-item"><div class="note-icon note-icon-placeholder">${n.charAt(0)}</div><span class="note-label">${n}</span></div>`;
    }).join('');
    return `<div class="label-upper" style="margin-top:14px">${label}</div><div class="notes-row">${items}</div>`;
  };

  // Scenarios
  const scenarioNames = { school: 'Школа', gym: 'Зал', date: 'Свидание', walk: 'Прогулка', home: 'Дома' };
  const scenarioKeys = Object.keys(scenarioNames);

  // Variations tabs
  const varTabs = f.variations.map((v, i) => `<button class="var-tab${i === 0 ? ' active' : ''}" data-var="${i}">${v.label.split('(')[0].trim()}</button>`).join('');
  const varContents = f.variations.map((v, i) => {
    const points = v.points.map(p => `
      <div class="spray-point">
        <img class="spray-spot" src="levs-scent/spots/${p.spot}" alt="${p.title}" loading="lazy">
        <div class="spray-info">
          <span class="spray-n">${p.n}</span><span class="spray-title">${p.title}</span>
          <div class="spray-detail">${p.detail}</div>
        </div>
      </div>
    `).join('');
    return `<div class="var-content${i === 0 ? '' : ' hidden'}" data-var="${i}">${points}</div>`;
  }).join('');

  // Refresh block with freshness bar
  let refreshBlock = '';
  if (f.refreshHours !== null) {
    refreshBlock = `
      <div class="refresh-block" data-frag="${f.id}">
        <div class="label-upper">Когда обновлять</div>
        <div class="refresh-timer" data-frag="${f.id}"></div>
        <button class="btn-black" onclick="markApplied('${f.id}', ${f.refreshHours})">Я только что нанёс</button>
        <div class="freshness-bar-wrap" data-frag="${f.id}">
          <div class="freshness-bar" data-frag="${f.id}" style="width:0%;background:linear-gradient(90deg,transparent,${f.accent})"></div>
        </div>
        <div style="margin-top:8px">
          <button class="text-btn" onclick="resetRefresh('${f.id}')">Сбросить таймер</button>
        </div>
      </div>
    `;
  } else {
    refreshBlock = `
      <div class="refresh-block">
        <div class="label-upper">Когда обновлять</div>
        <div style="font-size:13px;color:var(--text2);padding:10px 0">Не требует обновления — стойкость на весь день.</div>
      </div>
    `;
  }

  // Master warning
  let warningBlock = '';
  if (f.masterWarning) {
    warningBlock = `
      <div class="master-warning">
        <div class="master-warning-icon">\u26A0</div>
        <div class="master-warning-text">${f.masterWarning}</div>
      </div>
    `;
  }

  return `
    <div class="frag-card" data-id="${f.id}">
      <div class="frag-card-header">
        <img class="frag-bottle" src="${f.image}" alt="${f.name}" loading="lazy">
        <div class="frag-info">
          <div class="frag-name">${f.name}</div>
          <div class="frag-house">${f.house}</div>
          <div class="frag-family">${f.family}</div>
        </div>
        <div class="frag-dose-chip">${f.total}</div>
      </div>
      <div class="frag-body">
        <div class="frag-hero" style="background-image:url('${f.vibe}')">
          <div class="frag-hero-overlay"></div>
          <div class="frag-hero-name">${f.name}</div>
        </div>
        <div class="frag-inner">
          <!-- Total banner -->
          <div class="frag-total-banner">
            <div class="frag-total-num" data-frag-total="${f.id}">${f.total}</div>
            <div class="frag-total-label">${sprayWord(f.total)}</div>
            <div class="frag-chips">${chips.join('')}</div>
          </div>

          <!-- Scenario switcher -->
          <div class="scenario-row" data-frag="${f.id}">
            ${scenarioKeys.map((k, i) => `<button class="scenario-btn${i === 0 ? ' active' : ''}" data-scenario="${k}">${scenarioNames[k]}</button>`).join('')}
          </div>
          <div class="scenario-note" data-frag-scenario="${f.id}">${f.scenarios[scenarioKeys[0]].forbidden ? '' : f.scenarios[scenarioKeys[0]].note}</div>
          ${f.scenarios[scenarioKeys[0]].forbidden ? `<div class="scenario-forbidden">${f.scenarios[scenarioKeys[0]].message}</div>` : ''}
          <div class="scenario-points var-list" data-frag-scenario-points="${f.id}">${buildScenarioPoints(f.scenarios[scenarioKeys[0]])}</div>

          <!-- Spray variations -->
          <div class="label-upper" style="margin-top:16px">Точки нанесения</div>
          <div class="var-tabs" data-frag="${f.id}">${varTabs}</div>
          <div class="var-list" data-frag-vars="${f.id}">${varContents}</div>

          <!-- Refresh -->
          ${refreshBlock}

          <!-- Notes -->
          <div class="notes-block">
            <div class="label-upper">Ноты аромата</div>
            ${noteChips('Верхние', f.notes.top)}
            ${noteChips('Сердце', f.notes.heart)}
            ${noteChips('База', f.notes.base)}
          </div>

          <!-- Season matrix -->
          <div class="matrix-block">
            <div class="label-upper">Сезон \u00D7 Время</div>
            <table class="matrix-table">
              <thead><tr><th></th><th>День</th><th>Ночь</th></tr></thead>
              <tbody>${matrixRows}</tbody>
            </table>
          </div>

          ${warningBlock}
        </div>
      </div>
    </div>
  `;
}

function attachFragListeners() {
  // Card toggle
  $$('.frag-card-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.frag-card');
      const wasOpen = card.classList.contains('open');
      // On desktop: close others
      if (window.innerWidth >= 768) {
        $$('.frag-card.open').forEach(c => c.classList.remove('open'));
      }
      card.classList.toggle('open', !wasOpen);
      if (!wasOpen) {
        setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
      }
    });
  });

  // Scenario switcher
  $$('.scenario-row').forEach(row => {
    const fragId = row.dataset.frag;
    const frag = FRAGRANCES.find(f => f.id === fragId);
    const noteEl = document.querySelector(`.scenario-note[data-frag-scenario="${fragId}"]`);
    const totalEl = document.querySelector(`[data-frag-total="${fragId}"]`);
    const pointsEl = document.querySelector(`[data-frag-scenario-points="${fragId}"]`);

    row.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        row.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const sc = frag.scenarios[btn.dataset.scenario];
        // Remove old forbidden block
        const oldForbidden = row.parentElement.querySelector('.scenario-forbidden');
        if (oldForbidden) oldForbidden.remove();

        if (sc.forbidden) {
          noteEl.textContent = '';
          const fb = document.createElement('div');
          fb.className = 'scenario-forbidden';
          fb.textContent = sc.message;
          noteEl.after(fb);
          if (totalEl) {
            totalEl.textContent = '0';
            totalEl.nextElementSibling.textContent = sprayWord(0);
          }
          if (pointsEl) pointsEl.innerHTML = '';
        } else {
          noteEl.textContent = sc.note;
          if (totalEl) {
            totalEl.textContent = sc.total;
            totalEl.nextElementSibling.textContent = sprayWord(sc.total);
          }
          if (pointsEl) pointsEl.innerHTML = buildScenarioPoints(sc);
        }
      });
    });
  });

  // Variation tabs
  $$('.var-tabs').forEach(tabRow => {
    const fragId = tabRow.dataset.frag;
    const contentContainer = document.querySelector(`[data-frag-vars="${fragId}"]`);
    tabRow.querySelectorAll('.var-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabRow.querySelectorAll('.var-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        contentContainer.querySelectorAll('.var-content').forEach(c => c.classList.add('hidden'));
        contentContainer.querySelector(`.var-content[data-var="${tab.dataset.var}"]`).classList.remove('hidden');
      });
    });
  });
}

/* ===== REFRESH TIMERS ===== */

function initRefreshTimers() {
  updateAllTimers();
  setInterval(updateAllTimers, 30000); // Update every 30s
}

function updateAllTimers() {
  const activeFrags = [];

  FRAGRANCES.forEach(f => {
    if (f.refreshHours === null) return;
    const timerEl = document.querySelector(`.refresh-timer[data-frag="${f.id}"]`);
    const barEl = document.querySelector(`.freshness-bar[data-frag="${f.id}"]`);

    const key = `levs-refresh-${f.id}`;
    const ts = localStorage.getItem(key);

    if (!ts) {
      if (timerEl) {
        timerEl.textContent = 'Таймер не запущен';
        timerEl.classList.remove('expired');
      }
      if (barEl) barEl.style.width = '0%';
      return;
    }

    const applied = parseInt(ts);
    const expiry = applied + f.refreshHours * 3600000;
    const now = Date.now();
    const diff = expiry - now;
    const total = f.refreshHours * 3600000;

    if (diff <= 0) {
      if (timerEl) {
        timerEl.classList.add('expired');
        timerEl.innerHTML = '<div class="refresh-expired-msg">Пора обновить: 1 пшик на затылок</div>';
      }
      if (barEl) barEl.style.width = '0%';
      activeFrags.push({ frag: f, percent: 0, expired: true, diff: 0, total });
    } else {
      const pct = Math.round((diff / total) * 100);
      if (timerEl) {
        timerEl.classList.remove('expired');
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        timerEl.textContent = `Обновить через: ${h}ч ${m}мин`;
      }
      if (barEl) barEl.style.width = pct + '%';
      activeFrags.push({ frag: f, percent: pct, expired: false, diff, total });
    }
  });

  updateActiveFragStatus(activeFrags);
}

function updateActiveFragStatus(activeFrags) {
  const container = document.getElementById('activeFragStatus');
  if (!container) return;

  if (!activeFrags.length) {
    container.classList.add('hidden');
    container.innerHTML = '';
    return;
  }

  container.classList.remove('hidden');
  container.innerHTML = '<div class="label-upper" style="margin-bottom:8px">Активные ароматы</div>' +
    activeFrags.map(({ frag, percent, expired, diff }) => {
      let timeText;
      if (expired) {
        timeText = '<span class="active-frag-status-time expired">Пора обновить</span>';
      } else {
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        timeText = `<span class="active-frag-status-time">${h}ч ${m}мин</span>`;
      }
      return `
        <div class="active-frag-status-item">
          <img class="active-frag-status-bottle" src="${frag.image}" alt="${frag.name}" loading="lazy">
          <div class="active-frag-status-info">
            <div class="active-frag-status-name">${frag.name}</div>
            ${timeText}
            <div class="active-frag-bar-wrap">
              <div class="active-frag-bar" style="width:${percent}%;background:linear-gradient(90deg,transparent,${frag.accent})"></div>
            </div>
          </div>
          <span class="active-frag-reset" onclick="resetRefresh('${frag.id}')">Сброс</span>
        </div>
      `;
    }).join('');
}

function markApplied(fragId, hours) {
  localStorage.setItem(`levs-refresh-${fragId}`, Date.now().toString());
  updateAllTimers();
}

function resetRefresh(fragId) {
  localStorage.removeItem(`levs-refresh-${fragId}`);
  updateAllTimers();
}

/* ===== COMBINATIONS ===== */

function buildComboCard(c) {
  const layersHtml = c.layers.map(layer => {
    const frag = FRAGRANCES.find(f => f.id === layer.fragId);
    const accent = frag ? frag.accent : '#888';
    const pointsHtml = layer.points.map(p => `
      <div class="spray-point">
        <img class="spray-spot" src="levs-scent/spots/${p.spot}" alt="${p.title}" loading="lazy">
        <div class="spray-info">
          <span class="spray-n">${p.n}</span><span class="spray-title">${p.title}</span>
          <div class="spray-detail">${p.detail}</div>
        </div>
      </div>
    `).join('');
    return `
      <div class="combo-layer">
        <div class="combo-layer-header">
          <div class="combo-layer-badge" style="background:${accent}">${layer.order}</div>
          <div>
            <div class="combo-layer-name">${layer.fragName}</div>
            <div class="combo-layer-instruction">${layer.instruction}</div>
          </div>
        </div>
        <div class="var-list">${pointsHtml}</div>
      </div>
    `;
  }).join(`<div class="combo-pause">\u23F1 Подожди 30 секунд</div>`);

  const groups = (c.seasonGroups || []).join(' ');
  return `
    <div class="combo-card" data-seasons="${groups}">
      <div class="combo-header">
        <div>
          <div class="combo-name">${c.name}</div>
          <div class="combo-sub">${c.sub}</div>
          <div class="combo-season">${c.season}</div>
        </div>
        <div class="combo-chevron">\u25BC</div>
      </div>
      <div class="combo-body">
        <div class="combo-inner">
          ${layersHtml}
          <div class="combo-effect">${c.effect}</div>
          <div class="combo-total">Итого: ${c.totalSprays} ${sprayWord(c.totalSprays)}</div>
        </div>
      </div>
    </div>
  `;
}

function initCombinations() {
  const grid = $('#combosGrid');
  if (!grid) return;

  /* — Build tab buttons — */
  const tabsHtml = COMBO_SEASON_TABS.map(t => {
    const count = t.key === 'all'
      ? COMBINATIONS.length
      : COMBINATIONS.filter(c => (c.seasonGroups || []).includes(t.key)).length;
    return `<button class="combo-tab${t.key === 'all' ? ' active' : ''}" data-season="${t.key}">
      <span class="combo-tab-emoji">${t.emoji}</span>${t.label}<span class="combo-tab-count">${count}</span>
    </button>`;
  }).join('');

  /* — Build all cards — */
  const cardsHtml = COMBINATIONS.map(buildComboCard).join('');

  grid.innerHTML = `
    <div class="combo-tabs" id="comboTabs">${tabsHtml}</div>
    <div class="combo-cards-list" id="comboCardsList">${cardsHtml}</div>
  `;

  /* — Tab switching — */
  const tabs = grid.querySelectorAll('.combo-tab');
  const cards = grid.querySelectorAll('.combo-card');

  function filterCombos(seasonKey) {
    cards.forEach(card => {
      const seasons = card.dataset.seasons.split(' ');
      if (seasonKey === 'all' || seasons.includes(seasonKey)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
        card.classList.remove('open');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterCombos(tab.dataset.season);
    });
  });

  /* — Card toggle — */
  grid.querySelectorAll('.combo-header').forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.combo-card').classList.toggle('open');
    });
  });
}

/* ===== DIARY ===== */

function getDiary() {
  const raw = localStorage.getItem('levs-diary');
  return raw ? JSON.parse(raw) : [];
}

function saveDiary(entries) {
  localStorage.setItem('levs-diary', JSON.stringify(entries));
}

function initDiary() {
  // Populate fragrance dropdown
  const sel = $('#diaryFragrance');
  if (sel) {
    FRAGRANCES.forEach(f => {
      const opt = document.createElement('option');
      opt.value = f.id;
      opt.textContent = f.name;
      sel.appendChild(opt);
    });
  }

  // Default date
  const dateInput = $('#diaryDate');
  if (dateInput) dateInput.value = todayKey();

  // Add button
  const addBtn = $('#diaryAddBtn');
  const form = $('#diaryForm');
  if (addBtn && form) {
    addBtn.addEventListener('click', () => {
      form.classList.toggle('hidden');
    });
  }

  // Cancel
  const cancelBtn = $('#diaryCancel');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => {
      form.classList.add('hidden');
    });
  }

  // Save
  const saveBtn = $('#diarySave');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const entry = {
        id: Date.now(),
        date: $('#diaryDate').value,
        fragrance: $('#diaryFragrance').value,
        sprays: parseInt($('#diarySprays').value) || 0,
        situation: $('#diarySituation').value,
        compliments: parseInt($('#diaryCompliments').value) || 0,
        from: $('#diaryFrom').value.trim(),
        note: $('#diaryNote').value.trim()
      };

      const entries = getDiary();
      entries.unshift(entry);
      saveDiary(entries);

      // Reset form
      $('#diarySprays').value = 5;
      $('#diaryCompliments').value = 0;
      $('#diaryFrom').value = '';
      $('#diaryNote').value = '';
      form.classList.add('hidden');

      renderDiary();
    });
  }

  renderDiary();
}

function renderDiary() {
  const entries = getDiary();
  renderDiaryStats(entries);
  renderDiaryEntries(entries);
}

function renderDiaryStats(entries) {
  const container = $('#diaryStats');
  if (!container) return;

  const totalEntries = entries.length;
  const totalCompliments = entries.reduce((s, e) => s + (e.compliments || 0), 0);

  // Most worn
  let mostWorn = '—';
  if (entries.length > 0) {
    const counts = {};
    entries.forEach(e => { counts[e.fragrance] = (counts[e.fragrance] || 0) + 1; });
    const topId = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    const frag = FRAGRANCES.find(f => f.id === topId);
    if (frag) mostWorn = frag.name;
  }

  container.innerHTML = `
    <div class="diary-stat">
      <div class="diary-stat-num">${totalEntries}</div>
      <div class="diary-stat-label">Записей</div>
    </div>
    <div class="diary-stat">
      <div class="diary-stat-num" style="font-size:14px;padding-top:6px">${mostWorn}</div>
      <div class="diary-stat-label">Фаворит</div>
    </div>
    <div class="diary-stat">
      <div class="diary-stat-num">${totalCompliments}</div>
      <div class="diary-stat-label">Комплиментов</div>
    </div>
  `;
}

function renderDiaryEntries(entries) {
  const container = $('#diaryEntries');
  if (!container) return;

  if (entries.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:#bbb;padding:40px 0;font-size:14px">Пока нет записей</div>';
    return;
  }

  const situationLabels = { school: 'Школа', gym: 'Зал', date: 'Свидание', walk: 'Прогулка', home: 'Дома', other: 'Другое' };

  container.innerHTML = entries.map(e => {
    const frag = FRAGRANCES.find(f => f.id === e.fragrance);
    const accent = frag ? frag.accent : '#ccc';
    const name = frag ? frag.name : e.fragrance;
    const dateFormatted = e.date ? new Date(e.date + 'T00:00:00').toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }) : '';
    const sitLabel = situationLabels[e.situation] || e.situation;
    const compText = e.compliments > 0 ? ` \u00B7 ${e.compliments} ${pluralize(e.compliments, 'комплимент', 'комплимента', 'комплиментов')}${e.from ? ' от ' + e.from : ''}` : '';

    return `
      <div class="diary-entry" style="border-left-color:${accent}">
        <div class="diary-entry-body">
          <div class="diary-entry-top">
            <div class="diary-entry-frag">${name}</div>
            <div class="diary-entry-date">${dateFormatted}</div>
          </div>
          <div class="diary-entry-meta">${e.sprays} ${sprayWord(e.sprays)} \u00B7 ${sitLabel}${compText}</div>
          ${e.note ? `<div class="diary-entry-note">${e.note}</div>` : ''}
        </div>
        <button class="diary-entry-del" onclick="deleteDiaryEntry(${e.id})" aria-label="Удалить">\u00D7</button>
      </div>
    `;
  }).join('');
}

function deleteDiaryEntry(id) {
  if (!confirm('Удалить запись?')) return;
  const entries = getDiary().filter(e => e.id !== id);
  saveDiary(entries);
  renderDiary();
}

/* ===== QUOTES ===== */

function initQuote() {
  const section = document.querySelector('.quotes-section');
  const textEl = $('#quoteText');
  if (textEl && section) {
    textEl.textContent = '\u201C' + randomFrom(QUOTES) + '\u201D';
    const img = randomFrom(QUOTE_IMAGES);
    section.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.6)), url('${img}')`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';
  }
}

/* ===== MACERATION ===== */

function getMacerationData() {
  try { return JSON.parse(localStorage.getItem('levs-maceration') || '[]'); }
  catch { return []; }
}

function saveMacerationData(data) {
  localStorage.setItem('levs-maceration', JSON.stringify(data));
}

function initMaceration() {
  // Tips toggle
  const tipsToggle = $('#macTipsToggle');
  const tipsEl = $('#macTips');
  if (tipsToggle && tipsEl) {
    tipsToggle.addEventListener('click', () => {
      tipsToggle.classList.toggle('open');
      tipsEl.classList.toggle('hidden');
    });
  }

  const sel = $('#macFragrance');
  if (!sel) return;
  sel.innerHTML = sortFragrances().map(f =>
    `<option value="${f.id}">${f.name}</option>`
  ).join('');

  const dateInput = $('#macStartDate');
  if (dateInput) dateInput.value = todayKey();

  const addBtn = $('#macAddBtn');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const fragId = sel.value;
      const start = dateInput.value;
      const weeks = parseInt($('#macWeeks').value) || 4;
      if (!fragId || !start) return;

      const data = getMacerationData();
      data.push({
        id: Date.now(),
        fragId,
        startDate: start,
        weeks
      });
      saveMacerationData(data);
      renderMaceration();
    });
  }
}

function renderMaceration() {
  const container = $('#macEntries');
  if (!container) return;
  const data = getMacerationData();
  if (!data.length) {
    container.innerHTML = '<div style="text-align:center;color:var(--text2);padding:24px;font-size:13px">Нет активных мацераций</div>';
    return;
  }

  // Сортировка: самые свежие (недавно добавленные) сверху
  data.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  const now = new Date();
  container.innerHTML = data.map(entry => {
    const frag = FRAGRANCES.find(f => f.id === entry.fragId);
    if (!frag) return '';
    const start = new Date(entry.startDate);
    const endDate = new Date(start.getTime() + entry.weeks * 7 * 86400000);
    const totalMs = entry.weeks * 7 * 86400000;
    const elapsedMs = now.getTime() - start.getTime();
    const progress = Math.min(100, Math.max(0, Math.round((elapsedMs / totalMs) * 100)));
    const done = progress >= 100;
    const daysLeft = done ? 0 : Math.max(0, Math.ceil((endDate.getTime() - now.getTime()) / 86400000));

    const startStr = start.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
    const endStr = endDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });

    return `
      <div class="mac-card${done ? ' done' : ''}">
        <span class="mac-card-del" onclick="deleteMacEntry(${entry.id})">x</span>
        <div class="mac-card-header">
          <img class="mac-card-bottle" src="${frag.image}" alt="${frag.name}" loading="lazy">
          <div class="mac-card-info">
            <div class="mac-card-name">${frag.name}</div>
            <div class="mac-card-dates">${startStr} → ${endStr} · ${entry.weeks} нед.</div>
          </div>
        </div>
        <div class="mac-progress-wrap">
          <div class="mac-progress-bar" style="width:${progress}%"></div>
        </div>
        ${done
          ? '<div class="mac-done-label">Мацерация завершена</div>'
          : `<div class="mac-progress-text">${progress}% · ${daysLeft} дн. осталось</div>`
        }
      </div>
    `;
  }).join('');
}

function deleteMacEntry(id) {
  if (!confirm('Удалить запись мацерации?')) return;
  const data = getMacerationData().filter(e => e.id !== id);
  saveMacerationData(data);
  renderMaceration();
}
