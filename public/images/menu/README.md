# Изображения для меню питания

Эта папка содержит изображения блюд для карточек меню.

## Структура папок

```
menu/
├── week1/
│   ├── monday/
│   │   ├── breakfast.jpg
│   │   ├── lunch.jpg
│   │   └── snack.jpg
│   ├── tuesday/
│   │   ├── breakfast.jpg
│   │   ├── lunch.jpg
│   │   └── snack.jpg
│   ├── wednesday/
│   │   ├── breakfast.jpg
│   │   ├── lunch.jpg
│   │   └── snack.jpg
│   ├── thursday/
│   │   ├── breakfast.jpg
│   │   ├── lunch.jpg
│   │   └── snack.jpg
│   └── friday/
│       ├── breakfast.jpg
│       ├── lunch.jpg
│       └── snack.jpg
└── week2/
    ├── monday/
    │   ├── breakfast.jpg
    │   ├── lunch.jpg
    │   └── snack.jpg
    └── ... (то же самое для вторника-пятницы)
```

## Требования к изображениям

- **Формат**: JPG или PNG
- **Рекомендуемый размер**: 800x600px (соотношение 4:3)
- **Содержание**: Блюда из меню на конкретный день
- **Стиль**: Яркие, аппетитные, подходящие для детского сада

## Всего нужно изображений

- 2 недели × 5 дней × 3 приема пищи = **30 изображений**

## Примеры содержимого

### Неделя 1 - Понедельник
- `week1/monday/breakfast.jpg` — Овсяная каша, масло, хлеб, чай, фрукт
- `week1/monday/lunch.jpg` — Рисовый суп, хлеб, морковный кекс
- `week1/monday/snack.jpg` — Куриная котлета, гречневый гарнир, хлеб, сок

### Неделя 1 - Вторник
- `week1/tuesday/breakfast.jpg` — Манная каша, фруктовое пюре, хлеб, чай
- `week1/tuesday/lunch.jpg` — Говяжья тефтеля, суп-пюре, огурцы и морковь
- `week1/tuesday/snack.jpg` — Вермишель со сметаной, сок

... и так далее для всех дней обеих недель

## Используемые пути

Изображения загружаются по путям:
- `/images/menu/week{1|2}/{monday-friday}/{breakfast|lunch|snack}.jpg`

Например:
- `/images/menu/week1/monday/breakfast.jpg`
- `/images/menu/week2/friday/snack.jpg`
