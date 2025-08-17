import type { DayPlan, ShoppingCategoryData, WorkoutEntry } from './types';

export const WEEKLY_MEAL_PLAN: DayPlan[] = [
  {
    day: 'Lunes',
    meals: {
      breakfast: 'Avena + plátano + 2 claras + 1 huevo',
      lunch: 'Pechuga de pollo (200g) + arroz + espinacas',
      midAfternoon: '2 tortitas de arroz + crema de cacahuete',
      snack: 'Batido proteína o 3 claras + 1 huevo + manzana',
      dinner: 'Solomillo de ternera + patata cocida + berenjena',
    },
  },
  {
    day: 'Martes',
    meals: {
      breakfast: 'Avena + manzana + 2 claras + 1 huevo',
      lunch: 'Pechuga de pollo (200g) + pasta integral (150g en seco) + calabacín',
      midAfternoon: '2 tortitas de arroz + plátano',
      snack: 'Batido proteína o tortilla 3 claras + 1 huevo',
      dinner: 'Muslo de pollo al horno (aprox. 330g) + patata + espinacas',
    },
  },
  {
    day: 'Miércoles',
    meals: {
      breakfast: 'Avena + plátano + 2 claras + 1 huevo',
      lunch: 'Solomillo de ternera + arroz integral + berenjena',
      midAfternoon: '2 tortitas de arroz + crema de cacahuete',
      snack: 'Batido proteína o 3 claras + 1 huevo + manzana',
      dinner: 'Pechuga de pollo (200g) + calabacín + patata',
    },
  },
  {
    day: 'Jueves',
    meals: {
      breakfast: 'Avena + manzana + 2 claras + 1 huevo',
      lunch: 'Pechuga de pollo (200g) + pasta integral (150g en seco) + espinacas',
      midAfternoon: '2 tortitas de arroz + plátano',
      snack: 'Batido proteína o tortilla 3 claras + 1 huevo',
      dinner: 'Muslo de pollo (aprox. 330g) + patata + berenjena',
    },
  },
  {
    day: 'Viernes',
    meals: {
      breakfast: 'Avena + plátano + 2 claras + 1 huevo',
      lunch: 'Pechuga de pollo (200g) + arroz integral + ensalada',
      midAfternoon: '2 tortitas de arroz + crema de cacahuete',
      snack: 'Batido proteína o 3 claras + 1 huevo + manzana',
      dinner: 'Pechuga de pollo (200g) + calabacín + patata',
    },
  },
  {
    day: 'Sábado',
    meals: {
      breakfast: 'Avena + manzana + 2 claras + 1 huevo',
      lunch: 'Pechuga de pollo (200g) + pasta integral (150g en seco) + berenjena',
      midAfternoon: '2 tortitas de arroz + plátano',
      snack: 'Batido proteína o tortilla 3 claras + 1 huevo',
      dinner: 'Solomillo de ternera + patata + espinacas',
    },
  },
  {
    day: 'Domingo',
    meals: {
      breakfast: 'Avena + plátano + 2 claras + 1 huevo',
      lunch: 'Pechuga de pollo al horno (200g) + arroz integral + calabacín',
      midAfternoon: 'Descanso: manzana + 2 tortitas con crema de cacahuete',
      snack: '-',
      dinner: 'Muslo de pollo (aprox. 330g) + patata + ensalada',
    },
  },
];

