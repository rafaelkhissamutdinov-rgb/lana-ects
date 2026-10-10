// Analysis III – generated from the study notes (RU) + German translation. Do not edit by hand.
window.ANA3 = {
 "meta": {
  "hero": {
   "ru": "Базовые понятия скрипта Hörmann (WS 2026/27), без формальной брони. У каждого понятия четыре слоя: <b>суть</b> простыми словами, <b>формула</b>, которую надо помнить, <b>как проверить</b> свой ответ за минуту и <b>рецепт</b> для типовой задачи. Конвенции (знаки, множители 2π) как в скрипте.",
   "de": "Die Grundbegriffe aus dem Skriptum von Hörmann (WS 2026/27), ohne formale Rüstung. Jeder Begriff hat vier Ebenen: der <b>Kern</b> in einfachen Worten, die <b>Formel</b>, die man können muss, der <b>Check</b>, mit dem du deine Antwort in einer Minute prüfst, und das <b>Rezept</b> für die typische Aufgabe. Konventionen (Vorzeichen, Faktoren 2π) wie im Skriptum."
  },
  "map": [
   {
    "title": {
     "ru": "A → всё остальное",
     "de": "A → alles andere"
    },
    "html": {
     "ru": "Вычеты считают интегралы Фурье. Голоморфность объясняет, почему ряды сходятся там, где сходятся.",
     "de": "Residuen berechnen Fourier-Integrale. Holomorphie erklärt, warum Reihen genau dort konvergieren, wo sie konvergieren."
    }
   },
   {
    "title": {
     "ru": "Лебег → Фурье → δ",
     "de": "Lebesgue → Fourier → δ"
    },
    "html": {
     "ru": "Лебег даёт право менять предел и интеграл. Фурье превращает производные в умножение. Дистрибуции разрешают дифференцировать что угодно.",
     "de": "Lebesgue erlaubt, Grenzwert und Integral zu vertauschen. Fourier macht aus Ableitungen Multiplikation. Distributionen erlauben, alles abzuleiten."
    }
   },
   {
    "title": {
     "ru": "δ → фундам. решение → PDE",
     "de": "δ → Fundamentallösung → PDE"
    },
    "html": {
     "ru": "Реши уравнение для точечного источника δ, и решение для любого источника — свёртка.",
     "de": "Löse die Gleichung einmal für eine Punktquelle δ – die Lösung für jede beliebige Quelle ist dann eine Faltung."
    }
   },
   {
    "title": {
     "ru": "Разделение → собств. значения → D",
     "de": "Separation → Eigenwerte → D"
    },
    "html": {
     "ru": "Синусы в струне — это собственные векторы оператора. Часть D объясняет это в общем виде и даёт язык КМ.",
     "de": "Die Sinus-Schwingungen der Saite sind Eigenvektoren eines Operators. Teil D erklärt das allgemein und liefert die Sprache der QM."
    }
   }
  ],
  "parts": [
   {
    "tag": "Teil A",
    "title": {
     "ru": "Комплексный анализ",
     "de": "Komplexe Analysis"
    },
    "intro": {
     "ru": "Главная идея всей части: комплексно-дифференцируемая функция настолько жёсткая, что её значения внутри области полностью определены значениями на границе. Отсюда все чудеса: интеграл по замкнутой кривой равен нулю или сумме вычетов.",
     "de": "Die Hauptidee des ganzen Teils: Eine komplex differenzierbare Funktion ist so starr, dass ihre Werte im Inneren eines Gebiets komplett durch die Werte am Rand festgelegt sind. Daher kommen alle Wunder: Das Integral über eine geschlossene Kurve ist null oder die Summe der Residuen."
    },
    "topics": [
     "holo",
     "curve",
     "cauchy",
     "cif",
     "series",
     "log",
     "sing",
     "res",
     "realint"
    ]
   },
   {
    "tag": "Teil B",
    "title": {
     "ru": "Фурье и дистрибуции",
     "de": "Fourier und Distributionen"
    },
    "intro": {
     "ru": "Главная идея: любой сигнал — это смесь чистых волн $e^{ixy}$. В «волновом» мире дифференцирование превращается в умножение, и дифференциальные уравнения становятся алгебраическими. Дистрибуции нужны, чтобы это работало и для «плохих» объектов вроде δ.",
     "de": "Die Hauptidee: Jedes Signal ist eine Mischung aus reinen Wellen $e^{ixy}$. In der „Wellenwelt“ wird Ableiten zu Multiplizieren, und Differentialgleichungen werden algebraisch. Distributionen braucht man, damit das auch für „schlimme“ Objekte wie δ funktioniert."
    },
    "topics": [
     "leb",
     "fourier",
     "conv",
     "schwartz",
     "distr",
     "dderiv",
     "fund"
    ]
   },
   {
    "tag": "Teil C",
    "title": {
     "ru": "Классические линейные PDE",
     "de": "Klassische lineare PDE"
    },
    "intro": {
     "ru": "Три уравнения, три характера: равновесие (Лаплас), растекание (теплопроводность), распространение (волна). Почти каждая задача решается одним из двух методов: разделение переменных (ограниченная область) или свёртка с ядром (всё пространство).",
     "de": "Drei Gleichungen, drei Charaktere: Gleichgewicht (Laplace), Ausbreitung durch Verschmieren (Wärmeleitung), Ausbreitung als Welle (Wellengleichung). Fast jede Aufgabe löst man mit einer von zwei Methoden: Separation der Variablen (beschränktes Gebiet) oder Faltung mit einem Kern (ganzer Raum)."
    },
    "topics": [
     "three",
     "sep",
     "laplace",
     "weak",
     "heat",
     "wave"
    ]
   },
   {
    "tag": "Teil D",
    "title": {
     "ru": "Операторы на гильбертовых пространствах",
     "de": "Operatoren auf Hilberträumen"
    },
    "intro": {
     "ru": "Главная идея: функции — это векторы в бесконечномерном пространстве, а дифференциальные операторы — это бесконечные матрицы. Почти вся линейная алгебра (скалярное произведение, базис, собственные векторы, диагонализация) переносится, но с поправками, и именно поправки — суть этой части. Это и есть математический язык квантовой механики.",
     "de": "Die Hauptidee: Funktionen sind Vektoren in einem unendlichdimensionalen Raum, Differentialoperatoren sind unendliche Matrizen. Fast die ganze lineare Algebra (Skalarprodukt, Basis, Eigenvektoren, Diagonalisierung) überträgt sich – aber mit Korrekturen, und genau diese Korrekturen sind der Kern dieses Teils. Das ist die mathematische Sprache der Quantenmechanik."
    },
    "topics": [
     "hilbert",
     "onb",
     "ops",
     "spec",
     "spthm",
     "qm",
     "unb"
    ]
   }
  ]
 },
 "topics": {
  "toolkit": {
   "emoji": "🧰",
   "ref": "",
   "title": {
    "ru": "Универсальная проверка любого ответа",
    "de": "Universal-Check für jede Antwort"
   },
   "blocks": [
    {
     "type": "kern",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "Почти любую задачу этого курса можно проверить, не повторяя решение. Вот пять тестов, которые ловят 90% ошибок.",
      "de": "Fast jede Aufgabe dieses Kurses lässt sich prüfen, ohne die Lösung zu wiederholen. Hier sind fünf Tests, die 90 % der Fehler finden."
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Пять тестов",
      "de": "Fünf Tests"
     },
     "html": {
      "ru": "<ul> <li><b>Подставь обратно.</b> Нашёл $u$ — подставь в уравнение, граничные и начальные условия. Это и есть доказательство, что $u$ — решение.</li> <li><b>Частный случай.</b> Положи $t=0$, $n=1$, $a=0$, $k=0$: формула должна дать то, что ты знаешь заранее.</li> <li><b>Симметрия и знак.</b> Интеграл от положительной функции должен быть положительным и вещественным. Чётная функция → чётная Фурье-образ.</li> <li><b>Предел.</b> $t\\to0^+$, $t\\to\\infty$, $R\\to\\infty$: ответ должен вести себя физически осмысленно (тепло растекается, волна уходит).</li> <li><b>Численно.</b> Один вызов <code>scipy.integrate.quad</code> или WolframAlpha проверяет любой определённый интеграл до 6 знаков.</li> </ul>",
      "de": "<ul> <li><b>Zurück einsetzen.</b> Du hast $u$ gefunden – setz es in die Gleichung, die Rand- und die Anfangsbedingungen ein. Genau das ist der Beweis, dass $u$ eine Lösung ist.</li> <li><b>Spezialfall.</b> Setz $t=0$, $n=1$, $a=0$, $k=0$: Die Formel muss liefern, was du schon vorher weißt.</li> <li><b>Symmetrie und Vorzeichen.</b> Das Integral einer positiven Funktion muss positiv und reell sein. Gerade Funktion → gerade Fouriertransformierte.</li> <li><b>Grenzwert.</b> $t\\to0^+$, $t\\to\\infty$, $R\\to\\infty$: Die Antwort muss sich physikalisch sinnvoll verhalten (Wärme verteilt sich, die Welle läuft weg).</li> <li><b>Numerisch.</b> Ein Aufruf von <code>scipy.integrate.quad</code> oder WolframAlpha prüft jedes bestimmte Integral auf 6 Stellen.</li> </ul>"
     }
    }
   ]
  },
  "holo": {
   "emoji": "🌀",
   "ref": "§1.4–1.5",
   "title": {
    "ru": "Голоморфность и уравнения Коши–Римана",
    "de": "Holomorphie und Cauchy-Riemann-Gleichungen"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Komplexe Zahl</b> $z=x+iy$: ein Punkt in der Ebene, $x$ nach rechts, $y$ nach oben. $i$ ist die Zahl mit $i^2=-1$.</li><li><b>Mal $i$</b> heißt: den Punkt um 90° drehen. Beispiel: $i\\cdot 1=i$, der Punkt 1 auf der x-Achse landet oben auf der y-Achse.</li><li><b>Ableitung</b> = wie stark sich der Ausgang ändert, wenn du den Eingang ein kleines bisschen bewegst.</li><li><b>$u$ und $v$</b>: Jede komplexe Funktion hat einen Realteil $u(x,y)$ und einen Imaginärteil $v(x,y)$: $f=u+iv$.</li></ul>",
      "ru": "<ul><li><b>Комплексное число</b> $z=x+iy$: точка на плоскости, $x$ вправо, $y$ вверх. $i$ — число, у которого $i^2=-1$.</li><li><b>Умножить на $i$</b> значит повернуть точку на 90°. Пример: $i\\cdot 1=i$, точка 1 на оси x переезжает наверх, на ось y.</li><li><b>Производная</b> — насколько сильно меняется выход, если чуть-чуть сдвинуть вход.</li><li><b>$u$ и $v$</b>: у любой комплексной функции есть вещественная часть $u(x,y)$ и мнимая часть $v(x,y)$: $f=u+iv$.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Stell dir vor, du druckst ein Foto auf ein Gummituch und dehnst es. Bei einer <b>holomorphen</b> Funktion darf jedes kleine Stück nur <b>gedreht und gleichmäßig vergrößert</b> werden, wie beim Zoomen am Handy. Verzerren (ein Quadrat wird zur schiefen Raute) ist verboten. Die zwei Cauchy-Riemann-Gleichungen sind genau diese Regel „nur drehen und zoomen“, als Formel geschrieben.",
      "ru": "Представь: печатаешь фото на резиновой плёнке и растягиваешь её. У <b>голоморфной</b> функции каждый маленький кусочек можно только <b>повернуть и равномерно увеличить</b>, как при зуме на телефоне. Перекашивать (квадрат превращается в косой ромб) нельзя. Два уравнения Коши–Римана — это ровно правило «только поворот и зум», записанное формулой."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Ist $f(z)=z^2$ holomorph?</b><ol><li>Ausrechnen: $(x+iy)^2=x^2-y^2+2ixy$, also $u=x^2-y^2$, $v=2xy$.</li><li>Ableitungen: $u_x=2x$, $v_y=2x$ → gleich ✓. $u_y=-2y$, $v_x=2y$ → $u_y=-v_x$ ✓.</li><li>Beide Gleichungen stimmen → holomorph.</li></ol><b>Gegenbeispiel $f(z)=\\bar z=x-iy$:</b> $u=x$, $v=-y$, also $u_x=1$, aber $v_y=-1$ ✗. Nicht holomorph: $\\bar z$ spiegelt, und Spiegeln ist kein Drehen.",
      "ru": "<b>Голоморфна ли $f(z)=z^2$?</b><ol><li>Раскрываем: $(x+iy)^2=x^2-y^2+2ixy$, значит $u=x^2-y^2$, $v=2xy$.</li><li>Производные: $u_x=2x$, $v_y=2x$ → совпали ✓. $u_y=-2y$, $v_x=2y$ → $u_y=-v_x$ ✓.</li><li>Оба уравнения выполнены → голоморфна.</li></ol><b>Контрпример $f(z)=\\bar z=x-iy$:</b> $u=x$, $v=-y$, то есть $u_x=1$, а $v_y=-1$ ✗. Не голоморфна: $\\bar z$ отражает, а отражение — это не поворот."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Вещественная производная говорит «растяни в $f'$ раз». Комплексная производная — это комплексное число, а умножение на комплексное число означает <b>поворот + растяжение</b>. Значит, голоморфная функция вблизи каждой точки выглядит как поворот с растяжением: маленькие квадратики переходят в маленькие квадратики, а не в параллелограммы. Это сильное ограничение, поэтому голоморфных функций «мало» и они очень хорошо себя ведут.",
      "de": "Die reelle Ableitung sagt „streck um den Faktor $f'$“. Die komplexe Ableitung ist eine komplexe Zahl, und Multiplizieren mit einer komplexen Zahl heißt <b>Drehen + Strecken</b>. Eine holomorphe Funktion sieht also in der Nähe jedes Punkts wie eine Drehstreckung aus: Kleine Quadrate werden auf kleine Quadrate abgebildet, nicht auf Parallelogramme. Das ist eine starke Einschränkung – deshalb gibt es „wenige“ holomorphe Funktionen, und sie verhalten sich sehr brav."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$f=u+iv \\text{ голоморфна} \\iff u_x=v_y,\\quad u_y=-v_x \\quad(\\text{и } u,v\\in C^1)$$ $$\\text{Короче: } f \\text{ зависит только от } z, \\text{ а не от } \\bar z:\\quad \\frac{\\partial f}{\\partial \\bar z}=\\tfrac12(\\partial_x+i\\partial_y)f=0$$",
      "de": "$$f=u+iv \\text{ holomorph} \\iff u_x=v_y,\\quad u_y=-v_x \\quad(\\text{und } u,v\\in C^1)$$ $$\\text{Kurz: } f \\text{ hängt nur von } z \\text{ ab}, \\text{ nicht von } \\bar z:\\quad \\frac{\\partial f}{\\partial \\bar z}=\\tfrac12(\\partial_x+i\\partial_y)f=0$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить за 30 секунд",
      "de": "Check in 30 Sekunden"
     },
     "html": {
      "ru": "<ul> <li>Запиши $f$ через $z$ и $\\bar z$ (подставь $x=\\frac{z+\\bar z}2$, $y=\\frac{z-\\bar z}{2i}$). Если $\\bar z$ исчез — голоморфна. $z^2,\\ e^z,\\ \\sin z$ — да. $\\bar z,\\ |z|^2=z\\bar z,\\ \\operatorname{Re} z$ — нет.</li> <li>Следствие: $u$ и $v$ гармоничны, $\\Delta u=\\Delta v=0$. Если $\\Delta u\\neq0$, то такой $u$ не может быть вещественной частью голоморфной функции.</li> </ul>",
      "de": "<ul> <li>Schreib $f$ mit $z$ und $\\bar z$ (setz $x=\\frac{z+\\bar z}2$, $y=\\frac{z-\\bar z}{2i}$ ein). Ist $\\bar z$ verschwunden – holomorph. $z^2,\\ e^z,\\ \\sin z$ – ja. $\\bar z,\\ |z|^2=z\\bar z,\\ \\operatorname{Re} z$ – nein.</li> <li>Folgerung: $u$ und $v$ sind harmonisch, $\\Delta u=\\Delta v=0$. Ist $\\Delta u\\neq0$, kann so ein $u$ nicht Realteil einer holomorphen Funktion sein.</li> </ul>"
     }
    },
    {
     "type": "rezept",
     "label": {
      "ru": "Рецепт: «найди $v$, если дано $u$»",
      "de": "Rezept: „Finde $v$, wenn $u$ gegeben ist“"
     },
     "html": {
      "ru": "<ol> <li>Проверь $\\Delta u=0$.</li><li>Из $v_y=u_x$ проинтегрируй по $y$: $v=\\int u_x\\,dy+C(x)$.</li><li>Подставь в $v_x=-u_y$, найди $C'(x)$.</li><li>Проверка: $u+iv$ должно записываться только через $z$.</li></ol>",
      "de": "<ol> <li>Prüfe $\\Delta u=0$.</li><li>Aus $v_y=u_x$ nach $y$ integrieren: $v=\\int u_x\\,dy+C(x)$.</li><li>In $v_x=-u_y$ einsetzen, $C'(x)$ bestimmen.</li><li>Check: $u+iv$ muss sich allein durch $z$ schreiben lassen.</li></ol>"
     }
    }
   ]
  },
  "curve": {
   "emoji": "🐌",
   "ref": "§1.6–1.7",
   "title": {
    "ru": "Комплексный интеграл по кривой",
    "de": "Komplexes Kurvenintegral"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Weg / Kurve</b> $\\gamma$: eine Route in der Ebene, beschrieben durch eine „Zeit“ $t$: zur Zeit $t$ bist du am Punkt $\\gamma(t)$.</li><li><b>Einheitskreis</b>: $\\gamma(t)=e^{it}=\\cos t+i\\sin t$ für $t$ von $0$ bis $2\\pi$ – einmal gegen den Uhrzeigersinn herum.</li><li><b>$\\oint$</b> = Integral über einen geschlossenen Weg (Ende = Anfang).</li></ul>",
      "ru": "<ul><li><b>Путь / кривая</b> $\\gamma$: маршрут на плоскости, заданный «временем» $t$: в момент $t$ ты в точке $\\gamma(t)$.</li><li><b>Единичная окружность</b>: $\\gamma(t)=e^{it}=\\cos t+i\\sin t$ при $t$ от $0$ до $2\\pi$ — один круг против часовой стрелки.</li><li><b>$\\oint$</b> — интеграл по замкнутому пути (конец = начало).</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein Spaziergang mit Schrittzähler: Bei jedem kleinen Schritt $dz$ schaust du, welchen Wert $f$ dort hat, multiplizierst mit dem Schritt und schreibst es auf. Am Ende addierst du alles. Weil Schritte eine <b>Richtung</b> haben, kann sich vieles gegenseitig wegheben – genau deshalb kommt bei geschlossenen Wegen so oft $0$ heraus.",
      "ru": "Прогулка с шагомером: на каждом маленьком шаге $dz$ смотришь, чему равно $f$ в этой точке, умножаешь на шаг и записываешь. В конце всё складываешь. У шагов есть <b>направление</b>, поэтому многое взаимно сокращается — именно поэтому по замкнутому пути так часто получается $0$."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\oint_{|z|=1}\\frac1z\\,dz$ ausrechnen:</b><ol><li>Weg: $z=e^{it}$, $t\\in[0,2\\pi]$. Dann $dz=ie^{it}\\,dt$.</li><li>Einsetzen: $\\frac1z=e^{-it}$, also $\\frac1z\\,dz=e^{-it}\\cdot ie^{it}\\,dt=i\\,dt$.</li><li>Integrieren: $\\int_0^{2\\pi}i\\,dt=2\\pi i$.</li></ol><b>Zum Vergleich $\\oint_{|z|=1}z\\,dz$:</b> $e^{it}\\cdot ie^{it}=ie^{2it}$, und $\\int_0^{2\\pi}e^{2it}dt=0$. Also $0$. Merke: Nur $\\frac1z$ „überlebt“ einen Umlauf.",
      "ru": "<b>Считаем $\\oint_{|z|=1}\\frac1z\\,dz$:</b><ol><li>Путь: $z=e^{it}$, $t\\in[0,2\\pi]$. Тогда $dz=ie^{it}\\,dt$.</li><li>Подставляем: $\\frac1z=e^{-it}$, значит $\\frac1z\\,dz=e^{-it}\\cdot ie^{it}\\,dt=i\\,dt$.</li><li>Интегрируем: $\\int_0^{2\\pi}i\\,dt=2\\pi i$.</li></ol><b>Для сравнения $\\oint_{|z|=1}z\\,dz$:</b> $e^{it}\\cdot ie^{it}=ie^{2it}$, а $\\int_0^{2\\pi}e^{2it}dt=0$. Значит, $0$. Запомни: только $\\frac1z$ «выживает» после обхода."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Идёшь по пути $\\gamma$ маленькими шагами $dz$, в каждой точке умножаешь значение $f$ на шаг и складываешь. Чтобы посчитать, путь параметризуют, и всё сводится к обычному интегралу по $t$.",
      "de": "Du gehst den Weg $\\gamma$ in kleinen Schritten $dz$, multiplizierst an jedem Punkt den Wert von $f$ mit dem Schritt und summierst. Zum Ausrechnen parametrisiert man den Weg, und alles wird zu einem gewöhnlichen Integral über $t$."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\int_\\gamma f(z)\\,dz=\\int_a^b f(\\gamma(t))\\,\\gamma'(t)\\,dt$$ $$\\boxed{\\oint_{|z-a|=r}(z-a)^n\\,dz=\\begin{cases}2\\pi i,& n=-1\\\\ 0,& n\\neq-1\\end{cases}}$$",
      "de": "$$\\int_\\gamma f(z)\\,dz=\\int_a^b f(\\gamma(t))\\,\\gamma'(t)\\,dt$$ $$\\boxed{\\oint_{|z-a|=r}(z-a)^n\\,dz=\\begin{cases}2\\pi i,& n=-1\\\\ 0,& n\\neq-1\\end{cases}}$$"
     }
    },
    {
     "type": "text",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "Эту формулу в рамке надо знать как таблицу умножения: на ней держится вся теория вычетов. Доказательство в одну строку: $z=a+re^{it}$, $dz=ire^{it}dt$, получаем $ir^{n+1}\\int_0^{2\\pi}e^{i(n+1)t}dt$, а это $2\\pi i$ при $n=-1$ и $0$ иначе.",
      "de": "Die Formel im Kasten musst du kennen wie das Einmaleins: Auf ihr ruht die ganze Residuentheorie. Beweis in einer Zeile: $z=a+re^{it}$, $dz=ire^{it}dt$, also $ir^{n+1}\\int_0^{2\\pi}e^{i(n+1)t}dt$, und das ist $2\\pi i$ für $n=-1$ und sonst $0$."
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Если у $f$ есть первообразная $F$ (§1.7), то $\\int_\\gamma f\\,dz=F(\\text{конец})-F(\\text{начало})$, а по замкнутому пути получается $0$. У $1/z$ первообразной на $\\mathbb C\\setminus\\{0\\}$ нет (логарифм многозначен), поэтому $2\\pi i$.</li> <li>Оценка: $\\left|\\int_\\gamma f\\,dz\\right|\\le \\max_\\gamma|f|\\cdot L(\\gamma)$. Ответ больше этой границы означает ошибку.</li> </ul>",
      "de": "<ul> <li>Hat $f$ eine Stammfunktion $F$ (§1.7), dann ist $\\int_\\gamma f\\,dz=F(\\text{Ende})-F(\\text{Anfang})$, und über einen geschlossenen Weg kommt $0$ heraus. $1/z$ hat auf $\\mathbb C\\setminus\\{0\\}$ keine Stammfunktion (der Logarithmus ist mehrdeutig) – deshalb $2\\pi i$.</li> <li>Abschätzung: $\\left|\\int_\\gamma f\\,dz\\right|\\le \\max_\\gamma|f|\\cdot L(\\gamma)$. Ist deine Antwort größer als diese Schranke, ist etwas falsch.</li> </ul>"
     }
    }
   ]
  },
  "cauchy": {
   "emoji": "🍩",
   "ref": "§1.11–1.12",
   "title": {
    "ru": "Интегральная теорема Коши",
    "de": "Cauchyscher Integralsatz"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Singularität</b> = Stelle, an der $f$ kaputt ist, meist weil durch 0 geteilt wird. Bei $\\frac1{z-3}$ ist das $z=3$.</li><li><b>Einfach zusammenhängend</b> = ein Gebiet ohne Löcher (eine Scheibe ja, ein Ring nein).</li><li><b>Holomorph</b>: siehe erstes Thema – „nur drehen und zoomen“.</li></ul>",
      "ru": "<ul><li><b>Особенность (сингулярность)</b> — место, где $f$ «ломается», обычно из-за деления на 0. У $\\frac1{z-3}$ это $z=3$.</li><li><b>Односвязная</b> область — без дырок (диск — да, кольцо — нет).</li><li><b>Голоморфна</b>: см. первую тему — «только поворот и зум».</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Wanderung im Gebirge: Du gehst eine Runde und kommst zum Start zurück. Die Summe aller Höhenänderungen ist $0$ – egal welche Route. Genauso ist das Integral einer holomorphen Funktion über eine geschlossene Runde $0$. Das klappt nur, wenn im Inneren der Runde <b>kein Loch</b> ist (keine Singularität). Ein Loch ist wie ein Brunnen in der Mitte, um den man herumläuft – dann kann etwas übrig bleiben.",
      "ru": "Поход в горах: идёшь по кругу и возвращаешься к старту. Сумма всех подъёмов и спусков равна $0$ — какой бы маршрут ты ни выбрал. Так же и интеграл голоморфной функции по замкнутому кругу равен $0$. Работает это, только если внутри круга <b>нет дырки</b> (нет особенности). Дырка — как колодец в центре, вокруг которого ходишь: тогда что-то может остаться."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\oint_{|z|=1}\\frac{1}{z-3}\\,dz=?$</b><ol><li>Wo ist $f$ kaputt? Nenner $z-3=0$ → bei $z=3$.</li><li>Liegt $z=3$ im Kreis $|z|\\le1$? Abstand von 0 ist $3>1$ → <b>nein</b>, draußen.</li><li>Innen kein Loch → Cauchy → Antwort $0$. Nichts zu rechnen.</li></ol><b>Achtung:</b> Bei $\\oint_{|z|=5}\\frac{1}{z-3}\\,dz$ liegt $z=3$ innen ($3<5$). Dann gilt der Satz nicht, und tatsächlich kommt $2\\pi i$ heraus (siehe Residuen).",
      "ru": "<b>$\\oint_{|z|=1}\\frac{1}{z-3}\\,dz=?$</b><ol><li>Где $f$ ломается? Знаменатель $z-3=0$ → в $z=3$.</li><li>Лежит ли $z=3$ в круге $|z|\\le1$? Расстояние до 0 равно $3>1$ → <b>нет</b>, снаружи.</li><li>Внутри дырок нет → Коши → ответ $0$. Считать нечего.</li></ol><b>Внимание:</b> у $\\oint_{|z|=5}\\frac{1}{z-3}\\,dz$ точка $z=3$ внутри ($3<5$). Тогда теорема не работает, и действительно получается $2\\pi i$ (см. вычеты)."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Если внутри замкнутой петли у функции нет ни одной «дырки» (особенности), то интеграл по петле равен нулю. Как работа силы без источников по замкнутому пути. Петлю можно сколько угодно деформировать, не задевая особенностей, и интеграл не изменится.",
      "de": "Hat die Funktion innerhalb einer geschlossenen Schleife kein einziges „Loch“ (keine Singularität), dann ist das Integral über die Schleife null. Wie die Arbeit einer quellenfreien Kraft entlang eines geschlossenen Wegs. Die Schleife darf man beliebig verformen, solange man keine Singularität berührt – das Integral ändert sich nicht."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$f \\text{ голоморфна в односвязной } \\Omega,\\ \\gamma \\text{ замкнута в } \\Omega \\;\\Longrightarrow\\; \\oint_\\gamma f\\,dz=0$$",
      "de": "$$f \\text{ holomorph im einfach zusammenhängenden } \\Omega,\\ \\gamma \\text{ geschlossen in } \\Omega \\;\\Longrightarrow\\; \\oint_\\gamma f\\,dz=0$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Нарисуй контур и отметь все нули знаменателя. Ни один не попал внутрь — ответ $0$, считать нечего.</li> <li>Морера (§1.14, обратное утверждение): если интеграл по каждому маленькому треугольнику равен 0 и $f$ непрерывна, то $f$ голоморфна.</li> </ul>",
      "de": "<ul> <li>Zeichne den Weg und markiere alle Nullstellen des Nenners. Liegt keine innen – die Antwort ist $0$, nichts zu rechnen.</li> <li>Morera (§1.14, die Umkehrung): Ist das Integral über jedes kleine Dreieck 0 und $f$ stetig, dann ist $f$ holomorph.</li> </ul>"
     }
    }
   ]
  },
  "cif": {
   "emoji": "🎯",
   "ref": "§1.12–1.13",
   "title": {
    "ru": "Интегральная формула Коши",
    "de": "Cauchysche Integralformel"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Cauchyscher Integralsatz</b> (vorheriges Thema): ohne Loch innen ist das Integral $0$.</li><li>Hier gibt es <b>genau ein</b> „Loch“, bei $z=a$, und es kommt von uns selbst: Wir teilen absichtlich durch $(z-a)$.</li><li>$g^{(m)}$ = $m$-te Ableitung von $g$; $m!=1\\cdot2\\cdots m$.</li></ul>",
      "ru": "<ul><li><b>Интегральная теорема Коши</b> (прошлая тема): без дырки внутри интеграл равен $0$.</li><li>Здесь ровно <b>одна</b> «дырка», в $z=a$, и сделали её мы сами: специально делим на $(z-a)$.</li><li>$g^{(m)}$ — $m$-я производная $g$; $m!=1\\cdot2\\cdots m$.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein Ring aus Thermometern um eine Tasse: Wenn die Temperatur sich „brav“ verteilt, kannst du aus den Werten am Ring ausrechnen, wie warm es genau in der Mitte ist. Die Integralformel ist dieser Trick: Das Integral um $a$ herum „liest“ den Wert $g(a)$ in der Mitte ab. Steht im Nenner eine höhere Potenz, liest es statt des Werts eine Ableitung ab.",
      "ru": "Кольцо из термометров вокруг чашки: если температура распределена «прилично», по показаниям на кольце можно точно вычислить, какая она в центре. Интегральная формула — именно этот трюк: интеграл вокруг $a$ «считывает» значение $g(a)$ в центре. Если в знаменателе степень выше, он считывает не значение, а производную."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\oint_{|z|=2}\\frac{e^z}{z-1}\\,dz$:</b><ol><li>Form $\\frac{g(z)}{z-a}$ mit $g(z)=e^z$, $a=1$.</li><li>$a=1$ liegt im Kreis mit Radius 2 ✓, $e^z$ hat keine Löcher ✓.</li><li>Antwort: $2\\pi i\\cdot g(1)=2\\pi i\\,e$.</li></ol><b>Mit Quadrat: $\\oint_{|z|=2}\\frac{z^2}{(z-1)^2}\\,dz$.</b> Hier $m=2$, $g(z)=z^2$, $g'(z)=2z$, $g'(1)=2$. Antwort: $2\\pi i\\cdot\\frac{2}{1!}=4\\pi i$.",
      "ru": "<b>$\\oint_{|z|=2}\\frac{e^z}{z-1}\\,dz$:</b><ol><li>Вид $\\frac{g(z)}{z-a}$, где $g(z)=e^z$, $a=1$.</li><li>$a=1$ лежит в круге радиуса 2 ✓, у $e^z$ дырок нет ✓.</li><li>Ответ: $2\\pi i\\cdot g(1)=2\\pi i\\,e$.</li></ol><b>С квадратом: $\\oint_{|z|=2}\\frac{z^2}{(z-1)^2}\\,dz$.</b> Здесь $m=2$, $g(z)=z^2$, $g'(z)=2z$, $g'(1)=2$. Ответ: $2\\pi i\\cdot\\frac{2}{1!}=4\\pi i$."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Значение в центре полностью определено значениями на окружности: $f(a)$ — это «среднее» $f$ по окружности вокруг $a$. Знаешь границу — знаешь всё внутри. Отсюда же: голоморфная функция автоматически бесконечно дифференцируема.",
      "de": "Der Wert in der Mitte ist komplett durch die Werte auf dem Kreis bestimmt: $f(a)$ ist der „Mittelwert“ von $f$ auf einem Kreis um $a$. Kennst du den Rand, kennst du alles innen. Und daraus folgt: Eine holomorphe Funktion ist automatisch unendlich oft differenzierbar."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$f(a)=\\frac1{2\\pi i}\\oint_\\gamma\\frac{f(z)}{z-a}\\,dz,\\qquad f^{(n)}(a)=\\frac{n!}{2\\pi i}\\oint_\\gamma\\frac{f(z)}{(z-a)^{n+1}}\\,dz$$",
      "de": "$$f(a)=\\frac1{2\\pi i}\\oint_\\gamma\\frac{f(z)}{z-a}\\,dz,\\qquad f^{(n)}(a)=\\frac{n!}{2\\pi i}\\oint_\\gamma\\frac{f(z)}{(z-a)^{n+1}}\\,dz$$"
     }
    },
    {
     "type": "rezept",
     "label": {
      "ru": "Рецепт: интеграл вида $\\oint \\frac{g(z)}{(z-a)^{m}}dz$",
      "de": "Rezept: Integral der Form $\\oint \\frac{g(z)}{(z-a)^{m}}dz$"
     },
     "html": {
      "ru": "<ol> <li>Убедись, что $g$ голоморфна внутри контура, а $a$ лежит внутри.</li> <li>Ответ: $2\\pi i\\cdot\\dfrac{g^{(m-1)}(a)}{(m-1)!}$.</li> <li>Пример: $\\oint_{|z|=1}\\frac{e^z}{z^3}dz=2\\pi i\\cdot\\frac{e^0}{2!}=\\pi i$.</li></ol>",
      "de": "<ol> <li>Stell sicher, dass $g$ im Inneren holomorph ist und $a$ innen liegt.</li> <li>Antwort: $2\\pi i\\cdot\\dfrac{g^{(m-1)}(a)}{(m-1)!}$.</li> <li>Beispiel: $\\oint_{|z|=1}\\frac{e^z}{z^3}dz=2\\pi i\\cdot\\frac{e^0}{2!}=\\pi i$.</li></ol>"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul><li>Разложи $g$ в ряд Тейлора вокруг $a$, подели на $(z-a)^m$ и найди коэффициент при $(z-a)^{-1}$. Умноженный на $2\\pi i$, он должен совпасть с ответом. Это та же формула в рамке из предыдущего пункта.</li></ul>",
      "de": "<ul><li>Entwickle $g$ in eine Taylorreihe um $a$, teile durch $(z-a)^m$ und such den Koeffizienten vor $(z-a)^{-1}$. Mal $2\\pi i$ muss er mit der Antwort übereinstimmen. Das ist dieselbe Formel im Kasten aus dem vorigen Thema.</li></ul>"
     }
    }
   ]
  },
  "series": {
   "emoji": "⭕",
   "ref": "§1.2, 1.10, 1.13",
   "title": {
    "ru": "Голоморфна = аналитична, радиус сходимости",
    "de": "Holomorph = analytisch, Konvergenzradius"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Potenzreihe</b> $\\sum a_nz^n=a_0+a_1z+a_2z^2+\\dots$: ein „unendlich langes Polynom“.</li><li><b>Konvergiert</b> = die Summe nähert sich einer festen Zahl. <b>Divergiert</b> = sie wächst über alle Grenzen oder springt herum.</li><li><b>Konvergenzradius $R$</b>: Für $|z|\\lt R$ konvergiert die Reihe, für $|z|>R$ nicht.</li></ul>",
      "ru": "<ul><li><b>Степенной ряд</b> $\\sum a_nz^n=a_0+a_1z+a_2z^2+\\dots$: «бесконечно длинный многочлен».</li><li><b>Сходится</b> — сумма приближается к определённому числу. <b>Расходится</b> — растёт без предела или скачет.</li><li><b>Радиус сходимости $R$</b>: при $|z|\\lt R$ ряд сходится, при $|z|>R$ — нет.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Blas einen Luftballon um den Mittelpunkt auf. Er wächst gleichmäßig in alle Richtungen, bis er das <b>erste Loch</b> der Funktion berührt – dann platzt er. Der Radius in diesem Moment ist der Konvergenzradius. Deshalb hängt $R$ davon ab, wo die nächste Singularität liegt, auch wenn sie nicht auf der reellen Achse liegt.",
      "ru": "Надуваешь воздушный шарик вокруг центра. Он растёт одинаково во все стороны, пока не коснётся <b>первой дырки</b> функции — тогда лопается. Радиус в этот момент и есть радиус сходимости. Поэтому $R$ зависит от того, где ближайшая особенность, даже если она не на вещественной оси."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\frac1{1-z}=1+z+z^2+z^3+\\dots$</b><ol><li>Wo ist die Funktion kaputt? Bei $z=1$. Abstand zu 0: $1$ → $R=1$.</li><li>Test mit $z=\\frac12$: Reihe $1+\\frac12+\\frac14+\\dots=2$, Funktion $\\frac1{1-1/2}=2$ ✓.</li><li>Test mit $z=2$: Reihe $1+2+4+\\dots$ explodiert, obwohl $\\frac1{1-2}=-1$ existiert. Außerhalb von $R$ hilft die Reihe nicht.</li></ol><b>Überraschung:</b> $\\frac1{1+x^2}$ ist auf ganz $\\mathbb R$ harmlos, aber hat Löcher bei $\\pm i$ (Abstand 1). Darum ist auch hier $R=1$.",
      "ru": "<b>$\\frac1{1-z}=1+z+z^2+z^3+\\dots$</b><ol><li>Где функция ломается? В $z=1$. Расстояние до 0: $1$ → $R=1$.</li><li>Проверка при $z=\\frac12$: ряд $1+\\frac12+\\frac14+\\dots=2$, функция $\\frac1{1-1/2}=2$ ✓.</li><li>Проверка при $z=2$: ряд $1+2+4+\\dots$ взрывается, хотя $\\frac1{1-2}=-1$ существует. За пределами $R$ ряд не помогает.</li></ol><b>Сюрприз:</b> $\\frac1{1+x^2}$ на всей $\\mathbb R$ безобидна, но у неё есть дырки в $\\pm i$ (расстояние 1). Поэтому и здесь $R=1$."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Голоморфная функция везде раскладывается в степенной ряд, и ряд сходится в самом большом круге, который помещается до ближайшей особенности. Именно поэтому ряд для $\\frac1{1+x^2}$ на вещественной оси сходится только при $|x|<1$, хотя сама функция на $\\mathbb R$ гладкая: в комплексной плоскости в точках $\\pm i$ сидят полюсы на расстоянии 1.",
      "de": "Eine holomorphe Funktion lässt sich überall in eine Potenzreihe entwickeln, und die Reihe konvergiert im größten Kreis, der bis zur nächsten Singularität passt. Genau deshalb konvergiert die Reihe für $\\frac1{1+x^2}$ auf der reellen Achse nur für $|x|<1$, obwohl die Funktion auf $\\mathbb R$ glatt ist: In der komplexen Ebene sitzen bei $\\pm i$ Pole im Abstand 1."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$R=\\lim_{n\\to\\infty}\\frac{|a_n|}{|a_{n+1}|}\\quad\\text{или}\\quad R=\\frac1{\\limsup|a_n|^{1/n}}\\qquad R=\\operatorname{dist}(z_0,\\ \\text{ближайшая особенность})$$",
      "de": "$$R=\\lim_{n\\to\\infty}\\frac{|a_n|}{|a_{n+1}|}\\quad\\text{oder}\\quad R=\\frac1{\\limsup|a_n|^{1/n}}\\qquad R=\\operatorname{dist}(z_0,\\ \\text{nächste Singularität})$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Посчитай радиус двумя способами: по формуле и как расстояние до ближайшего нуля знаменателя. Должно совпасть.</li> <li>На границе круга ничего общего сказать нельзя, каждую точку проверяй отдельно (пример из скрипта: $\\sum\\frac{(-1)^{n-1}}nz^n$ сходится при $z=1$ и расходится при $z=-1$).</li> <li>Теорема единственности: две голоморфные функции, совпадающие на отрезке, совпадают везде в области. Поэтому $\\sin^2z+\\cos^2z=1$ на $\\mathbb C$ следует из вещественного случая.</li> </ul>",
      "de": "<ul> <li>Berechne den Radius auf zwei Wegen: mit der Formel und als Abstand zur nächsten Nullstelle des Nenners. Es muss übereinstimmen.</li> <li>Auf dem Rand des Kreises kann man nichts Allgemeines sagen, jeden Punkt einzeln prüfen (Beispiel aus dem Skriptum: $\\sum\\frac{(-1)^{n-1}}nz^n$ konvergiert bei $z=1$ und divergiert bei $z=-1$).</li> <li>Identitätssatz: Zwei holomorphe Funktionen, die auf einer Strecke übereinstimmen, stimmen im ganzen Gebiet überein. Deshalb folgt $\\sin^2z+\\cos^2z=1$ auf $\\mathbb C$ aus dem reellen Fall.</li> </ul>"
     }
    }
   ]
  },
  "log": {
   "emoji": "✂️",
   "ref": "§1.8",
   "title": {
    "ru": "Ветви логарифма и корня",
    "de": "Zweige von Logarithmus und Wurzel"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Polarform</b>: $z=r\\,e^{i\\varphi}$, wobei $r=|z|$ der Abstand zu 0 und $\\varphi$ der Winkel ist.</li><li><b>$\\arg z$</b> = dieser Winkel. Problem: $\\varphi$ und $\\varphi+2\\pi$ beschreiben denselben Punkt.</li><li>$\\ln$ = gewöhnlicher reeller Logarithmus, $\\log$ = komplexer.</li></ul>",
      "ru": "<ul><li><b>Полярная форма</b>: $z=r\\,e^{i\\varphi}$, где $r=|z|$ — расстояние до 0, а $\\varphi$ — угол.</li><li><b>$\\arg z$</b> — этот угол. Проблема: $\\varphi$ и $\\varphi+2\\pi$ задают одну и ту же точку.</li><li>$\\ln$ — обычный вещественный логарифм, $\\log$ — комплексный.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein Parkhaus mit Wendelrampe: Du fährst eine volle Runde und stehst wieder über demselben Punkt – aber ein Stockwerk höher. Der Logarithmus merkt sich das Stockwerk: Nach einer Runde um die 0 ist sein Wert um $2\\pi i$ größer. Damit $\\log$ trotzdem eine normale Funktion ist, sperrt man eine „Wand“ (den Schnitt), durch die man nicht durchfahren darf. Dann bleibt man immer im selben Stockwerk.",
      "ru": "Паркинг со спиральным пандусом: проезжаешь полный круг и снова стоишь над той же точкой — но этажом выше. Логарифм запоминает этаж: после круга вокруг 0 его значение больше на $2\\pi i$. Чтобы $\\log$ всё же был нормальной функцией, ставят «стену» (разрез), через которую проезжать нельзя. Тогда всегда остаёшься на одном этаже."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\log(1+i)$ im Hauptzweig:</b><ol><li>Abstand: $|1+i|=\\sqrt{1+1}=\\sqrt2$.</li><li>Winkel: $1+i$ liegt auf der Diagonalen → $\\arg=\\frac\\pi4$ (liegt in $(-\\pi,\\pi)$ ✓).</li><li>$\\log(1+i)=\\ln\\sqrt2+i\\frac\\pi4=\\frac{\\ln2}{2}+i\\frac\\pi4$.</li></ol><b>Eine Runde weiter:</b> Gehst du einmal um die 0 herum, ist der Winkel $\\frac\\pi4+2\\pi$, und $\\log$ wird $\\frac{\\ln2}{2}+i\\frac{9\\pi}4$ – derselbe Punkt, anderes „Stockwerk“.",
      "ru": "<b>$\\log(1+i)$ на главной ветви:</b><ol><li>Расстояние: $|1+i|=\\sqrt{1+1}=\\sqrt2$.</li><li>Угол: $1+i$ лежит на диагонали → $\\arg=\\frac\\pi4$ (входит в $(-\\pi,\\pi)$ ✓).</li><li>$\\log(1+i)=\\ln\\sqrt2+i\\frac\\pi4=\\frac{\\ln2}{2}+i\\frac\\pi4$.</li></ol><b>На круг дальше:</b> если обойти 0 один раз, угол станет $\\frac\\pi4+2\\pi$, и $\\log$ станет $\\frac{\\ln2}{2}+i\\frac{9\\pi}4$ — та же точка, другой «этаж»."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Угол точки определён с точностью до $2\\pi$: обошёл ноль по кругу, и угол вырос на $2\\pi$, хотя точка та же. Логарифм «помнит» угол, поэтому после обхода его значение сдвигается на $2\\pi i$. Чтобы получить нормальную функцию, плоскость разрезают лучом из нуля и запрещают его пересекать. Выбор разреза и есть выбор ветви.",
      "de": "Der Winkel eines Punkts ist nur bis auf $2\\pi$ bestimmt: Geh einmal um die Null herum, und der Winkel ist um $2\\pi$ gewachsen, obwohl der Punkt derselbe ist. Der Logarithmus „merkt sich“ den Winkel, deshalb verschiebt sich sein Wert nach einem Umlauf um $2\\pi i$. Um eine ordentliche Funktion zu bekommen, schneidet man die Ebene entlang eines Strahls aus der Null auf und verbietet, ihn zu überqueren. Die Wahl des Schnitts ist die Wahl des Zweigs."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\log z=\\ln|z|+i\\arg z,\\qquad \\sqrt z=e^{\\frac12\\log z}\\quad(\\text{главная ветвь: } \\arg z\\in(-\\pi,\\pi),\\ \\text{разрез }(-\\infty,0])$$",
      "de": "$$\\log z=\\ln|z|+i\\arg z,\\qquad \\sqrt z=e^{\\frac12\\log z}\\quad(\\text{Hauptzweig: } \\arg z\\in(-\\pi,\\pi),\\ \\text{Schnitt }(-\\infty,0])$$"
     }
    },
    {
     "type": "falle",
     "label": {
      "ru": "Ловушка",
      "de": "Falle"
     },
     "html": {
      "ru": "$\\log(zw)\\neq\\log z+\\log w$ в общем случае. Пример: $z=w=e^{i\\,3\\pi/4}$. Справа получается $i\\,3\\pi/2$, а это вне главной ветви. В задачах с вычетами разрез выбирают так, чтобы он не пересекал контур.",
      "de": "$\\log(zw)\\neq\\log z+\\log w$ im Allgemeinen. Beispiel: $z=w=e^{i\\,3\\pi/4}$. Rechts kommt $i\\,3\\pi/2$ heraus, und das liegt außerhalb des Hauptzweigs. Bei Residuen-Aufgaben wählt man den Schnitt so, dass er den Integrationsweg nicht kreuzt."
     }
    }
   ]
  },
  "sing": {
   "emoji": "💥",
   "ref": "§2.1–2.4",
   "title": {
    "ru": "Изолированные особенности и ряд Лорана",
    "de": "Isolierte Singularitäten und Laurentreihe"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Taylorreihe</b>: $f$ als Summe $a_0+a_1(z-a)+a_2(z-a)^2+\\dots$ (nur positive Potenzen).</li><li><b>Laurentreihe</b>: dasselbe, aber auch mit $\\frac1{z-a},\\frac1{(z-a)^2},\\dots$ erlaubt.</li><li><b>Pol der Ordnung $m$</b>: $f$ benimmt sich bei $a$ wie $\\frac{1}{(z-a)^m}$.</li></ul>",
      "ru": "<ul><li><b>Ряд Тейлора</b>: $f$ в виде суммы $a_0+a_1(z-a)+a_2(z-a)^2+\\dots$ (только положительные степени).</li><li><b>Ряд Лорана</b>: то же самое, но разрешены и $\\frac1{z-a},\\frac1{(z-a)^2},\\dots$</li><li><b>Полюс порядка $m$</b>: в точке $a$ функция $f$ ведёт себя как $\\frac{1}{(z-a)^m}$.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Drei Arten von Löchern in einer Straße: <b>Hebbar</b> – ein Schlagloch, das man einfach zuschütten kann, danach ist die Straße glatt. <b>Pol</b> – ein Brunnen: tief, aber mit messbarer Tiefe ($m$). <b>Wesentlich</b> – eine bodenlose Höhle, in der alles Mögliche passiert. Die Laurentreihe misst die Tiefe: Wie viele negative Potenzen gibt es?",
      "ru": "Три вида дыр на дороге: <b>устранимая</b> — выбоина, которую можно засыпать, и дорога снова ровная. <b>Полюс</b> — колодец: глубокий, но глубину можно измерить ($m$). <b>Существенная</b> — бездонная пещера, где творится что угодно. Ряд Лорана измеряет глубину: сколько в нём отрицательных степеней?"
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Drei Funktionen bei $z=0$:</b><ol><li>$\\frac{\\sin z}{z}=\\frac{z-\\frac{z^3}{6}+\\dots}{z}=1-\\frac{z^2}6+\\dots$ → keine negativen Potenzen → <b>hebbar</b>, Wert in 0 ist $1$.</li><li>$\\frac{3}{z^2}$ → negative Potenzen bis $z^{-2}$ → <b>Pol der Ordnung 2</b>.</li><li>$e^{1/z}=1+\\frac1z+\\frac1{2z^2}+\\frac1{6z^3}+\\dots$ → unendlich viele negative Potenzen → <b>wesentlich</b>.</li></ol>Bonus: Das Residuum ist der Koeffizient vor $\\frac1z$: bei $\\frac3{z^2}$ ist er $0$ (es gibt kein $\\frac1z$!), bei $e^{1/z}$ ist er $1$. Ein Pol kann also Residuum $0$ haben.",
      "ru": "<b>Три функции в $z=0$:</b><ol><li>$\\frac{\\sin z}{z}=\\frac{z-\\frac{z^3}{6}+\\dots}{z}=1-\\frac{z^2}6+\\dots$ → отрицательных степеней нет → <b>устранимая</b>, значение в 0 равно $1$.</li><li>$\\frac{3}{z^2}$ → отрицательные степени до $z^{-2}$ → <b>полюс порядка 2</b>.</li><li>$e^{1/z}=1+\\frac1z+\\frac1{2z^2}+\\frac1{6z^3}+\\dots$ → бесконечно много отрицательных степеней → <b>существенная</b>.</li></ol>Бонус: вычет — это коэффициент при $\\frac1z$: у $\\frac3{z^2}$ он $0$ (там нет $\\frac1z$!), у $e^{1/z}$ он $1$. Значит, у полюса вычет может быть равен $0$."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Ряд Лорана — это ряд Тейлора, которому разрешили отрицательные степени. Отрицательная часть описывает, «насколько плохо» функция ведёт себя в точке. Три типа: дырку можно заделать (устранимая), функция уходит в бесконечность контролируемо (полюс), или творится хаос (существенная).",
      "de": "Die Laurentreihe ist eine Taylorreihe, die auch negative Potenzen haben darf. Der negative Teil beschreibt, „wie schlimm“ sich die Funktion im Punkt verhält. Drei Typen: Das Loch lässt sich stopfen (hebbar), die Funktion geht kontrolliert gegen unendlich (Pol), oder es herrscht Chaos (wesentlich)."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$f(z)=\\sum_{n=-\\infty}^{\\infty}a_n(z-a)^n,\\qquad \\operatorname{Res}_a f=a_{-1}$$",
      "de": "$$f(z)=\\sum_{n=-\\infty}^{\\infty}a_n(z-a)^n,\\qquad \\operatorname{Res}_a f=a_{-1}$$"
     }
    },
    {
     "type": "tabelle",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "<table> <tr><th>Тип</th><th>Отрицательная часть</th><th>Критерий без ряда</th><th>Пример в 0</th></tr> <tr><td>Устранимая</td><td>нет</td><td>$\\lim f$ конечен (или $f$ ограничена рядом)</td><td>$\\frac{\\sin z}{z}$</td></tr> <tr><td>Полюс порядка $m$</td><td>конечна, до $(z-a)^{-m}$</td><td>$|f|\\to\\infty$; $(z-a)^mf$ имеет конечный ненулевой предел</td><td>$\\frac1{z^2}$, $m=2$</td></tr> <tr><td>Существенная</td><td>бесконечна</td><td>ни то ни другое; рядом $f$ подходит сколь угодно близко к любому числу (Казорати–Вейерштрасс)</td><td>$e^{1/z}$</td></tr> </table>",
      "de": "<table> <tr><th>Typ</th><th>Negativer Teil</th><th>Kriterium ohne Reihe</th><th>Beispiel in 0</th></tr> <tr><td>Hebbar</td><td>keiner</td><td>$\\lim f$ endlich (oder $f$ in der Nähe beschränkt)</td><td>$\\frac{\\sin z}{z}$</td></tr> <tr><td>Pol der Ordnung $m$</td><td>endlich, bis $(z-a)^{-m}$</td><td>$|f|\\to\\infty$; $(z-a)^mf$ hat einen endlichen Grenzwert ungleich null</td><td>$\\frac1{z^2}$, $m=2$</td></tr> <tr><td>Wesentlich</td><td>unendlich</td><td>weder noch; in der Nähe kommt $f$ jeder Zahl beliebig nahe (Casorati–Weierstraß)</td><td>$e^{1/z}$</td></tr> </table>"
     }
    },
    {
     "type": "rezept",
     "label": {
      "ru": "Рецепт: Лоран для дроби, например $\\frac1{z(1-z)}$ (§2.2)",
      "de": "Rezept: Laurentreihe eines Bruchs, z. B. $\\frac1{z(1-z)}$ (§2.2)"
     },
     "html": {
      "ru": "<ol> <li>Определи кольцо: $0<|z|<1$ или $|z|>1$. В разных кольцах ряды разные.</li> <li>Для $|z|<1$: $\\frac1{1-z}=\\sum z^n$, итого $\\frac1z+1+z+z^2+\\dots$</li> <li>Для $|z|>1$: $\\frac1{1-z}=-\\frac1z\\cdot\\frac1{1-1/z}=-\\sum_{n\\ge1}z^{-n}$, итого $-\\frac1{z^2}-\\frac1{z^3}-\\dots$</li> <li>Проверка: перемножь первые члены ряда со знаменателем, должно получиться $1+O(\\cdot)$.</li></ol>",
      "de": "<ol> <li>Bestimme den Kreisring: $0<|z|<1$ oder $|z|>1$. In verschiedenen Ringen sind die Reihen verschieden.</li> <li>Für $|z|<1$: $\\frac1{1-z}=\\sum z^n$, insgesamt $\\frac1z+1+z+z^2+\\dots$</li> <li>Für $|z|>1$: $\\frac1{1-z}=-\\frac1z\\cdot\\frac1{1-1/z}=-\\sum_{n\\ge1}z^{-n}$, insgesamt $-\\frac1{z^2}-\\frac1{z^3}-\\dots$</li> <li>Check: Multiplizier die ersten Glieder der Reihe mit dem Nenner, es muss $1+O(\\cdot)$ herauskommen.</li></ol>"
     }
    }
   ]
  },
  "res": {
   "emoji": "👂",
   "ref": "§2.5",
   "title": {
    "ru": "Теорема о вычетах",
    "de": "Residuensatz"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Residuum</b> $\\operatorname{Res}_af$ = eine einzige Zahl: der Koeffizient vor $\\frac1{z-a}$ in der Laurentreihe. Nicht dasselbe wie der Pol selbst!</li><li><b>Einfacher Pol</b> = Pol der Ordnung 1, wie bei $\\frac1{z-a}$.</li><li>„Innen“ = innerhalb des geschlossenen Wegs.</li></ul>",
      "ru": "<ul><li><b>Вычет</b> $\\operatorname{Res}_af$ — одно-единственное число: коэффициент при $\\frac1{z-a}$ в ряде Лорана. Не то же самое, что сам полюс!</li><li><b>Простой полюс</b> — полюс порядка 1, как у $\\frac1{z-a}$.</li><li>«Внутри» — внутри замкнутого пути.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Das Integral ist ein Mikrofon, das du um eine Gruppe von Lautsprechern trägst. Es hört nur die Lautsprecher <b>innerhalb</b> deiner Runde, und von jedem nur einen Ton – sein Residuum. Alles andere hebt sich auf. Ergebnis: $2\\pi i$ mal die Summe der Töne. Statt zu integrieren, musst du also nur die Löcher finden, prüfen, welche innen liegen, und für jedes eine Zahl ausrechnen.",
      "ru": "Интеграл — это микрофон, который ты проносишь по кругу вокруг группы динамиков. Он слышит только динамики <b>внутри</b> твоего круга, и от каждого — только одну ноту, его вычет. Всё остальное взаимно гасится. Итог: $2\\pi i$, умноженное на сумму нот. То есть вместо интегрирования нужно найти дырки, проверить, какие внутри, и для каждой посчитать одно число."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\oint_{|z|=2}\\frac{1}{z(z-1)}\\,dz$:</b><ol><li>Löcher: Nenner $=0$ bei $z=0$ und $z=1$. Beide liegen im Kreis mit Radius 2 ✓.</li><li>$\\operatorname{Res}_0$: den Faktor $z$ abdecken und $z=0$ einsetzen: $\\frac{1}{0-1}=-1$.</li><li>$\\operatorname{Res}_1$: den Faktor $(z-1)$ abdecken und $z=1$ einsetzen: $\\frac11=1$.</li><li>Summe $-1+1=0$ → Integral $=2\\pi i\\cdot0=0$.</li></ol><b>Kleiner Kreis $|z|=\\frac12$:</b> Nur $z=0$ liegt innen → $2\\pi i\\cdot(-1)=-2\\pi i$. Gleiche Funktion, anderer Weg, andere Antwort.",
      "ru": "<b>$\\oint_{|z|=2}\\frac{1}{z(z-1)}\\,dz$:</b><ol><li>Дырки: знаменатель $=0$ в $z=0$ и $z=1$. Обе внутри круга радиуса 2 ✓.</li><li>$\\operatorname{Res}_0$: закрываем множитель $z$ и подставляем $z=0$: $\\frac{1}{0-1}=-1$.</li><li>$\\operatorname{Res}_1$: закрываем множитель $(z-1)$ и подставляем $z=1$: $\\frac11=1$.</li><li>Сумма $-1+1=0$ → интеграл $=2\\pi i\\cdot0=0$.</li></ol><b>Маленький круг $|z|=\\frac12$:</b> внутри только $z=0$ → $2\\pi i\\cdot(-1)=-2\\pi i$. Та же функция, другой путь — другой ответ."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Интеграл по петле не видит ничего, кроме особенностей внутри. От каждой особенности он «слышит» только одно число — коэффициент при $\\frac1{z-a}$, потому что все остальные степени интегрируются в ноль (формула в рамке выше). Сложи эти числа и умножь на $2\\pi i$.",
      "de": "Das Integral über eine Schleife sieht nichts außer den Singularitäten im Inneren. Von jeder Singularität „hört“ es nur eine Zahl – den Koeffizienten vor $\\frac1{z-a}$, weil alle anderen Potenzen zu null integrieren (Formel im Kasten oben). Summier diese Zahlen und multiplizier mit $2\\pi i$."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\oint_\\gamma f\\,dz=2\\pi i\\sum_{a_k \\text{ внутри}}\\operatorname{Res}_{a_k}f$$ $$\\text{Простой полюс: } \\operatorname{Res}_a f=\\lim_{z\\to a}(z-a)f(z);\\qquad f=\\tfrac gh,\\ h(a)=0,\\ h'(a)\\ne0:\\ \\operatorname{Res}_a f=\\frac{g(a)}{h'(a)}$$ $$\\text{Полюс порядка } m:\\ \\operatorname{Res}_a f=\\frac1{(m-1)!}\\lim_{z\\to a}\\frac{d^{m-1}}{dz^{m-1}}\\big[(z-a)^mf(z)\\big]$$",
      "de": "$$\\oint_\\gamma f\\,dz=2\\pi i\\sum_{a_k \\text{ innen}}\\operatorname{Res}_{a_k}f$$ $$\\text{Einfacher Pol: } \\operatorname{Res}_a f=\\lim_{z\\to a}(z-a)f(z);\\qquad f=\\tfrac gh,\\ h(a)=0,\\ h'(a)\\ne0:\\ \\operatorname{Res}_a f=\\frac{g(a)}{h'(a)}$$ $$\\text{Pol der Ordnung } m:\\ \\operatorname{Res}_a f=\\frac1{(m-1)!}\\lim_{z\\to a}\\frac{d^{m-1}}{dz^{m-1}}\\big[(z-a)^mf(z)\\big]$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Посчитай вычет двумя способами: по формуле $g/h'$ и через начало ряда Лорана.</li> <li>Сумма <i>всех</i> вычетов рациональной функции вместе с вычетом в $\\infty$ равна 0. Если $\\deg Q\\ge\\deg P+2$, то вычет в $\\infty$ равен нулю и сумма конечных вычетов тоже 0. Хорошая контрольная сумма.</li> </ul>",
      "de": "<ul> <li>Berechne das Residuum auf zwei Wegen: mit der Formel $g/h'$ und über den Anfang der Laurentreihe.</li> <li>Die Summe <i>aller</i> Residuen einer rationalen Funktion zusammen mit dem Residuum in $\\infty$ ist 0. Ist $\\deg Q\\ge\\deg P+2$, dann ist das Residuum in $\\infty$ null, und die Summe der endlichen Residuen ist auch 0. Gute Kontrollsumme.</li> </ul>"
     }
    }
   ]
  },
  "realint": {
   "emoji": "🌈",
   "ref": "§2.6",
   "title": {
    "ru": "Вещественные интегралы через вычеты",
    "de": "Reelle Integrale mit Residuen"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Residuensatz</b> (vorheriges Thema).</li><li><b>Obere Halbebene</b> = alle $z$ mit $\\operatorname{Im}z>0$, also oberhalb der reellen Achse.</li><li>$\\deg$ = Grad eines Polynoms (höchste Potenz). „Fällt schnell ab“ heißt: Nennergrad mindestens 2 größer als Zählergrad.</li></ul>",
      "ru": "<ul><li><b>Теорема о вычетах</b> (прошлая тема).</li><li><b>Верхняя полуплоскость</b> — все $z$ с $\\operatorname{Im}z>0$, то есть выше вещественной оси.</li><li>$\\deg$ — степень многочлена (старшая степень). «Быстро убывает» значит: степень знаменателя хотя бы на 2 больше степени числителя.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein reelles Integral ist wie eine lange gerade Straße. Statt sie mühsam abzulaufen, baust du einen riesigen Halbkreis-Zaun darüber und machst daraus eine geschlossene Runde. Der Zaun ist so weit weg, dass er nichts beiträgt. Jetzt zählt nur, welche Löcher im eingezäunten Bereich liegen – und das ist der Residuensatz.",
      "ru": "Вещественный интеграл — как длинная прямая дорога. Вместо того чтобы мучительно проходить её всю, строишь над ней огромный полукруглый забор и получаешь замкнутый круг. Забор так далеко, что ничего не добавляет. Теперь важно только, какие дырки оказались за забором, — а это теорема о вычетах."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\int_{-\\infty}^{\\infty}\\frac{dx}{x^2+4}$:</b><ol><li>Löcher: $z^2+4=0$ → $z=\\pm2i$. Oben liegt nur $2i$.</li><li>Residuum mit $\\frac{g}{h'}$: $\\frac{1}{2z}$ bei $z=2i$ → $\\frac1{4i}$.</li><li>Antwort: $2\\pi i\\cdot\\frac1{4i}=\\frac\\pi2$.</li><li>Kontrolle: Stammfunktion $\\frac12\\arctan\\frac x2$ → $\\frac12\\big(\\frac\\pi2+\\frac\\pi2\\big)=\\frac\\pi2$ ✓. Reell und positiv ✓.</li></ol>",
      "ru": "<b>$\\int_{-\\infty}^{\\infty}\\frac{dx}{x^2+4}$:</b><ol><li>Дырки: $z^2+4=0$ → $z=\\pm2i$. Сверху только $2i$.</li><li>Вычет по формуле $\\frac{g}{h'}$: $\\frac{1}{2z}$ при $z=2i$ → $\\frac1{4i}$.</li><li>Ответ: $2\\pi i\\cdot\\frac1{4i}=\\frac\\pi2$.</li><li>Проверка: первообразная $\\frac12\\arctan\\frac x2$ → $\\frac12\\big(\\frac\\pi2+\\frac\\pi2\\big)=\\frac\\pi2$ ✓. Вещественный и положительный ✓.</li></ol>"
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Реальную ось замыкаем большой полуокружностью в верхней полуплоскости. Если функция убывает достаточно быстро, вклад дуги стремится к нулю, и интеграл по прямой равен $2\\pi i\\cdot$(вычеты сверху).",
      "de": "Die reelle Achse schließt man mit einem großen Halbkreis in der oberen Halbebene. Fällt die Funktion schnell genug ab, geht der Beitrag des Bogens gegen null, und das Integral über die Gerade ist $2\\pi i\\cdot$(Residuen oben)."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\int_{-\\infty}^\\infty\\frac{P(x)}{Q(x)}dx=2\\pi i\\!\\!\\sum_{\\operatorname{Im}a>0}\\!\\!\\operatorname{Res}_a\\frac PQ\\quad(\\deg Q\\ge\\deg P+2,\\ Q\\ne0 \\text{ на } \\mathbb R)$$ $$\\int_0^{2\\pi}R(\\cos t,\\sin t)\\,dt:\\ z=e^{it},\\ \\cos t=\\tfrac{z+z^{-1}}2,\\ \\sin t=\\tfrac{z-z^{-1}}{2i},\\ dt=\\tfrac{dz}{iz},\\ \\text{контур } |z|=1$$ $$\\int_{-\\infty}^\\infty f(x)e^{ikx}dx,\\ k>0:\\ \\text{вверх (лемма Жордана хватает } \\deg Q\\ge\\deg P+1);\\ k<0:\\ \\text{вниз, со знаком минус}$$",
      "de": "$$\\int_{-\\infty}^\\infty\\frac{P(x)}{Q(x)}dx=2\\pi i\\!\\!\\sum_{\\operatorname{Im}a>0}\\!\\!\\operatorname{Res}_a\\frac PQ\\quad(\\deg Q\\ge\\deg P+2,\\ Q\\ne0 \\text{ auf } \\mathbb R)$$ $$\\int_0^{2\\pi}R(\\cos t,\\sin t)\\,dt:\\ z=e^{it},\\ \\cos t=\\tfrac{z+z^{-1}}2,\\ \\sin t=\\tfrac{z-z^{-1}}{2i},\\ dt=\\tfrac{dz}{iz},\\ \\text{Weg } |z|=1$$ $$\\int_{-\\infty}^\\infty f(x)e^{ikx}dx,\\ k>0:\\ \\text{nach oben (mit Jordan-Lemma reicht } \\deg Q\\ge\\deg P+1);\\ k<0:\\ \\text{nach unten, mit Minuszeichen}$$"
     }
    },
    {
     "type": "rezept",
     "label": {
      "ru": "Пример целиком",
      "de": "Komplettes Beispiel"
     },
     "html": {
      "ru": "<ol> <li>$\\int_{-\\infty}^\\infty\\frac{dx}{1+x^2}$. Полюсы $\\pm i$, сверху только $i$.</li> <li>$\\operatorname{Res}_i=\\frac{1}{(z^2+1)'}\\big|_i=\\frac1{2i}$.</li> <li>Ответ: $2\\pi i\\cdot\\frac1{2i}=\\pi$. Проверка: $[\\arctan x]_{-\\infty}^{\\infty}=\\pi$. ✓</li></ol>",
      "de": "<ol> <li>$\\int_{-\\infty}^\\infty\\frac{dx}{1+x^2}$. Pole bei $\\pm i$, oben liegt nur $i$.</li> <li>$\\operatorname{Res}_i=\\frac{1}{(z^2+1)'}\\big|_i=\\frac1{2i}$.</li> <li>Antwort: $2\\pi i\\cdot\\frac1{2i}=\\pi$. Check: $[\\arctan x]_{-\\infty}^{\\infty}=\\pi$. ✓</li></ol>"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Подынтегральное выражение вещественное → ответ обязан быть вещественным. Остался $i$ — потерял знак или не тот полюс.</li> <li>Подынтегральное выражение положительное → ответ положительный.</li> <li>Численная проверка за 5 секунд: <code>quad(lambda x: 1/(1+x**2), -inf, inf)</code>.</li> </ul>",
      "de": "<ul> <li>Der Integrand ist reell → die Antwort muss reell sein. Ist ein $i$ übrig geblieben, hast du ein Vorzeichen oder den falschen Pol erwischt.</li> <li>Der Integrand ist positiv → die Antwort ist positiv.</li> <li>Numerischer Check in 5 Sekunden: <code>quad(lambda x: 1/(1+x**2), -inf, inf)</code>.</li> </ul>"
     }
    }
   ]
  },
  "leb": {
   "emoji": "🪙",
   "ref": "§3",
   "title": {
    "ru": "Интеграл Лебега и сходимость",
    "de": "Lebesgue-Integral und Konvergenz"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Integral</b> = Fläche unter dem Graphen (unterhalb der x-Achse zählt negativ).</li><li><b>Folge von Funktionen</b> $f_1,f_2,f_3,\\dots$: eine Reihe von Bildern, die sich Schritt für Schritt verändern, wie Einzelbilder eines Films.</li><li><b>Nullmenge</b>: eine Menge ohne „Breite“, z. B. ein einzelner Punkt. Sie trägt zur Fläche nichts bei.</li><li><b>f.ü.</b> = fast überall = überall außer auf einer Nullmenge.</li></ul>",
      "ru": "<ul><li><b>Интеграл</b> — площадь под графиком (ниже оси x считается со знаком минус).</li><li><b>Последовательность функций</b> $f_1,f_2,f_3,\\dots$: ряд картинок, которые меняются шаг за шагом, как кадры фильма.</li><li><b>Множество меры нуль</b>: множество без «ширины», например одна точка. В площадь оно ничего не добавляет.</li><li><b>f.ü.</b> (fast überall) = почти всюду = везде, кроме множества меры нуль.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Die große Frage dieses Themas: <b>Darf ich erst den Grenzwert nehmen und dann integrieren?</b> Meistens will man das, weil es Rechnungen viel leichter macht. Manchmal ist es aber falsch: Die Fläche kann in einer immer dünneren, immer höheren Nadel „verschwinden“. Der Satz von der majorisierten Konvergenz ist der Sicherheitsgurt: Findest du <b>ein festes Dach</b> $g$ mit endlicher Fläche, unter dem alle $f_n$ bleiben, dann kann keine Fläche heimlich entwischen, und du darfst tauschen.",
      "ru": "Главный вопрос темы: <b>можно ли сначала перейти к пределу, а потом интегрировать?</b> Обычно этого хочется, потому что так считать намного проще. Но иногда это неверно: площадь может «убежать» в всё более тонкую и высокую иглу. Теорема о мажорированной сходимости — ремень безопасности: если найдёшь <b>одну неподвижную крышу</b> $g$ с конечной площадью, под которой остаются все $f_n$, площадь не сможет тайком сбежать, и менять местами можно."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$f_n(x)=x^n$ auf $[0,1]$:</b><ol><li>Grenzwert: Für $0\\le x\\lt 1$ gilt $x^n\\to0$. Nur bei $x=1$ bleibt $1^n=1$ – ein einzelner Punkt, also eine Nullmenge. Damit $f_n\\to0$ f.ü.</li><li>Dach: $|x^n|\\le1$ auf $[0,1]$, und $\\int_0^1 1\\,dx=1\\lt\\infty$ ✓.</li><li>Also darf man tauschen: $\\lim\\int_0^1x^n\\,dx=\\int_0^1 0\\,dx=0$.</li><li>Kontrolle direkt: $\\int_0^1x^n\\,dx=\\frac1{n+1}\\to0$ ✓.</li></ol><b>Wo es schiefgeht:</b> $f_n=n$ auf $(0,\\frac1n)$, sonst 0. Fläche immer $n\\cdot\\frac1n=1$, aber $f_n\\to0$. Ein gemeinsames Dach gibt es nicht – die Nadel wird beliebig hoch.",
      "ru": "<b>$f_n(x)=x^n$ на $[0,1]$:</b><ol><li>Предел: при $0\\le x\\lt 1$ имеем $x^n\\to0$. Только при $x=1$ остаётся $1^n=1$ — одна точка, то есть множество меры нуль. Значит, $f_n\\to0$ почти всюду.</li><li>Крыша: $|x^n|\\le1$ на $[0,1]$, и $\\int_0^1 1\\,dx=1\\lt\\infty$ ✓.</li><li>Значит, менять можно: $\\lim\\int_0^1x^n\\,dx=\\int_0^1 0\\,dx=0$.</li><li>Проверка напрямую: $\\int_0^1x^n\\,dx=\\frac1{n+1}\\to0$ ✓.</li></ol><b>Где ломается:</b> $f_n=n$ на $(0,\\frac1n)$, иначе 0. Площадь всегда $n\\cdot\\frac1n=1$, но $f_n\\to0$. Общей крыши нет — игла становится сколь угодно высокой."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Риман считает деньги, раскладывая монеты по порядку: слева направо. Лебег сначала сортирует монеты по номиналу: «сколько места занимают точки, где $f\\approx y$», и складывает по номиналам. Результат для нормальных функций тот же, но Лебег справляется с намного более дикими функциями. Множества меры нуль (точки, счётные множества) не влияют на интеграл. Поэтому функции, различающиеся на множестве меры нуль, считаются одинаковыми («fast überall»).",
      "de": "Riemann zählt Geld, indem er die Münzen der Reihe nach durchgeht: von links nach rechts. Lebesgue sortiert die Münzen zuerst nach ihrem Wert: „Wie viel Platz nehmen die Punkte ein, an denen $f\\approx y$“, und summiert dann nach Werten. Für normale Funktionen ist das Ergebnis dasselbe, aber Lebesgue kommt mit viel wilderen Funktionen klar. Nullmengen (Punkte, abzählbare Mengen) beeinflussen das Integral nicht. Deshalb gelten Funktionen, die sich nur auf einer Nullmenge unterscheiden, als gleich („fast überall“)."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\text{Мажорированная сходимость: } f_n\\to f \\text{ f.ü.},\\ |f_n|\\le g,\\ \\int g<\\infty\\ \\Longrightarrow\\ \\lim\\int f_n=\\int\\lim f_n$$",
      "de": "$$\\text{Majorisierte Konvergenz: } f_n\\to f \\text{ f.ü.},\\ |f_n|\\le g,\\ \\int g<\\infty\\ \\Longrightarrow\\ \\lim\\int f_n=\\int\\lim f_n$$"
     }
    },
    {
     "type": "text",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "Это главный рабочий инструмент: он разрешает менять местами предел и интеграл, а также дифференцировать под знаком интеграла (параметрические интегралы, все доказательства про Фурье).",
      "de": "Das ist das wichtigste Arbeitswerkzeug: Es erlaubt, Grenzwert und Integral zu vertauschen und unter dem Integral abzuleiten (Parameterintegrale, alle Beweise rund um Fourier)."
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить, что теорему можно применять",
      "de": "Check, ob man den Satz anwenden darf"
     },
     "html": {
      "ru": "<ul> <li>Найди одну интегрируемую $g$, которая <b>не зависит от $n$</b> и бьёт все $|f_n|$.</li> <li>Контрпример, который стоит помнить: $f_n=n\\cdot\\mathbf 1_{(0,1/n)}$. Поточечно $f_n\\to0$, но $\\int f_n=1$ для всех $n$. Общей мажоранты нет, и теорема не работает.</li> <li>$L^1$: $\\int|f|<\\infty$. $L^2$: $\\int|f|^2<\\infty$ (энергия конечна). На $\\mathbb R$ ни одно не содержит другое: $\\frac1{1+|x|}\\in L^2\\setminus L^1$.</li> </ul>",
      "de": "<ul> <li>Finde eine integrierbare $g$, die <b>nicht von $n$ abhängt</b> und alle $|f_n|$ schlägt.</li> <li>Gegenbeispiel, das man kennen sollte: $f_n=n\\cdot\\mathbf 1_{(0,1/n)}$. Punktweise gilt $f_n\\to0$, aber $\\int f_n=1$ für alle $n$. Es gibt keine gemeinsame Majorante, und der Satz greift nicht.</li> <li>$L^1$: $\\int|f|<\\infty$. $L^2$: $\\int|f|^2<\\infty$ (endliche Energie). Auf $\\mathbb R$ enthält keiner den anderen: $\\frac1{1+|x|}\\in L^2\\setminus L^1$.</li> </ul>"
     }
    }
   ]
  },
  "fourier": {
   "emoji": "🎚️",
   "ref": "§4.0–4.3",
   "title": {
    "ru": "Преобразование Фурье",
    "de": "Fouriertransformation"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Welle</b> $e^{ixy}=\\cos(xy)+i\\sin(xy)$: eine Schwingung; $y$ sagt, wie schnell sie schwingt (Frequenz).</li><li><b>Frequenz</b>: kleine $y$ = langsame, tiefe Töne; große $y$ = schnelle, hohe Töne.</li><li>$\\hat u$ (sprich „u Dach“) = die Fouriertransformierte von $u$.</li></ul>",
      "ru": "<ul><li><b>Волна</b> $e^{ixy}=\\cos(xy)+i\\sin(xy)$: колебание; $y$ говорит, как быстро оно колеблется (частота).</li><li><b>Частота</b>: малые $y$ — медленные, низкие звуки; большие $y$ — быстрые, высокие.</li><li>$\\hat u$ («u с крышечкой») — преобразование Фурье функции $u$.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein Smoothie zurück in Früchte zerlegen: Du gibst ein Signal hinein, und die Fouriertransformation sagt dir, <b>wie viel von jeder Frequenz</b> drinsteckt – wie die Balken eines Equalizers. Der eigentliche Grund, warum Physiker das lieben: Ableiten wird zu Multiplizieren. Eine schwierige Differentialgleichung wird im Frequenzraum zu einer einfachen Gleichung mit Zahlen.",
      "ru": "Разобрать смузи обратно на фрукты: подаёшь сигнал, и преобразование Фурье говорит, <b>сколько в нём каждой частоты</b> — как столбики эквалайзера. Главная причина, почему физики это любят: дифференцирование превращается в умножение. Трудное дифференциальное уравнение в частотах становится простым уравнением с числами."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Rechteck $u=\\mathbf 1_{[-1,1]}$</b> (1 zwischen $-1$ und $1$, sonst 0):<ol><li>Einsetzen: $\\hat u(y)=\\frac1{\\sqrt{2\\pi}}\\int_{-1}^{1}e^{-ixy}\\,dx$.</li><li>Integrieren: $\\int_{-1}^{1}e^{-ixy}dx=\\frac{e^{-iy}-e^{iy}}{-iy}=\\frac{2\\sin y}{y}$.</li><li>Ergebnis: $\\hat u(y)=\\sqrt{\\tfrac2\\pi}\\,\\frac{\\sin y}{y}$.</li><li>Check $y=0$: $\\frac{\\sin y}y\\to1$, also $\\hat u(0)=\\sqrt{\\tfrac2\\pi}$. Und $\\frac1{\\sqrt{2\\pi}}\\cdot(\\text{Fläche }2)=\\sqrt{\\tfrac2\\pi}$ ✓.</li></ol>Bild: Ein Rechteck hat scharfe Kanten → das Spektrum wackelt weit hinaus und fällt nur langsam ab (wie $\\frac1y$).",
      "ru": "<b>Прямоугольник $u=\\mathbf 1_{[-1,1]}$</b> (1 между $-1$ и $1$, иначе 0):<ol><li>Подставляем: $\\hat u(y)=\\frac1{\\sqrt{2\\pi}}\\int_{-1}^{1}e^{-ixy}\\,dx$.</li><li>Интегрируем: $\\int_{-1}^{1}e^{-ixy}dx=\\frac{e^{-iy}-e^{iy}}{-iy}=\\frac{2\\sin y}{y}$.</li><li>Итог: $\\hat u(y)=\\sqrt{\\tfrac2\\pi}\\,\\frac{\\sin y}{y}$.</li><li>Проверка при $y=0$: $\\frac{\\sin y}y\\to1$, значит $\\hat u(0)=\\sqrt{\\tfrac2\\pi}$. А $\\frac1{\\sqrt{2\\pi}}\\cdot(\\text{площадь }2)=\\sqrt{\\tfrac2\\pi}$ ✓.</li></ol>Картинка: у прямоугольника острые края → спектр колеблется далеко и убывает медленно (как $\\frac1y$)."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "$\\hat u(y)$ отвечает на вопрос «сколько в сигнале $u$ волны с частотой $y$». Как эквалайзер в плеере: показывает, сколько баса и сколько высоких. Ключевой трюк: производная от волны $e^{ixy}$ — это та же волна, умноженная на $iy$. Поэтому $\\frac{d}{dx}$ в частотах превращается в умножение на $iy$.",
      "de": "$\\hat u(y)$ beantwortet die Frage „Wie viel Welle mit Frequenz $y$ steckt im Signal $u$“. Wie der Equalizer im Musikplayer: Er zeigt, wie viel Bass und wie viel Höhen drin sind. Der Haupttrick: Die Ableitung der Welle $e^{ixy}$ ist dieselbe Welle, mal $iy$. Deshalb wird $\\frac{d}{dx}$ im Frequenzraum zur Multiplikation mit $iy$."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\hat u(y)=\\frac1{(2\\pi)^{n/2}}\\int_{\\mathbb R^n}e^{-i\\langle x,y\\rangle}u(x)\\,dx,\\qquad u(x)=\\frac1{(2\\pi)^{n/2}}\\int e^{+i\\langle x,y\\rangle}\\hat u(y)\\,dy$$",
      "de": "$$\\hat u(y)=\\frac1{(2\\pi)^{n/2}}\\int_{\\mathbb R^n}e^{-i\\langle x,y\\rangle}u(x)\\,dx,\\qquad u(x)=\\frac1{(2\\pi)^{n/2}}\\int e^{+i\\langle x,y\\rangle}\\hat u(y)\\,dy$$"
     }
    },
    {
     "type": "tabelle",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "<table> <tr><th>В пространстве $x$</th><th>В частотах $y$</th><th>Интуиция</th></tr> <tr><td>$\\partial_j u$</td><td>$iy_j\\,\\hat u$</td><td>производная = умножение</td></tr> <tr><td>$x_j u$</td><td>$i\\,\\partial_{y_j}\\hat u$</td><td>и наоборот</td></tr> <tr><td>$u(x-a)$</td><td>$e^{-i\\langle a,y\\rangle}\\hat u$</td><td>сдвиг = фаза</td></tr> <tr><td>$u(\\lambda x)$</td><td>$\\lambda^{-n}\\hat u(y/\\lambda)$</td><td>сжал сигнал → спектр расширился</td></tr> <tr><td>$e^{-t|x|^2}$</td><td>$(2t)^{-n/2}e^{-|y|^2/4t}$</td><td>гаусс → гаусс; $e^{-x^2/2}$ переходит сам в себя</td></tr> <tr><td>$\\mathbf 1_{[-a,a]}$ ($n=1$)</td><td>$\\sqrt{\\tfrac2\\pi}\\,\\tfrac{\\sin ay}{y}$</td><td>щель → дифракционная картина</td></tr> </table>",
      "de": "<table> <tr><th>Im Ortsraum $x$</th><th>Im Frequenzraum $y$</th><th>Intuition</th></tr> <tr><td>$\\partial_j u$</td><td>$iy_j\\,\\hat u$</td><td>Ableitung = Multiplikation</td></tr> <tr><td>$x_j u$</td><td>$i\\,\\partial_{y_j}\\hat u$</td><td>und umgekehrt</td></tr> <tr><td>$u(x-a)$</td><td>$e^{-i\\langle a,y\\rangle}\\hat u$</td><td>Verschiebung = Phase</td></tr> <tr><td>$u(\\lambda x)$</td><td>$\\lambda^{-n}\\hat u(y/\\lambda)$</td><td>Signal gestaucht → Spektrum gestreckt</td></tr> <tr><td>$e^{-t|x|^2}$</td><td>$(2t)^{-n/2}e^{-|y|^2/4t}$</td><td>Gauß → Gauß; $e^{-x^2/2}$ geht in sich selbst über</td></tr> <tr><td>$\\mathbf 1_{[-a,a]}$ ($n=1$)</td><td>$\\sqrt{\\tfrac2\\pi}\\,\\tfrac{\\sin ay}{y}$</td><td>Spalt → Beugungsbild</td></tr> </table>"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>$\\hat u(0)=\\frac1{(2\\pi)^{n/2}}\\int u$. Посчитай площадь под $u$ и сравни.</li> <li>$u$ чётная и вещественная → $\\hat u$ чётная и вещественная. $u$ нечётная и вещественная → $\\hat u$ чисто мнимая.</li> <li>Ширина $u$ × ширина $\\hat u$ ≈ const: узкий импульс должен давать широкий спектр.</li> <li>Лемма Римана–Лебега: для $u\\in L^1$ образ $\\hat u(y)\\to0$ при $|y|\\to\\infty$ и непрерывен. Если не стремится — ошибка.</li> <li>Гладкость ↔ убывание: чем глаже $u$, тем быстрее убывает $\\hat u$. Скачок в $u$ → $\\hat u\\sim 1/y$.</li> </ul>",
      "de": "<ul> <li>$\\hat u(0)=\\frac1{(2\\pi)^{n/2}}\\int u$. Berechne die Fläche unter $u$ und vergleiche.</li> <li>$u$ gerade und reell → $\\hat u$ gerade und reell. $u$ ungerade und reell → $\\hat u$ rein imaginär.</li> <li>Breite von $u$ × Breite von $\\hat u$ ≈ const: Ein schmaler Impuls muss ein breites Spektrum geben.</li> <li>Riemann-Lebesgue-Lemma: Für $u\\in L^1$ gilt $\\hat u(y)\\to0$ für $|y|\\to\\infty$, und die Transformierte ist stetig. Geht es nicht gegen null – Fehler.</li> <li>Glattheit ↔ Abfall: Je glatter $u$, desto schneller fällt $\\hat u$ ab. Ein Sprung in $u$ → $\\hat u\\sim 1/y$.</li> </ul>"
     }
    },
    {
     "type": "rezept",
     "label": {
      "ru": "Как доказать формулу для гаусса (метод скрипта)",
      "de": "So beweist man die Formel für den Gauß (Methode aus dem Skriptum)"
     },
     "html": {
      "ru": "<ol> <li>$v_0=e^{-x^2/2}$ удовлетворяет ОДУ $v_0'=-xv_0$, $v_0(0)=1$.</li> <li>Применяем Фурье по таблице: $\\hat v_0$ удовлетворяет той же ОДУ, а $\\hat v_0(0)=\\frac1{\\sqrt{2\\pi}}\\int e^{-x^2/2}=1$.</li> <li>Единственность решения ОДУ даёт $\\hat v_0=v_0$. Общий случай получается масштабированием.</li></ol>",
      "de": "<ol> <li>$v_0=e^{-x^2/2}$ erfüllt die ODE $v_0'=-xv_0$, $v_0(0)=1$.</li> <li>Fourier laut Tabelle anwenden: $\\hat v_0$ erfüllt dieselbe ODE, und $\\hat v_0(0)=\\frac1{\\sqrt{2\\pi}}\\int e^{-x^2/2}=1$.</li> <li>Die Eindeutigkeit der ODE-Lösung liefert $\\hat v_0=v_0$. Den allgemeinen Fall bekommt man durch Skalieren.</li></ol>"
     }
    }
   ]
  },
  "conv": {
   "emoji": "🖌️",
   "ref": "§4.4",
   "title": {
    "ru": "Свёртка",
    "de": "Faltung"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Verschieben</b>: $u(x-y)$ ist der Graph von $u$, um $y$ nach rechts geschoben.</li><li><b>Indikatorfunktion</b> $\\mathbf 1_{[a,b]}$: $1$ auf $[a,b]$, sonst $0$ – ein Rechteck.</li><li><b>Träger</b> = der Bereich, wo die Funktion nicht null ist.</li></ul>",
      "ru": "<ul><li><b>Сдвиг</b>: $u(x-y)$ — график $u$, сдвинутый на $y$ вправо.</li><li><b>Индикатор</b> $\\mathbf 1_{[a,b]}$: $1$ на $[a,b]$, иначе $0$ — прямоугольник.</li><li><b>Носитель</b> — область, где функция не равна нулю.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Gleitender Durchschnitt: Deine Note an jedem Tag wird ersetzt durch den Schnitt der umliegenden Tage – so wird eine zackige Kurve weicher. Faltung macht genau das, nur mit beliebigen Gewichten: Die Funktion $v$ ist der „Pinsel“, mit dem $u$ verwischt wird. Ein unscharfes Foto ist das scharfe Foto, gefaltet mit der Form eines Lichtflecks.",
      "ru": "Скользящее среднее: оценку каждого дня заменяют средним по соседним дням — и зубчатая кривая становится плавнее. Свёртка делает ровно это, только с любыми весами: функция $v$ — «кисточка», которой размазывают $u$. Размытое фото — это чёткое фото, свёрнутое с формой светового пятна."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Rechteck mal Rechteck: $u=v=\\mathbf 1_{[0,1]}$.</b><ol><li>$(u*v)(x)=\\int u(x-y)v(y)\\,dy$ = Länge des Stücks, auf dem sich $[0,1]$ und das verschobene $[x-1,x]$ überlappen.</li><li>Für $0\\le x\\le1$: Überlappung $[0,x]$ → Wert $x$. Für $1\\le x\\le2$: Überlappung $[x-1,1]$ → Wert $2-x$. Sonst $0$.</li><li>Ergebnis: ein <b>Dreieck</b> auf $[0,2]$ mit Spitze $1$ bei $x=1$.</li><li>Checks: Fläche des Dreiecks $=\\frac12\\cdot2\\cdot1=1=\\int u\\cdot\\int v$ ✓. Träger $[0+0,\\,1+1]=[0,2]$ ✓.</li></ol>Zwei Ecken-Rechtecke ergeben ein glatteres Dreieck: Falten glättet.",
      "ru": "<b>Прямоугольник на прямоугольник: $u=v=\\mathbf 1_{[0,1]}$.</b><ol><li>$(u*v)(x)=\\int u(x-y)v(y)\\,dy$ — длина куска, где $[0,1]$ перекрывается со сдвинутым $[x-1,x]$.</li><li>При $0\\le x\\le1$: перекрытие $[0,x]$ → значение $x$. При $1\\le x\\le2$: перекрытие $[x-1,1]$ → значение $2-x$. Иначе $0$.</li><li>Итог: <b>треугольник</b> на $[0,2]$ с вершиной $1$ в $x=1$.</li><li>Проверки: площадь треугольника $=\\frac12\\cdot2\\cdot1=1=\\int u\\cdot\\int v$ ✓. Носитель $[0+0,\\,1+1]=[0,2]$ ✓.</li></ol>Два прямоугольника с углами дают более гладкий треугольник: свёртка сглаживает."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "$u*v$ — это «размазать $u$ кисточкой формы $v$»: в каждую точку кладём копию $v$ с весом $u$ и складываем. Размытие фото, отклик системы на сигнал, распространение тепла — всё это свёртки. В частотах свёртка превращается в обычное произведение.",
      "de": "$u*v$ heißt „$u$ mit einem Pinsel der Form $v$ verwischen“: An jeden Punkt legt man eine Kopie von $v$ mit Gewicht $u$ und summiert. Unscharfe Fotos, die Antwort eines Systems auf ein Signal, Wärmeausbreitung – alles Faltungen. Im Frequenzraum wird die Faltung zu einem gewöhnlichen Produkt."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$(u*v)(x)=\\int u(x-y)v(y)\\,dy,\\qquad \\widehat{u*v}=(2\\pi)^{n/2}\\,\\hat u\\,\\hat v$$",
      "de": "$$(u*v)(x)=\\int u(x-y)v(y)\\,dy,\\qquad \\widehat{u*v}=(2\\pi)^{n/2}\\,\\hat u\\,\\hat v$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>$\\int(u*v)=\\int u\\cdot\\int v$ (площади перемножаются). Это частный случай формулы выше в точке $y=0$.</li> <li>Носитель: если $u$ живёт на $[a,b]$, а $v$ на $[c,d]$, то $u*v$ живёт на $[a+c,\\,b+d]$.</li> <li>$u*\\delta=u$: свёртка с δ ничего не меняет.</li> </ul>",
      "de": "<ul> <li>$\\int(u*v)=\\int u\\cdot\\int v$ (die Flächen multiplizieren sich). Das ist der Spezialfall der Formel oben im Punkt $y=0$.</li> <li>Träger: Lebt $u$ auf $[a,b]$ und $v$ auf $[c,d]$, dann lebt $u*v$ auf $[a+c,\\,b+d]$.</li> <li>$u*\\delta=u$: Faltung mit δ ändert nichts.</li> </ul>"
     }
    }
   ]
  },
  "schwartz": {
   "emoji": "✨",
   "ref": "§4.5–4.6",
   "title": {
    "ru": "Пространство Шварца и Фурье на $L^2$",
    "de": "Schwartzraum und Fourier auf $L^2$"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Glatt</b> = beliebig oft ableitbar, ohne Ecken und Sprünge.</li><li><b>Schnell abfallend</b>: Für große $|x|$ wird die Funktion schneller klein als $\\frac1{|x|^k}$ – für jedes $k$.</li><li><b>$L^2$</b> = Funktionen mit endlicher „Energie“ $\\int|u|^2\\lt\\infty$. $\\|u\\|_{L^2}=\\sqrt{\\int|u|^2}$.</li></ul>",
      "ru": "<ul><li><b>Гладкая</b> — сколько угодно раз дифференцируемая, без углов и скачков.</li><li><b>Быстро убывающая</b>: при больших $|x|$ функция становится маленькой быстрее, чем $\\frac1{|x|^k}$, — для любого $k$.</li><li><b>$L^2$</b> — функции с конечной «энергией» $\\int|u|^2\\lt\\infty$. $\\|u\\|_{L^2}=\\sqrt{\\int|u|^2}$.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Schwartz-Funktionen sind die „Musterschüler“: keine Ecken, und weit draußen verschwinden sie blitzschnell. Für sie funktioniert Fourier perfekt – hin und zurück ohne Verlust. Plancherel sagt: Beim Umrechnen in Frequenzen bleibt die <b>Energie gleich</b>, wie Geld beim Wechseln ohne Gebühr. Das ist ein super Kontrollwerkzeug: Rechne die Energie auf beiden Seiten aus – stimmt sie nicht, ist irgendwo ein $2\\pi$ verloren gegangen.",
      "ru": "Функции Шварца — «отличники»: без углов, а вдали исчезают молниеносно. Для них Фурье работает идеально — туда и обратно без потерь. Планшерель говорит: при переходе к частотам <b>энергия не меняется</b>, как деньги при обмене без комиссии. Это отличный инструмент проверки: посчитай энергию с обеих сторон — не совпало, значит, где-то потерялся $2\\pi$."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Plancherel am Gauß prüfen: $u=e^{-x^2/2}$.</b><ol><li>Laut Tabelle ist $\\hat u(y)=e^{-y^2/2}$ – derselbe Gauß.</li><li>Energie links: $\\int|u|^2dx=\\int e^{-x^2}dx=\\sqrt\\pi$.</li><li>Energie rechts: $\\int|\\hat u|^2dy=\\int e^{-y^2}dy=\\sqrt\\pi$ ✓ gleich.</li></ol><b>Kein Musterschüler:</b> $\\frac1{1+x^2}$ ist glatt, fällt aber nur wie $\\frac1{x^2}$ ab: $x^2\\cdot\\frac1{1+x^2}\\to1$, nicht $0$. Also nicht in $\\mathcal S$ (aber in $L^2$).",
      "ru": "<b>Проверяем Планшереля на гауссе: $u=e^{-x^2/2}$.</b><ol><li>По таблице $\\hat u(y)=e^{-y^2/2}$ — тот же гаусс.</li><li>Энергия слева: $\\int|u|^2dx=\\int e^{-x^2}dx=\\sqrt\\pi$.</li><li>Энергия справа: $\\int|\\hat u|^2dy=\\int e^{-y^2}dy=\\sqrt\\pi$ ✓ совпало.</li></ol><b>Не отличник:</b> $\\frac1{1+x^2}$ гладкая, но убывает только как $\\frac1{x^2}$: $x^2\\cdot\\frac1{1+x^2}\\to1$, а не $0$. Значит, не в $\\mathcal S$ (но в $L^2$)."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "$\\mathcal S$ — «идеальные» функции: бесконечно гладкие, и они сами и все их производные убывают быстрее любой степени. Пример: гаусс. На $\\mathcal S$ Фурье — идеальная биекция: туда и обратно без потерь. Дальше по непрерывности Фурье распространяется на $L^2$, и там он сохраняет энергию.",
      "de": "$\\mathcal S$ sind die „idealen“ Funktionen: unendlich glatt, und sie selbst sowie alle Ableitungen fallen schneller ab als jede Potenz. Beispiel: der Gauß. Auf $\\mathcal S$ ist Fourier eine perfekte Bijektion: hin und zurück ohne Verluste. Danach setzt man Fourier stetig auf $L^2$ fort, und dort erhält er die Energie."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\text{Планшерель: } \\|\\hat u\\|_{L^2}=\\|u\\|_{L^2},\\qquad \\langle\\hat u,\\hat v\\rangle=\\langle u,v\\rangle$$",
      "de": "$$\\text{Plancherel: } \\|\\hat u\\|_{L^2}=\\|u\\|_{L^2},\\qquad \\langle\\hat u,\\hat v\\rangle=\\langle u,v\\rangle$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Посчитай $\\int|u|^2$ и $\\int|\\hat u|^2$. Не совпали — потерял множитель $2\\pi$ где-то в нормировке.</li> <li>Двойное применение: $\\hat{\\hat u}(x)=u(-x)$. Удобный тест для таблиц.</li> <li>Обратный трюк: $\\int_{-\\infty}^\\infty\\frac{\\sin^2 ay}{y^2}dy$ легко получить через Планшереля из образа щели: $\\frac\\pi2\\cdot\\int\\mathbf 1^2=\\frac\\pi2\\cdot2a=\\pi a$.</li> </ul>",
      "de": "<ul> <li>Berechne $\\int|u|^2$ und $\\int|\\hat u|^2$. Stimmen sie nicht überein, ist irgendwo in der Normierung ein Faktor $2\\pi$ verloren gegangen.</li> <li>Doppelte Anwendung: $\\hat{\\hat u}(x)=u(-x)$. Praktischer Test für Tabellen.</li> <li>Umkehrtrick: $\\int_{-\\infty}^\\infty\\frac{\\sin^2 ay}{y^2}dy$ bekommt man leicht mit Plancherel aus der Transformierten des Spalts: $\\frac\\pi2\\cdot\\int\\mathbf 1^2=\\frac\\pi2\\cdot2a=\\pi a$.</li> </ul>"
     }
    }
   ]
  },
  "distr": {
   "emoji": "🌡️",
   "ref": "§5.1–5.3",
   "title": {
    "ru": "Дистрибуции и δ-функция",
    "de": "Distributionen und die δ-Funktion"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Testfunktion</b> $\\varphi$: eine sehr brave Funktion – glatt und außerhalb eines Intervalls genau 0.</li><li><b>Funktional</b>: eine Maschine, die eine Funktion frisst und eine <b>Zahl</b> ausspuckt.</li><li>$\\langle T,\\varphi\\rangle$ = „was die Maschine $T$ bei $\\varphi$ ausspuckt“.</li></ul>",
      "ru": "<ul><li><b>Пробная функция</b> $\\varphi$: очень послушная функция — гладкая и ровно 0 вне некоторого отрезка.</li><li><b>Функционал</b>: машина, которая ест функцию и выдаёт <b>число</b>.</li><li>$\\langle T,\\varphi\\rangle$ — «что машина $T$ выдаёт на $\\varphi$».</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein Foto mit Blitz an genau einer Stelle: δ schaut sich eine Funktion an und meldet nur ihren Wert bei 0. Als echte Funktion („unendlich hoch, unendlich schmal, Fläche 1“) ergibt δ keinen Sinn – als <b>Messvorschrift</b> ist es völlig harmlos. Der Trick der Distributionen: Wir fragen nie „Was ist der Wert im Punkt?“, sondern immer nur „Was kommt heraus, wenn ich mit einer Testfunktion mittle?“.",
      "ru": "Фото со вспышкой ровно в одной точке: δ смотрит на функцию и сообщает только её значение в 0. Как настоящая функция («бесконечно высокая, бесконечно узкая, площадь 1») δ не имеет смысла — а как <b>правило измерения</b> она совершенно безобидна. Трюк дистрибуций: мы никогда не спрашиваем «какое значение в точке?», а только «что получится, если усреднить с пробной функцией?»."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>So wird eine Folge zu δ:</b> $g_k=k$ auf $[0,\\frac1k]$, sonst 0 (ein Rechteck mit Fläche 1, immer schmaler und höher).<ol><li>$\\langle g_k,\\varphi\\rangle=k\\int_0^{1/k}\\varphi(x)\\,dx$ = Mittelwert von $\\varphi$ auf $[0,\\frac1k]$.</li><li>Wird das Intervall winzig, ist der Mittelwert einfach $\\varphi(0)$. Also $g_k\\to\\delta$.</li><li>Mit Zahlen: Sieht $\\varphi$ nahe 0 aus wie $\\cos x$, dann ist der Wert $k\\sin\\frac1k$. Für $k=10$: $10\\sin(0{,}1)\\approx0{,}998$ – fast genau $\\cos0=1$ ✓.</li></ol>Und $\\langle\\delta_2,\\varphi\\rangle=\\varphi(2)$: δ an der Stelle 2 liest den Wert bei 2 ab.",
      "ru": "<b>Как последовательность становится δ:</b> $g_k=k$ на $[0,\\frac1k]$, иначе 0 (прямоугольник площади 1, всё уже и выше).<ol><li>$\\langle g_k,\\varphi\\rangle=k\\int_0^{1/k}\\varphi(x)\\,dx$ — среднее значение $\\varphi$ на $[0,\\frac1k]$.</li><li>Когда отрезок крошечный, среднее — это просто $\\varphi(0)$. Значит, $g_k\\to\\delta$.</li><li>В числах: если около 0 функция $\\varphi$ выглядит как $\\cos x$, значение равно $k\\sin\\frac1k$. При $k=10$: $10\\sin(0{,}1)\\approx0{,}998$ — почти ровно $\\cos0=1$ ✓.</li></ol>А $\\langle\\delta_2,\\varphi\\rangle=\\varphi(2)$: δ в точке 2 считывает значение в 2."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Термометр не измеряет температуру в точке: он всегда немного усредняет по своему объёму. Идея дистрибуций: объект определяется не значениями в точках, а тем, что он даёт при усреднении с каждой гладкой «пробной» функцией $\\varphi$. Тогда δ — это «прибор», который из любой $\\varphi$ выдаёт её значение в нуле. Как функция δ не существует, как правило усреднения — вполне.",
      "de": "Ein Thermometer misst die Temperatur nicht in einem Punkt: Es mittelt immer ein bisschen über sein Volumen. Die Idee der Distributionen: Ein Objekt wird nicht durch Werte in Punkten festgelegt, sondern dadurch, was es beim Mitteln mit jeder glatten „Testfunktion“ $\\varphi$ liefert. Dann ist δ ein „Messgerät“, das aus jedem $\\varphi$ seinen Wert in null macht. Als Funktion gibt es δ nicht, als Mittelungsregel sehr wohl."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$T:\\ \\varphi\\mapsto\\langle T,\\varphi\\rangle \\text{ линейно и непрерывно};\\qquad \\langle u,\\varphi\\rangle=\\int u\\varphi \\ (\\text{обычная функция});\\qquad \\langle\\delta_a,\\varphi\\rangle=\\varphi(a)$$ $$T_k\\to T \\iff \\langle T_k,\\varphi\\rangle\\to\\langle T,\\varphi\\rangle\\ \\ \\forall\\varphi$$",
      "de": "$$T:\\ \\varphi\\mapsto\\langle T,\\varphi\\rangle \\text{ linear und stetig};\\qquad \\langle u,\\varphi\\rangle=\\int u\\varphi \\ (\\text{gewöhnliche Funktion});\\qquad \\langle\\delta_a,\\varphi\\rangle=\\varphi(a)$$ $$T_k\\to T \\iff \\langle T_k,\\varphi\\rangle\\to\\langle T,\\varphi\\rangle\\ \\ \\forall\\varphi$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить, что последовательность сходится к δ",
      "de": "Check, ob eine Folge gegen δ konvergiert"
     },
     "html": {
      "ru": "<ul> <li>Три условия δ-последовательности: $g_k\\ge0$, $\\int g_k=1$, масса собирается к нулю ($\\int_{|x|>\\varepsilon}g_k\\to0$). Пример: $g_k=\\frac{k}{\\sqrt\\pi}e^{-k^2x^2}$.</li> <li>Проверка сходимости всегда одна и та же: проинтегрируй с $\\varphi$ и перейди к пределу (часто через замену $x=s/k$ и мажорированную сходимость).</li> </ul>",
      "de": "<ul> <li>Drei Bedingungen für eine δ-Folge: $g_k\\ge0$, $\\int g_k=1$, die Masse sammelt sich bei null ($\\int_{|x|>\\varepsilon}g_k\\to0$). Beispiel: $g_k=\\frac{k}{\\sqrt\\pi}e^{-k^2x^2}$.</li> <li>Der Konvergenz-Check ist immer derselbe: mit $\\varphi$ integrieren und zum Grenzwert übergehen (oft mit der Substitution $x=s/k$ und majorisierter Konvergenz).</li> </ul>"
     }
    }
   ]
  },
  "dderiv": {
   "emoji": "🪜",
   "ref": "§5.4–5.5",
   "title": {
    "ru": "Производная дистрибуции",
    "de": "Ableitung von Distributionen"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Partielle Integration</b>: $\\int u'\\varphi=-\\int u\\varphi'$, wenn die Randterme wegfallen (bei Testfunktionen immer).</li><li><b>Heaviside</b> $H(x)$: $0$ für $x\\lt0$, $1$ für $x\\gt0$ – eine Stufe.</li><li><b>Sprung</b> = um wie viel die Funktion an einer Stelle plötzlich hochspringt (rechts minus links).</li></ul>",
      "ru": "<ul><li><b>Интегрирование по частям</b>: $\\int u'\\varphi=-\\int u\\varphi'$, если граничные члены исчезают (у пробных функций — всегда).</li><li><b>Хевисайд</b> $H(x)$: $0$ при $x\\lt0$, $1$ при $x\\gt0$ — ступенька.</li><li><b>Скачок</b> — на сколько функция внезапно подпрыгивает в точке (справа минус слева).</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Eine Treppe: Wo sie flach ist, ist die Steigung 0. Genau an der Stufe ist sie „unendlich steil“ – klassisch keine Ableitung. Distributionen sagen: Die Ableitung dort ist eine δ-Spitze, mal der Stufenhöhe. So bekommt <b>jede</b> Funktion eine Ableitung: Glatte Stücke ganz normal ableiten, und an jeder Sprungstelle eine δ mit der Sprunghöhe dazuschreiben.",
      "ru": "Лестница: где она плоская, наклон 0. Ровно на ступеньке она «бесконечно крутая» — классической производной нет. Дистрибуции говорят: производная там — δ-пик, умноженный на высоту ступеньки. Так <b>любая</b> функция получает производную: гладкие куски дифференцируем как обычно, а в каждой точке скачка дописываем δ с высотой скачка."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$u(x)=x$ für $x\\lt0$ und $u(x)=x+2$ für $x\\gt0$.</b><ol><li>Stückweise ableiten: links und rechts ist $u'=1$.</li><li>Sprung bei 0: rechts $0+2=2$, links $0$ → Sprung $2$.</li><li>Ergebnis: $u'=1+2\\delta$. (Denn $u=x+2H$ und $H'=\\delta$.)</li></ol><b>Zweites Beispiel $|x|$:</b> Ableitung $\\operatorname{sgn}x$ ($-1$ links, $+1$ rechts). Das springt bei 0 um $2$ → $|x|''=2\\delta$.",
      "ru": "<b>$u(x)=x$ при $x\\lt0$ и $u(x)=x+2$ при $x\\gt0$.</b><ol><li>Дифференцируем по кускам: слева и справа $u'=1$.</li><li>Скачок в 0: справа $0+2=2$, слева $0$ → скачок $2$.</li><li>Итог: $u'=1+2\\delta$. (Ведь $u=x+2H$ и $H'=\\delta$.)</li></ol><b>Второй пример $|x|$:</b> производная $\\operatorname{sgn}x$ ($-1$ слева, $+1$ справа). Она прыгает в 0 на $2$ → $|x|''=2\\delta$."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Перекидываем производную на гладкую пробную функцию через интегрирование по частям. Граничных членов нет, потому что $\\varphi$ обращается в нуль далеко. Так любая функция становится бесконечно дифференцируемой. Скачок на высоту $h$ в точке $a$ даёт в производной слагаемое $h\\,\\delta_a$.",
      "de": "Man schiebt die Ableitung per partieller Integration auf die glatte Testfunktion. Randterme gibt es keine, weil $\\varphi$ weit draußen verschwindet. So wird jede Funktion unendlich oft differenzierbar. Ein Sprung der Höhe $h$ im Punkt $a$ liefert in der Ableitung den Summanden $h\\,\\delta_a$."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\langle T',\\varphi\\rangle:=-\\langle T,\\varphi'\\rangle,\\qquad H'=\\delta,\\quad |x|'=\\operatorname{sgn}x,\\quad |x|''=2\\delta,\\quad \\langle\\delta',\\varphi\\rangle=-\\varphi'(0)$$",
      "de": "$$\\langle T',\\varphi\\rangle:=-\\langle T,\\varphi'\\rangle,\\qquad H'=\\delta,\\quad |x|'=\\operatorname{sgn}x,\\quad |x|''=2\\delta,\\quad \\langle\\delta',\\varphi\\rangle=-\\varphi'(0)$$"
     }
    },
    {
     "type": "rezept",
     "label": {
      "ru": "Рецепт для кусочно гладкой $u$",
      "de": "Rezept für stückweise glatte $u$"
     },
     "html": {
      "ru": "<ol> <li>Возьми классическую производную на каждом куске.</li> <li>В каждой точке разрыва добавь (скачок справа минус слева)·$\\delta_a$.</li> <li>Проверка: проинтегрируй $\\int u\\,\\varphi'$ по кускам, должен получиться минус твой ответ, применённый к $\\varphi$.</li></ol>",
      "de": "<ol> <li>Nimm auf jedem Stück die klassische Ableitung.</li> <li>An jeder Sprungstelle addiere (Sprung rechts minus links)·$\\delta_a$.</li> <li>Check: Integrier $\\int u\\,\\varphi'$ stückweise – es muss minus deine Antwort, angewendet auf $\\varphi$, herauskommen.</li></ol>"
     }
    },
    {
     "type": "falle",
     "label": {
      "ru": "Ловушка",
      "de": "Falle"
     },
     "html": {
      "ru": "Произведение дистрибуций в общем случае не определено ($\\delta^2$ смысла не имеет). Можно умножать на гладкую функцию: $\\langle f T,\\varphi\\rangle=\\langle T,f\\varphi\\rangle$, откуда $x\\,\\delta=0$, $f\\delta=f(0)\\delta$.",
      "de": "Das Produkt von Distributionen ist im Allgemeinen nicht definiert ($\\delta^2$ ergibt keinen Sinn). Multiplizieren darf man mit einer glatten Funktion: $\\langle f T,\\varphi\\rangle=\\langle T,f\\varphi\\rangle$, daraus $x\\,\\delta=0$, $f\\delta=f(0)\\delta$."
     }
    }
   ]
  },
  "fund": {
   "emoji": "🔨",
   "ref": "§5.5–5.6",
   "title": {
    "ru": "Фундаментальное решение и Фурье для дистрибуций",
    "de": "Fundamentallösung und Fourier für Distributionen"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Differentialoperator</b> $P(\\partial)$: eine Rechenvorschrift aus Ableitungen, z. B. $-\\frac{d^2}{dx^2}$.</li><li><b>Faltung</b> $E*f$: siehe Thema „Faltung“ – $f$ mit dem Pinsel $E$ verwischen.</li><li><b>δ</b>: siehe „Distributionen“ – eine punktförmige Quelle.</li></ul>",
      "ru": "<ul><li><b>Дифференциальный оператор</b> $P(\\partial)$: правило, составленное из производных, например $-\\frac{d^2}{dx^2}$.</li><li><b>Свёртка</b> $E*f$: см. тему «Свёртка» — размазать $f$ кисточкой $E$.</li><li><b>δ</b>: см. «Дистрибуции» — точечный источник.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Klatsch einmal in einem Raum und nimm das Echo auf. Mit dieser einen Aufnahme kannst du vorhersagen, wie jede beliebige Musik in diesem Raum klingt: Musik ist ja nur eine Folge vieler Klatscher. Die Fundamentallösung $E$ ist das Echo eines einzigen Klatschers (δ). Die Lösung für jede Quelle $f$ ist dann „alle Echos zusammengezählt“ – die Faltung $E*f$.",
      "ru": "Хлопни один раз в комнате и запиши эхо. По этой одной записи можно предсказать, как в этой комнате будет звучать любая музыка: музыка ведь — просто последовательность многих хлопков. Фундаментальное решение $E$ — это эхо одного хлопка (δ). Решение для любого источника $f$ — «сумма всех эх», то есть свёртка $E*f$."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>1D: $-u''=f$.</b><ol><li>Fundamentallösung: $E(x)=-\\frac{|x|}2$. Check: $E''=-\\frac12\\cdot|x|''=-\\frac12\\cdot2\\delta=-\\delta$, also $-E''=\\delta$ ✓.</li><li>Quelle $f=\\mathbf 1_{[-1,1]}$: $u(x)=(E*f)(x)=-\\frac12\\int_{-1}^{1}|x-y|\\,dy$.</li><li>Für $|x|\\le1$: $\\int_{-1}^{1}|x-y|\\,dy=\\frac{(x+1)^2+(1-x)^2}{2}=x^2+1$, also $u=-\\frac{x^2+1}2$.</li><li>Kontrolle: $u''=-1$, also $-u''=1=f$ auf $[-1,1]$ ✓.</li></ol>",
      "ru": "<b>1D: $-u''=f$.</b><ol><li>Фундаментальное решение: $E(x)=-\\frac{|x|}2$. Проверка: $E''=-\\frac12\\cdot|x|''=-\\frac12\\cdot2\\delta=-\\delta$, значит $-E''=\\delta$ ✓.</li><li>Источник $f=\\mathbf 1_{[-1,1]}$: $u(x)=(E*f)(x)=-\\frac12\\int_{-1}^{1}|x-y|\\,dy$.</li><li>При $|x|\\le1$: $\\int_{-1}^{1}|x-y|\\,dy=\\frac{(x+1)^2+(1-x)^2}{2}=x^2+1$, значит $u=-\\frac{x^2+1}2$.</li><li>Проверка: $u''=-1$, то есть $-u''=1=f$ на $[-1,1]$ ✓.</li></ol>"
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Реши уравнение один раз для точечного источника (удар молотком в одной точке). Любой источник $f$ — это сумма точечных ударов с весами $f(y)$. Значит, решение для $f$ — сумма откликов, то есть свёртка. Это «универсальный ключ» всей части C.",
      "de": "Löse die Gleichung einmal für eine Punktquelle (ein Hammerschlag an einem Punkt). Jede Quelle $f$ ist eine Summe von Punktschlägen mit Gewichten $f(y)$. Also ist die Lösung für $f$ die Summe der Antworten – eine Faltung. Das ist der „Generalschlüssel“ für den ganzen Teil C."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$P(\\partial)E=\\delta\\ \\Longrightarrow\\ u=E*f \\text{ решает } P(\\partial)u=f$$ $$\\hat\\delta=(2\\pi)^{-n/2},\\qquad \\hat 1=(2\\pi)^{n/2}\\delta\\qquad(\\text{темперированные дистрибуции } \\mathcal S')$$",
      "de": "$$P(\\partial)E=\\delta\\ \\Longrightarrow\\ u=E*f \\text{ löst } P(\\partial)u=f$$ $$\\hat\\delta=(2\\pi)^{-n/2},\\qquad \\hat 1=(2\\pi)^{n/2}\\delta\\qquad(\\text{temperierte Distributionen } \\mathcal S')$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>$P(\\partial)(E*f)=(P(\\partial)E)*f=\\delta*f=f$. Это одна строка, она же доказательство.</li> <li>Проверь, что вне нуля $P(\\partial)E=0$ классически, а «всё содержимое» сидит в нуле.</li> <li>Через Фурье: $\\widehat{P(\\partial)E}=P(iy)\\hat E=(2\\pi)^{-n/2}$, отсюда $\\hat E=\\frac{(2\\pi)^{-n/2}}{P(iy)}$. Так фундаментальные решения часто и находят.</li> </ul>",
      "de": "<ul> <li>$P(\\partial)(E*f)=(P(\\partial)E)*f=\\delta*f=f$. Das ist eine Zeile und zugleich der Beweis.</li> <li>Prüfe, dass außerhalb der Null klassisch $P(\\partial)E=0$ gilt und der „ganze Inhalt“ in der Null sitzt.</li> <li>Über Fourier: $\\widehat{P(\\partial)E}=P(iy)\\hat E=(2\\pi)^{-n/2}$, daraus $\\hat E=\\frac{(2\\pi)^{-n/2}}{P(iy)}$. So findet man Fundamentallösungen oft.</li> </ul>"
     }
    }
   ]
  },
  "three": {
   "emoji": "3️⃣",
   "ref": "§6, 7.1",
   "title": {
    "ru": "Три уравнения и их характер",
    "de": "Drei Gleichungen und ihr Charakter"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>PDE</b> (partielle Differentialgleichung): eine Gleichung für eine Funktion mehrerer Variablen, z. B. Ort $x$ und Zeit $t$, mit Ableitungen nach beiden.</li><li><b>Laplace-Operator</b> $\\Delta u=u_{xx}+u_{yy}\\,(+u_{zz})$: Summe der zweiten Ableitungen. Er misst, wie sehr $u$ vom Durchschnitt seiner Nachbarn abweicht.</li><li>$\\partial_tu$ = Ableitung nach der Zeit, $\\partial_t^2u$ = zweite Ableitung nach der Zeit.</li></ul>",
      "ru": "<ul><li><b>PDE</b> (уравнение в частных производных): уравнение для функции нескольких переменных, например координаты $x$ и времени $t$, с производными по обеим.</li><li><b>Оператор Лапласа</b> $\\Delta u=u_{xx}+u_{yy}\\,(+u_{zz})$: сумма вторых производных. Он показывает, насколько $u$ отличается от среднего по соседям.</li><li>$\\partial_tu$ — производная по времени, $\\partial_t^2u$ — вторая производная по времени.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Drei Charaktere: <b>Laplace</b> ist ein gespanntes Trampolin, das ruhig daliegt – nichts bewegt sich mehr. <b>Wärmeleitung</b> ist ein Tropfen Tinte im Wasser: Er verschwimmt, wird immer gleichmäßiger, und rückwärts geht es nie. <b>Welle</b> ist ein geschütteltes Seil: Die Form läuft weg, mit fester Geschwindigkeit, und kommt notfalls zurück. Wenn du eine Aufgabe siehst, frag zuerst: Welcher der drei ist es?",
      "ru": "Три характера: <b>Лаплас</b> — натянутый батут, который спокойно лежит: ничего уже не движется. <b>Теплопроводность</b> — капля чернил в воде: расплывается, становится всё равномернее, и назад не бывает. <b>Волна</b> — встряхнутая верёвка: форма убегает с постоянной скоростью и может вернуться. Видишь задачу — сначала спроси: какой из трёх?"
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Drei Funktionen, drei Gleichungen – einfach einsetzen:</b><ol><li>$u=x^2-y^2$: $u_{xx}=2$, $u_{yy}=-2$ → $\\Delta u=0$ ✓ löst Laplace.</li><li>$u=e^{-t}\\sin x$: $u_t=-e^{-t}\\sin x$ und $u_{xx}=-e^{-t}\\sin x$ → $u_t=u_{xx}$ ✓ löst die Wärmeleitung.</li><li>$u=\\sin(x-ct)$: $u_{tt}=-c^2\\sin(x-ct)$ und $u_{xx}=-\\sin(x-ct)$ → $u_{tt}=c^2u_{xx}$ ✓ löst die Wellengleichung.</li></ol>Das „Einsetzen und Vergleichen“ ist der wichtigste Check des ganzen Teils.",
      "ru": "<b>Три функции, три уравнения — просто подставляем:</b><ol><li>$u=x^2-y^2$: $u_{xx}=2$, $u_{yy}=-2$ → $\\Delta u=0$ ✓ решает Лапласа.</li><li>$u=e^{-t}\\sin x$: $u_t=-e^{-t}\\sin x$ и $u_{xx}=-e^{-t}\\sin x$ → $u_t=u_{xx}$ ✓ решает уравнение теплопроводности.</li><li>$u=\\sin(x-ct)$: $u_{tt}=-c^2\\sin(x-ct)$ и $u_{xx}=-\\sin(x-ct)$ → $u_{tt}=c^2u_{xx}$ ✓ решает волновое уравнение.</li></ol>«Подставить и сравнить» — самая важная проверка во всей части."
     }
    },
    {
     "type": "tabelle",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "<table> <tr><th>Уравнение</th><th>Физика</th><th>Скорость</th><th>Главное свойство</th></tr> <tr><td>$-\\Delta u=f$ (Пуассон), $\\Delta u=0$ (Лаплас)</td><td>стационар: мыльная плёнка, электростатика</td><td>времени нет</td><td>среднее значение, максимум на границе</td></tr> <tr><td>$\\partial_tu=\\Delta u$</td><td>тепло, диффузия</td><td>бесконечная</td><td>сглаживает мгновенно, необратима во времени</td></tr> <tr><td>$\\partial_t^2u=c^2\\Delta u$</td><td>струна, звук, свет</td><td>конечная, $c$</td><td>сохраняет форму и энергию, обратима во времени</td></tr> </table>",
      "de": "<table> <tr><th>Gleichung</th><th>Physik</th><th>Geschwindigkeit</th><th>Haupteigenschaft</th></tr> <tr><td>$-\\Delta u=f$ (Poisson), $\\Delta u=0$ (Laplace)</td><td>stationär: Seifenhaut, Elektrostatik</td><td>keine Zeit</td><td>Mittelwerteigenschaft, Maximum am Rand</td></tr> <tr><td>$\\partial_tu=\\Delta u$</td><td>Wärme, Diffusion</td><td>unendlich</td><td>glättet sofort, zeitlich irreversibel</td></tr> <tr><td>$\\partial_t^2u=c^2\\Delta u$</td><td>Saite, Schall, Licht</td><td>endlich, $c$</td><td>erhält Form und Energie, zeitlich reversibel</td></tr> </table>"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить постановку",
      "de": "Check der Problemstellung"
     },
     "html": {
      "ru": "<ul> <li>AWP (задача Коши): для тепла нужно одно условие $u(\\cdot,0)$, для волны два: $u(\\cdot,0)$ и $\\partial_tu(\\cdot,0)$. Число начальных условий = порядок по $t$.</li> <li>RWP: Дирихле задаёт $u$ на границе, Нейман задаёт $\\partial_\\nu u$. У Неймана для Пуассона решение есть только при $\\int_\\Omega f=-\\int_{\\partial\\Omega}g$ и определено с точностью до константы.</li> </ul>",
      "de": "<ul> <li>AWP (Cauchy-Problem): Für Wärme braucht man eine Bedingung $u(\\cdot,0)$, für die Welle zwei: $u(\\cdot,0)$ und $\\partial_tu(\\cdot,0)$. Anzahl der Anfangsbedingungen = Ordnung in $t$.</li> <li>RWP: Dirichlet gibt $u$ am Rand vor, Neumann gibt $\\partial_\\nu u$ vor. Bei Neumann für Poisson gibt es nur eine Lösung, wenn $\\int_\\Omega f=-\\int_{\\partial\\Omega}g$, und sie ist nur bis auf eine Konstante bestimmt.</li> </ul>"
     }
    }
   ]
  },
  "sep": {
   "emoji": "🎸",
   "ref": "§6.1–6.4",
   "title": {
    "ru": "Разделение переменных",
    "de": "Separation der Variablen"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Randbedingung</b>: was am Rand gelten muss, z. B. $u(0,t)=u(L,t)=0$ (Saite an beiden Enden festgeklemmt).</li><li><b>Die ODE $X''=-\\lambda X$</b> hat als Lösungen $\\sin(\\sqrt\\lambda x)$ und $\\cos(\\sqrt\\lambda x)$.</li><li><b>Mode</b> = eine einzelne Grundschwingung, z. B. $\\sin(kx)$.</li><li><b>Fourierreihe</b>: eine Funktion als Summe von Sinus- und Cosinus-Moden schreiben.</li></ul>",
      "ru": "<ul><li><b>Граничное условие</b>: что должно выполняться на краю, например $u(0,t)=u(L,t)=0$ (струна зажата с обоих концов).</li><li><b>ОДУ $X''=-\\lambda X$</b> имеет решения $\\sin(\\sqrt\\lambda x)$ и $\\cos(\\sqrt\\lambda x)$.</li><li><b>Мода</b> — одно отдельное базовое колебание, например $\\sin(kx)$.</li><li><b>Ряд Фурье</b>: запись функции как суммы синусов и косинусов (мод).</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Eine Gitarrensaite kann nicht jeden beliebigen Ton spielen, nur den Grundton und seine Obertöne – weil sie an beiden Enden festgeklemmt ist. Jeder dieser Töne (jede Mode) ist für sich ganz einfach: eine feste Form, die mit der Zeit nur lauter/leiser wird oder schwingt. Die Methode: Zerleg den Anfangszustand in diese Töne, lass jeden Ton für sich laufen, und addiere am Ende alles.",
      "ru": "Гитарная струна не может играть любую ноту, только основной тон и обертоны — потому что она зажата с обоих концов. Каждая такая нота (мода) сама по себе очень простая: постоянная форма, которая со временем только затухает или колеблется. Метод: разложи начальное состояние на эти ноты, дай каждой жить отдельно и в конце всё сложи."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Wärme auf $[0,\\pi]$, Ränder auf 0, Start $u_0=\\sin x+\\frac12\\sin3x$.</b><ol><li>Mit $L=\\pi$ hat Mode $k$ den Abklingfaktor $e^{-k^2t}$.</li><li>$u_0$ besteht schon aus zwei Moden ($k=1$ und $k=3$) – keine Integrale nötig.</li><li>Lösung: $u(x,t)=e^{-t}\\sin x+\\frac12e^{-9t}\\sin3x$.</li><li>Checks: Bei $t=0$ kommt $u_0$ heraus ✓. Bei $x=0$ und $x=\\pi$ ist $u=0$ ✓.</li></ol>Bild: Schon bei $t=1$ ist $e^{-9}\\approx0{,}0001$ – die „zackige“ Mode $\\sin3x$ ist fast weg, übrig bleibt der sanfte Buckel $\\sin x$. Wärme glättet zuerst das Feine.",
      "ru": "<b>Тепло на $[0,\\pi]$, края на 0, старт $u_0=\\sin x+\\frac12\\sin3x$.</b><ol><li>При $L=\\pi$ мода $k$ затухает с множителем $e^{-k^2t}$.</li><li>$u_0$ уже состоит из двух мод ($k=1$ и $k=3$) — интегралы не нужны.</li><li>Решение: $u(x,t)=e^{-t}\\sin x+\\frac12e^{-9t}\\sin3x$.</li><li>Проверки: при $t=0$ получается $u_0$ ✓. При $x=0$ и $x=\\pi$ имеем $u=0$ ✓.</li></ol>Картинка: уже при $t=1$ множитель $e^{-9}\\approx0{,}0001$ — «зубчатая» мода $\\sin3x$ почти исчезла, остался плавный горб $\\sin x$. Тепло сначала сглаживает мелочи."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Ищем решения вида «форма × время»: $u=X(x)T(t)$. Подставляем, делим на $XT$. Слева зависит только от $x$, справа только от $t$ — значит, обе части равны одной константе. Граничные условия разрешают только дискретный набор констант (как струна гитары звучит только на обертонах). Общее решение — сумма всех разрешённых мод, коэффициенты берутся из начальных условий через ряд Фурье.",
      "de": "Man sucht Lösungen der Form „Form × Zeit“: $u=X(x)T(t)$. Einsetzen, durch $XT$ teilen. Links hängt alles nur von $x$ ab, rechts nur von $t$ – also sind beide Seiten gleich einer Konstanten. Die Randbedingungen erlauben nur eine diskrete Menge an Konstanten (wie eine Gitarrensaite nur in ihren Obertönen klingt). Die allgemeine Lösung ist die Summe aller erlaubten Moden, die Koeffizienten kommen über eine Fourierreihe aus den Anfangsbedingungen."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\text{Струна } [0,L],\\ u(0,t)=u(L,t)=0:\\quad u=\\sum_{k\\ge1}\\sin\\tfrac{k\\pi x}L\\Big(a_k\\cos\\tfrac{k\\pi ct}L+b_k\\sin\\tfrac{k\\pi ct}L\\Big)$$ $$\\text{Тепло на } [0,L]:\\quad u=\\sum_{k\\ge1}c_k\\,e^{-(k\\pi/L)^2t}\\sin\\tfrac{k\\pi x}L,\\qquad c_k=\\tfrac2L\\int_0^Lu_0(x)\\sin\\tfrac{k\\pi x}L\\,dx$$",
      "de": "$$\\text{Saite } [0,L],\\ u(0,t)=u(L,t)=0:\\quad u=\\sum_{k\\ge1}\\sin\\tfrac{k\\pi x}L\\Big(a_k\\cos\\tfrac{k\\pi ct}L+b_k\\sin\\tfrac{k\\pi ct}L\\Big)$$ $$\\text{Wärme auf } [0,L]:\\quad u=\\sum_{k\\ge1}c_k\\,e^{-(k\\pi/L)^2t}\\sin\\tfrac{k\\pi x}L,\\qquad c_k=\\tfrac2L\\int_0^Lu_0(x)\\sin\\tfrac{k\\pi x}L\\,dx$$"
     }
    },
    {
     "type": "rezept",
     "label": {
      "ru": "Рецепт",
      "de": "Rezept"
     },
     "html": {
      "ru": "<ol> <li>$u=X(x)T(t)$, подставить, разделить, приравнять к $-\\lambda$.</li> <li>Решить задачу на собственные значения для $X$ с граничными условиями: Дирихле → $\\sin$, Нейман → $\\cos$, периодические → $e^{ikx}$.</li> <li>Решить ОДУ для $T$ при каждом $\\lambda_k$.</li> <li>Сложить моды, коэффициенты найти разложением начальных данных по собственным функциям (ортогональность!).</li></ol>",
      "de": "<ol> <li>$u=X(x)T(t)$ einsetzen, separieren, gleich $-\\lambda$ setzen.</li> <li>Das Eigenwertproblem für $X$ mit den Randbedingungen lösen: Dirichlet → $\\sin$, Neumann → $\\cos$, periodisch → $e^{ikx}$.</li> <li>Die ODE für $T$ für jedes $\\lambda_k$ lösen.</li> <li>Die Moden aufsummieren, die Koeffizienten durch Entwicklung der Anfangsdaten nach den Eigenfunktionen bestimmen (Orthogonalität!).</li></ol>"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Каждая мода по отдельности должна удовлетворять уравнению и граничным условиям: подставь одну моду.</li> <li>При $t=0$ ряд должен давать $u_0$. Если $u_0$ уже синус, ответ — одна мода, без интегралов.</li> <li>Тепло: при $t\\to\\infty$ всё уходит к 0 (Дирихле) или к среднему значению $u_0$ (Нейман).</li> <li>Круг/шар (§6.3–6.4): в полярных координатах моды $r^k\\cos k\\theta$, $r^k\\sin k\\theta$. Для собственных значений $-\\Delta$ на круге появляются функции Бесселя, на шаре — сферические гармоники.</li> </ul>",
      "de": "<ul> <li>Jede Mode einzeln muss die Gleichung und die Randbedingungen erfüllen: eine Mode einsetzen.</li> <li>Bei $t=0$ muss die Reihe $u_0$ ergeben. Ist $u_0$ schon ein Sinus, ist die Antwort eine einzige Mode, ohne Integrale.</li> <li>Wärme: Für $t\\to\\infty$ geht alles gegen 0 (Dirichlet) oder gegen den Mittelwert von $u_0$ (Neumann).</li> <li>Kreis/Kugel (§6.3–6.4): In Polarkoordinaten sind die Moden $r^k\\cos k\\theta$, $r^k\\sin k\\theta$. Bei den Eigenwerten von $-\\Delta$ auf dem Kreis tauchen Besselfunktionen auf, auf der Kugel Kugelflächenfunktionen.</li> </ul>"
     }
    }
   ]
  },
  "laplace": {
   "emoji": "🫧",
   "ref": "§7.1–7.3",
   "title": {
    "ru": "Лаплас: фундаментальное решение и функция Грина",
    "de": "Laplace: Fundamentallösung und Greensche Funktion"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Harmonisch</b> = $\\Delta u=0$.</li><li><b>Mittelwert über einen Kreis</b>: alle Werte auf dem Kreis zusammenzählen und durch die Länge teilen.</li><li><b>Punktquelle</b> δ: alles „Material“ sitzt in einem Punkt (eine Punktladung).</li></ul>",
      "ru": "<ul><li><b>Гармоническая</b> — $\\Delta u=0$.</li><li><b>Среднее по окружности</b>: сложить все значения на окружности и поделить на длину.</li><li><b>Точечный источник</b> δ: весь «материал» сидит в одной точке (точечный заряд).</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Eine Seifenhaut, gespannt in einen verbogenen Drahtrahmen: Innen gibt es keine Beulen und keine Dellen, jeder Punkt liegt genau auf dem Durchschnitt seiner Umgebung. Darum kommt das Höchste und das Tiefste immer am Rand vor. Die Fundamentallösung ist das Feld einer einzelnen Punktladung; die Greensche Funktion ist dasselbe mit „Spiegelladungen“, damit es zur Form des Rands passt.",
      "ru": "Мыльная плёнка, натянутая на изогнутую проволочную рамку: внутри нет ни бугров, ни ямок, каждая точка лежит ровно на среднем своих соседей. Поэтому самое высокое и самое низкое всегда на краю. Фундаментальное решение — поле одного точечного заряда; функция Грина — то же самое с «зеркальными зарядами», чтобы подогнать под форму границы."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Mittelwert-Eigenschaft prüfen an $u=x^2-y^2$</b> (harmonisch, siehe „Drei Gleichungen“):<ol><li>Auf dem Kreis mit Radius $r$ um 0: $x=r\\cos\\varphi$, $y=r\\sin\\varphi$ → $u=r^2(\\cos^2\\varphi-\\sin^2\\varphi)=r^2\\cos2\\varphi$.</li><li>Mittelwert von $\\cos2\\varphi$ über eine volle Runde ist $0$ → Mittelwert $0$.</li><li>Und $u(0,0)=0$ ✓ – gleich dem Mittelwert.</li></ol><b>Maximumprinzip:</b> Auf der Einheitsscheibe ist das Maximum $1$, angenommen am Rand bei $(\\pm1,0)$. Innen, z. B. $u(0{,}5;\\,0)=0{,}25$, ist es kleiner ✓.",
      "ru": "<b>Проверяем свойство среднего на $u=x^2-y^2$</b> (гармоническая, см. «Три уравнения»):<ol><li>На окружности радиуса $r$ вокруг 0: $x=r\\cos\\varphi$, $y=r\\sin\\varphi$ → $u=r^2(\\cos^2\\varphi-\\sin^2\\varphi)=r^2\\cos2\\varphi$.</li><li>Среднее $\\cos2\\varphi$ за полный круг равно $0$ → среднее $0$.</li><li>И $u(0,0)=0$ ✓ — совпадает со средним.</li></ol><b>Принцип максимума:</b> на единичном диске максимум равен $1$ и достигается на краю в $(\\pm1,0)$. Внутри, например $u(0{,}5;\\,0)=0{,}25$, меньше ✓."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Гармоническая функция ($\\Delta u=0$) в каждой точке равна среднему по любой сфере вокруг неё. Поэтому у неё нет внутренних бугров и ям, и максимум достигается на границе. Фундаментальное решение — потенциал точечного заряда. Функция Грина — тот же потенциал, к которому добавили «зеркальные» заряды, чтобы на границе области потенциал стал нулём.",
      "de": "Eine harmonische Funktion ($\\Delta u=0$) ist in jedem Punkt gleich ihrem Mittelwert über jede Kugelsphäre um diesen Punkt. Deshalb hat sie innen keine Buckel und keine Mulden, und das Maximum wird am Rand angenommen. Die Fundamentallösung ist das Potential einer Punktladung. Die Greensche Funktion ist dasselbe Potential plus „Spiegelladungen“, damit das Potential am Rand des Gebiets null wird."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$-\\Delta\\Gamma=\\delta:\\quad \\Gamma(x)=\\begin{cases}-\\frac{|x|}2,&n=1\\\\-\\frac1{2\\pi}\\log|x|,&n=2\\\\ \\frac{1}{(n-2)\\omega_n}|x|^{2-n},&n\\ge3\\ (n=3:\\ \\frac1{4\\pi|x|})\\end{cases}$$ $$G(x,y)=\\Gamma(x-y)-h_y(x),\\ \\Delta h_y=0,\\ G=0 \\text{ на } \\partial\\Omega\\ \\Rightarrow\\ u(x)=\\int_\\Omega G f\\,dy-\\int_{\\partial\\Omega}g\\,\\partial_{\\nu_y}G\\,dS_y$$",
      "de": "$$-\\Delta\\Gamma=\\delta:\\quad \\Gamma(x)=\\begin{cases}-\\frac{|x|}2,&n=1\\\\-\\frac1{2\\pi}\\log|x|,&n=2\\\\ \\frac{1}{(n-2)\\omega_n}|x|^{2-n},&n\\ge3\\ (n=3:\\ \\frac1{4\\pi|x|})\\end{cases}$$ $$G(x,y)=\\Gamma(x-y)-h_y(x),\\ \\Delta h_y=0,\\ G=0 \\text{ auf } \\partial\\Omega\\ \\Rightarrow\\ u(x)=\\int_\\Omega G f\\,dy-\\int_{\\partial\\Omega}g\\,\\partial_{\\nu_y}G\\,dS_y$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Радиальный лапласиан: $\\Delta\\gamma(r)=r^{1-n}(r^{n-1}\\gamma')'$. Подставь $r^{2-n}$ или $\\log r$, получишь 0 при $r\\ne0$.</li> <li>Нормировка: поток $-\\nabla\\Gamma$ через любую сферу вокруг 0 равен 1. Для $n=3$: $\\frac1{4\\pi r^2}\\cdot4\\pi r^2=1$. ✓</li> <li>Принцип максимума: нашёл решение $\\Delta u=0$, у которого внутри значение больше, чем где-либо на границе, — ошибка.</li> <li>Метод отражений (полупространство $x_n>0$): $G=\\Gamma(x-y)-\\Gamma(x-y^*)$, где $y^*$ — зеркальная точка. На плоскости $|x-y|=|x-y^*|$, значит $G=0$. ✓</li> </ul>",
      "de": "<ul> <li>Radialer Laplace: $\\Delta\\gamma(r)=r^{1-n}(r^{n-1}\\gamma')'$. Setz $r^{2-n}$ oder $\\log r$ ein – für $r\\ne0$ kommt 0 heraus.</li> <li>Normierung: Der Fluss von $-\\nabla\\Gamma$ durch jede Sphäre um 0 ist 1. Für $n=3$: $\\frac1{4\\pi r^2}\\cdot4\\pi r^2=1$. ✓</li> <li>Maximumprinzip: Hast du eine Lösung von $\\Delta u=0$ gefunden, die innen größer ist als irgendwo am Rand – Fehler.</li> <li>Spiegelungsmethode (Halbraum $x_n>0$): $G=\\Gamma(x-y)-\\Gamma(x-y^*)$, wobei $y^*$ der Spiegelpunkt ist. Auf der Ebene gilt $|x-y|=|x-y^*|$, also $G=0$. ✓</li> </ul>"
     }
    }
   ]
  },
  "weak": {
   "emoji": "🪶",
   "ref": "§7.4–7.5, 9.6",
   "title": {
    "ru": "Вариационный метод и слабые решения",
    "de": "Variationsmethode und schwache Lösungen"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Energie</b> $E(u)$: eine Zahl, die angibt, wie „gespannt“ $u$ ist. $|\\nabla u|^2$ ist die Steilheit zum Quadrat.</li><li><b>Testfunktion</b> $\\varphi$: siehe „Distributionen“.</li><li><b>Klassische Lösung</b>: $u$ ist zweimal ableitbar und erfüllt die Gleichung in jedem Punkt.</li></ul>",
      "ru": "<ul><li><b>Энергия</b> $E(u)$: число, показывающее, насколько $u$ «натянута». $|\\nabla u|^2$ — крутизна в квадрате.</li><li><b>Пробная функция</b> $\\varphi$: см. «Дистрибуции».</li><li><b>Классическое решение</b>: $u$ дважды дифференцируема и удовлетворяет уравнению в каждой точке.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Die Natur ist faul: Eine Seifenhaut, eine gespannte Membran, ein Seil im Gleichgewicht – sie alle nehmen die Form mit der <b>kleinsten Energie</b> an. Statt die Gleichung Punkt für Punkt zu prüfen (wofür man zwei Ableitungen bräuchte), prüft die schwache Form nur „im Durchschnitt“ gegen alle Testfunktionen. Dafür reicht eine Ableitung – also sind auch Lösungen mit Knicken erlaubt.",
      "ru": "Природа ленива: мыльная плёнка, натянутая мембрана, верёвка в равновесии — все принимают форму с <b>наименьшей энергией</b>. Вместо того чтобы проверять уравнение в каждой точке (для этого нужны две производные), слабая форма проверяет только «в среднем» против всех пробных функций. Для этого хватает одной производной — значит, разрешены и решения с изломами."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$-u''=1$ auf $(0,1)$ mit $u(0)=u(1)=0$.</b><ol><li>Raten: $u=\\frac{x(1-x)}2$. Ableiten: $u'=\\frac{1-2x}2$, $u''=-1$ → $-u''=1$ ✓. Rand: $u(0)=u(1)=0$ ✓.</li><li>Schwache Form: $\\int_0^1u'\\varphi'\\,dx=\\int_0^1\\varphi\\,dx$ für alle $\\varphi$.</li><li>Check durch partielle Integration: $\\int u'\\varphi'=[u'\\varphi]_0^1-\\int u''\\varphi=0+\\int\\varphi$ ✓ (Randterm 0, weil $\\varphi$ am Rand 0 ist).</li></ol>Bild: Ein Seil, das unter seinem eigenen Gewicht durchhängt – eine Parabel.",
      "ru": "<b>$-u''=1$ на $(0,1)$ с $u(0)=u(1)=0$.</b><ol><li>Угадываем: $u=\\frac{x(1-x)}2$. Производные: $u'=\\frac{1-2x}2$, $u''=-1$ → $-u''=1$ ✓. Граница: $u(0)=u(1)=0$ ✓.</li><li>Слабая форма: $\\int_0^1u'\\varphi'\\,dx=\\int_0^1\\varphi\\,dx$ для всех $\\varphi$.</li><li>Проверка интегрированием по частям: $\\int u'\\varphi'=[u'\\varphi]_0^1-\\int u''\\varphi=0+\\int\\varphi$ ✓ (граничный член 0, потому что $\\varphi$ на краю равна 0).</li></ol>Картинка: верёвка, провисающая под собственным весом, — парабола."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Мыльная плёнка принимает форму с наименьшей энергией. Уравнение $-\\Delta u=f$ — это условие «минимума энергии» $E(u)$. Слабое решение — это $u$, которая удовлетворяет уравнению «в среднем» после умножения на любую пробную функцию и интегрирования по частям. Второй производной для этого не нужно, хватает первой.",
      "de": "Eine Seifenhaut nimmt die Form mit der kleinsten Energie an. Die Gleichung $-\\Delta u=f$ ist die Bedingung „Energie $E(u)$ minimal“. Eine schwache Lösung ist ein $u$, das die Gleichung „im Mittel“ erfüllt: nach Multiplikation mit jeder Testfunktion und partieller Integration. Dafür braucht man keine zweite Ableitung, die erste reicht."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$E(u)=\\int_\\Omega\\big(\\tfrac12|\\nabla u|^2-fu\\big)dx\\ \\to\\ \\min,\\qquad \\int_\\Omega\\nabla u\\cdot\\nabla\\varphi\\,dx=\\int_\\Omega f\\varphi\\,dx\\ \\ \\forall\\varphi$$",
      "de": "$$E(u)=\\int_\\Omega\\big(\\tfrac12|\\nabla u|^2-fu\\big)dx\\ \\to\\ \\min,\\qquad \\int_\\Omega\\nabla u\\cdot\\nabla\\varphi\\,dx=\\int_\\Omega f\\varphi\\,dx\\ \\ \\forall\\varphi$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Если $u$ классическая ($C^2$), проинтегрируй по частям обратно: получишь $\\int(-\\Delta u-f)\\varphi=0$ для всех $\\varphi$. По основной лемме вариационного исчисления $-\\Delta u=f$.</li> <li>Для волны (§5, пример из скрипта): $u=\\frac{f(x+ct)+f(x-ct)}2$ с изломом в $f$ классически не дифференцируема, но слабо уравнению удовлетворяет.</li> </ul>",
      "de": "<ul> <li>Ist $u$ klassisch ($C^2$), integrier partiell zurück: Du bekommst $\\int(-\\Delta u-f)\\varphi=0$ für alle $\\varphi$. Nach dem Fundamentallemma der Variationsrechnung gilt $-\\Delta u=f$.</li> <li>Für die Welle (§5, Beispiel aus dem Skriptum): $u=\\frac{f(x+ct)+f(x-ct)}2$ mit einem Knick in $f$ ist klassisch nicht differenzierbar, erfüllt die Gleichung aber schwach.</li> </ul>"
     }
    }
   ]
  },
  "heat": {
   "emoji": "🔥",
   "ref": "§8",
   "title": {
    "ru": "Уравнение теплопроводности",
    "de": "Wärmeleitungsgleichung"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Gaußglocke</b>: die typische Glockenkurve $e^{-x^2}$, hoch in der Mitte, schnell abfallend.</li><li><b>Anfangswert</b> $u_0$: die Temperaturverteilung zur Zeit $t=0$.</li><li><b>Faltung</b>: siehe „Faltung“ – verwischen.</li></ul>",
      "ru": "<ul><li><b>Гауссов колокол</b>: типичная кривая $e^{-x^2}$, высокая в центре, быстро спадающая.</li><li><b>Начальное значение</b> $u_0$: распределение температуры в момент $t=0$.</li><li><b>Свёртка</b>: см. «Свёртка» — размазывание.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Milch in den Kaffee: Am Anfang ein weißer Klecks, dann verschwimmt er zu einer immer breiteren, flacheren Wolke, bis alles gleich hellbraun ist. Die Wärmeleitung macht genau das mit Temperatur. Jeder heiße Punkt wird zu einer Gaußglocke, die mit der Zeit breiter wird (Breite $\\sim\\sqrt t$). Die Gesamtmenge an Wärme bleibt dabei gleich – sie verteilt sich nur.",
      "ru": "Молоко в кофе: сначала белая клякса, потом она расплывается во всё более широкое и плоское облако, пока всё не станет одинаково светло-коричневым. Теплопроводность делает ровно это с температурой. Каждая горячая точка превращается в гауссов колокол, который со временем расширяется (ширина $\\sim\\sqrt t$). Общее количество тепла при этом не меняется — оно только распределяется."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Start $u_0=\\sin x$ auf ganz $\\mathbb R$.</b><ol><li>Ansatz: Form bleibt, nur die Höhe schrumpft: $u=A(t)\\sin x$.</li><li>Einsetzen: $A'\\sin x=-A\\sin x$ → $A'=-A$ → $A=e^{-t}$.</li><li>Lösung: $u=e^{-t}\\sin x$. Check: $u_t=-e^{-t}\\sin x=u_{xx}$ ✓, und bei $t=0$ ist $u=\\sin x$ ✓.</li></ol>Zahlen: Die Höhe halbiert sich, wenn $e^{-t}=\\frac12$, also bei $t=\\ln2\\approx0{,}69$. Und ein Wärmepunkt hat zur Zeit $t=2$ die Breite $\\sqrt{2t}=2$.",
      "ru": "<b>Старт $u_0=\\sin x$ на всей $\\mathbb R$.</b><ol><li>Догадка: форма сохраняется, уменьшается только высота: $u=A(t)\\sin x$.</li><li>Подставляем: $A'\\sin x=-A\\sin x$ → $A'=-A$ → $A=e^{-t}$.</li><li>Решение: $u=e^{-t}\\sin x$. Проверка: $u_t=-e^{-t}\\sin x=u_{xx}$ ✓, и при $t=0$ имеем $u=\\sin x$ ✓.</li></ol>В числах: высота уменьшается вдвое, когда $e^{-t}=\\frac12$, то есть при $t=\\ln2\\approx0{,}69$. А тепловая точка в момент $t=2$ имеет ширину $\\sqrt{2t}=2$."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Капля горячего в точке за время $t$ расплывается в гауссов колокол ширины $\\sim\\sqrt{2t}$. Любое начальное распределение — сумма таких капель, значит, решение — свёртка начальных данных с колоколом. Уже при сколь угодно малом $t>0$ тепло есть везде (бесконечная скорость), а решение бесконечно гладкое, даже если $u_0$ был со скачками.",
      "de": "Ein heißer Tropfen in einem Punkt zerfließt in der Zeit $t$ zu einer Gaußglocke der Breite $\\sim\\sqrt{2t}$. Jede Anfangsverteilung ist eine Summe solcher Tropfen, also ist die Lösung die Faltung der Anfangsdaten mit der Glocke. Schon bei beliebig kleinem $t>0$ ist überall Wärme (unendliche Geschwindigkeit), und die Lösung ist unendlich glatt, auch wenn $u_0$ Sprünge hatte."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\Gamma(x,t)=\\frac1{(4\\pi t)^{n/2}}e^{-\\frac{|x|^2}{4t}},\\qquad u(x,t)=\\int_{\\mathbb R^n}\\Gamma(x-y,t)\\,u_0(y)\\,dy$$ $$\\text{Вывод через Фурье: } \\partial_t\\hat u=-|y|^2\\hat u\\ \\Rightarrow\\ \\hat u=e^{-t|y|^2}\\hat u_0 \\Rightarrow \\text{ обратно по таблице гаусса}$$",
      "de": "$$\\Gamma(x,t)=\\frac1{(4\\pi t)^{n/2}}e^{-\\frac{|x|^2}{4t}},\\qquad u(x,t)=\\int_{\\mathbb R^n}\\Gamma(x-y,t)\\,u_0(y)\\,dy$$ $$\\text{Herleitung mit Fourier: } \\partial_t\\hat u=-|y|^2\\hat u\\ \\Rightarrow\\ \\hat u=e^{-t|y|^2}\\hat u_0 \\Rightarrow \\text{ zurück mit der Gauß-Tabelle}$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>$\\int\\Gamma(x,t)\\,dx=1$ при всех $t$: полное тепло сохраняется, $\\int u(x,t)dx=\\int u_0$.</li> <li>Подставь $n=1$: $\\partial_t\\Gamma=\\partial_x^2\\Gamma=\\Gamma\\cdot\\big(\\frac{x^2}{4t^2}-\\frac1{2t}\\big)$. Обе стороны совпадают. ✓</li> <li>$t\\to0^+$: $\\Gamma(\\cdot,t)\\to\\delta$, поэтому $u\\to u_0$.</li> <li>Принцип максимума: $\\min u_0\\le u\\le\\max u_0$. Решение не может стать горячее самой горячей точки.</li> <li>Дисперсия колокола $2t$: если в ответе ширина растёт как $t$, а не $\\sqrt t$, ошибка.</li> <li>Неоднородное уравнение $\\partial_tu-\\Delta u=f$: $u=\\Gamma*u_0+\\int_0^t\\Gamma(\\cdot,t-s)*f(\\cdot,s)\\,ds$ (Дюамель, см. ниже).</li> </ul>",
      "de": "<ul> <li>$\\int\\Gamma(x,t)\\,dx=1$ für alle $t$: Die gesamte Wärme bleibt erhalten, $\\int u(x,t)dx=\\int u_0$.</li> <li>Setz $n=1$ ein: $\\partial_t\\Gamma=\\partial_x^2\\Gamma=\\Gamma\\cdot\\big(\\frac{x^2}{4t^2}-\\frac1{2t}\\big)$. Beide Seiten stimmen überein. ✓</li> <li>$t\\to0^+$: $\\Gamma(\\cdot,t)\\to\\delta$, deshalb $u\\to u_0$.</li> <li>Maximumprinzip: $\\min u_0\\le u\\le\\max u_0$. Die Lösung kann nicht heißer werden als der heißeste Punkt.</li> <li>Varianz der Glocke $2t$: Wächst die Breite in deiner Antwort wie $t$ statt wie $\\sqrt t$ – Fehler.</li> <li>Inhomogene Gleichung $\\partial_tu-\\Delta u=f$: $u=\\Gamma*u_0+\\int_0^t\\Gamma(\\cdot,t-s)*f(\\cdot,s)\\,ds$ (Duhamel, siehe unten).</li> </ul>"
     }
    }
   ]
  },
  "wave": {
   "emoji": "🌊",
   "ref": "§9",
   "title": {
    "ru": "Волновое уравнение",
    "de": "Wellengleichung"
   },
   "blocks": [
    {
     "type": "vorher",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$c$ = Ausbreitungsgeschwindigkeit der Welle.</li><li>$f$ = Anfangsform (wie das Seil bei $t=0$ aussieht), $g$ = Anfangsgeschwindigkeit (wie schnell sich jeder Punkt bei $t=0$ bewegt).</li><li><b>Charakteristiken</b> $x\\pm ct=\\text{const}$: die Linien, entlang derer Information läuft.</li></ul>",
      "ru": "<ul><li>$c$ — скорость распространения волны.</li><li>$f$ — начальная форма (как выглядит верёвка при $t=0$), $g$ — начальная скорость (как быстро движется каждая точка при $t=0$).</li><li><b>Характеристики</b> $x\\pm ct=\\text{const}$: линии, по которым бежит информация.</li></ul>"
     }
    },
    {
     "type": "einfach",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Zieh ein Seil in der Mitte hoch und lass los: Der Buckel teilt sich in zwei halb so hohe Buckel, einer läuft nach links, einer nach rechts, beide mit Geschwindigkeit $c$ und ohne ihre Form zu ändern. Anders als bei Wärme verschwimmt nichts. Und: Ein Punkt erfährt von einer Störung erst, wenn die Welle ihn erreicht hat – nichts ist schneller als $c$.",
      "ru": "Подними верёвку в середине и отпусти: горб делится на два горба вдвое ниже, один бежит влево, другой вправо, оба со скоростью $c$ и не меняя формы. В отличие от тепла, ничего не расплывается. И ещё: точка узнаёт о возмущении только тогда, когда до неё дошла волна, — ничто не быстрее $c$."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$c=1$, Anfangsform: Dreieck der Höhe 2 um $x=0$ (Breite 2), $g=0$.</b><ol><li>d'Alembert ohne $g$: $u(x,t)=\\frac{f(x+t)+f(x-t)}2$.</li><li>$f(x-t)$ ist das Dreieck, um $t$ nach rechts geschoben, $f(x+t)$ um $t$ nach links. Jedes wird halbiert.</li><li>Bei $t=5$: zwei Dreiecke der Höhe $1$, Spitzen bei $x=5$ und $x=-5$.</li><li>Check in der Mitte: $u(0,5)=\\frac{f(5)+f(-5)}2=0$ – die Welle ist weg ✓.</li></ol>",
      "ru": "<b>$c=1$, начальная форма: треугольник высоты 2 вокруг $x=0$ (ширина 2), $g=0$.</b><ol><li>Даламбер без $g$: $u(x,t)=\\frac{f(x+t)+f(x-t)}2$.</li><li>$f(x-t)$ — треугольник, сдвинутый на $t$ вправо, $f(x+t)$ — на $t$ влево. Каждый делится пополам.</li><li>При $t=5$: два треугольника высоты $1$, вершины в $x=5$ и $x=-5$.</li><li>Проверка в центре: $u(0,5)=\\frac{f(5)+f(-5)}2=0$ — волна ушла ✓.</li></ol>"
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "В 1D начальный профиль делится пополам: одна половина бежит вправо, другая влево, обе со скоростью $c$ и без изменения формы. Значение в $(x,t)$ зависит только от начальных данных на отрезке $[x-ct,x+ct]$ (область зависимости): информация не быстрее $c$. В 3D сигнал от вспышки — тонкая сфера: щёлкнул пальцами, и звук прошёл, без хвоста (принцип Гюйгенса). В 2D хвост есть: камень в пруду, рябь продолжается долго.",
      "de": "In 1D teilt sich das Anfangsprofil in zwei Hälften: Eine läuft nach rechts, die andere nach links, beide mit Geschwindigkeit $c$ und ohne ihre Form zu ändern. Der Wert in $(x,t)$ hängt nur von den Anfangsdaten auf $[x-ct,x+ct]$ ab (Abhängigkeitsgebiet): Information ist nicht schneller als $c$. In 3D ist das Signal eines Blitzes eine dünne Kugelschale: Fingerschnippen – der Ton ist vorbei, ohne Nachhall (Huygens-Prinzip). In 2D gibt es einen Nachhall: Stein im Teich, die Wellen laufen lange nach."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\text{d'Alembert } (n=1):\\quad u(x,t)=\\frac{f(x+ct)+f(x-ct)}2+\\frac1{2c}\\int_{x-ct}^{x+ct}g(s)\\,ds$$ $$\\text{Kirchhoff } (n=3):\\quad u=\\partial_t\\big(t\\,M_{ct}[f]\\big)+t\\,M_{ct}[g],\\quad M_r[h](x)=\\text{среднее } h \\text{ по сфере радиуса } r \\text{ вокруг } x$$ $$\\text{Duhamel:}\\quad \\partial_t^2u-c^2\\Delta u=F,\\ \\text{нулевые данные}\\ \\Rightarrow\\ u(x,t)=\\int_0^t w_s(x,t-s)\\,ds,$$ $$w_s \\text{ — однородное решение с } w_s(\\cdot,0)=0,\\ \\partial_tw_s(\\cdot,0)=F(\\cdot,s)$$",
      "de": "$$\\text{d'Alembert } (n=1):\\quad u(x,t)=\\frac{f(x+ct)+f(x-ct)}2+\\frac1{2c}\\int_{x-ct}^{x+ct}g(s)\\,ds$$ $$\\text{Kirchhoff } (n=3):\\quad u=\\partial_t\\big(t\\,M_{ct}[f]\\big)+t\\,M_{ct}[g],\\quad M_r[h](x)=\\text{Mittelwert von } h \\text{ auf der Sphäre mit Radius } r \\text{ um } x$$ $$\\text{Duhamel:}\\quad \\partial_t^2u-c^2\\Delta u=F,\\ \\text{Nulldaten}\\ \\Rightarrow\\ u(x,t)=\\int_0^t w_s(x,t-s)\\,ds,$$ $$w_s \\text{ – homogene Lösung mit } w_s(\\cdot,0)=0,\\ \\partial_tw_s(\\cdot,0)=F(\\cdot,s)$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>$t=0$ в d'Alembert: $u=f$ ✓, $\\partial_tu=\\frac{c f'-cf'}2+\\frac1{2c}(cg+cg)=g$ ✓.</li> <li>Любая функция вида $F(x-ct)+G(x+ct)$ решает 1D уравнение: проверяется двумя дифференцированиями.</li> <li>Нарисуй характеристики $x\\pm ct=\\text{const}$. Если ответ в точке зависит от данных вне конуса, ошибка.</li> <li>Энергия $E(t)=\\frac12\\int(u_t^2+c^2|\\nabla u|^2)$ сохраняется. Посчитай при $t=0$ и при некотором $t$.</li> <li>Дюамель на пальцах: каждый «удар» силы $F$ в момент $s$ запускает свою свободную волну, все волны складываются. Тот же принцип работает для тепла.</li> </ul>",
      "de": "<ul> <li>$t=0$ in d'Alembert: $u=f$ ✓, $\\partial_tu=\\frac{c f'-cf'}2+\\frac1{2c}(cg+cg)=g$ ✓.</li> <li>Jede Funktion der Form $F(x-ct)+G(x+ct)$ löst die 1D-Gleichung: zweimal ableiten und prüfen.</li> <li>Zeichne die Charakteristiken $x\\pm ct=\\text{const}$. Hängt die Antwort im Punkt von Daten außerhalb des Kegels ab – Fehler.</li> <li>Die Energie $E(t)=\\frac12\\int(u_t^2+c^2|\\nabla u|^2)$ bleibt erhalten. Berechne sie bei $t=0$ und bei einem anderen $t$.</li> <li>Duhamel anschaulich: Jeder „Schlag“ der Kraft $F$ zur Zeit $s$ startet seine eigene freie Welle, und alle Wellen addieren sich. Dasselbe Prinzip funktioniert für die Wärmeleitung.</li> </ul>"
     }
    }
   ]
  },
  "hilbert": {
   "emoji": "🌌",
   "ref": "§10.1",
   "title": {
    "ru": "Гильбертово пространство",
    "de": "Hilbertraum"
   },
   "blocks": [
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Это $\\mathbb R^3$ с длинами и углами, только направлений бесконечно много, и в нём «нет дырок»: последовательность, которая сгущается (Коши), куда-то сходится (полнота). Главные примеры: $\\ell^2$ (последовательности с $\\sum|x_k|^2<\\infty$) и $L^2(\\Omega)$ (функции с конечной энергией).",
      "de": "Das ist $\\mathbb R^3$ mit Längen und Winkeln, nur mit unendlich vielen Richtungen, und es hat „keine Löcher“: Eine Folge, die sich verdichtet (Cauchy), konvergiert irgendwohin (Vollständigkeit). Die wichtigsten Beispiele: $\\ell^2$ (Folgen mit $\\sum|x_k|^2<\\infty$) und $L^2(\\Omega)$ (Funktionen mit endlicher Energie)."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\langle u,v\\rangle_{L^2}=\\int\\overline{u(x)}\\,v(x)\\,dx \\ (\\text{линейно по второму аргументу, как в физике}),\\qquad \\|u\\|=\\sqrt{\\langle u,u\\rangle}$$ $$\\text{Коши–Шварц: } |\\langle u,v\\rangle|\\le\\|u\\|\\,\\|v\\|$$",
      "de": "$$\\langle u,v\\rangle_{L^2}=\\int\\overline{u(x)}\\,v(x)\\,dx \\ (\\text{linear im zweiten Argument, wie in der Physik}),\\qquad \\|u\\|=\\sqrt{\\langle u,u\\rangle}$$ $$\\text{Cauchy–Schwarz: } |\\langle u,v\\rangle|\\le\\|u\\|\\,\\|v\\|$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить, что перед тобой скалярное произведение",
      "de": "Check, ob das ein Skalarprodukt ist"
     },
     "html": {
      "ru": "<ul> <li>Три свойства: линейность (по одному аргументу), эрмитовость $\\langle u,v\\rangle=\\overline{\\langle v,u\\rangle}$, $\\langle u,u\\rangle>0$ при $u\\ne0$.</li> <li>Норма из скалярного произведения ⟺ выполняется тождество параллелограмма $\\|u+v\\|^2+\\|u-v\\|^2=2\\|u\\|^2+2\\|v\\|^2$. Для $\\sup$-нормы оно не выполняется, поэтому $C[0,1]$ с $\\sup$ — не гильбертово.</li> </ul>",
      "de": "<ul> <li>Drei Eigenschaften: Linearität (in einem Argument), Hermitezität $\\langle u,v\\rangle=\\overline{\\langle v,u\\rangle}$, $\\langle u,u\\rangle>0$ für $u\\ne0$.</li> <li>Norm kommt von einem Skalarprodukt ⟺ die Parallelogrammgleichung gilt: $\\|u+v\\|^2+\\|u-v\\|^2=2\\|u\\|^2+2\\|v\\|^2$. Für die $\\sup$-Norm gilt sie nicht, deshalb ist $C[0,1]$ mit $\\sup$ kein Hilbertraum.</li> </ul>"
     }
    }
   ]
  },
  "onb": {
   "emoji": "🔦",
   "ref": "§10.2–10.3",
   "title": {
    "ru": "Ортогональность, проекция, ортонормированный базис",
    "de": "Orthogonalität, Projektion, Orthonormalbasis"
   },
   "blocks": [
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Ближайшая точка подпространства — это проекция, «тень» вектора, и ошибка перпендикулярна подпространству. ОНБ — набор взаимно перпендикулярных единичных векторов, по которым раскладывается всё. Ряд Фурье — разложение функции по ОНБ $\\{e^{ikx}/\\sqrt{2\\pi}\\}$, а коэффициенты — это проекции.",
      "de": "Der nächste Punkt eines Unterraums ist die Projektion, der „Schatten“ des Vektors, und der Fehler steht senkrecht auf dem Unterraum. Eine ONB ist eine Menge paarweise senkrechter Einheitsvektoren, nach denen sich alles entwickeln lässt. Eine Fourierreihe ist die Entwicklung einer Funktion nach der ONB $\\{e^{ikx}/\\sqrt{2\\pi}\\}$, und die Koeffizienten sind Projektionen."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$u=\\sum_k\\langle e_k,u\\rangle\\,e_k,\\qquad \\text{Парсеваль: }\\|u\\|^2=\\sum_k|\\langle e_k,u\\rangle|^2,\\qquad \\text{Бессель (неполная система): }\\sum_k|\\langle e_k,u\\rangle|^2\\le\\|u\\|^2$$",
      "de": "$$u=\\sum_k\\langle e_k,u\\rangle\\,e_k,\\qquad \\text{Parseval: }\\|u\\|^2=\\sum_k|\\langle e_k,u\\rangle|^2,\\qquad \\text{Bessel (unvollständiges System): }\\sum_k|\\langle e_k,u\\rangle|^2\\le\\|u\\|^2$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Нашёл проекцию $Pu$ — проверь, что $u-Pu$ ортогонален каждому базисному вектору подпространства.</li> <li>Парсеваль как контрольная сумма: сумма квадратов коэффициентов должна дать $\\|u\\|^2$. Так же получают $\\sum\\frac1{k^2}=\\frac{\\pi^2}6$.</li> <li>Система полна ⟺ единственный вектор, ортогональный всем $e_k$, — это 0.</li> </ul>",
      "de": "<ul> <li>Du hast die Projektion $Pu$ gefunden – prüf, dass $u-Pu$ auf jedem Basisvektor des Unterraums senkrecht steht.</li> <li>Parseval als Kontrollsumme: Die Summe der Koeffizientenquadrate muss $\\|u\\|^2$ ergeben. So bekommt man auch $\\sum\\frac1{k^2}=\\frac{\\pi^2}6$.</li> <li>Das System ist vollständig ⟺ der einzige Vektor, der auf allen $e_k$ senkrecht steht, ist 0.</li> </ul>"
     }
    }
   ]
  },
  "ops": {
   "emoji": "🎛️",
   "ref": "§11.1",
   "title": {
    "ru": "Ограниченные операторы и сопряжённый",
    "de": "Beschränkte Operatoren und der Adjungierte"
   },
   "blocks": [
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Ограниченный оператор не может «растянуть» вектор больше чем в $\\|T\\|$ раз. Сопряжённый $T^*$ — бесконечномерный аналог сопряжённо-транспонированной матрицы. Самосопряжённый ($T=T^*$) — аналог эрмитовой матрицы: у него вещественные собственные значения, поэтому в КМ наблюдаемые самосопряжённые. Унитарный ($U^*U=UU^*=1$) — аналог поворота: сохраняет длины.",
      "de": "Ein beschränkter Operator kann einen Vektor nicht mehr als um den Faktor $\\|T\\|$ „strecken“. Der Adjungierte $T^*$ ist das unendlichdimensionale Gegenstück zur konjugiert-transponierten Matrix. Selbstadjungiert ($T=T^*$) entspricht einer hermiteschen Matrix: Die Eigenwerte sind reell, deshalb sind Observablen in der QM selbstadjungiert. Unitär ($U^*U=UU^*=1$) entspricht einer Drehung: Längen bleiben erhalten."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\|T\\|=\\sup_{\\|u\\|=1}\\|Tu\\|,\\qquad \\langle Tu,v\\rangle=\\langle u,T^*v\\rangle\\ \\ \\forall u,v$$",
      "de": "$$\\|T\\|=\\sup_{\\|u\\|=1}\\|Tu\\|,\\qquad \\langle Tu,v\\rangle=\\langle u,T^*v\\rangle\\ \\ \\forall u,v$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Для интегрального оператора $(Tu)(x)=\\int k(x,y)u(y)dy$: $T^*$ имеет ядро $\\overline{k(y,x)}$. Самосопряжённость ⟺ $k(x,y)=\\overline{k(y,x)}$.</li> <li>Сдвиг вправо $S(x_1,x_2,\\dots)=(0,x_1,x_2,\\dots)$: $S^*$ — сдвиг влево. $S^*S=1$, но $SS^*\\neq1$. Такого в конечной размерности не бывает: изометрия, но не унитарность.</li> <li>Оценка нормы умножения на $m(x)$: $\\|M_m\\|=\\sup|m|$.</li> </ul>",
      "de": "<ul> <li>Für einen Integraloperator $(Tu)(x)=\\int k(x,y)u(y)dy$: $T^*$ hat den Kern $\\overline{k(y,x)}$. Selbstadjungiert ⟺ $k(x,y)=\\overline{k(y,x)}$.</li> <li>Rechtsshift $S(x_1,x_2,\\dots)=(0,x_1,x_2,\\dots)$: $S^*$ ist der Linksshift. $S^*S=1$, aber $SS^*\\neq1$. Das gibt es in endlicher Dimension nicht: Isometrie, aber nicht unitär.</li> <li>Norm des Multiplikationsoperators mit $m(x)$: $\\|M_m\\|=\\sup|m|$.</li> </ul>"
     }
    }
   ]
  },
  "spec": {
   "emoji": "📊",
   "ref": "§11.2, 12.4",
   "title": {
    "ru": "Спектр",
    "de": "Spektrum"
   },
   "blocks": [
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "В матрицах спектр = собственные значения. В бесконечной размерности $T-\\lambda$ может быть инъективным, но всё равно не иметь ограниченного обратного: «почти собственный вектор» существует, а настоящего нет. Пример: умножение на $x$ в $L^2[0,1]$. Каждое $\\lambda\\in[0,1]$ лежит в спектре (функция, сжатая около $\\lambda$, почти собственная), но ни одной собственной функции нет: «собственная функция» была бы $\\delta_\\lambda$, а её нет в $L^2$. Это непрерывный спектр, как у импульса и координаты в КМ.",
      "de": "Bei Matrizen ist das Spektrum = die Eigenwerte. In unendlicher Dimension kann $T-\\lambda$ injektiv sein und trotzdem keine beschränkte Inverse haben: Ein „Fast-Eigenvektor“ existiert, ein echter nicht. Beispiel: Multiplikation mit $x$ auf $L^2[0,1]$. Jedes $\\lambda\\in[0,1]$ liegt im Spektrum (eine Funktion, die um $\\lambda$ zusammengedrückt ist, ist fast eigen), aber es gibt keine einzige Eigenfunktion: Die „Eigenfunktion“ wäre $\\delta_\\lambda$, und die liegt nicht in $L^2$. Das ist kontinuierliches Spektrum, wie bei Impuls und Ort in der QM."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$\\sigma(T)=\\{\\lambda\\in\\mathbb C:\\ T-\\lambda \\text{ не имеет ограниченного обратного}\\}\\supseteq\\{\\text{собств. значения}\\}$$ $$\\sigma(T) \\text{ компактен},\\ \\sigma(T)\\subseteq\\{|\\lambda|\\le\\|T\\|\\};\\quad T=T^*\\Rightarrow\\sigma(T)\\subseteq\\mathbb R;\\quad U \\text{ унитарен}\\Rightarrow\\sigma(U)\\subseteq\\{|\\lambda|=1\\}$$",
      "de": "$$\\sigma(T)=\\{\\lambda\\in\\mathbb C:\\ T-\\lambda \\text{ hat keine beschränkte Inverse}\\}\\supseteq\\{\\text{Eigenwerte}\\}$$ $$\\sigma(T) \\text{ kompakt},\\ \\sigma(T)\\subseteq\\{|\\lambda|\\le\\|T\\|\\};\\quad T=T^*\\Rightarrow\\sigma(T)\\subseteq\\mathbb R;\\quad U \\text{ unitär}\\Rightarrow\\sigma(U)\\subseteq\\{|\\lambda|=1\\}$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Для оператора умножения $M_m$: $\\sigma(M_m)$ = существенное множество значений $m$. Нарисуй график $m$ и посмотри на его область значений.</li> <li>Чтобы показать $\\lambda\\in\\sigma$: построй последовательность $u_k$, $\\|u_k\\|=1$, $\\|(T-\\lambda)u_k\\|\\to0$ (почти собственные векторы).</li> <li>Чтобы показать $\\lambda\\notin\\sigma$: предъяви обратный и оцени его норму.</li> </ul>",
      "de": "<ul> <li>Für den Multiplikationsoperator $M_m$: $\\sigma(M_m)$ = wesentliches Bild von $m$. Zeichne den Graphen von $m$ und schau auf seinen Wertebereich.</li> <li>Um $\\lambda\\in\\sigma$ zu zeigen: Bau eine Folge $u_k$ mit $\\|u_k\\|=1$, $\\|(T-\\lambda)u_k\\|\\to0$ (Fast-Eigenvektoren).</li> <li>Um $\\lambda\\notin\\sigma$ zu zeigen: Gib die Inverse an und schätz ihre Norm ab.</li> </ul>"
     }
    }
   ]
  },
  "spthm": {
   "emoji": "🪄",
   "ref": "§11.3–11.7, 12.6",
   "title": {
    "ru": "Функциональное исчисление и спектральная теорема",
    "de": "Funktionalkalkül und Spektralsatz"
   },
   "blocks": [
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Эрмитову матрицу можно повернуть так, что она станет диагональной, и тогда $f(A)$ — просто $f$, применённая к каждому числу на диагонали. Спектральная теорема говорит, что то же самое верно для самосопряжённых операторов, только «диагональная матрица» становится оператором умножения на функцию. Для импульса $P$ «поворот» — это преобразование Фурье: оно превращает $P$ в умножение на $y$.",
      "de": "Eine hermitesche Matrix kann man so drehen, dass sie diagonal wird, und dann ist $f(A)$ einfach $f$, angewendet auf jede Zahl auf der Diagonale. Der Spektralsatz sagt, dass dasselbe für selbstadjungierte Operatoren gilt, nur wird die „Diagonalmatrix“ zu einem Multiplikationsoperator mit einer Funktion. Für den Impuls $P$ ist die „Drehung“ die Fouriertransformation: Sie macht aus $P$ die Multiplikation mit $y$."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$A=A^*\\ \\Rightarrow\\ A=U^{-1}M_mU\\ (\\text{унитарно эквивалентен умножению}),\\qquad f(A)=U^{-1}M_{f\\circ m}U$$ $$T \\text{ компактен и симметричен}:\\ Tu=\\sum_k\\lambda_k\\langle e_k,u\\rangle e_k,\\ \\lambda_k\\in\\mathbb R,\\ \\lambda_k\\to0$$",
      "de": "$$A=A^*\\ \\Rightarrow\\ A=U^{-1}M_mU\\ (\\text{unitär äquivalent zu einer Multiplikation}),\\qquad f(A)=U^{-1}M_{f\\circ m}U$$ $$T \\text{ kompakt und symmetrisch}:\\ Tu=\\sum_k\\lambda_k\\langle e_k,u\\rangle e_k,\\ \\lambda_k\\in\\mathbb R,\\ \\lambda_k\\to0$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>$\\sigma(f(A))=f(\\sigma(A))$ (теорема об отображении спектра). Посчитай спектр двумя путями.</li> <li>$\\|f(A)\\|=\\sup_{\\sigma(A)}|f|$ для самосопряжённого $A$.</li> <li>Компактный симметричный: собственные векторы ортогональны, собственные значения накапливаются только в 0. Это то, что стоит за модами струны в части C.</li> </ul>",
      "de": "<ul> <li>$\\sigma(f(A))=f(\\sigma(A))$ (spektraler Abbildungssatz). Berechne das Spektrum auf zwei Wegen.</li> <li>$\\|f(A)\\|=\\sup_{\\sigma(A)}|f|$ für selbstadjungiertes $A$.</li> <li>Kompakt und symmetrisch: Die Eigenvektoren sind orthogonal, die Eigenwerte häufen sich nur bei 0. Genau das steckt hinter den Saitenmoden aus Teil C.</li> </ul>"
     }
    }
   ]
  },
  "qm": {
   "emoji": "🐈‍⬛",
   "ref": "§10.5, 11.6, 11.8, 12.7–12.8",
   "title": {
    "ru": "Квантовая механика: состояния, неопределённость, плотность",
    "de": "Quantenmechanik: Zustände, Unschärfe, Dichtematrix"
   },
   "blocks": [
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Состояние — единичный вектор $\\psi$. Наблюдаемая — самосопряжённый оператор $A$, возможные результаты измерения — его спектр. Среднее значение: $\\langle\\psi,A\\psi\\rangle$. Если два оператора не коммутируют, то их нельзя одновременно сделать «чёткими»: произведение разбросов ограничено снизу. Матрица плотности описывает статистическую смесь состояний. Эволюция во времени — поворот (унитарный оператор), длина вектора сохраняется, вероятности в сумме дают 1.",
      "de": "Ein Zustand ist ein Einheitsvektor $\\psi$. Eine Observable ist ein selbstadjungierter Operator $A$, die möglichen Messergebnisse sind sein Spektrum. Erwartungswert: $\\langle\\psi,A\\psi\\rangle$. Kommutieren zwei Operatoren nicht, kann man sie nicht gleichzeitig „scharf“ machen: Das Produkt der Streuungen ist nach unten beschränkt. Die Dichtematrix beschreibt ein statistisches Gemisch von Zuständen. Die Zeitentwicklung ist eine Drehung (unitärer Operator): Die Länge des Vektors bleibt erhalten, die Wahrscheinlichkeiten summieren sich zu 1."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$E_\\psi(A)=\\langle\\psi,A\\psi\\rangle,\\quad V_\\psi(A)=\\|(A-E_\\psi(A))\\psi\\|^2,\\quad V_\\psi(A)V_\\psi(B)\\ge\\tfrac14|\\langle\\psi,[A,B]\\psi\\rangle|^2$$ $$[Q,P]=i\\hbar\\ \\Rightarrow\\ \\Delta Q\\,\\Delta P\\ge\\tfrac\\hbar2;\\qquad \\rho\\ge0,\\ \\operatorname{tr}\\rho=1,\\ E_\\rho(A)=\\operatorname{tr}(\\rho A);\\qquad \\psi(t)=e^{-itH/\\hbar}\\psi_0$$",
      "de": "$$E_\\psi(A)=\\langle\\psi,A\\psi\\rangle,\\quad V_\\psi(A)=\\|(A-E_\\psi(A))\\psi\\|^2,\\quad V_\\psi(A)V_\\psi(B)\\ge\\tfrac14|\\langle\\psi,[A,B]\\psi\\rangle|^2$$ $$[Q,P]=i\\hbar\\ \\Rightarrow\\ \\Delta Q\\,\\Delta P\\ge\\tfrac\\hbar2;\\qquad \\rho\\ge0,\\ \\operatorname{tr}\\rho=1,\\ E_\\rho(A)=\\operatorname{tr}(\\rho A);\\qquad \\psi(t)=e^{-itH/\\hbar}\\psi_0$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить",
      "de": "Check"
     },
     "html": {
      "ru": "<ul> <li>Гауссов пакет даёт в неопределённости равенство. Проверь на нём свою выкладку.</li> <li>$\\rho$ чистое состояние ⟺ $\\rho^2=\\rho$ ⟺ $\\operatorname{tr}\\rho^2=1$. Смесь: $\\operatorname{tr}\\rho^2<1$.</li> <li>Собственные значения $\\rho$ — вероятности: все в $[0,1]$, сумма 1.</li> <li>Теорема Стоуна: $U(t)=e^{-itA}$ — унитарная группа ⟺ $A$ самосопряжён. Проверка: $\\|U(t)\\psi\\|=\\|\\psi\\|$ при всех $t$.</li> </ul>",
      "de": "<ul> <li>Ein Gaußsches Wellenpaket liefert in der Unschärferelation Gleichheit. Teste deine Rechnung daran.</li> <li>$\\rho$ reiner Zustand ⟺ $\\rho^2=\\rho$ ⟺ $\\operatorname{tr}\\rho^2=1$. Gemisch: $\\operatorname{tr}\\rho^2<1$.</li> <li>Die Eigenwerte von $\\rho$ sind Wahrscheinlichkeiten: alle in $[0,1]$, Summe 1.</li> <li>Satz von Stone: $U(t)=e^{-itA}$ ist eine unitäre Gruppe ⟺ $A$ ist selbstadjungiert. Check: $\\|U(t)\\psi\\|=\\|\\psi\\|$ für alle $t$.</li> </ul>"
     }
    }
   ]
  },
  "unb": {
   "emoji": "♾️",
   "ref": "§12.1–12.5",
   "title": {
    "ru": "Неограниченные операторы",
    "de": "Unbeschränkte Operatoren"
   },
   "blocks": [
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "$\\frac{d}{dx}\\sin(kx)=k\\cos(kx)$: при той же норме функция растягивается в $k$ раз, а $k$ может быть каким угодно большим. Значит, у производной нет конечной нормы, и она определена не на всём пространстве, а только на «достаточно гладких» функциях — области определения $D(A)$. Тонкость: $A$ может быть симметричным ($\\langle Au,v\\rangle=\\langle u,Av\\rangle$ на $D(A)$), но не самосопряжённым, если $D(A^*)$ больше, чем $D(A)$. Самосопряжённость определяют граничные условия.",
      "de": "$\\frac{d}{dx}\\sin(kx)=k\\cos(kx)$: Bei gleicher Norm wird die Funktion um den Faktor $k$ gestreckt, und $k$ kann beliebig groß sein. Also hat die Ableitung keine endliche Norm, und sie ist nicht auf dem ganzen Raum definiert, sondern nur auf „genügend glatten“ Funktionen – dem Definitionsbereich $D(A)$. Die Feinheit: $A$ kann symmetrisch sein ($\\langle Au,v\\rangle=\\langle u,Av\\rangle$ auf $D(A)$) und trotzdem nicht selbstadjungiert, wenn $D(A^*)$ größer ist als $D(A)$. Über Selbstadjungiertheit entscheiden die Randbedingungen."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$A \\text{ самосопряжён} \\iff A \\text{ симметричен и } D(A^*)=D(A);\\qquad P=-i\\tfrac{d}{dx},\\quad Q=M_x$$",
      "de": "$$A \\text{ selbstadjungiert} \\iff A \\text{ symmetrisch und } D(A^*)=D(A);\\qquad P=-i\\tfrac{d}{dx},\\quad Q=M_x$$"
     }
    },
    {
     "type": "check",
     "label": {
      "ru": "Как проверить симметричность",
      "de": "Check der Symmetrie"
     },
     "html": {
      "ru": "<ul> <li>Посчитай $\\langle Pu,v\\rangle-\\langle u,Pv\\rangle$ интегрированием по частям. На отрезке $[0,1]$ остаётся граничный член $i\\,[\\bar u v]_0^1$. Он исчезает только при подходящих граничных условиях (например, $u(1)=e^{i\\theta}u(0)$ для всех функций из $D$).</li> <li>На всём $\\mathbb R$ граничных членов нет, и $P$ самосопряжён на $H^1(\\mathbb R)$. Фурье превращает его в умножение на $y$.</li> <li>Почему именно неограниченные: $[Q,P]=i$ невозможно реализовать ограниченными операторами (в конечной размерности это видно по следу: $\\operatorname{tr}[Q,P]=0$, а $\\operatorname{tr}(i\\cdot1)=i\\,n$; для ограниченных операторов это теорема Винтнера–Виландта).</li> </ul>",
      "de": "<ul> <li>Berechne $\\langle Pu,v\\rangle-\\langle u,Pv\\rangle$ mit partieller Integration. Auf $[0,1]$ bleibt der Randterm $i\\,[\\bar u v]_0^1$. Er verschwindet nur bei passenden Randbedingungen (z. B. $u(1)=e^{i\\theta}u(0)$ für alle Funktionen aus $D$).</li> <li>Auf ganz $\\mathbb R$ gibt es keine Randterme, und $P$ ist auf $H^1(\\mathbb R)$ selbstadjungiert. Fourier macht daraus die Multiplikation mit $y$.</li> <li>Warum gerade unbeschränkt: $[Q,P]=i$ lässt sich mit beschränkten Operatoren nicht realisieren (in endlicher Dimension sieht man das an der Spur: $\\operatorname{tr}[Q,P]=0$, aber $\\operatorname{tr}(i\\cdot1)=i\\,n$; für beschränkte Operatoren ist das der Satz von Wintner–Wielandt).</li> </ul>"
     }
    }
   ]
  }
 }
};