export const SHOPPING_LIST_DATA: ShoppingCategoryData[] = [
    {
        category: 'Pollo',
        items: [
            { id: 'c1-i1', name: 'Pechuga de pollo', quantity: '1,6 kg', price: 12.50 },
            { id: 'c1-i2', name: 'Muslo / Contramuslo de pollo', quantity: '1 kg', price: 7.00 },
        ],
    },
    {
        category: 'Ternera',
        items: [{ id: 'c2-i1', name: 'Solomillo de ternera', quantity: '600 g', price: 15.00 }],
    },
    {
        category: 'Huevos',
        items: [{ id: 'c3-i1', name: 'Huevos', quantity: '20 unidades', price: 4.50 }],
    },
    {
        category: 'Carbohidratos',
        items: [
            { id: 'c4-i1', name: 'Arroz integral', quantity: '1,5 kg', price: 2.80 },
            { id: 'c4-i2', name: 'Pasta integral', quantity: '1 kg', price: 1.50 },
            { id: 'c4-i3', name: 'Patata', quantity: '2 kg', price: 2.20 },
            { id: 'c4-i4', name: 'Avena', quantity: '500 g', price: 1.20 },
            { id: 'c4-i5', name: 'Tortitas de arroz', quantity: '1 paquete (25 unidades)', price: 1.80 },
        ],
    },
    {
        category: 'Frutas',
        items: [
            { id: 'c5-i1', name: 'Plátanos', quantity: '4 unidades', price: 1.00 },
            { id: 'c5-i2', name: 'Manzanas', quantity: '5 unidades', price: 1.50 },
        ],
    },
    {
        category: 'Verduras',
        items: [
            { id: 'c6-i1', name: 'Espinacas congeladas', quantity: '1 kg', price: 2.50 },
            { id: 'c6-i2', name: 'Berenjena', quantity: '500 g', price: 1.30 },
            { id: 'c6-i3', name: 'Calabacín', quantity: '500 g', price: 1.10 },
            { id: 'c6-i4', name: 'Lechuga + Tomate', quantity: '500 g', price: 2.00 },
        ],
    },
];

const day1Details = [
    { name: "Sentadilla", description: "3 series de 8 repeticiones, piramidal, buscando el fallo en la tercera.", imageUrl: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Sentadilla Hack", description: "4 series de 8-10 reps con 5\" de negativa y pausa abajo.", imageUrl: "https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Leg Press", description: "4 series de 8-10 reps con 5\" de negativa y pausa abajo.", imageUrl: "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Leg Extensions", description: "4 series de 8 reps con 4\" de negativa y 10\" de isotensión al final.", imageUrl: "https://images.pexels.com/photos/3837409/pexels-photo-3837409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Platz Hacks", description: "5 series de 8-10 reps con 5\" de negativa (pies 45º y cuclillas).", imageUrl: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Curl femoral tumbado", description: "5 series de 8-10 reps con 5\" de negativa. Variar puntas de los pies.", imageUrl: "https://images.pexels.com/photos/3489923/pexels-photo-3489923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Peso muerto", description: "4 series de 10 reps focalizando el estiramiento (pies separados, apoyo alto).", imageUrl: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Elevaciones de gemelo sentado", description: "4 series de 10 reps con descendentes progresivas.", imageUrl: "https://images.pexels.com/photos/669576/pexels-photo-669576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];

const day2Details = [
    { name: "Press de banca plano", description: "2 series al fallo (10 reps), 15\" descanso, 3 forzadas, 15\" descanso, 3 forzadas más, 15\" isotensión y resistencia en subida.", imageUrl: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Press inclinado Smith", description: "4 series de 8-10 reps con triple descendente.", imageUrl: "https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Cruces polea desde abajo", description: "4 series de 8-10 reps con 2\" de isotensión.", imageUrl: "https://images.pexels.com/photos/4761793/pexels-photo-4761793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Press declinado máquina + cruces polea", description: "3 series de 8-10 reps en superserie.", imageUrl: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Fondos en máquina", description: "6 series de 8 reps con 15\" de descanso entre ellas.", imageUrl: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Jalón cuerda", description: "3 series buscando el fallo a 15-20 reps.", imageUrl: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Extensiones de triceps a una mano", description: "3 series de 10-12 reps con rango completo.", imageUrl: "https://images.pexels.com/photos/1092875/pexels-photo-1092875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Ab combination", description: "4 series de 20 reps en contracción de cuerda con 20\" de descanso.", imageUrl: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];

const day3Details = [
    { name: "Remo en barra agarre supino", description: "3 series piramidales, empezando en 15 y terminando en 8-10 reps.", imageUrl: "https://images.pexels.com/photos/3838328/pexels-photo-3838328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Remo en barra T", description: "4 series de 8-10 reps con dos descendentes en la última.", imageUrl: "https://images.pexels.com/photos/28054/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Jalon polea al pecho agarre neutro", description: "4 series de 15 reps con 15\" de isotensión a mitad recorrido.", imageUrl: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Pull over mancuerna", description: "3 series de 10 reps con 3\" de negativa y 1\" de isotensión.", imageUrl: "https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Remo polea baja agarre en pronación", description: "3 series de 15 reps con movimiento lento.", imageUrl: "https://images.pexels.com/photos/3838334/pexels-photo-3838334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Hiperextensiones con peso", description: "4 series de 10-12 reps con peso, seguido de 10-12 sin peso.", imageUrl: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Curl mancuerna a una mano.", description: "3 series de 8-10 reps con 3\" de bajada.", imageUrl: "https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Curl predicador a una mano", description: "3 series de 8-10 reps seguidas de 10-12 parciales.", imageUrl: "https://images.pexels.com/photos/3112004/pexels-photo-3112004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];

const day4Details = [
    { name: "Curl femoral sentado", description: "3 series de 12-15 reps, cambiando ángulo de pies en cada serie.", imageUrl: "https://images.pexels.com/photos/8118742/pexels-photo-8118742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Prensa inclinada y pies apoyo separado", description: "4 series de 10 reps buscando el fallo en la última.", imageUrl: "https://images.pexels.com/photos/7004381/pexels-photo-7004381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Curl femoral tumbado + peso muerto", description: "4 series de 10 reps en superserie.", imageUrl: "https://images.pexels.com/photos/3489923/pexels-photo-3489923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Elevaciones posteriores en máquina", description: "Calentar y luego 1 serie de 20 reps, seguida de 3 series de 8-10 reps.", imageUrl: "https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Remo deltoides posterior con barra", description: "3 series de 15 reps con 2\" de isotensión.", imageUrl: "https://images.pexels.com/photos/3838328/pexels-photo-3838328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Elevaciones laterales sentado", description: "3 series piramidales aumentando peso, empezando en 25-30 reps.", imageUrl: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Remo al mentón", description: "3 series de 8-10 reps con movimiento lento.", imageUrl: "https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Encogimientos en mancuernas", description: "6 series de 8 reps con 15\" de descanso.", imageUrl: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Elevaciones de pie", description: "2 series de 100 reps. En la última, 2 Rest-Pause.", imageUrl: "https://images.pexels.com/photos/669576/pexels-photo-669576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
];

const workoutStructure: Omit<WorkoutEntry, 'id' | 'date' | 'day'>[] = [
    { exercise: 'Piernas + Abs', cardio: 'LISS', meals: 'Comida 1-5', supplements: 'Whey + Creatina', details: day1Details },
    { exercise: 'Pecho + Tríceps + Abs', cardio: 'LISS', meals: 'Comida 1-5', supplements: 'Whey + Creatina', details: day2Details },
    { exercise: 'Espalda + Bíceps + Abs', cardio: 'LISS', meals: 'Comida 1-5', supplements: 'Whey + Creatina', details: day3Details },
    { exercise: 'Femorales + Hombros + Gemelos', cardio: 'LISS', meals: 'Comida 1-5', supplements: 'Whey + Creatina', details: day4Details },
    { exercise: 'Descanso', cardio: 'Opcional', meals: 'Comida 1-5', supplements: '-', details: [] },
    { exercise: 'Descanso', cardio: 'Opcional', meals: 'Comida libre', supplements: 'Whey + Creatina', details: [] },
    { exercise: 'Descanso', cardio: 'No', meals: 'Comida 1-5', supplements: '-', details: [] },
];

export const WORKOUT_PLAN_DATA: Omit<WorkoutEntry, 'id' | 'date' | 'day'>[] = [
    workoutStructure[0], // Lunes: Piernas
    workoutStructure[1], // Martes: Pecho
    workoutStructure[2], // Miercoles: Espalda
    workoutStructure[3], // Jueves: Hombros
    workoutStructure[4], // Viernes: Descanso
    workoutStructure[5], // Sabado: Descanso
    workoutStructure[6], // Domingo: Descanso
    workoutStructure[0],
    workoutStructure[1],
    workoutStructure[2],
    workoutStructure[3],
    workoutStructure[4],
];
