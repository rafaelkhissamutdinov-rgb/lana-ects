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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$z=x+iy$ – komplexe Zahl: $x=\\operatorname{Re}z$, $y=\\operatorname{Im}z$, $i^2=-1$. Geometrisch ein Punkt $(x,y)$ der Ebene.</li><li>$f=u+iv$ – $u(x,y)$ ist der Realteil, $v(x,y)$ der Imaginärteil der Funktion; beide sind reelle Funktionen von zwei Variablen.</li><li>$u_x=\\frac{\\partial u}{\\partial x}$ – partielle Ableitung nach $x$, dabei $y$ festhalten; genauso $u_y$, $v_x$, $v_y$.</li><li><b>holomorph</b> – in jedem Punkt einer offenen Menge komplex differenzierbar: $f'(z)=\\lim_{h\\to0}\\frac{f(z+h)-f(z)}{h}$ existiert, egal aus welcher Richtung $h$ gegen $0$ geht.</li><li>$\\bar z=x-iy$ – komplex konjugiert; $\\frac{\\partial f}{\\partial\\bar z}=0$ heißt: $f$ hängt nur von $z$ ab, nicht von $\\bar z$.</li><li>$C^1$ – stetig differenzierbar.</li></ul>",
      "ru": "<ul><li>$z=x+iy$ – комплексное число: $x=\\operatorname{Re}z$, $y=\\operatorname{Im}z$, $i^2=-1$. Геометрически – точка $(x,y)$ на плоскости.</li><li>$f=u+iv$ – $u(x,y)$ вещественная часть, $v(x,y)$ мнимая часть функции; обе – вещественные функции двух переменных.</li><li>$u_x=\\frac{\\partial u}{\\partial x}$ – частная производная по $x$ при фиксированном $y$; так же $u_y$, $v_x$, $v_y$.</li><li><b>голоморфная</b> – комплексно дифференцируемая в каждой точке открытого множества: $f'(z)=\\lim_{h\\to0}\\frac{f(z+h)-f(z)}{h}$ существует, с какой бы стороны $h$ ни стремилось к $0$.</li><li>$\\bar z=x-iy$ – комплексное сопряжение; $\\frac{\\partial f}{\\partial\\bar z}=0$ значит: $f$ зависит только от $z$, а не от $\\bar z$.</li><li>$C^1$ – непрерывно дифференцируемая.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Komplex differenzierbar ist viel stärker als reell differenzierbar, weil der Grenzwert für <b>jede Richtung</b> von $h$ gleich sein muss. Für reelles $h$ erhält man $f'=u_x+iv_x$, für rein imaginäres $h=ik$ erhält man $f'=v_y-iu_y$. Gleichsetzen von Real- und Imaginärteil ergibt genau die Cauchy-Riemann-Gleichungen. Geometrisch ist $f'(z)$ eine komplexe Zahl, und Multiplikation mit ihr ist eine Drehung mit Streckung. Deshalb ist eine holomorphe Abbildung dort, wo $f'\\neq0$, winkeltreu. Folge der Gleichungen: $u$ und $v$ sind automatisch harmonisch, $\\Delta u=\\Delta v=0$.",
      "ru": "Комплексная дифференцируемость намного сильнее вещественной: предел должен быть одинаковым для <b>любого направления</b> $h$. Для вещественного $h$ получаем $f'=u_x+iv_x$, для чисто мнимого $h=ik$ – $f'=v_y-iu_y$. Приравниваем вещественные и мнимые части и получаем ровно уравнения Коши–Римана. Геометрически $f'(z)$ – комплексное число, а умножение на него – поворот с растяжением. Поэтому голоморфное отображение там, где $f'\\neq0$, сохраняет углы (конформно). Следствие уравнений: $u$ и $v$ автоматически гармонические, $\\Delta u=\\Delta v=0$."
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
      "ru": "Вещественная производная говорит «растяни в $f'$ раз». Комплексная производная — это комплексное число, а умножение на комплексное число означает <b>поворот + растяжение</b>. Значит, голоморфная функция вблизи каждой точки, где $f'\\neq0$, выглядит как поворот с растяжением: маленькие квадратики переходят в маленькие квадратики, а не в параллелограммы. Это сильное ограничение, поэтому голоморфных функций «мало» и они очень хорошо себя ведут.",
      "de": "Die reelle Ableitung sagt „streck um den Faktor $f'$“. Die komplexe Ableitung ist eine komplexe Zahl, und Multiplizieren mit einer komplexen Zahl heißt <b>Drehen + Strecken</b>. Eine holomorphe Funktion sieht also in der Nähe jedes Punkts mit $f'\\neq0$ wie eine Drehstreckung aus: Kleine Quadrate werden auf kleine Quadrate abgebildet, nicht auf Parallelogramme. Das ist eine starke Einschränkung – deshalb gibt es „wenige“ holomorphe Funktionen, und sie verhalten sich sehr brav."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Aufgaben: (1) „Ist $f$ holomorph?“ – $u$, $v$ ausrechnen, die vier Ableitungen bilden, CR prüfen. (2) „Finde $v$ zu gegebenem $u$“ – $v_y=u_x$ nach $y$ integrieren, die Integrationskonstante $c(x)$ mit $v_x=-u_y$ bestimmen. (3) Zeigen, dass $u$ harmonisch ist. Fallen: Vorzeichen in $u_y=-v_x$. $|z|^2$ erfüllt CR nur im Punkt $z=0$, ist also nirgends holomorph; $\\bar z$ und $\\operatorname{Re}z$ erfüllen CR nirgends.",
      "ru": "Задачи: (1) «Голоморфна ли $f$?» – найти $u$, $v$, взять четыре производные, проверить КР. (2) «Найди $v$ по данному $u$» – проинтегрировать $v_y=u_x$ по $y$, константу интегрирования $c(x)$ найти из $v_x=-u_y$. (3) Показать, что $u$ гармоническая. Ловушки: знак в $u_y=-v_x$. $|z|^2$ удовлетворяет КР только в точке $z=0$, значит нигде не голоморфна; $\\bar z$ и $\\operatorname{Re}z$ не удовлетворяют КР нигде."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\gamma:[a,b]\\to\\mathbb C$ – Weg: zur Zeit $t$ ist man im Punkt $\\gamma(t)$.</li><li>$\\gamma'(t)$ – Ableitung nach $t$: Richtung und Tempo, mit dem der Weg durchlaufen wird.</li><li>$dz=\\gamma'(t)\\,dt$ – so wird das komplexe $dz$ zu einem reellen $dt$.</li><li>$\\oint$ – Integral über einen geschlossenen Weg, $\\gamma(a)=\\gamma(b)$.</li><li>$|z-a|=r$ – Kreis um $a$ mit Radius $r$, gegen den Uhrzeigersinn: $z=a+re^{it}$, $t\\in[0,2\\pi]$.</li><li>$n$ – ganze Zahl.</li></ul>",
      "ru": "<ul><li>$\\gamma:[a,b]\\to\\mathbb C$ – путь: в момент $t$ мы в точке $\\gamma(t)$.</li><li>$\\gamma'(t)$ – производная по $t$: направление и скорость прохождения пути.</li><li>$dz=\\gamma'(t)\\,dt$ – так комплексное $dz$ превращается в вещественное $dt$.</li><li>$\\oint$ – интеграл по замкнутому пути, $\\gamma(a)=\\gamma(b)$.</li><li>$|z-a|=r$ – окружность с центром $a$ радиуса $r$, против часовой стрелки: $z=a+re^{it}$, $t\\in[0,2\\pi]$.</li><li>$n$ – целое число.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein Wegintegral ist nach dem Einsetzen von $z=\\gamma(t)$ und $dz=\\gamma'(t)\\,dt$ ein gewöhnliches Integral über $t$, nur mit komplexem Wert. Die wichtigste Formel: Für alle ganzen $n\\neq-1$ hat $(z-a)^n$ die Stammfunktion $\\frac{(z-a)^{n+1}}{n+1}$, und das Integral einer Ableitung über einen geschlossenen Weg ist null. Nur $\\frac1{z-a}$ hat auf dem Kreis keine Stammfunktion, und ihr Integral ist $2\\pi i$. Darauf bauen Integralformel und Residuensatz auf. Nützliche Abschätzung: $\\big|\\int_\\gamma f\\,dz\\big|\\le L(\\gamma)\\cdot\\max_\\gamma|f|$ mit der Weglänge $L(\\gamma)$.",
      "ru": "После подстановки $z=\\gamma(t)$ и $dz=\\gamma'(t)\\,dt$ интеграл по пути становится обычным интегралом по $t$, только с комплексным значением. Главная формула: для всех целых $n\\neq-1$ у $(z-a)^n$ есть первообразная $\\frac{(z-a)^{n+1}}{n+1}$, а интеграл от производной по замкнутому пути равен нулю. Только у $\\frac1{z-a}$ на окружности нет первообразной, и её интеграл равен $2\\pi i$. На этом стоят интегральная формула и теорема о вычетах. Полезная оценка: $\\big|\\int_\\gamma f\\,dz\\big|\\le L(\\gamma)\\cdot\\max_\\gamma|f|$, где $L(\\gamma)$ – длина пути."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Aufgaben: ein Integral über eine Strecke oder einen Kreis direkt parametrisieren und ausrechnen; zeigen, dass $\\int_\\gamma\\bar z\\,dz$ vom Weg abhängt (auf dem Einheitskreis ist es $2\\pi i$, nicht $0$). Check: Hat $f$ eine Stammfunktion $F$, ist das Ergebnis $F(\\text{Ende})-F(\\text{Anfang})$. Fallen: $\\gamma'(t)$ vergessen; Umlauf im Uhrzeigersinn gibt ein Minuszeichen.",
      "ru": "Задачи: параметризовать и посчитать интеграл по отрезку или окружности; показать, что $\\int_\\gamma\\bar z\\,dz$ зависит от пути (на единичной окружности он равен $2\\pi i$, а не $0$). Проверка: если у $f$ есть первообразная $F$, ответ равен $F(\\text{конец})-F(\\text{начало})$. Ловушки: забыть $\\gamma'(t)$; обход по часовой стрелке даёт знак минус."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\Omega$ – offene Menge in $\\mathbb C$, auf der $f$ holomorph ist.</li><li><b>einfach zusammenhängend</b> – $\\Omega$ hat keine Löcher: Jede geschlossene Kurve in $\\Omega$ lässt sich innerhalb von $\\Omega$ auf einen Punkt zusammenziehen. Kreisscheibe ja, Kreisring nein.</li><li>$\\gamma$ – geschlossener Weg in $\\Omega$.</li><li><b>Singularität</b> – Punkt, an dem $f$ nicht holomorph ist, meist eine Nullstelle des Nenners.</li></ul>",
      "ru": "<ul><li>$\\Omega$ – открытое множество в $\\mathbb C$, где $f$ голоморфна.</li><li><b>односвязная</b> – у $\\Omega$ нет дыр: любую замкнутую кривую в $\\Omega$ можно стянуть в точку, не выходя из $\\Omega$. Круг – да, кольцо – нет.</li><li>$\\gamma$ – замкнутый путь в $\\Omega$.</li><li><b>особая точка</b> – точка, где $f$ не голоморфна, обычно ноль знаменателя.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ist $f$ auf der Kurve und überall in dem von ihr umschlossenen Gebiet holomorph, ist $\\oint_\\gamma f\\,dz=0$. Beweisidee mit dem Satz von Green: $\\oint f\\,dz=\\oint(u\\,dx-v\\,dy)+i\\oint(v\\,dx+u\\,dy)$. Green macht daraus Flächenintegrale über $-(v_x+u_y)$ und $u_x-v_y$, und beide sind nach Cauchy-Riemann null. Folgen: Integrale hängen nur von Anfangs- und Endpunkt ab, und man darf einen Weg verformen, ohne dass sich das Integral ändert, solange man dabei keine Singularität überstreicht.",
      "ru": "Если $f$ голоморфна на кривой и всюду в ограниченной ею области, то $\\oint_\\gamma f\\,dz=0$. Идея доказательства через формулу Грина: $\\oint f\\,dz=\\oint(u\\,dx-v\\,dy)+i\\oint(v\\,dx+u\\,dy)$. Грин превращает это в интегралы по площади от $-(v_x+u_y)$ и $u_x-v_y$, и оба равны нулю по Коши–Риману. Следствия: интеграл зависит только от начала и конца пути, и путь можно деформировать без изменения интеграла, пока при этом не задеваем особых точек."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\oint_{|z|=1}\\frac{1}{z-3}\\,dz=?$</b><ol><li>Wo ist $f$ nicht definiert? Nenner $z-3=0$ → bei $z=3$.</li><li>Liegt $z=3$ im Kreis $|z|\\le1$? Abstand von 0 ist $3>1$ → <b>nein</b>, draußen.</li><li>Innen keine Singularität → Cauchy → Antwort $0$. Nichts zu rechnen.</li></ol><b>Achtung:</b> Bei $\\oint_{|z|=5}\\frac{1}{z-3}\\,dz$ liegt $z=3$ innen ($3<5$). Dann gilt der Satz nicht, und tatsächlich kommt $2\\pi i$ heraus (siehe Residuen).",
      "ru": "<b>$\\oint_{|z|=1}\\frac{1}{z-3}\\,dz=?$</b><ol><li>Где $f$ не определена? Знаменатель $z-3=0$ → в $z=3$.</li><li>Лежит ли $z=3$ в круге $|z|\\le1$? Расстояние до 0 равно $3>1$ → <b>нет</b>, снаружи.</li><li>Внутри особых точек нет → Коши → ответ $0$. Считать нечего.</li></ol><b>Внимание:</b> у $\\oint_{|z|=5}\\frac{1}{z-3}\\,dz$ точка $z=3$ внутри ($3<5$). Тогда теорема не работает, и действительно получается $2\\pi i$ (см. вычеты)."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Если внутри замкнутой петли у функции нет ни одной «дырки» (особенности), то интеграл по петле равен нулю. Как работа консервативной (безвихревой) силы по замкнутому пути. Петлю можно сколько угодно деформировать, не задевая особенностей, и интеграл не изменится.",
      "de": "Hat die Funktion innerhalb einer geschlossenen Schleife kein einziges „Loch“ (keine Singularität), dann ist das Integral über die Schleife null. Wie die Arbeit einer konservativen (wirbelfreien) Kraft entlang eines geschlossenen Wegs. Die Schleife darf man beliebig verformen, solange man keine Singularität berührt – das Integral ändert sich nicht."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "„Berechne $\\oint_\\gamma f\\,dz$“. Erster Schritt immer: Singularitäten suchen und prüfen, ob sie innerhalb von $\\gamma$ liegen. Liegt keine innen, ist die Antwort $0$ – mit Begründung: „$f$ ist holomorph auf einem einfach zusammenhängenden Gebiet, das $\\gamma$ enthält.“ Fallen: den Satz anwenden, obwohl eine Singularität innen liegt, oder bei Funktionen wie $\\bar z$, die nicht holomorph sind.",
      "ru": "«Посчитай $\\oint_\\gamma f\\,dz$». Первый шаг всегда: найти особые точки и проверить, лежат ли они внутри $\\gamma$. Если внутри нет ни одной, ответ $0$ – с обоснованием: «$f$ голоморфна в односвязной области, содержащей $\\gamma$». Ловушки: применить теорему, хотя внутри есть особая точка, или к функциям вроде $\\bar z$, которые не голоморфны."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$a$ – Punkt innerhalb von $\\gamma$, an dem man $f$ (oder eine Ableitung) wissen will.</li><li>$\\gamma$ – geschlossener Weg, der $a$ einmal gegen den Uhrzeigersinn umläuft; $f$ ist auf und innerhalb von $\\gamma$ holomorph.</li><li>$f^{(n)}$ – $n$-te Ableitung; $n!=1\\cdot2\\cdots n$, $0!=1$.</li><li>$\\frac1{2\\pi i}$ – Normierung, weil $\\oint\\frac{dz}{z-a}=2\\pi i$.</li></ul>",
      "ru": "<ul><li>$a$ – точка внутри $\\gamma$, в которой хотим знать $f$ (или производную).</li><li>$\\gamma$ – замкнутый путь, обходящий $a$ один раз против часовой стрелки; $f$ голоморфна на $\\gamma$ и внутри.</li><li>$f^{(n)}$ – $n$-я производная; $n!=1\\cdot2\\cdots n$, $0!=1$.</li><li>$\\frac1{2\\pi i}$ – нормировка, так как $\\oint\\frac{dz}{z-a}=2\\pi i$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Die Randwerte bestimmen $f$ im Inneren vollständig. Begründung: $\\frac{f(z)}{z-a}=\\frac{f(z)-f(a)}{z-a}+\\frac{f(a)}{z-a}$. Der erste Summand ist bei $a$ hebbar, also holomorph, und integriert nach Cauchy zu $0$. Der zweite gibt $f(a)\\cdot2\\pi i$. Leitet man die Formel nach $a$ ab, erhält man die Formel für $f^{(n)}$. Folge: Jede holomorphe Funktion ist automatisch beliebig oft differenzierbar. Praktisch rechnet man damit Integrale $\\oint\\frac{g(z)}{(z-a)^m}dz$ mit holomorphem $g$ aus, ohne zu integrieren.",
      "ru": "Значения на границе полностью определяют $f$ внутри. Обоснование: $\\frac{f(z)}{z-a}=\\frac{f(z)-f(a)}{z-a}+\\frac{f(a)}{z-a}$. Первое слагаемое в $a$ устранимо, значит голоморфно, и по Коши даёт $0$. Второе даёт $f(a)\\cdot2\\pi i$. Если продифференцировать формулу по $a$, получится формула для $f^{(n)}$. Следствие: любая голоморфная функция автоматически бесконечно дифференцируема. На практике так считают интегралы $\\oint\\frac{g(z)}{(z-a)^m}dz$ с голоморфной $g$, не интегрируя."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$\\oint\\frac{g(z)}{(z-a)^m}dz$ auswerten. Schritte: $g$ und $m$ erkennen, prüfen, dass $a$ innen liegt und $g$ innen keine Singularität hat, dann $\\frac{2\\pi i}{(m-1)!}g^{(m-1)}(a)$. Fallen: Index verschieben – zur $n$-ten Ableitung gehört $(z-a)^{n+1}$ im Nenner. Liegen zwei Nullstellen des Nenners innen, Partialbrüche bilden oder den Residuensatz nehmen.",
      "ru": "Вычислить $\\oint\\frac{g(z)}{(z-a)^m}dz$. Шаги: распознать $g$ и $m$, проверить, что $a$ внутри и у $g$ внутри нет особых точек, затем $\\frac{2\\pi i}{(m-1)!}g^{(m-1)}(a)$. Ловушки: сдвиг индекса – $n$-й производной соответствует $(z-a)^{n+1}$ в знаменателе. Если внутри два нуля знаменателя – разложить на простые дроби или взять теорему о вычетах."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$a_n$ – Koeffizienten der Reihe $\\sum a_n(z-z_0)^n$, $z_0$ – Entwicklungspunkt.</li><li>$R$ – Konvergenzradius: Für $|z-z_0|\\lt R$ konvergiert die Reihe, für $|z-z_0|\\gt R$ divergiert sie.</li><li>$\\limsup$ – der größte Häufungswert einer Folge.</li><li>$\\operatorname{dist}$ – Abstand.</li><li><b>nicht hebbare Singularität</b> – Pol oder wesentliche Singularität (siehe „Singularitäten“).</li></ul>",
      "ru": "<ul><li>$a_n$ – коэффициенты ряда $\\sum a_n(z-z_0)^n$, $z_0$ – точка разложения.</li><li>$R$ – радиус сходимости: при $|z-z_0|\\lt R$ ряд сходится, при $|z-z_0|\\gt R$ расходится.</li><li>$\\limsup$ – наибольшая предельная точка последовательности.</li><li>$\\operatorname{dist}$ – расстояние.</li><li><b>неустранимая особая точка</b> – полюс или существенная особенность (см. «Особые точки»).</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Zwei Aussagen. Erstens: Jede holomorphe Funktion lässt sich um jeden Punkt $z_0$ als Potenzreihe schreiben. Das folgt aus der Integralformel, indem man $\\frac1{z-a}$ als geometrische Reihe entwickelt. Zweitens: Die Reihe konvergiert in der größten Kreisscheibe um $z_0$, in der $f$ holomorph ist. Also ist $R$ der Abstand zur nächsten nicht hebbaren Singularität, auch wenn sie nicht auf der reellen Achse liegt. Innerhalb konvergiert die Reihe absolut, außerhalb divergiert sie, auf dem Rand muss man einzeln prüfen.",
      "ru": "Два утверждения. Первое: любую голоморфную функцию можно записать степенным рядом вокруг любой точки $z_0$. Это следует из интегральной формулы, если разложить $\\frac1{z-a}$ в геометрический ряд. Второе: ряд сходится в наибольшем круге вокруг $z_0$, где $f$ голоморфна. Значит, $R$ – расстояние до ближайшей неустранимой особой точки, даже если она не на вещественной оси. Внутри ряд сходится абсолютно, снаружи расходится, на границе надо проверять отдельно."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\frac1{1-z}=1+z+z^2+z^3+\\dots$</b><ol><li>Wo ist die Funktion nicht definiert? Bei $z=1$. Abstand zu 0: $1$ → $R=1$.</li><li>Test mit $z=\\frac12$: Reihe $1+\\frac12+\\frac14+\\dots=2$, Funktion $\\frac1{1-1/2}=2$ ✓.</li><li>Test mit $z=2$: Reihe $1+2+4+\\dots$ explodiert, obwohl $\\frac1{1-2}=-1$ existiert. Außerhalb von $R$ hilft die Reihe nicht.</li></ol><b>Wichtig:</b> $\\frac1{1+x^2}$ ist auf ganz $\\mathbb R$ harmlos, aber hat Pole bei $\\pm i$ (Abstand 1). Darum ist auch hier $R=1$.",
      "ru": "<b>$\\frac1{1-z}=1+z+z^2+z^3+\\dots$</b><ol><li>Где функция не определена? В $z=1$. Расстояние до 0: $1$ → $R=1$.</li><li>Проверка при $z=\\frac12$: ряд $1+\\frac12+\\frac14+\\dots=2$, функция $\\frac1{1-1/2}=2$ ✓.</li><li>Проверка при $z=2$: ряд $1+2+4+\\dots$ взрывается, хотя $\\frac1{1-2}=-1$ существует. За пределами $R$ ряд не помогает.</li></ol><b>Важно:</b> $\\frac1{1+x^2}$ на всей $\\mathbb R$ безобидна, но у неё есть полюсы в $\\pm i$ (расстояние 1). Поэтому и здесь $R=1$."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Голоморфная функция везде раскладывается в степенной ряд, и ряд сходится в самом большом круге, который помещается до ближайшей неустранимой особенности. Именно поэтому ряд для $\\frac1{1+x^2}$ на вещественной оси сходится только при $|x|<1$, хотя сама функция на $\\mathbb R$ гладкая: в комплексной плоскости в точках $\\pm i$ сидят полюсы на расстоянии 1.",
      "de": "Eine holomorphe Funktion lässt sich überall in eine Potenzreihe entwickeln, und die Reihe konvergiert im größten Kreis, der bis zur nächsten nicht hebbaren Singularität passt. Genau deshalb konvergiert die Reihe für $\\frac1{1+x^2}$ auf der reellen Achse nur für $|x|<1$, obwohl die Funktion auf $\\mathbb R$ glatt ist: In der komplexen Ebene sitzen bei $\\pm i$ Pole im Abstand 1."
     }
    },
    {
     "type": "formel",
     "label": {
      "ru": "",
      "de": ""
     },
     "html": {
      "ru": "$$R=\\lim_{n\\to\\infty}\\frac{|a_n|}{|a_{n+1}|}\\quad\\text{или}\\quad R=\\frac1{\\limsup|a_n|^{1/n}}\\qquad R=\\operatorname{dist}(z_0,\\ \\text{ближайшая неустранимая особенность})$$",
      "de": "$$R=\\lim_{n\\to\\infty}\\frac{|a_n|}{|a_{n+1}|}\\quad\\text{oder}\\quad R=\\frac1{\\limsup|a_n|^{1/n}}\\qquad R=\\operatorname{dist}(z_0,\\ \\text{nächste nicht hebbare Singularität})$$"
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$R$ einer gegebenen Reihe (Quotienten- oder Wurzelkriterium) oder $R$ der Taylorreihe einer Funktion um einen Punkt (Abstand zur nächsten Singularität). Check: Beide Wege müssen dasselbe $R$ liefern. Fallen: nur reelle Nullstellen des Nenners suchen; den Quotienten falsch herum nehmen – es ist $\\frac{|a_n|}{|a_{n+1}|}$.",
      "ru": "$R$ данного ряда (признак Даламбера или Коши) или $R$ ряда Тейлора функции вокруг точки (расстояние до ближайшей особой точки). Проверка: оба способа должны дать одинаковое $R$. Ловушки: искать только вещественные нули знаменателя; перевернуть отношение – правильно $\\frac{|a_n|}{|a_{n+1}|}$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\ln$ – reeller Logarithmus, $\\log$ – komplexer Logarithmus.</li><li>$|z|$ – Betrag (Abstand zu $0$), $\\arg z$ – Winkel von $z$ zur positiven reellen Achse.</li><li><b>Zweig</b> – eine Festlegung des Winkels, sodass $\\log$ auf einem Gebiet stetig ist.</li><li><b>Hauptzweig</b> – $\\arg z\\in(-\\pi,\\pi)$; <b>Schnitt</b> $(-\\infty,0]$ – dort ist der Hauptzweig nicht definiert.</li><li>$z^\\alpha=e^{\\alpha\\log z}$, insbesondere $\\sqrt z=e^{\\frac12\\log z}$.</li></ul>",
      "ru": "<ul><li>$\\ln$ – вещественный логарифм, $\\log$ – комплексный.</li><li>$|z|$ – модуль (расстояние до $0$), $\\arg z$ – угол $z$ с положительной вещественной осью.</li><li><b>ветвь</b> – такой выбор угла, при котором $\\log$ непрерывен в области.</li><li><b>главная ветвь</b> – $\\arg z\\in(-\\pi,\\pi)$; <b>разрез</b> $(-\\infty,0]$ – там главная ветвь не определена.</li><li>$z^\\alpha=e^{\\alpha\\log z}$, в частности $\\sqrt z=e^{\\frac12\\log z}$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$\\log z$ soll die Gleichung $e^{w}=z$ lösen. Mit $z=|z|e^{i\\varphi}$ ist $w=\\ln|z|+i\\varphi$, aber $\\varphi$ ist nur bis auf Vielfache von $2\\pi$ bestimmt. Läuft man einmal um $0$ herum und hält $\\varphi$ stetig, wächst $\\varphi$ um $2\\pi$. Deshalb gibt es keine stetige Logarithmusfunktion auf ganz $\\mathbb C\\setminus\\{0\\}$. Man entfernt eine Halbgerade aus $0$ (den Schnitt) und legt den Winkelbereich fest. Auf dem Rest ist $\\log$ holomorph mit $(\\log z)'=\\frac1z$. Wurzeln und Potenzen erben den Schnitt.",
      "ru": "$\\log z$ должен решать уравнение $e^{w}=z$. При $z=|z|e^{i\\varphi}$ имеем $w=\\ln|z|+i\\varphi$, но $\\varphi$ определён только с точностью до кратного $2\\pi$. Если обойти $0$ один раз, непрерывно отслеживая $\\varphi$, то $\\varphi$ вырастет на $2\\pi$. Поэтому непрерывного логарифма на всей $\\mathbb C\\setminus\\{0\\}$ нет. Убирают луч из $0$ (разрез) и фиксируют диапазон угла. На оставшейся области $\\log$ голоморфен, $(\\log z)'=\\frac1z$. Корни и степени наследуют разрез."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\log(1+i)$ im Hauptzweig:</b><ol><li>Abstand: $|1+i|=\\sqrt{1+1}=\\sqrt2$.</li><li>Winkel: $1+i$ liegt auf der Diagonalen → $\\arg=\\frac\\pi4$ (liegt in $(-\\pi,\\pi)$ ✓).</li><li>$\\log(1+i)=\\ln\\sqrt2+i\\frac\\pi4=\\frac{\\ln2}{2}+i\\frac\\pi4$.</li></ol><b>Eine Runde weiter:</b> Gehst du einmal um die 0 herum, ist der Winkel $\\frac\\pi4+2\\pi$, und $\\log$ wird $\\frac{\\ln2}{2}+i\\frac{9\\pi}4$ – derselbe Punkt, anderer Zweig des Logarithmus.",
      "ru": "<b>$\\log(1+i)$ на главной ветви:</b><ol><li>Расстояние: $|1+i|=\\sqrt{1+1}=\\sqrt2$.</li><li>Угол: $1+i$ лежит на диагонали → $\\arg=\\frac\\pi4$ (входит в $(-\\pi,\\pi)$ ✓).</li><li>$\\log(1+i)=\\ln\\sqrt2+i\\frac\\pi4=\\frac{\\ln2}{2}+i\\frac\\pi4$.</li></ol><b>На круг дальше:</b> если обойти 0 один раз, угол станет $\\frac\\pi4+2\\pi$, и $\\log$ станет $\\frac{\\ln2}{2}+i\\frac{9\\pi}4$ — та же точка, другая ветвь логарифма."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$\\log$ oder $\\sqrt{}$ eines konkreten Werts im Hauptzweig; Gebiet bestimmen, auf dem z. B. $\\log(1-z)$ holomorph ist: Schnitt bei $1-z\\in(-\\infty,0]$, also $z\\in[1,\\infty)$. Falle: $\\log(zw)=\\log z+\\log w$ gilt im Hauptzweig nicht immer. Gegenbeispiel $z=w=e^{3\\pi i/4}$: rechts $\\frac{3\\pi i}{2}$, links $-\\frac{\\pi i}{2}$, Unterschied $2\\pi i$.",
      "ru": "$\\log$ или $\\sqrt{}$ конкретного числа на главной ветви; найти область, где голоморфен, например, $\\log(1-z)$: разрез там, где $1-z\\in(-\\infty,0]$, то есть $z\\in[1,\\infty)$. Ловушка: $\\log(zw)=\\log z+\\log w$ на главной ветви верно не всегда. Контрпример $z=w=e^{3\\pi i/4}$: справа $\\frac{3\\pi i}{2}$, слева $-\\frac{\\pi i}{2}$, разница $2\\pi i$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>isolierte Singularität</b> $a$ – $f$ ist in einer gelochten Kreisscheibe $0\\lt|z-a|\\lt r$ holomorph.</li><li>$a_n$ – Koeffizienten der Laurentreihe, $n$ läuft von $-\\infty$ bis $\\infty$.</li><li><b>Hauptteil</b> – die Terme mit negativen Potenzen $(z-a)^{-1},(z-a)^{-2},\\dots$</li><li>$\\operatorname{Res}_af=a_{-1}$ – Koeffizient vor $\\frac1{z-a}$.</li><li><b>Pol der Ordnung $m$</b> – der Hauptteil endet bei $(z-a)^{-m}$.</li></ul>",
      "ru": "<ul><li><b>изолированная особая точка</b> $a$ – $f$ голоморфна в проколотом круге $0\\lt|z-a|\\lt r$.</li><li>$a_n$ – коэффициенты ряда Лорана, $n$ от $-\\infty$ до $\\infty$.</li><li><b>главная часть</b> – члены с отрицательными степенями $(z-a)^{-1},(z-a)^{-2},\\dots$</li><li>$\\operatorname{Res}_af=a_{-1}$ – коэффициент при $\\frac1{z-a}$.</li><li><b>полюс порядка $m$</b> – главная часть заканчивается на $(z-a)^{-m}$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Um eine isolierte Singularität kann man $f$ als Laurentreihe schreiben, und der Hauptteil bestimmt den Typ. Kein negativer Term: hebbar, $f$ lässt sich in $a$ holomorph fortsetzen. Endlich viele, der niedrigste ist $(z-a)^{-m}$: Pol der Ordnung $m$, $|f|\\to\\infty$. Unendlich viele: wesentlich, $f$ kommt in jeder Umgebung jedem Wert beliebig nahe (Casorati-Weierstraß). Test ohne Reihe: $\\lim_{z\\to a}(z-a)^mf(z)$ existiert und ist $\\neq0$ genau bei einem Pol der Ordnung $m$. Für $\\frac gh$ mit $g(a)\\neq0$ ist die Polordnung die Nullstellenordnung von $h$.",
      "ru": "Вокруг изолированной особой точки $f$ записывается рядом Лорана, и главная часть определяет тип. Нет отрицательных членов: устранимая, $f$ продолжается в $a$ голоморфно. Конечное число, самый младший $(z-a)^{-m}$: полюс порядка $m$, $|f|\\to\\infty$. Бесконечно много: существенная, в любой окрестности $f$ подходит сколь угодно близко к любому значению (Казорати–Вейерштрасс). Проверка без ряда: $\\lim_{z\\to a}(z-a)^mf(z)$ существует и $\\neq0$ ровно при полюсе порядка $m$. Для $\\frac gh$ с $g(a)\\neq0$ порядок полюса равен кратности нуля $h$."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Alle Singularitäten einer Funktion finden und klassifizieren; Laurentreihe eines Bruchs in einem gegebenen Ring; Residuum ablesen. Fallen: Nullstellen des Zählers vergessen – sie senken die Polordnung, $\\frac{\\sin z}{z}$ hat in $0$ gar keinen Pol. Die Laurentreihe hängt vom Ring ab: $\\frac1{z(1-z)}$ hat für $0\\lt|z|\\lt1$ und für $|z|\\gt1$ verschiedene Reihen.",
      "ru": "Найти и классифицировать все особые точки функции; ряд Лорана дроби в заданном кольце; вычет по ряду. Ловушки: забыть нули числителя – они понижают порядок полюса, у $\\frac{\\sin z}{z}$ в $0$ полюса вообще нет. Ряд Лорана зависит от кольца: у $\\frac1{z(1-z)}$ при $0\\lt|z|\\lt1$ и при $|z|\\gt1$ разные ряды."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\operatorname{Res}_af$ – Residuum: Koeffizient $a_{-1}$ vor $\\frac1{z-a}$ in der Laurentreihe um $a$.</li><li>$a_k$ innen – die Singularitäten innerhalb von $\\gamma$; die außerhalb zählen nicht.</li><li><b>einfacher Pol</b> – Pol der Ordnung $1$.</li><li>$f=\\frac gh$ mit $h(a)=0$, $h'(a)\\neq0$ – typische Form eines einfachen Pols.</li><li>$\\frac{d^{m-1}}{dz^{m-1}}$ – $(m-1)$-te Ableitung.</li></ul>",
      "ru": "<ul><li>$\\operatorname{Res}_af$ – вычет: коэффициент $a_{-1}$ при $\\frac1{z-a}$ в ряде Лорана вокруг $a$.</li><li>$a_k$ внутри – особые точки внутри $\\gamma$; внешние не считаются.</li><li><b>простой полюс</b> – полюс порядка $1$.</li><li>$f=\\frac gh$ с $h(a)=0$, $h'(a)\\neq0$ – типичный вид простого полюса.</li><li>$\\frac{d^{m-1}}{dz^{m-1}}$ – $(m-1)$-я производная.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Um jede Singularität $a_k$ im Inneren schneidet man einen kleinen Kreis aus. Im Rest ist $f$ holomorph, also ist das Integral über $\\gamma$ gleich der Summe der Integrale über die kleinen Kreise. Auf einem kleinen Kreis integriert man die Laurentreihe gliedweise: Alle Potenzen außer $(z-a)^{-1}$ geben $0$, und $(z-a)^{-1}$ gibt $2\\pi i$. Es bleibt $2\\pi i\\,a_{-1}$ pro Singularität. Ein Integral wird so zu: Singularitäten finden, innen oder außen entscheiden, Residuen ausrechnen.",
      "ru": "Вокруг каждой особой точки $a_k$ внутри вырезаем маленький круг. В оставшейся области $f$ голоморфна, поэтому интеграл по $\\gamma$ равен сумме интегралов по маленьким окружностям. На маленькой окружности интегрируем ряд Лорана почленно: все степени, кроме $(z-a)^{-1}$, дают $0$, а $(z-a)^{-1}$ даёт $2\\pi i$. Остаётся $2\\pi i\\,a_{-1}$ от каждой особой точки. Интеграл сводится к трём шагам: найти особые точки, решить, внутри они или снаружи, посчитать вычеты."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\oint_{|z|=2}\\frac{1}{z(z-1)}\\,dz$:</b><ol><li>Singularitäten: Nenner $=0$ bei $z=0$ und $z=1$. Beide liegen im Kreis mit Radius 2 ✓.</li><li>$\\operatorname{Res}_0$: den Faktor $z$ abdecken und $z=0$ einsetzen: $\\frac{1}{0-1}=-1$.</li><li>$\\operatorname{Res}_1$: den Faktor $(z-1)$ abdecken und $z=1$ einsetzen: $\\frac11=1$.</li><li>Summe $-1+1=0$ → Integral $=2\\pi i\\cdot0=0$.</li></ol><b>Kleiner Kreis $|z|=\\frac12$:</b> Nur $z=0$ liegt innen → $2\\pi i\\cdot(-1)=-2\\pi i$. Gleiche Funktion, anderer Weg, andere Antwort.",
      "ru": "<b>$\\oint_{|z|=2}\\frac{1}{z(z-1)}\\,dz$:</b><ol><li>Особые точки: знаменатель $=0$ в $z=0$ и $z=1$. Обе внутри круга радиуса 2 ✓.</li><li>$\\operatorname{Res}_0$: закрываем множитель $z$ и подставляем $z=0$: $\\frac{1}{0-1}=-1$.</li><li>$\\operatorname{Res}_1$: закрываем множитель $(z-1)$ и подставляем $z=1$: $\\frac11=1$.</li><li>Сумма $-1+1=0$ → интеграл $=2\\pi i\\cdot0=0$.</li></ol><b>Маленький круг $|z|=\\frac12$:</b> внутри только $z=0$ → $2\\pi i\\cdot(-1)=-2\\pi i$. Та же функция, другой путь — другой ответ."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein geschlossenes Integral mit zwei oder drei Polen, von denen nicht alle innen liegen; ein Residuum an einem doppelten Pol. Fallen: Pole außerhalb mitzählen; bei Polen höherer Ordnung den Faktor $\\frac1{(m-1)!}$ vergessen; die Formel $\\frac{g}{h'}$ bei mehrfachen Polen benutzen (sie gilt nur für einfache). Kontrolle: Die Summe aller Residuen einer rationalen Funktion einschließlich $\\infty$ ist $0$.",
      "ru": "Замкнутый интеграл с двумя-тремя полюсами, из которых не все внутри; вычет в двукратном полюсе. Ловушки: посчитать полюсы снаружи; забыть множитель $\\frac1{(m-1)!}$ для полюсов высокого порядка; применить формулу $\\frac{g}{h'}$ к кратному полюсу (она только для простых). Проверка: сумма всех вычетов рациональной функции вместе с $\\infty$ равна $0$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$P,Q$ – Polynome, $\\deg$ – Grad (höchste Potenz).</li><li>$\\operatorname{Im}a\\gt0$ – $a$ liegt in der oberen Halbebene.</li><li>$R(\\cos t,\\sin t)$ – ein Bruch aus Polynomen in $\\cos t$ und $\\sin t$.</li><li>$k$ – reelle Frequenz in $e^{ikx}$.</li><li><b>Jordan-Lemma</b> – Abschätzung, nach der bei $e^{ikz}$ mit $k\\gt0$ schon $\\deg Q\\ge\\deg P+1$ reicht, damit der Bogen verschwindet.</li></ul>",
      "ru": "<ul><li>$P,Q$ – многочлены, $\\deg$ – степень (старшая).</li><li>$\\operatorname{Im}a\\gt0$ – $a$ лежит в верхней полуплоскости.</li><li>$R(\\cos t,\\sin t)$ – дробь из многочленов от $\\cos t$ и $\\sin t$.</li><li>$k$ – вещественная частота в $e^{ikx}$.</li><li><b>лемма Жордана</b> – оценка, по которой для $e^{ikz}$ с $k\\gt0$ уже хватает $\\deg Q\\ge\\deg P+1$, чтобы дуга исчезла.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Man ergänzt die Strecke $[-\\rho,\\rho]$ durch den Halbkreis mit Radius $\\rho$ in der oberen Halbebene zu einem geschlossenen Weg und wendet den Residuensatz an. Auf dem Bogen ist bei $\\deg Q\\ge\\deg P+2$ der Betrag $|f|\\le\\frac{C}{\\rho^2}$, die Bogenlänge ist $\\pi\\rho$. Also ist der Beitrag höchstens $\\frac{\\pi C}{\\rho}\\to0$. Für $\\rho\\to\\infty$ bleibt: reelles Integral $=2\\pi i\\cdot$ Summe der Residuen oben. Für $\\int_0^{2\\pi}$ mit $\\cos$ und $\\sin$ macht die Substitution $z=e^{it}$ aus dem Intervall den Einheitskreis.",
      "ru": "Отрезок $[-\\rho,\\rho]$ дополняем полуокружностью радиуса $\\rho$ в верхней полуплоскости до замкнутого пути и применяем теорему о вычетах. На дуге при $\\deg Q\\ge\\deg P+2$ модуль $|f|\\le\\frac{C}{\\rho^2}$, длина дуги $\\pi\\rho$. Значит, вклад не больше $\\frac{\\pi C}{\\rho}\\to0$. При $\\rho\\to\\infty$ остаётся: вещественный интеграл $=2\\pi i\\cdot$ сумма вычетов сверху. Для $\\int_0^{2\\pi}$ с $\\cos$ и $\\sin$ подстановка $z=e^{it}$ превращает отрезок в единичную окружность."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\int_{-\\infty}^{\\infty}\\frac{dx}{x^2+4}$:</b><ol><li>Singularitäten: $z^2+4=0$ → $z=\\pm2i$. Oben liegt nur $2i$.</li><li>Residuum mit $\\frac{g}{h'}$: $\\frac{1}{2z}$ bei $z=2i$ → $\\frac1{4i}$.</li><li>Antwort: $2\\pi i\\cdot\\frac1{4i}=\\frac\\pi2$.</li><li>Kontrolle: Stammfunktion $\\frac12\\arctan\\frac x2$ → $\\frac12\\big(\\frac\\pi2+\\frac\\pi2\\big)=\\frac\\pi2$ ✓. Reell und positiv ✓.</li></ol>",
      "ru": "<b>$\\int_{-\\infty}^{\\infty}\\frac{dx}{x^2+4}$:</b><ol><li>Особые точки: $z^2+4=0$ → $z=\\pm2i$. Сверху только $2i$.</li><li>Вычет по формуле $\\frac{g}{h'}$: $\\frac{1}{2z}$ при $z=2i$ → $\\frac1{4i}$.</li><li>Ответ: $2\\pi i\\cdot\\frac1{4i}=\\frac\\pi2$.</li><li>Проверка: первообразная $\\frac12\\arctan\\frac x2$ → $\\frac12\\big(\\frac\\pi2+\\frac\\pi2\\big)=\\frac\\pi2$ ✓. Вещественный и положительный ✓.</li></ol>"
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$\\int_{-\\infty}^\\infty\\frac{dx}{(x^2+1)(x^2+4)}$, $\\int_0^{2\\pi}\\frac{dt}{a+\\cos t}$, $\\int_{-\\infty}^\\infty\\frac{\\cos kx}{x^2+1}dx$ (über $e^{ikx}$ und Realteil). Checks: Bei reellem Integranden muss das Ergebnis reell sein, bei positivem positiv. Fallen: Residuen aus der unteren Halbebene mitnehmen; mit $\\cos kz$ statt $e^{ikz}$ rechnen ($\\cos kz$ wächst in der oberen Halbebene, der Bogen verschwindet nicht).",
      "ru": "$\\int_{-\\infty}^\\infty\\frac{dx}{(x^2+1)(x^2+4)}$, $\\int_0^{2\\pi}\\frac{dt}{a+\\cos t}$, $\\int_{-\\infty}^\\infty\\frac{\\cos kx}{x^2+1}dx$ (через $e^{ikx}$ и вещественную часть). Проверки: при вещественной подынтегральной функции ответ вещественный, при положительной – положительный. Ловушки: взять вычеты из нижней полуплоскости; считать с $\\cos kz$ вместо $e^{ikz}$ ($\\cos kz$ растёт в верхней полуплоскости, дуга не исчезает)."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>Nullmenge</b> – Menge vom Lebesgue-Maß $0$: Sie lässt sich durch Intervalle mit beliebig kleiner Gesamtlänge überdecken. Beispiele: einzelne Punkte, $\\mathbb Q$.</li><li><b>f.ü.</b> (fast überall) – überall außer auf einer Nullmenge.</li><li>$f_n\\to f$ f.ü. – für fast jedes $x$ konvergiert die Zahlenfolge $f_n(x)$ gegen $f(x)$.</li><li>$g$ – <b>Majorante</b>: eine feste Funktion mit $|f_n|\\le g$ für alle $n$ und $\\int g\\lt\\infty$.</li><li>$L^1$ – Funktionen mit $\\int|f|\\lt\\infty$; $L^2$ – mit $\\int|f|^2\\lt\\infty$.</li></ul>",
      "ru": "<ul><li><b>Множество меры нуль</b> – множество меры Лебега $0$: его можно покрыть интервалами сколь угодно малой общей длины. Примеры: отдельные точки, $\\mathbb Q$.</li><li><b>f.ü.</b> (fast überall, почти всюду) – везде, кроме множества меры нуль.</li><li>$f_n\\to f$ f.ü. – почти для каждого $x$ числовая последовательность $f_n(x)$ сходится к $f(x)$.</li><li>$g$ – <b>мажоранта</b>: фиксированная функция с $|f_n|\\le g$ для всех $n$ и $\\int g\\lt\\infty$.</li><li>$L^1$ – функции с $\\int|f|\\lt\\infty$; $L^2$ – с $\\int|f|^2\\lt\\infty$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Die zentrale Frage: Darf man Grenzwert und Integral vertauschen? Ohne Zusatzbedingung nicht: $f_n$ kann punktweise gegen $0$ gehen, während $\\int f_n=1$ bleibt, weil sich die Fläche in immer schmaleren und höheren Spitzen konzentriert. Der Satz von der majorisierten Konvergenz schließt genau das aus. Liegen alle $|f_n|$ unter einer festen integrierbaren Funktion $g$, gilt $\\lim\\int f_n=\\int\\lim f_n$. Das Lebesgue-Integral ist für viel mehr Funktionen definiert als das Riemann-Integral, und Nullmengen tragen nichts bei. Deshalb gelten Funktionen, die f.ü. gleich sind, als dieselbe Funktion.",
      "ru": "Главный вопрос: можно ли менять местами предел и интеграл? Без дополнительного условия – нет: $f_n$ может поточечно стремиться к $0$, а $\\int f_n=1$ остаётся, потому что площадь собирается во всё более узкие и высокие пики. Теорема о мажорированной сходимости исключает именно это. Если все $|f_n|$ лежат под одной фиксированной интегрируемой функцией $g$, то $\\lim\\int f_n=\\int\\lim f_n$. Интеграл Лебега определён для гораздо большего класса функций, чем Римана, а множества меры нуль ничего не добавляют. Поэтому функции, равные почти всюду, считаются одной и той же функцией."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$f_n(x)=x^n$ auf $[0,1]$:</b><ol><li>Grenzwert: Für $0\\le x\\lt 1$ gilt $x^n\\to0$. Nur bei $x=1$ bleibt $1^n=1$ – ein einzelner Punkt, also eine Nullmenge. Damit $f_n\\to0$ f.ü.</li><li>Majorante: $|x^n|\\le1$ auf $[0,1]$, und $\\int_0^1 1\\,dx=1\\lt\\infty$ ✓.</li><li>Also darf man tauschen: $\\lim\\int_0^1x^n\\,dx=\\int_0^1 0\\,dx=0$.</li><li>Kontrolle direkt: $\\int_0^1x^n\\,dx=\\frac1{n+1}\\to0$ ✓.</li></ol><b>Wo es schiefgeht:</b> $f_n=n$ auf $(0,\\frac1n)$, sonst 0. Fläche immer $n\\cdot\\frac1n=1$, aber $f_n\\to0$. Eine gemeinsame integrierbare Majorante gibt es nicht: $\\sup_nf_n$ verhält sich wie $\\frac1x$ und ist nicht integrierbar.",
      "ru": "<b>$f_n(x)=x^n$ на $[0,1]$:</b><ol><li>Предел: при $0\\le x\\lt 1$ имеем $x^n\\to0$. Только при $x=1$ остаётся $1^n=1$ — одна точка, то есть множество меры нуль. Значит, $f_n\\to0$ почти всюду.</li><li>Мажоранта: $|x^n|\\le1$ на $[0,1]$, и $\\int_0^1 1\\,dx=1\\lt\\infty$ ✓.</li><li>Значит, менять можно: $\\lim\\int_0^1x^n\\,dx=\\int_0^1 0\\,dx=0$.</li><li>Проверка напрямую: $\\int_0^1x^n\\,dx=\\frac1{n+1}\\to0$ ✓.</li></ol><b>Где ломается:</b> $f_n=n$ на $(0,\\frac1n)$, иначе 0. Площадь всегда $n\\cdot\\frac1n=1$, но $f_n\\to0$. Общей интегрируемой мажоранты нет: $\\sup_nf_n$ ведёт себя как $\\frac1x$ и не интегрируема."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "Риман разбивает область определения на отрезки и суммирует значение функции на длину отрезка. Лебег разбивает область значений: для каждого диапазона около $y$ он измеряет, насколько велико множество $x$ с $f(x)\\approx y$, и суммирует $y$ на эту меру. Для кусочно непрерывных функций результат тот же, но интеграл Лебега существует для гораздо большего класса функций и имеет лучшие теоремы о предельном переходе. Множества меры нуль (точки, счётные множества) не влияют на интеграл. Поэтому функции, различающиеся на множестве меры нуль, считаются одинаковыми («fast überall»).",
      "de": "Riemann zerlegt den Definitionsbereich in Intervalle und summiert Funktionswert mal Intervalllänge. Lebesgue zerlegt den Wertebereich: Für jeden Bereich um $y$ misst er, wie groß die Menge der $x$ mit $f(x)\\approx y$ ist, und summiert $y$ mal dieses Maß. Für stückweise stetige Funktionen ergibt das dasselbe, aber das Lebesgue-Integral existiert für viel mehr Funktionen und hat bessere Grenzwertsätze. Nullmengen (Punkte, abzählbare Mengen) beeinflussen das Integral nicht. Deshalb gelten Funktionen, die sich nur auf einer Nullmenge unterscheiden, als gleich („fast überall“)."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$\\lim_{n\\to\\infty}\\int f_n$ ausrechnen, z. B. $\\int_0^\\infty\\frac{n\\sin(x/n)}{x(1+x^2)}dx$: punktweiser Grenzwert $\\frac1{1+x^2}$, Majorante $\\frac1{1+x^2}$ (wegen $|\\sin s|\\le|s|$), Ergebnis $\\frac\\pi2$. Auch: Ableiten unter dem Integral begründen. Fallen: Eine „Majorante“, die von $n$ abhängt, ist keine. Den Satz zitieren, ohne $\\int g\\lt\\infty$ zu zeigen.",
      "ru": "Вычислить $\\lim_{n\\to\\infty}\\int f_n$, например $\\int_0^\\infty\\frac{n\\sin(x/n)}{x(1+x^2)}dx$: поточечный предел $\\frac1{1+x^2}$, мажоранта $\\frac1{1+x^2}$ (так как $|\\sin s|\\le|s|$), ответ $\\frac\\pi2$. Ещё: обосновать дифференцирование под интегралом. Ловушки: «мажоранта», зависящая от $n$, мажорантой не является. Сослаться на теорему, не показав $\\int g\\lt\\infty$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\hat u$ („u Dach“) – Fouriertransformierte von $u$.</li><li>$x\\in\\mathbb R^n$ – Ortsvariable, $y\\in\\mathbb R^n$ – Frequenzvariable.</li><li>$\\langle x,y\\rangle=x_1y_1+\\dots+x_ny_n$ – Skalarprodukt.</li><li>$e^{i\\langle x,y\\rangle}$ – ebene Welle mit Wellenvektor $y$.</li><li>$(2\\pi)^{-n/2}$ – Normierung in der Konvention des Skriptums (symmetrisch für Hin- und Rücktransformation).</li></ul>",
      "ru": "<ul><li>$\\hat u$ («u с крышкой») – преобразование Фурье функции $u$.</li><li>$x\\in\\mathbb R^n$ – пространственная переменная, $y\\in\\mathbb R^n$ – частотная.</li><li>$\\langle x,y\\rangle=x_1y_1+\\dots+x_ny_n$ – скалярное произведение.</li><li>$e^{i\\langle x,y\\rangle}$ – плоская волна с волновым вектором $y$.</li><li>$(2\\pi)^{-n/2}$ – нормировка в соглашении скрипта (симметрично для прямого и обратного преобразования).</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$\\hat u(y)$ misst, mit welcher Amplitude und Phase die Welle $e^{i\\langle x,y\\rangle}$ in $u$ enthalten ist, und die Umkehrformel setzt $u$ aus diesen Wellen wieder zusammen. Die Rechenregeln der Tabelle folgen aus Eigenschaften der Welle. Wegen $\\partial_je^{i\\langle x,y\\rangle}=iy_je^{i\\langle x,y\\rangle}$ wird Ableiten zu Multiplizieren mit $iy_j$. Eine Verschiebung wird zu einem Phasenfaktor, eine Stauchung zu einer Streckung. Deshalb wird eine lineare PDE mit konstanten Koeffizienten im Frequenzraum zu einer algebraischen Gleichung oder einer gewöhnlichen DGL in $t$.",
      "ru": "$\\hat u(y)$ показывает, с какой амплитудой и фазой волна $e^{i\\langle x,y\\rangle}$ содержится в $u$, а формула обращения собирает $u$ обратно из этих волн. Правила из таблицы следуют из свойств волны. Так как $\\partial_je^{i\\langle x,y\\rangle}=iy_je^{i\\langle x,y\\rangle}$, дифференцирование превращается в умножение на $iy_j$. Сдвиг превращается в фазовый множитель, сжатие – в растяжение. Поэтому линейное УрЧП с постоянными коэффициентами в частотах становится алгебраическим уравнением или обыкновенным ДУ по $t$."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Rechteck $u=\\mathbf 1_{[-1,1]}$</b> (1 zwischen $-1$ und $1$, sonst 0):<ol><li>Einsetzen: $\\hat u(y)=\\frac1{\\sqrt{2\\pi}}\\int_{-1}^{1}e^{-ixy}\\,dx$.</li><li>Integrieren: $\\int_{-1}^{1}e^{-ixy}dx=\\frac{e^{-iy}-e^{iy}}{-iy}=\\frac{2\\sin y}{y}$.</li><li>Ergebnis: $\\hat u(y)=\\sqrt{\\tfrac2\\pi}\\,\\frac{\\sin y}{y}$.</li><li>Check $y=0$: $\\frac{\\sin y}y\\to1$, also $\\hat u(0)=\\sqrt{\\tfrac2\\pi}$. Und $\\frac1{\\sqrt{2\\pi}}\\cdot(\\text{Fläche }2)=\\sqrt{\\tfrac2\\pi}$ ✓.</li></ol>Weil das Rechteck Sprünge hat, fällt $\\hat u$ nur wie $\\frac1y$ ab.",
      "ru": "<b>Прямоугольник $u=\\mathbf 1_{[-1,1]}$</b> (1 между $-1$ и $1$, иначе 0):<ol><li>Подставляем: $\\hat u(y)=\\frac1{\\sqrt{2\\pi}}\\int_{-1}^{1}e^{-ixy}\\,dx$.</li><li>Интегрируем: $\\int_{-1}^{1}e^{-ixy}dx=\\frac{e^{-iy}-e^{iy}}{-iy}=\\frac{2\\sin y}{y}$.</li><li>Итог: $\\hat u(y)=\\sqrt{\\tfrac2\\pi}\\,\\frac{\\sin y}{y}$.</li><li>Проверка при $y=0$: $\\frac{\\sin y}y\\to1$, значит $\\hat u(0)=\\sqrt{\\tfrac2\\pi}$. А $\\frac1{\\sqrt{2\\pi}}\\cdot(\\text{площадь }2)=\\sqrt{\\tfrac2\\pi}$ ✓.</li></ol>Так как у прямоугольника есть скачки, $\\hat u$ убывает только как $\\frac1y$."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "$\\hat u(y)$ отвечает на вопрос «сколько в сигнале $u$ волны с частотой $y$». Ключевой трюк: производная от волны $e^{ixy}$ — это та же волна, умноженная на $iy$. Поэтому $\\frac{d}{dx}$ в частотах превращается в умножение на $iy$.",
      "de": "$\\hat u(y)$ beantwortet die Frage „Wie viel Welle mit Frequenz $y$ steckt im Signal $u$“. Der Haupttrick: Die Ableitung der Welle $e^{ixy}$ ist dieselbe Welle, mal $iy$. Deshalb wird $\\frac{d}{dx}$ im Frequenzraum zur Multiplikation mit $iy$."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$\\hat u$ einer konkreten Funktion ausrechnen (Rechteck, $e^{-|x|}$ mit $\\hat u=\\sqrt{\\tfrac2\\pi}\\frac1{1+y^2}$, Gauß); mit der Tabelle verschobene oder gestauchte Funktionen transformieren; eine PDE mit Fourier lösen. Checks: $\\hat u(0)=(2\\pi)^{-n/2}\\int u$; gerade reelle $u$ geben gerade reelle $\\hat u$. Fallen: Die Konvention ($(2\\pi)^{-n/2}$, Vorzeichen im Exponenten) unterscheidet sich von vielen Physikbüchern – immer die des Skriptums benutzen.",
      "ru": "Посчитать $\\hat u$ конкретной функции (прямоугольник, $e^{-|x|}$ с $\\hat u=\\sqrt{\\tfrac2\\pi}\\frac1{1+y^2}$, гаусс); по таблице преобразовать сдвинутую или сжатую функцию; решить УрЧП через Фурье. Проверки: $\\hat u(0)=(2\\pi)^{-n/2}\\int u$; чётная вещественная $u$ даёт чётную вещественную $\\hat u$. Ловушки: соглашение ($(2\\pi)^{-n/2}$, знак в показателе) отличается от многих учебников физики – всегда брать соглашение скрипта."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$u*v$ – Faltung von $u$ und $v$.</li><li>$u(x-y)$ – der Graph von $u$, um $y$ nach rechts verschoben.</li><li>$\\operatorname{supp}u$ – Träger: Abschluss der Menge, auf der $u\\neq0$.</li><li>$\\widehat{u*v}$ – Fouriertransformierte der Faltung; $(2\\pi)^{n/2}$ – Faktor in der Konvention des Skriptums.</li></ul>",
      "ru": "<ul><li>$u*v$ – свёртка $u$ и $v$.</li><li>$u(x-y)$ – график $u$, сдвинутый на $y$ вправо.</li><li>$\\operatorname{supp}u$ – носитель: замыкание множества, где $u\\neq0$.</li><li>$\\widehat{u*v}$ – преобразование Фурье свёртки; $(2\\pi)^{n/2}$ – множитель в соглашении скрипта.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$(u*v)(x)=\\int u(x-y)v(y)\\,dy$ ist eine Überlagerung: An jeder Stelle $y$ nimmt man die um $y$ verschobene Kopie von $u$, gewichtet sie mit $v(y)$ und summiert. Wichtige Eigenschaften: $u*v=v*u$; $\\int u*v=\\int u\\cdot\\int v$; $\\operatorname{supp}(u*v)\\subseteq\\operatorname{supp}u+\\operatorname{supp}v$. Außerdem gilt $\\partial(u*v)=u*\\partial v$, also ist $u*v$ so glatt wie die glattere der beiden. In der Physik ist die Antwort eines linearen, zeitinvarianten Systems die Faltung des Signals mit der Impulsantwort. Im Frequenzraum wird die Faltung zum Produkt.",
      "ru": "$(u*v)(x)=\\int u(x-y)v(y)\\,dy$ – наложение: в каждой точке $y$ берём копию $u$, сдвинутую на $y$, умножаем на вес $v(y)$ и суммируем. Важные свойства: $u*v=v*u$; $\\int u*v=\\int u\\cdot\\int v$; $\\operatorname{supp}(u*v)\\subseteq\\operatorname{supp}u+\\operatorname{supp}v$. Кроме того, $\\partial(u*v)=u*\\partial v$, то есть $u*v$ так же гладкая, как более гладкая из двух. В физике отклик линейной стационарной системы – свёртка сигнала с импульсным откликом. В частотах свёртка становится произведением."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Rechteck mal Rechteck: $u=v=\\mathbf 1_{[0,1]}$.</b><ol><li>$(u*v)(x)=\\int u(x-y)v(y)\\,dy$ = Länge des Stücks, auf dem sich $[0,1]$ und das verschobene $[x-1,x]$ überlappen.</li><li>Für $0\\le x\\le1$: Überlappung $[0,x]$ → Wert $x$. Für $1\\le x\\le2$: Überlappung $[x-1,1]$ → Wert $2-x$. Sonst $0$.</li><li>Ergebnis: ein <b>Dreieck</b> auf $[0,2]$ mit Spitze $1$ bei $x=1$.</li><li>Checks: Fläche des Dreiecks $=\\frac12\\cdot2\\cdot1=1=\\int u\\cdot\\int v$ ✓. Träger $[0+0,\\,1+1]=[0,2]$ ✓.</li></ol>Aus zwei unstetigen Funktionen wird eine stetige: Faltung glättet.",
      "ru": "<b>Прямоугольник на прямоугольник: $u=v=\\mathbf 1_{[0,1]}$.</b><ol><li>$(u*v)(x)=\\int u(x-y)v(y)\\,dy$ — длина куска, где $[0,1]$ перекрывается со сдвинутым $[x-1,x]$.</li><li>При $0\\le x\\le1$: перекрытие $[0,x]$ → значение $x$. При $1\\le x\\le2$: перекрытие $[x-1,1]$ → значение $2-x$. Иначе $0$.</li><li>Итог: <b>треугольник</b> на $[0,2]$ с вершиной $1$ в $x=1$.</li><li>Проверки: площадь треугольника $=\\frac12\\cdot2\\cdot1=1=\\int u\\cdot\\int v$ ✓. Носитель $[0+0,\\,1+1]=[0,2]$ ✓.</li></ol>Из двух разрывных функций получилась непрерывная: свёртка сглаживает."
     }
    },
    {
     "type": "kern",
     "label": {
      "ru": "Суть",
      "de": ""
     },
     "html": {
      "ru": "$u*v$ — взвешенное наложение: в каждую точку $y$ кладём копию $u$, сдвинутую на $y$, с весом $v(y)$ и складываем. Размытие фото, отклик линейной системы на сигнал, распространение тепла — всё это свёртки. В частотах свёртка превращается в обычное произведение.",
      "de": "$u*v$ ist eine gewichtete Überlagerung: An jede Stelle $y$ legt man eine um $y$ verschobene Kopie von $u$ mit dem Gewicht $v(y)$ und summiert. Unscharfe Fotos, die Antwort eines linearen Systems auf ein Signal, Wärmeausbreitung – alles Faltungen. Im Frequenzraum wird die Faltung zu einem gewöhnlichen Produkt."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Faltung zweier Rechtecke oder von $\\mathbf 1_{[0,\\infty)}e^{-x}$ mit sich selbst ausrechnen (Fallunterscheidung nach der Überlappung); eine Faltung über Fourier berechnen. Checks: Fläche $\\int u\\cdot\\int v$ und Träger. Fallen: Grenzen in der Fallunterscheidung; den Faktor $(2\\pi)^{n/2}$ im Faltungssatz vergessen.",
      "ru": "Свёртка двух прямоугольников или $\\mathbf 1_{[0,\\infty)}e^{-x}$ с самой собой (разбор случаев по перекрытию); свёртка через Фурье. Проверки: площадь $\\int u\\cdot\\int v$ и носитель. Ловушки: пределы в разборе случаев; забыть множитель $(2\\pi)^{n/2}$ в теореме о свёртке."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\mathcal S(\\mathbb R^n)$ – Schwartz-Raum: $u\\in C^\\infty$, und $x^\\alpha\\partial^\\beta u$ ist für alle Exponenten $\\alpha,\\beta$ beschränkt. Kurz: $u$ und alle Ableitungen fallen schneller ab als jede Potenz $|x|^{-k}$.</li><li>$\\|u\\|_{L^2}=\\sqrt{\\int|u|^2}$ – $L^2$-Norm.</li><li>$\\langle u,v\\rangle=\\int\\bar u\\,v$ – Skalarprodukt in $L^2$.</li><li>$\\mathcal F$ – Fouriertransformation als Abbildung, $\\mathcal Fu=\\hat u$.</li></ul>",
      "ru": "<ul><li>$\\mathcal S(\\mathbb R^n)$ – пространство Шварца: $u\\in C^\\infty$, и $x^\\alpha\\partial^\\beta u$ ограничено для всех показателей $\\alpha,\\beta$. Коротко: $u$ и все производные убывают быстрее любой степени $|x|^{-k}$.</li><li>$\\|u\\|_{L^2}=\\sqrt{\\int|u|^2}$ – норма в $L^2$.</li><li>$\\langle u,v\\rangle=\\int\\bar u\\,v$ – скалярное произведение в $L^2$.</li><li>$\\mathcal F$ – преобразование Фурье как отображение, $\\mathcal Fu=\\hat u$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Auf $\\mathcal S$ ist die Fouriertransformation eine Bijektion $\\mathcal S\\to\\mathcal S$, und die Umkehrformel gilt ohne Einschränkung. Grund: Fourier tauscht Ableiten und Multiplizieren mit Polynomen, und $\\mathcal S$ ist unter beidem abgeschlossen. Plancherel: $\\mathcal F$ erhält $L^2$-Norm und Skalarprodukt. Weil $\\mathcal S$ in $L^2$ dicht liegt, setzt man $\\mathcal F$ stetig auf ganz $L^2$ fort. Dort ist $\\hat u$ nicht mehr durch das Integral, sondern als $L^2$-Grenzwert definiert.",
      "ru": "На $\\mathcal S$ преобразование Фурье – биекция $\\mathcal S\\to\\mathcal S$, и формула обращения верна без оговорок. Причина: Фурье меняет местами дифференцирование и умножение на многочлены, а $\\mathcal S$ замкнуто относительно обоих. Планшерель: $\\mathcal F$ сохраняет норму и скалярное произведение в $L^2$. Так как $\\mathcal S$ плотно в $L^2$, $\\mathcal F$ непрерывно продолжают на всё $L^2$. Там $\\hat u$ определяется уже не интегралом, а как предел в $L^2$."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Plancherel am Gauß prüfen: $u=e^{-x^2/2}$.</b><ol><li>Laut Tabelle ist $\\hat u(y)=e^{-y^2/2}$ – derselbe Gauß.</li><li>Energie links: $\\int|u|^2dx=\\int e^{-x^2}dx=\\sqrt\\pi$.</li><li>Energie rechts: $\\int|\\hat u|^2dy=\\int e^{-y^2}dy=\\sqrt\\pi$ ✓ gleich.</li></ol><b>Gegenbeispiel:</b> $\\frac1{1+x^2}$ ist glatt, fällt aber nur wie $\\frac1{x^2}$ ab: $x^2\\cdot\\frac1{1+x^2}\\to1$, nicht $0$. Also nicht in $\\mathcal S$ (aber in $L^2$).",
      "ru": "<b>Проверяем Планшереля на гауссе: $u=e^{-x^2/2}$.</b><ol><li>По таблице $\\hat u(y)=e^{-y^2/2}$ — тот же гаусс.</li><li>Энергия слева: $\\int|u|^2dx=\\int e^{-x^2}dx=\\sqrt\\pi$.</li><li>Энергия справа: $\\int|\\hat u|^2dy=\\int e^{-y^2}dy=\\sqrt\\pi$ ✓ совпало.</li></ol><b>Контрпример:</b> $\\frac1{1+x^2}$ гладкая, но убывает только как $\\frac1{x^2}$: $x^2\\cdot\\frac1{1+x^2}\\to1$, а не $0$. Значит, не в $\\mathcal S$ (но в $L^2$)."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Prüfen, ob eine Funktion in $\\mathcal S$ liegt ($e^{-x^2}$ ja; $\\frac1{1+x^2}$ nein, zu langsam; $e^{-|x|}$ nein, nicht glatt in $0$); ein Integral mit Plancherel ausrechnen, z. B. $\\int\\frac{\\sin^2y}{y^2}dy=\\pi$ aus $\\hat{\\mathbf 1}_{[-1,1]}$ und $\\|\\mathbf 1_{[-1,1]}\\|^2=2$. Falle: Plancherel nur mit derselben Konvention, sonst fehlt ein $2\\pi$.",
      "ru": "Проверить, лежит ли функция в $\\mathcal S$ ($e^{-x^2}$ да; $\\frac1{1+x^2}$ нет, убывает медленно; $e^{-|x|}$ нет, не гладкая в $0$); посчитать интеграл через Планшереля, например $\\int\\frac{\\sin^2y}{y^2}dy=\\pi$ из $\\hat{\\mathbf 1}_{[-1,1]}$ и $\\|\\mathbf 1_{[-1,1]}\\|^2=2$. Ловушка: Планшерель – только в одном и том же соглашении, иначе теряется $2\\pi$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\varphi\\in\\mathcal D=C_c^\\infty$ – Testfunktion: beliebig oft differenzierbar und außerhalb einer beschränkten Menge gleich $0$.</li><li>$\\langle T,\\varphi\\rangle$ – die Zahl, die die Distribution $T$ der Testfunktion $\\varphi$ zuordnet.</li><li><b>linear und stetig</b> – $\\langle T,a\\varphi+b\\psi\\rangle=a\\langle T,\\varphi\\rangle+b\\langle T,\\psi\\rangle$, und konvergieren die $\\varphi_k$ samt Ableitungen gleichmäßig, dann konvergieren die Zahlen.</li><li>$\\delta_a$ – Delta-Distribution im Punkt $a$; $\\delta=\\delta_0$.</li></ul>",
      "ru": "<ul><li>$\\varphi\\in\\mathcal D=C_c^\\infty$ – пробная функция: бесконечно дифференцируемая и равная $0$ вне ограниченного множества.</li><li>$\\langle T,\\varphi\\rangle$ – число, которое распределение $T$ сопоставляет пробной функции $\\varphi$.</li><li><b>линейная и непрерывная</b> – $\\langle T,a\\varphi+b\\psi\\rangle=a\\langle T,\\varphi\\rangle+b\\langle T,\\psi\\rangle$, и если $\\varphi_k$ вместе с производными сходятся равномерно, то сходятся и числа.</li><li>$\\delta_a$ – дельта-функция в точке $a$; $\\delta=\\delta_0$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Eine Distribution ist eine lineare, stetige Abbildung von Testfunktionen auf Zahlen. Jede lokal integrierbare Funktion $u$ definiert eine durch $\\varphi\\mapsto\\int u\\varphi$. Es gibt aber mehr Distributionen als Funktionen, etwa $\\delta_a:\\varphi\\mapsto\\varphi(a)$. Physikalisch passt das zu Messungen: Eine Größe wird nie exakt in einem Punkt gemessen, sondern gemittelt mit einer Gewichtsfunktion. Konvergenz heißt: Für jedes $\\varphi$ konvergieren die Zahlen $\\langle T_k,\\varphi\\rangle$. So konvergieren immer schmalere Spitzen mit Fläche $1$ gegen $\\delta$.",
      "ru": "Распределение – линейное непрерывное отображение пробных функций в числа. Любая локально интегрируемая функция $u$ задаёт распределение $\\varphi\\mapsto\\int u\\varphi$. Но распределений больше, чем функций, например $\\delta_a:\\varphi\\mapsto\\varphi(a)$. Физически это соответствует измерениям: величину никогда не измеряют точно в точке, а всегда усредняют с весовой функцией. Сходимость значит: для каждой $\\varphi$ сходятся числа $\\langle T_k,\\varphi\\rangle$. Так всё более узкие пики площади $1$ сходятся к $\\delta$."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>So wird eine Folge zu δ:</b> $g_k=k$ auf $[0,\\frac1k]$, sonst 0 (ein Rechteck mit Fläche 1, immer schmaler und höher).<ol><li>$\\langle g_k,\\varphi\\rangle=k\\int_0^{1/k}\\varphi(x)\\,dx$ = Mittelwert von $\\varphi$ auf $[0,\\frac1k]$.</li><li>Wird das Intervall winzig, ist der Mittelwert einfach $\\varphi(0)$. Also $g_k\\to\\delta$.</li><li>Mit Zahlen: Sieht $\\varphi$ nahe 0 aus wie $\\cos x$, dann ist der Wert $k\\sin\\frac1k$. Für $k=10$: $10\\sin(0{,}1)\\approx0{,}998$ – fast genau $\\cos0=1$ ✓.</li></ol>Und $\\langle\\delta_2,\\varphi\\rangle=\\varphi(2)$: $\\delta_2$ liefert den Wert bei $2$.",
      "ru": "<b>Как последовательность становится δ:</b> $g_k=k$ на $[0,\\frac1k]$, иначе 0 (прямоугольник площади 1, всё уже и выше).<ol><li>$\\langle g_k,\\varphi\\rangle=k\\int_0^{1/k}\\varphi(x)\\,dx$ — среднее значение $\\varphi$ на $[0,\\frac1k]$.</li><li>Когда отрезок крошечный, среднее — это просто $\\varphi(0)$. Значит, $g_k\\to\\delta$.</li><li>В числах: если около 0 функция $\\varphi$ выглядит как $\\cos x$, значение равно $k\\sin\\frac1k$. При $k=10$: $10\\sin(0{,}1)\\approx0{,}998$ — почти ровно $\\cos0=1$ ✓.</li></ol>А $\\langle\\delta_2,\\varphi\\rangle=\\varphi(2)$: $\\delta_2$ даёт значение в точке $2$."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Zeigen, dass $g_k(x)=\\frac{k}{\\sqrt\\pi}e^{-k^2x^2}$ gegen $\\delta$ konvergiert: $s=kx$ substituieren, dann $\\int\\frac1{\\sqrt\\pi}e^{-s^2}\\varphi(\\tfrac sk)\\,ds\\to\\varphi(0)$ mit majorisierter Konvergenz. Prüfen, ob eine Abbildung eine Distribution ist (linear? stetig?). Falle: $\\delta$ wie eine Funktion behandeln – $\\delta^2$ oder „$\\delta(0)$“ sind nicht definiert.",
      "ru": "Показать, что $g_k(x)=\\frac{k}{\\sqrt\\pi}e^{-k^2x^2}$ сходится к $\\delta$: замена $s=kx$, затем $\\int\\frac1{\\sqrt\\pi}e^{-s^2}\\varphi(\\tfrac sk)\\,ds\\to\\varphi(0)$ по теореме о мажорированной сходимости. Проверить, является ли отображение распределением (линейно? непрерывно?). Ловушка: обращаться с $\\delta$ как с функцией – $\\delta^2$ или «$\\delta(0)$» не определены."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$T'$ – Ableitung im Distributionssinn.</li><li>$H(x)$ – Heaviside-Funktion: $0$ für $x\\lt0$, $1$ für $x\\gt0$.</li><li>$\\operatorname{sgn}x$ – Vorzeichen: $-1$, $0$, $1$.</li><li>$[u]_a=u(a^+)-u(a^-)$ – Sprung in $a$: Grenzwert von rechts minus Grenzwert von links.</li><li>$\\delta'$ – Ableitung von $\\delta$: $\\langle\\delta',\\varphi\\rangle=-\\varphi'(0)$.</li></ul>",
      "ru": "<ul><li>$T'$ – производная в смысле распределений.</li><li>$H(x)$ – функция Хевисайда: $0$ при $x\\lt0$, $1$ при $x\\gt0$.</li><li>$\\operatorname{sgn}x$ – знак: $-1$, $0$, $1$.</li><li>$[u]_a=u(a^+)-u(a^-)$ – скачок в $a$: предел справа минус предел слева.</li><li>$\\delta'$ – производная $\\delta$: $\\langle\\delta',\\varphi\\rangle=-\\varphi'(0)$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Für glatte $u$ gilt $\\int u'\\varphi=-\\int u\\varphi'$, Randterme fallen weg, weil $\\varphi$ außerhalb einer beschränkten Menge null ist. Die rechte Seite ergibt für jede Distribution Sinn, also definiert man damit $T'$. So ist jede Distribution beliebig oft differenzierbar. Für eine stückweise glatte Funktion gilt die Regel $u'=\\{u'\\}+\\sum_a[u]_a\\,\\delta_a$. Dabei ist $\\{u'\\}$ die gewöhnliche Ableitung auf den glatten Stücken, und an jeder Sprungstelle kommt $\\delta_a$ mal Sprunghöhe dazu.",
      "ru": "Для гладких $u$ верно $\\int u'\\varphi=-\\int u\\varphi'$, граничные члены исчезают, потому что $\\varphi$ равна нулю вне ограниченного множества. Правая часть имеет смысл для любого распределения, поэтому так и определяют $T'$. Значит, любое распределение бесконечно дифференцируемо. Для кусочно гладкой функции работает правило $u'=\\{u'\\}+\\sum_a[u]_a\\,\\delta_a$. Здесь $\\{u'\\}$ – обычная производная на гладких кусках, а в каждой точке скачка добавляется $\\delta_a$, умноженная на высоту скачка."
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
      "ru": "Перекидываем производную на гладкую пробную функцию через интегрирование по частям. Граничных членов нет, потому что $\\varphi$ обращается в нуль далеко. Так любая локально интегрируемая функция становится бесконечно дифференцируемой (как дистрибуция). Скачок на высоту $h$ в точке $a$ даёт в производной слагаемое $h\\,\\delta_a$.",
      "de": "Man schiebt die Ableitung per partieller Integration auf die glatte Testfunktion. Randterme gibt es keine, weil $\\varphi$ weit draußen verschwindet. So wird jede lokal integrierbare Funktion unendlich oft differenzierbar (als Distribution). Ein Sprung der Höhe $h$ im Punkt $a$ liefert in der Ableitung den Summanden $h\\,\\delta_a$."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$u'$ und $u''$ einer stückweise definierten Funktion im Distributionssinn; Ausdrücke vereinfachen, z. B. $x\\delta'=-\\delta$, denn $\\langle x\\delta',\\varphi\\rangle=-(x\\varphi)'(0)=-\\varphi(0)$; nachweisen, dass ein $E$ Fundamentallösung ist. Fallen: Sprung als links minus rechts nehmen; Vorzeichen bei $\\delta'$; Knicke (Sprung in $u'$) erst in $u''$ als $\\delta$ sehen.",
      "ru": "$u'$ и $u''$ кусочно заданной функции в смысле распределений; упростить выражения, например $x\\delta'=-\\delta$, так как $\\langle x\\delta',\\varphi\\rangle=-(x\\varphi)'(0)=-\\varphi(0)$; доказать, что $E$ – фундаментальное решение. Ловушки: взять скачок как «слева минус справа»; знак у $\\delta'$; излом (скачок $u'$) даёт $\\delta$ только в $u''$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$P(\\partial)$ – linearer Differentialoperator mit konstanten Koeffizienten, z. B. $-\\Delta$ oder $\\partial_t-\\Delta$.</li><li>$E$ – Fundamentallösung: $P(\\partial)E=\\delta$.</li><li>$E*f$ – Faltung von $E$ mit der Quelle $f$.</li><li>$\\mathcal S'$ – temperierte Distributionen, für die Fourier definiert ist.</li><li>$\\hat\\delta=(2\\pi)^{-n/2}$ – Fouriertransformierte von $\\delta$ (Konvention des Skriptums).</li></ul>",
      "ru": "<ul><li>$P(\\partial)$ – линейный дифференциальный оператор с постоянными коэффициентами, например $-\\Delta$ или $\\partial_t-\\Delta$.</li><li>$E$ – фундаментальное решение: $P(\\partial)E=\\delta$.</li><li>$E*f$ – свёртка $E$ с источником $f$.</li><li>$\\mathcal S'$ – умеренные распределения, для которых определён Фурье.</li><li>$\\hat\\delta=(2\\pi)^{-n/2}$ – преобразование Фурье от $\\delta$ (соглашение скрипта).</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$E$ ist die Lösung für eine Punktquelle. Weil $P(\\partial)$ linear ist und mit Verschiebungen vertauscht, gilt $P(\\partial)(E*f)=(P(\\partial)E)*f=\\delta*f=f$. Eine beliebige Quelle $f$ ist eine Überlagerung verschobener Punktquellen mit Gewicht $f(y)$, und die Lösung ist die Überlagerung der verschobenen Antworten. $E$ findet man oft mit Fourier: $P(iy)\\hat E=(2\\pi)^{-n/2}$. In der Physik ist das das Coulomb-Potential einer Punktladung oder die Green'sche Funktion.",
      "ru": "$E$ – решение для точечного источника. Так как $P(\\partial)$ линеен и коммутирует со сдвигами, $P(\\partial)(E*f)=(P(\\partial)E)*f=\\delta*f=f$. Любой источник $f$ – наложение сдвинутых точечных источников с весом $f(y)$, а решение – наложение сдвинутых откликов. $E$ часто находят через Фурье: $P(iy)\\hat E=(2\\pi)^{-n/2}$. В физике это кулоновский потенциал точечного заряда или функция Грина."
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
      "ru": "Реши уравнение один раз для точечного источника $\\delta$. Любой источник $f$ — наложение сдвинутых точечных источников с весами $f(y)$. Значит, решение для $f$ — сумма откликов, то есть свёртка. Это основной инструмент всей части C.",
      "de": "Löse die Gleichung einmal für eine Punktquelle $\\delta$. Jede Quelle $f$ ist eine Überlagerung verschobener Punktquellen mit Gewichten $f(y)$. Also ist die Lösung für $f$ die Summe der Antworten – eine Faltung. Das ist das Grundwerkzeug für den ganzen Teil C."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Nachweisen, dass ein gegebenes $E$ Fundamentallösung ist (im Distributionssinn ableiten); eine Lösung für eine konkrete Quelle als Faltung hinschreiben und ausrechnen. Fallen: Vorzeichenkonvention ($-\\Delta E=\\delta$ oder $\\Delta E=\\delta$); $E$ ist nicht eindeutig – jede Lösung der homogenen Gleichung darf man addieren.",
      "ru": "Доказать, что данное $E$ – фундаментальное решение (дифференцируя в смысле распределений); записать и посчитать решение для конкретного источника как свёртку. Ловушки: соглашение о знаке ($-\\Delta E=\\delta$ или $\\Delta E=\\delta$); $E$ не единственно – можно добавить любое решение однородного уравнения."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\Delta u=\\partial_{x_1}^2u+\\dots+\\partial_{x_n}^2u$ – Laplace-Operator: Summe der zweiten Ortsableitungen.</li><li>$\\partial_tu=u_t$, $\\partial_t^2u=u_{tt}$ – erste und zweite Zeitableitung.</li><li><b>Anfangsbedingung</b> – Vorgabe bei $t=0$, z. B. $u(x,0)=u_0(x)$.</li><li><b>Randbedingung</b> – Vorgabe auf dem Rand $\\partial\\Omega$: Dirichlet ($u$ gegeben) oder Neumann ($\\partial_\\nu u$ gegeben).</li><li>elliptisch / parabolisch / hyperbolisch – Typen von Laplace-, Wärme- und Wellengleichung.</li></ul>",
      "ru": "<ul><li>$\\Delta u=\\partial_{x_1}^2u+\\dots+\\partial_{x_n}^2u$ – оператор Лапласа: сумма вторых производных по координатам.</li><li>$\\partial_tu=u_t$, $\\partial_t^2u=u_{tt}$ – первая и вторая производная по времени.</li><li><b>начальное условие</b> – задание при $t=0$, например $u(x,0)=u_0(x)$.</li><li><b>граничное условие</b> – задание на границе $\\partial\\Omega$: Дирихле ($u$ задано) или Нейман ($\\partial_\\nu u$ задано).</li><li>эллиптическое / параболическое / гиперболическое – типы уравнений Лапласа, теплопроводности и волнового.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Drei Grundtypen mit verschiedenem Verhalten. Laplace/Poisson $-\\Delta u=f$: stationär, ein Gleichgewicht, braucht nur Randbedingungen. Wärme $\\partial_tu=\\Delta u$: Ausgleich, braucht den Anfangswert und gegebenenfalls Randwerte; die Lösung wird sofort glatt, und das Problem ist nur vorwärts in der Zeit gut gestellt. Welle $\\partial_t^2u=c^2\\Delta u$: Ausbreitung mit endlicher Geschwindigkeit $c$, braucht Anfangsauslenkung und Anfangsgeschwindigkeit, Knicke bleiben erhalten. Der Typ legt fest, welche Daten man braucht, welche Methode passt und wie die Lösung aussieht.",
      "ru": "Три основных типа с разным поведением. Лаплас/Пуассон $-\\Delta u=f$: стационарное равновесие, нужны только граничные условия. Теплопроводность $\\partial_tu=\\Delta u$: выравнивание, нужны начальное значение и при необходимости граничные; решение сразу становится гладким, и задача корректна только вперёд по времени. Волна $\\partial_t^2u=c^2\\Delta u$: распространение с конечной скоростью $c$, нужны начальное отклонение и начальная скорость, изломы сохраняются. Тип определяет, какие данные нужны, какой метод подходит и как выглядит решение."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Eine Gleichung einem Typ zuordnen; sagen, welche Anfangs- und Randbedingungen nötig sind; durch Einsetzen prüfen, ob eine Funktion Lösung ist. Fallen: bei der Welle die zweite Anfangsbedingung vergessen; bei Wärme eine Endbedingung statt Anfangsbedingung vorgeben (rückwärts schlecht gestellt).",
      "ru": "Определить тип уравнения; сказать, какие начальные и граничные условия нужны; подстановкой проверить, является ли функция решением. Ловушки: для волны забыть второе начальное условие; для теплопроводности задать условие в конце вместо начала (назад задача некорректна)."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$u=X(x)T(t)$ – Produktansatz: ein Faktor nur vom Ort, einer nur von der Zeit.</li><li>$\\lambda$ – Separationskonstante; die erlaubten Werte $\\lambda_k$ sind Eigenwerte.</li><li>$L$ – Länge des Intervalls, $k=1,2,3,\\dots$ – Modennummer.</li><li>$a_k,b_k,c_k$ – Koeffizienten, die aus den Anfangsdaten bestimmt werden.</li><li>$c$ – Wellengeschwindigkeit.</li></ul>",
      "ru": "<ul><li>$u=X(x)T(t)$ – ансатц произведения: один множитель только от координаты, другой только от времени.</li><li>$\\lambda$ – константа разделения; допустимые значения $\\lambda_k$ – собственные значения.</li><li>$L$ – длина отрезка, $k=1,2,3,\\dots$ – номер моды.</li><li>$a_k,b_k,c_k$ – коэффициенты, которые находят из начальных данных.</li><li>$c$ – скорость волны.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Einsetzen von $u=XT$ in $u_t=u_{xx}$ und Teilen durch $XT$ gibt $\\frac{T'}T=\\frac{X''}X$. Links steht nur $t$, rechts nur $x$, also sind beide Seiten dieselbe Konstante $-\\lambda$. Aus $X''=-\\lambda X$ mit $X(0)=X(L)=0$ folgen nur die Werte $\\lambda_k=\\big(\\frac{k\\pi}L\\big)^2$ mit $X_k=\\sin\\frac{k\\pi x}L$ – ein Eigenwertproblem. Zu jedem $\\lambda_k$ löst man die Zeitgleichung: $e^{-\\lambda_kt}$ bei Wärme, $\\cos$ und $\\sin$ von $c\\sqrt{\\lambda_k}\\,t$ bei der Welle. Weil die Gleichung linear ist, ist jede Summe solcher Moden wieder eine Lösung. Die Koeffizienten kommen aus der Sinusreihe der Anfangsdaten.",
      "ru": "Подставляем $u=XT$ в $u_t=u_{xx}$ и делим на $XT$: $\\frac{T'}T=\\frac{X''}X$. Слева только $t$, справа только $x$, значит, обе части равны одной константе $-\\lambda$. Из $X''=-\\lambda X$ с $X(0)=X(L)=0$ допустимы только $\\lambda_k=\\big(\\frac{k\\pi}L\\big)^2$ с $X_k=\\sin\\frac{k\\pi x}L$ – задача на собственные значения. Для каждого $\\lambda_k$ решаем уравнение по времени: $e^{-\\lambda_kt}$ для теплопроводности, $\\cos$ и $\\sin$ от $c\\sqrt{\\lambda_k}\\,t$ для волны. Уравнение линейно, поэтому любая сумма таких мод – тоже решение. Коэффициенты берутся из ряда по синусам начальных данных."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Wärme- oder Wellengleichung auf $[0,L]$ mit gegebenen Anfangsdaten lösen. Ist $u_0$ schon eine Summe von Sinus-Moden, liest man die Koeffizienten ab, sonst $c_k=\\frac2L\\int_0^Lu_0\\sin\\frac{k\\pi x}L\\,dx$. Checks: Rand- und Anfangsbedingung einsetzen. Fallen: Faktor $\\frac2L$ vergessen; bei der Welle die Koeffizienten aus der Anfangsgeschwindigkeit (mit Faktor $\\frac{L}{k\\pi c}$) vergessen; Neumann-Ränder geben Cosinus und eine Konstante statt Sinus.",
      "ru": "Решить уравнение теплопроводности или волновое на $[0,L]$ с заданными начальными данными. Если $u_0$ уже сумма синус-мод, коэффициенты читаются сразу, иначе $c_k=\\frac2L\\int_0^Lu_0\\sin\\frac{k\\pi x}L\\,dx$. Проверки: подставить граничное и начальное условия. Ловушки: забыть множитель $\\frac2L$; для волны забыть коэффициенты из начальной скорости (с множителем $\\frac{L}{k\\pi c}$); граничные условия Неймана дают косинусы и константу вместо синусов."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li><b>harmonisch</b> – $\\Delta u=0$.</li><li>$\\Gamma$ – Fundamentallösung mit $-\\Delta\\Gamma=\\delta$.</li><li>$\\omega_n$ – Oberfläche der Einheitssphäre im $\\mathbb R^n$, $\\omega_3=4\\pi$.</li><li>$G(x,y)$ – Green'sche Funktion des Gebiets $\\Omega$: Antwort im Punkt $x$ auf eine Punktquelle in $y$, mit $G=0$ auf dem Rand.</li><li>$h_y$ – harmonische Korrektur, damit $G$ am Rand verschwindet.</li><li>$\\partial\\Omega$ – Rand; $\\partial_{\\nu}$ – Ableitung in Richtung der äußeren Normalen; $g$ – Randwerte.</li></ul>",
      "ru": "<ul><li><b>гармоническая</b> – $\\Delta u=0$.</li><li>$\\Gamma$ – фундаментальное решение, $-\\Delta\\Gamma=\\delta$.</li><li>$\\omega_n$ – площадь единичной сферы в $\\mathbb R^n$, $\\omega_3=4\\pi$.</li><li>$G(x,y)$ – функция Грина области $\\Omega$: отклик в точке $x$ на точечный источник в $y$, с $G=0$ на границе.</li><li>$h_y$ – гармоническая поправка, чтобы $G$ обращалась в ноль на границе.</li><li>$\\partial\\Omega$ – граница; $\\partial_{\\nu}$ – производная по внешней нормали; $g$ – граничные значения.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Harmonische Funktionen haben die Mittelwerteigenschaft: $u(x)$ ist gleich dem Mittelwert von $u$ über jede Sphäre um $x$, die im Gebiet liegt. Daraus folgt das Maximumprinzip: Max und Min werden auf dem Rand angenommen. Daraus folgt Eindeutigkeit, denn die Differenz zweier Lösungen ist harmonisch mit Randwerten $0$, also $0$. $\\Gamma$ ist das Potential einer Punktladung, im $\\mathbb R^3$ $\\frac1{4\\pi|x|}$. Die Green'sche Funktion ist $\\Gamma(x-y)$ minus eine harmonische Korrektur, sodass sie am Rand verschwindet. Für Halbraum und Kugel findet man sie mit Spiegelpunkten. Mit $G$ schreibt man die Lösung von $-\\Delta u=f$ mit $u=g$ am Rand als Integralformel.",
      "ru": "Гармонические функции обладают свойством среднего: $u(x)$ равно среднему $u$ по любой сфере вокруг $x$, лежащей в области. Отсюда принцип максимума: максимум и минимум достигаются на границе. Отсюда единственность: разность двух решений гармонична и равна $0$ на границе, значит, равна $0$. $\\Gamma$ – потенциал точечного заряда, в $\\mathbb R^3$ это $\\frac1{4\\pi|x|}$. Функция Грина – это $\\Gamma(x-y)$ минус гармоническая поправка, чтобы она обращалась в ноль на границе. Для полупространства и шара её находят через зеркальные точки. С $G$ решение $-\\Delta u=f$ с $u=g$ на границе записывается интегральной формулой."
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
      "ru": "Гармоническая функция ($\\Delta u=0$) в каждой точке равна среднему по любой сфере вокруг неё, целиком лежащей в области. Поэтому у неё нет внутренних бугров и ям, и максимум достигается на границе. Фундаментальное решение — потенциал точечного заряда. Функция Грина — тот же потенциал, к которому добавили «зеркальные» заряды, чтобы на границе области потенциал стал нулём.",
      "de": "Eine harmonische Funktion ($\\Delta u=0$) ist in jedem Punkt gleich ihrem Mittelwert über jede Kugelsphäre um diesen Punkt, die ganz im Gebiet liegt. Deshalb hat sie innen keine Buckel und keine Mulden, und das Maximum wird am Rand angenommen. Die Fundamentallösung ist das Potential einer Punktladung. Die Greensche Funktion ist dasselbe Potential plus „Spiegelladungen“, damit das Potential am Rand des Gebiets null wird."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Prüfen, ob eine Funktion harmonisch ist; mit dem Maximumprinzip Schranken für $u$ aus den Randwerten angeben; die Green'sche Funktion des Halbraums mit Spiegelpunkt hinschreiben; Eindeutigkeit begründen. Fallen: Vorzeichen in $-\\Delta\\Gamma=\\delta$; im $\\mathbb R^2$ ist $\\Gamma$ logarithmisch, nicht $\\frac1{|x|}$; das Maximumprinzip braucht ein beschränktes Gebiet.",
      "ru": "Проверить, гармонична ли функция; по принципу максимума оценить $u$ через граничные значения; записать функцию Грина полупространства через зеркальную точку; обосновать единственность. Ловушки: знак в $-\\Delta\\Gamma=\\delta$; в $\\mathbb R^2$ $\\Gamma$ логарифмическая, а не $\\frac1{|x|}$; принцип максимума требует ограниченной области."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$E(u)$ – Energiefunktional: ordnet jeder Funktion $u$ eine Zahl zu.</li><li>$\\nabla u$ – Gradient, $|\\nabla u|^2$ – Quadrat seiner Länge.</li><li>$\\Omega$ – Gebiet, $\\varphi$ – Testfunktion mit $\\varphi=0$ am Rand.</li><li><b>klassische Lösung</b> – $u$ zweimal stetig differenzierbar, Gleichung in jedem Punkt erfüllt.</li><li><b>schwache Lösung</b> – $u$ mit nur ersten Ableitungen (im $L^2$-Sinn), Gleichung nur in integrierter Form erfüllt.</li></ul>",
      "ru": "<ul><li>$E(u)$ – функционал энергии: сопоставляет каждой функции $u$ число.</li><li>$\\nabla u$ – градиент, $|\\nabla u|^2$ – квадрат его длины.</li><li>$\\Omega$ – область, $\\varphi$ – пробная функция с $\\varphi=0$ на границе.</li><li><b>классическое решение</b> – $u$ дважды непрерывно дифференцируема, уравнение выполнено в каждой точке.</li><li><b>слабое решение</b> – $u$ только с первыми производными (в смысле $L^2$), уравнение выполнено лишь в интегральной форме.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Man multipliziert $-\\Delta u=f$ mit $\\varphi$, integriert über $\\Omega$ und integriert partiell. Der Randterm fällt weg, weil $\\varphi=0$ am Rand. Es bleibt $\\int\\nabla u\\cdot\\nabla\\varphi=\\int f\\varphi$ – dafür braucht man nur erste Ableitungen von $u$. Jede klassische Lösung ist eine schwache, und eine schwache Lösung, die glatt genug ist, ist klassisch. Gleichzeitig ist die schwache Form die Bedingung, dass $E$ bei $u$ minimal ist: $\\frac{d}{d\\varepsilon}E(u+\\varepsilon\\varphi)\\big|_{\\varepsilon=0}=\\int\\nabla u\\cdot\\nabla\\varphi-\\int f\\varphi=0$. So wird aus einer PDE ein Minimierungsproblem in einem Hilbertraum, und dort lässt sich die Existenz einer Lösung beweisen.",
      "ru": "Умножаем $-\\Delta u=f$ на $\\varphi$, интегрируем по $\\Omega$ и интегрируем по частям. Граничный член исчезает, так как $\\varphi=0$ на границе. Остаётся $\\int\\nabla u\\cdot\\nabla\\varphi=\\int f\\varphi$ – для этого нужны только первые производные $u$. Любое классическое решение является слабым, а достаточно гладкое слабое решение – классическим. Одновременно слабая форма – это условие минимума $E$ в точке $u$: $\\frac{d}{d\\varepsilon}E(u+\\varepsilon\\varphi)\\big|_{\\varepsilon=0}=\\int\\nabla u\\cdot\\nabla\\varphi-\\int f\\varphi=0$. Так УрЧП превращается в задачу минимизации в гильбертовом пространстве, где можно доказать существование решения."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Die schwache Formulierung einer gegebenen Randwertaufgabe herleiten; zeigen, dass eine klassische Lösung schwach ist; das Energiefunktional hinschreiben und seine Euler-Lagrange-Gleichung ableiten. Fallen: Vorzeichen bei der partiellen Integration; nicht begründen, warum der Randterm verschwindet; bei Neumann-Rand sind die Testfunktionen am Rand nicht null, und ein Randterm bleibt stehen.",
      "ru": "Вывести слабую постановку данной краевой задачи; показать, что классическое решение является слабым; записать функционал энергии и вывести его уравнение Эйлера–Лагранжа. Ловушки: знак при интегрировании по частям; не обосновать, почему граничный член исчезает; при условии Неймана пробные функции на границе не нулевые, и граничный член остаётся."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\Gamma(x,t)$ – Wärmeleitungskern: Lösung für eine Punktquelle zur Zeit $0$.</li><li>$u_0$ – Anfangstemperatur, $u(x,0)=u_0(x)$.</li><li>$n$ – Raumdimension, $t\\gt0$ – Zeit.</li><li>$\\sqrt{2t}$ – Breite (Standardabweichung) von $\\Gamma$ in jeder Koordinate.</li><li>$\\hat u(y,t)$ – Fouriertransformierte in $x$ bei fester Zeit.</li></ul>",
      "ru": "<ul><li>$\\Gamma(x,t)$ – ядро теплопроводности: решение для точечного источника в момент $0$.</li><li>$u_0$ – начальная температура, $u(x,0)=u_0(x)$.</li><li>$n$ – размерность пространства, $t\\gt0$ – время.</li><li>$\\sqrt{2t}$ – ширина (стандартное отклонение) $\\Gamma$ по каждой координате.</li><li>$\\hat u(y,t)$ – преобразование Фурье по $x$ при фиксированном времени.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Fourier in $x$ macht aus $\\partial_tu=\\Delta u$ die gewöhnliche DGL $\\partial_t\\hat u=-|y|^2\\hat u$, also $\\hat u(y,t)=e^{-t|y|^2}\\hat u_0(y)$. Hohe Frequenzen werden stark gedämpft, deshalb glättet die Wärmeleitung. Ein Produkt im Frequenzraum ist eine Faltung im Ortsraum, und zu $e^{-t|y|^2}$ gehört der Gauß-Kern $\\Gamma$. Eigenschaften: $\\int\\Gamma\\,dx=1$, die Wärmemenge bleibt erhalten. Für jedes $t\\gt0$ ist $u$ glatt, auch wenn $u_0$ Sprünge hat. Ist $u_0\\ge0$ und nicht null, ist $u\\gt0$ überall: unendliche Ausbreitungsgeschwindigkeit. Rückwärts in der Zeit ist das Problem schlecht gestellt.",
      "ru": "Фурье по $x$ превращает $\\partial_tu=\\Delta u$ в обыкновенное ДУ $\\partial_t\\hat u=-|y|^2\\hat u$, значит $\\hat u(y,t)=e^{-t|y|^2}\\hat u_0(y)$. Высокие частоты сильно гасятся, поэтому теплопроводность сглаживает. Произведение в частотах – свёртка в пространстве, и множителю $e^{-t|y|^2}$ соответствует гауссово ядро $\\Gamma$. Свойства: $\\int\\Gamma\\,dx=1$, количество тепла сохраняется. При любом $t\\gt0$ решение $u$ гладкое, даже если у $u_0$ есть скачки. Если $u_0\\ge0$ и не равна нулю, то $u\\gt0$ везде: бесконечная скорость распространения. Назад по времени задача некорректна."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Lösung für konkrete $u_0$ angeben, z. B. $u_0=e^{-x^2}$ in 1D ergibt $u=\\frac1{\\sqrt{1+4t}}e^{-\\frac{x^2}{1+4t}}$; den Kern mit Fourier herleiten; Erhaltung und Glättung begründen. Checks: $u_t=u_{xx}$ einsetzen, $t\\to0$ gibt $u_0$, $\\int u\\,dx$ bleibt konstant. Fallen: $4t$ im Exponenten und $(4\\pi t)^{-n/2}$ davor; bei $u_t=k\\Delta u$ überall $t$ durch $kt$ ersetzen.",
      "ru": "Решение для конкретного $u_0$, например $u_0=e^{-x^2}$ в 1D даёт $u=\\frac1{\\sqrt{1+4t}}e^{-\\frac{x^2}{1+4t}}$; вывести ядро через Фурье; обосновать сохранение и сглаживание. Проверки: подставить в $u_t=u_{xx}$, при $t\\to0$ получить $u_0$, $\\int u\\,dx$ постоянен. Ловушки: $4t$ в показателе и $(4\\pi t)^{-n/2}$ перед экспонентой; при $u_t=k\\Delta u$ всюду заменить $t$ на $kt$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$c$ – Ausbreitungsgeschwindigkeit.</li><li>$f(x)=u(x,0)$ – Anfangsauslenkung, $g(x)=\\partial_tu(x,0)$ – Anfangsgeschwindigkeit.</li><li>$[x-ct,x+ct]$ – Abhängigkeitsgebiet: nur Daten dort beeinflussen $u(x,t)$.</li><li>$M_r[h](x)$ – Mittelwert von $h$ über die Sphäre mit Radius $r$ um $x$.</li><li>$F(x,t)$ – äußere Quelle; $w_s$ – freie Welle, die zur Zeit $s$ von der Quelle gestartet wird.</li></ul>",
      "ru": "<ul><li>$c$ – скорость распространения.</li><li>$f(x)=u(x,0)$ – начальное отклонение, $g(x)=\\partial_tu(x,0)$ – начальная скорость.</li><li>$[x-ct,x+ct]$ – область зависимости: только данные оттуда влияют на $u(x,t)$.</li><li>$M_r[h](x)$ – среднее $h$ по сфере радиуса $r$ вокруг $x$.</li><li>$F(x,t)$ – внешний источник; $w_s$ – свободная волна, запущенная источником в момент $s$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "In 1D wird die Gleichung mit $\\xi=x+ct$, $\\eta=x-ct$ zu $u_{\\xi\\eta}=0$. Also ist $u=F_1(x+ct)+F_2(x-ct)$: eine nach links und eine nach rechts laufende Welle mit fester Form. Aus $f$ und $g$ bestimmt man $F_1$, $F_2$ und erhält d'Alembert. $u(x,t)$ hängt nur von den Daten in $[x-ct,x+ct]$ ab: endliche Ausbreitungsgeschwindigkeit. In 3D (Kirchhoff) hängt $u(x,t)$ nur von den Daten auf der Sphäre mit Radius $ct$ ab. Ein kurzes Signal kommt als scharfer Puls an und ist danach vorbei (Huygens). In 2D hängt es von der ganzen Scheibe ab, das Signal klingt nach. Eine Quelle $F$ behandelt man mit Duhamel: Jeder Zeitpunkt $s$ der Quelle startet eine freie Welle, und man summiert alle.",
      "ru": "В 1D заменой $\\xi=x+ct$, $\\eta=x-ct$ уравнение становится $u_{\\xi\\eta}=0$. Значит, $u=F_1(x+ct)+F_2(x-ct)$: волна влево и волна вправо с неизменной формой. По $f$ и $g$ находим $F_1$, $F_2$ и получаем формулу Даламбера. $u(x,t)$ зависит только от данных на $[x-ct,x+ct]$: конечная скорость распространения. В 3D (Кирхгоф) $u(x,t)$ зависит только от данных на сфере радиуса $ct$. Короткий сигнал приходит резким импульсом и затем заканчивается (Гюйгенс). В 2D зависит от всего круга, сигнал «тянется». Источник $F$ учитывают по Дюамелю: каждый момент $s$ источника запускает свободную волну, и все складываются."
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "D'Alembert für konkrete $f$, $g$ auswerten und skizzieren, z. B. $f=0$, $g=\\mathbf 1_{[-1,1]}$; Abhängigkeitsgebiet einzeichnen; Huygens in 2D und 3D vergleichen. Checks: Bei $t=0$ muss $f$ herauskommen, $\\partial_tu$ bei $t=0$ muss $g$ sein. Fallen: Faktor $\\frac1{2c}$ vor dem Integral; Grenzen $x-ct$ und $x+ct$; die Welle glättet nicht – Knicke in $f$ bleiben erhalten und laufen mit.",
      "ru": "Вычислить и нарисовать решение Даламбера для конкретных $f$, $g$, например $f=0$, $g=\\mathbf 1_{[-1,1]}$; нарисовать область зависимости; сравнить принцип Гюйгенса в 2D и 3D. Проверки: при $t=0$ должно получиться $f$, $\\partial_tu$ при $t=0$ должно быть $g$. Ловушки: множитель $\\frac1{2c}$ перед интегралом; пределы $x-ct$ и $x+ct$; волна не сглаживает – изломы $f$ сохраняются и бегут вместе с ней."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\langle u,v\\rangle$ – Skalarprodukt: linear im zweiten Argument, konjugiert-linear im ersten (Physik-Konvention).</li><li>$\\overline{u(x)}$ – komplex konjugierter Wert.</li><li>$\\|u\\|=\\sqrt{\\langle u,u\\rangle}$ – Norm (Länge).</li><li>$\\ell^2$ – Folgen $(x_k)$ mit $\\sum|x_k|^2\\lt\\infty$; $L^2(\\Omega)$ – Funktionen mit $\\int_\\Omega|u|^2\\lt\\infty$.</li><li><b>Cauchy-Folge</b> – die Folgenglieder kommen sich beliebig nahe; <b>vollständig</b> – jede Cauchy-Folge hat einen Grenzwert im Raum.</li></ul>",
      "ru": "<ul><li>$\\langle u,v\\rangle$ – скалярное произведение: линейное по второму аргументу, сопряжённо-линейное по первому (соглашение физиков).</li><li>$\\overline{u(x)}$ – комплексно сопряжённое значение.</li><li>$\\|u\\|=\\sqrt{\\langle u,u\\rangle}$ – норма (длина).</li><li>$\\ell^2$ – последовательности $(x_k)$ с $\\sum|x_k|^2\\lt\\infty$; $L^2(\\Omega)$ – функции с $\\int_\\Omega|u|^2\\lt\\infty$.</li><li><b>фундаментальная (Коши) последовательность</b> – члены сколь угодно близки друг к другу; <b>полное</b> – у любой такой последовательности есть предел в пространстве.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ein Hilbertraum ist ein Vektorraum mit Skalarprodukt, der vollständig ist. Er verhält sich geometrisch wie $\\mathbb C^n$: Es gibt Längen, Orthogonalität, Projektionen und den Satz des Pythagoras $\\|u+v\\|^2=\\|u\\|^2+\\|v\\|^2$ für $u\\perp v$. In $L^2$ wird die Summe über Koordinaten zum Integral: $\\langle u,v\\rangle=\\int\\bar u\\,v$. Die Konjugation sorgt dafür, dass $\\langle u,u\\rangle=\\int|u|^2\\ge0$ wirklich eine Länge ist. Vollständigkeit braucht man, damit Grenzwerte wie Fourierreihen wieder im Raum liegen.",
      "ru": "Гильбертово пространство – векторное пространство со скалярным произведением, которое полно. Геометрически оно ведёт себя как $\\mathbb C^n$: есть длины, ортогональность, проекции и теорема Пифагора $\\|u+v\\|^2=\\|u\\|^2+\\|v\\|^2$ при $u\\perp v$. В $L^2$ сумма по координатам становится интегралом: $\\langle u,v\\rangle=\\int\\bar u\\,v$. Сопряжение нужно, чтобы $\\langle u,u\\rangle=\\int|u|^2\\ge0$ действительно было длиной. Полнота нужна, чтобы пределы, например ряды Фурье, снова лежали в пространстве."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$\\sin$ und $\\cos$ auf $[0,2\\pi]$:</b><ol><li>$\\langle\\sin,\\cos\\rangle=\\int_0^{2\\pi}\\sin x\\cos x\\,dx=\\frac12\\int_0^{2\\pi}\\sin2x\\,dx=0$ → senkrecht.</li><li>Länge: $\\|\\sin\\|^2=\\int_0^{2\\pi}\\sin^2x\\,dx=\\pi$ → $\\|\\sin\\|=\\sqrt\\pi$.</li></ol><b>Warum der Strich über $u$?</b> Nimm $u=(1,i)$ im $\\mathbb C^2$. Ohne Konjugieren: $1\\cdot1+i\\cdot i=1-1=0$ – eine Länge 0 für einen Vektor, der nicht 0 ist. Unsinn! Mit Konjugieren: $|1|^2+|i|^2=2$, also $\\|u\\|=\\sqrt2$ ✓.",
      "ru": "<b>$\\sin$ и $\\cos$ на $[0,2\\pi]$:</b><ol><li>$\\langle\\sin,\\cos\\rangle=\\int_0^{2\\pi}\\sin x\\cos x\\,dx=\\frac12\\int_0^{2\\pi}\\sin2x\\,dx=0$ → перпендикулярны.</li><li>Длина: $\\|\\sin\\|^2=\\int_0^{2\\pi}\\sin^2x\\,dx=\\pi$ → $\\|\\sin\\|=\\sqrt\\pi$.</li></ol><b>Зачем черта над $u$?</b> Возьми $u=(1,i)$ в $\\mathbb C^2$. Без сопряжения: $1\\cdot1+i\\cdot i=1-1=0$ — длина 0 у ненулевого вектора. Чепуха! С сопряжением: $|1|^2+|i|^2=2$, значит $\\|u\\|=\\sqrt2$ ✓."
     }
    },
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Prüfen, ob eine Formel ein Skalarprodukt ist (linear, hermitesch $\\langle u,v\\rangle=\\overline{\\langle v,u\\rangle}$, positiv definit); Normen und Skalarprodukte von Funktionen ausrechnen; Cauchy-Schwarz anwenden, z. B. $\\big(\\int_0^1f\\big)^2\\le\\int_0^1f^2$. Fallen: Die Konvention (linear im zweiten Argument) ist anders als in vielen Mathebüchern. „Positiv definit“ heißt in $L^2$: $\\langle u,u\\rangle=0$ nur für $u=0$ f.ü.",
      "ru": "Проверить, задаёт ли формула скалярное произведение (линейность, эрмитовость $\\langle u,v\\rangle=\\overline{\\langle v,u\\rangle}$, положительная определённость); посчитать нормы и скалярные произведения функций; применить Коши–Шварца, например $\\big(\\int_0^1f\\big)^2\\le\\int_0^1f^2$. Ловушки: соглашение (линейность по второму аргументу) отличается от многих математических книг. «Положительно определено» в $L^2$ значит: $\\langle u,u\\rangle=0$ только при $u=0$ почти всюду."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\{e_k\\}$ – <b>Orthonormalsystem</b>: $\\langle e_j,e_k\\rangle=\\delta_{jk}$.</li><li>$\\delta_{jk}$ – Kronecker-Delta: $1$ für $j=k$, sonst $0$.</li><li>$\\langle e_k,u\\rangle$ – Koeffizient von $u$ in Richtung $e_k$.</li><li><b>ONB</b> – vollständiges Orthonormalsystem: Nur der Nullvektor steht senkrecht auf allen $e_k$.</li><li>$P$ – orthogonale Projektion auf einen abgeschlossenen Unterraum.</li></ul>",
      "ru": "<ul><li>$\\{e_k\\}$ – <b>ортонормированная система</b>: $\\langle e_j,e_k\\rangle=\\delta_{jk}$.</li><li>$\\delta_{jk}$ – символ Кронекера: $1$ при $j=k$, иначе $0$.</li><li>$\\langle e_k,u\\rangle$ – коэффициент $u$ по направлению $e_k$.</li><li><b>ОНБ</b> – полная ортонормированная система: только нулевой вектор перпендикулярен всем $e_k$.</li><li>$P$ – ортогональная проекция на замкнутое подпространство.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Zu jedem $u$ gibt es in einem abgeschlossenen Unterraum genau einen nächsten Punkt $Pu$, und der Fehler $u-Pu$ steht senkrecht auf dem Unterraum. Bei einem Orthonormalsystem ist $Pu=\\sum\\langle e_k,u\\rangle e_k$. Bessel: Die Summe der Koeffizientenquadrate ist höchstens $\\|u\\|^2$. Ist das System vollständig, gilt Gleichheit (Parseval), und $u$ ist gleich seiner Reihe. In $L^2(-\\pi,\\pi)$ ist $\\big\\{\\frac{e^{ikx}}{\\sqrt{2\\pi}}\\big\\}_{k\\in\\mathbb Z}$ eine ONB, die Fourierreihe ist also eine Entwicklung nach einer Basis.",
      "ru": "Для любого $u$ в замкнутом подпространстве есть ровно одна ближайшая точка $Pu$, и ошибка $u-Pu$ перпендикулярна подпространству. Для ортонормированной системы $Pu=\\sum\\langle e_k,u\\rangle e_k$. Бессель: сумма квадратов коэффициентов не больше $\\|u\\|^2$. Если система полная, выполняется равенство (Парсеваль), и $u$ равно своему ряду. В $L^2(-\\pi,\\pi)$ система $\\big\\{\\frac{e^{ikx}}{\\sqrt{2\\pi}}\\big\\}_{k\\in\\mathbb Z}$ – ОНБ, то есть ряд Фурье – это разложение по базису."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$u=(3,4,0)$ mit der Standardbasis $e_1,e_2,e_3$:</b><ol><li>Koeffizienten: $\\langle e_1,u\\rangle=3$, $\\langle e_2,u\\rangle=4$, $\\langle e_3,u\\rangle=0$.</li><li>Parseval: $3^2+4^2+0^2=25=\\|u\\|^2$ ✓.</li><li>Projektion auf die $x$-Achse: $Pu=(3,0,0)$. Fehler $u-Pu=(0,4,0)$, und $(0,4,0)\\cdot e_1=0$ → steht senkrecht ✓.</li></ol>Bei Funktionen ist es dasselbe: Die Fourierkoeffizienten sind genau diese „wie viel in jede Richtung“-Zahlen.",
      "ru": "<b>$u=(3,4,0)$ в стандартном базисе $e_1,e_2,e_3$:</b><ol><li>Коэффициенты: $\\langle e_1,u\\rangle=3$, $\\langle e_2,u\\rangle=4$, $\\langle e_3,u\\rangle=0$.</li><li>Парсеваль: $3^2+4^2+0^2=25=\\|u\\|^2$ ✓.</li><li>Проекция на ось $x$: $Pu=(3,0,0)$. Ошибка $u-Pu=(0,4,0)$, и $(0,4,0)\\cdot e_1=0$ → перпендикулярна ✓.</li></ol>С функциями всё так же: коэффициенты Фурье — ровно эти числа «сколько в каждом направлении»."
     }
    },
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Fourierkoeffizienten einer Funktion ausrechnen und mit Parseval eine Reihe summieren. Klassiker: $u(x)=x$ auf $(-\\pi,\\pi)$ hat $|\\langle e_k,u\\rangle|^2=\\frac{2\\pi}{k^2}$ für $k\\neq0$ und $\\|u\\|^2=\\frac{2\\pi^3}3$, daraus $\\sum_{k\\ge1}\\frac1{k^2}=\\frac{\\pi^2}6$. Prüfen, ob ein System orthonormal ist; Bestapproximation in einem Unterraum. Fallen: Normierung $\\frac1{\\sqrt{2\\pi}}$ vergessen; Bessel (Ungleichung) und Parseval (Gleichung) verwechseln.",
      "ru": "Посчитать коэффициенты Фурье функции и через Парсеваля просуммировать ряд. Классика: у $u(x)=x$ на $(-\\pi,\\pi)$ $|\\langle e_k,u\\rangle|^2=\\frac{2\\pi}{k^2}$ при $k\\neq0$ и $\\|u\\|^2=\\frac{2\\pi^3}3$, отсюда $\\sum_{k\\ge1}\\frac1{k^2}=\\frac{\\pi^2}6$. Проверить, ортонормирована ли система; наилучшее приближение в подпространстве. Ловушки: забыть нормировку $\\frac1{\\sqrt{2\\pi}}$; спутать Бесселя (неравенство) и Парсеваля (равенство)."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$T$ – linearer Operator, $\\|T\\|=\\sup_{\\|u\\|=1}\\|Tu\\|$ – Operatornorm.</li><li>$\\sup$ – Supremum, kleinste obere Schranke.</li><li>$T^*$ – adjungierter Operator: $\\langle Tu,v\\rangle=\\langle u,T^*v\\rangle$.</li><li><b>selbstadjungiert</b> – $T=T^*$; <b>unitär</b> – $U^*U=UU^*=1$.</li><li>$M_m$ – Multiplikationsoperator: $(M_mu)(x)=m(x)u(x)$.</li></ul>",
      "ru": "<ul><li>$T$ – линейный оператор, $\\|T\\|=\\sup_{\\|u\\|=1}\\|Tu\\|$ – норма оператора.</li><li>$\\sup$ – супремум, точная верхняя граница.</li><li>$T^*$ – сопряжённый оператор: $\\langle Tu,v\\rangle=\\langle u,T^*v\\rangle$.</li><li><b>самосопряжённый</b> – $T=T^*$; <b>унитарный</b> – $U^*U=UU^*=1$.</li><li>$M_m$ – оператор умножения: $(M_mu)(x)=m(x)u(x)$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "$\\|T\\|$ ist der größte Faktor, um den $T$ die Länge eines Vektors vergrößert. Für lineare Operatoren ist „beschränkt“ dasselbe wie „stetig“. $T^*$ verallgemeinert die konjugiert-transponierte Matrix. Selbstadjungierte Operatoren haben reelle Erwartungswerte $\\langle u,Tu\\rangle$ und reelles Spektrum, deshalb beschreiben sie Observablen. Unitäre Operatoren erhalten Skalarprodukte und damit Längen und Winkel. Beispiele: die Fouriertransformation auf $L^2$ und die Zeitentwicklung in der Quantenmechanik.",
      "ru": "$\\|T\\|$ – наибольший множитель, в который $T$ увеличивает длину вектора. Для линейных операторов «ограниченный» – то же самое, что «непрерывный». $T^*$ обобщает сопряжённо-транспонированную матрицу. У самосопряжённых операторов вещественные средние $\\langle u,Tu\\rangle$ и вещественный спектр, поэтому они описывают наблюдаемые. Унитарные операторы сохраняют скалярное произведение, а значит, длины и углы. Примеры: преобразование Фурье на $L^2$ и эволюция во времени в квантовой механике."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ol><li><b>Norm:</b> $A=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$ streckt die $x$-Richtung um 2, die $y$-Richtung um 3. Stärkste Streckung → $\\|A\\|=3$.</li><li><b>Adjungiert:</b> $T=\\begin{pmatrix}1&i\\\\0&2\\end{pmatrix}$ → spiegeln und konjugieren → $T^*=\\begin{pmatrix}1&0\\\\-i&2\\end{pmatrix}$. Da $T^*\\neq T$, nicht selbstadjungiert.</li><li><b>Multiplikation</b> mit $m(x)=x^2$ auf $[0,1]$: größter Wert von $|m|$ ist $1$ → $\\|M_m\\|=1$.</li></ol>",
      "ru": "<ol><li><b>Норма:</b> $A=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$ растягивает направление $x$ в 2 раза, направление $y$ в 3. Самое сильное растяжение → $\\|A\\|=3$.</li><li><b>Сопряжённый:</b> $T=\\begin{pmatrix}1&i\\\\0&2\\end{pmatrix}$ → отражаем и сопрягаем → $T^*=\\begin{pmatrix}1&0\\\\-i&2\\end{pmatrix}$. Так как $T^*\\neq T$, не самосопряжённый.</li><li><b>Умножение</b> на $m(x)=x^2$ на $[0,1]$: наибольшее значение $|m|$ равно $1$ → $\\|M_m\\|=1$.</li></ol>"
     }
    },
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Norm eines Multiplikationsoperators ($\\|M_m\\|=\\sup|m|$) oder eines Integraloperators abschätzen; den adjungierten Operator bestimmen (für einen Integraloperator mit Kern $k(x,y)$ hat $T^*$ den Kern $\\overline{k(y,x)}$); prüfen, ob ein Operator selbstadjungiert oder unitär ist. Fallen: bei komplexen Einträgen das Konjugieren vergessen; $\\|T\\|$ mit dem größten Matrixeintrag verwechseln – $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ hat Norm $\\frac{1+\\sqrt5}2\\approx1{,}62$, nicht $1$.",
      "ru": "Оценить норму оператора умножения ($\\|M_m\\|=\\sup|m|$) или интегрального оператора; найти сопряжённый оператор (у интегрального оператора с ядром $k(x,y)$ сопряжённый $T^*$ имеет ядро $\\overline{k(y,x)}$); проверить, самосопряжён ли или унитарен оператор. Ловушки: забыть сопряжение при комплексных элементах; спутать $\\|T\\|$ с наибольшим элементом матрицы – у $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ норма $\\frac{1+\\sqrt5}2\\approx1{,}62$, а не $1$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\sigma(T)$ – Spektrum: alle $\\lambda\\in\\mathbb C$, für die $T-\\lambda$ keine beschränkte Inverse hat.</li><li>$(T-\\lambda)^{-1}$ – Resolvente.</li><li><b>Eigenwert</b> – $\\lambda$ mit $Tv=\\lambda v$ für ein $v\\neq0$ (Punktspektrum).</li><li><b>approximativer Eigenvektor</b> – Folge $u_k$ mit $\\|u_k\\|=1$ und $\\|(T-\\lambda)u_k\\|\\to0$.</li></ul>",
      "ru": "<ul><li>$\\sigma(T)$ – спектр: все $\\lambda\\in\\mathbb C$, при которых у $T-\\lambda$ нет ограниченного обратного.</li><li>$(T-\\lambda)^{-1}$ – резольвента.</li><li><b>собственное значение</b> – $\\lambda$ с $Tv=\\lambda v$ для некоторого $v\\neq0$ (точечный спектр).</li><li><b>приближённый собственный вектор</b> – последовательность $u_k$ с $\\|u_k\\|=1$ и $\\|(T-\\lambda)u_k\\|\\to0$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "In endlicher Dimension hat $T-\\lambda$ genau dann keine Inverse, wenn es nicht injektiv ist, also bei Eigenwerten. In unendlicher Dimension kann $T-\\lambda$ injektiv sein und trotzdem eine unbeschränkte Inverse haben. Dann gibt es approximative Eigenvektoren, aber keinen echten. Beispiel: Multiplikation mit $x$ auf $L^2[0,1]$ hat $\\sigma=[0,1]$ und keinen einzigen Eigenwert. Allgemein ist $\\sigma(T)$ kompakt und liegt in $|\\lambda|\\le\\|T\\|$. Für selbstadjungierte $T$ ist es reell, für unitäre liegt es auf dem Einheitskreis.",
      "ru": "В конечной размерности у $T-\\lambda$ нет обратного ровно тогда, когда он не инъективен, то есть при собственных значениях. В бесконечной размерности $T-\\lambda$ может быть инъективным и всё равно иметь неограниченный обратный. Тогда есть приближённые собственные векторы, но нет настоящего. Пример: умножение на $x$ в $L^2[0,1]$ имеет $\\sigma=[0,1]$ и ни одного собственного значения. В общем $\\sigma(T)$ компактно и лежит в $|\\lambda|\\le\\|T\\|$. Для самосопряжённых $T$ оно вещественно, для унитарных лежит на единичной окружности."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ol><li><b>Matrix</b> $A=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}$: $\\sigma(A)=\\{2,5\\}$. Ist $3$ im Spektrum? $A-3=\\begin{pmatrix}-1&0\\\\0&2\\end{pmatrix}$, Inverse $\\begin{pmatrix}-1&0\\\\0&\\frac12\\end{pmatrix}$ existiert → nein.</li><li><b>Multiplikation mit $x$</b> auf $L^2[0,1]$, $\\lambda=2$: Umkehrung = Multiplikation mit $\\frac1{x-2}$. Auf $[0,1]$ ist $|x-2|\\ge1$, also $\\big|\\frac1{x-2}\\big|\\le1$ → beschränkt → $2\\notin\\sigma$.</li><li>Gleicher Operator, $\\lambda=\\frac12$: $\\frac1{x-1/2}$ explodiert bei $x=\\frac12$ → $\\frac12\\in\\sigma$, obwohl es keine Eigenfunktion gibt.</li></ol>",
      "ru": "<ol><li><b>Матрица</b> $A=\\begin{pmatrix}2&0\\\\0&5\\end{pmatrix}$: $\\sigma(A)=\\{2,5\\}$. Лежит ли $3$ в спектре? $A-3=\\begin{pmatrix}-1&0\\\\0&2\\end{pmatrix}$, обратная $\\begin{pmatrix}-1&0\\\\0&\\frac12\\end{pmatrix}$ существует → нет.</li><li><b>Умножение на $x$</b> в $L^2[0,1]$, $\\lambda=2$: обращение — умножение на $\\frac1{x-2}$. На $[0,1]$ имеем $|x-2|\\ge1$, значит $\\big|\\frac1{x-2}\\big|\\le1$ → ограничен → $2\\notin\\sigma$.</li><li>Тот же оператор, $\\lambda=\\frac12$: $\\frac1{x-1/2}$ взрывается в $x=\\frac12$ → $\\frac12\\in\\sigma$, хотя собственной функции нет.</li></ol>"
     }
    },
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Spektrum eines Multiplikationsoperators bestimmen (für stetiges $m$ auf $[a,b]$ ist $\\sigma(M_m)$ das Bild $m([a,b])$); Spektrum einer Matrix; zeigen, dass ein $\\lambda$ nicht im Spektrum liegt, indem man die Inverse angibt und ihre Beschränktheit zeigt. Fallen: „Spektrum = Eigenwerte“ gilt nur in endlicher Dimension. Für $\\lambda\\in\\sigma$ genügt ein approximativer Eigenvektor, ein echter ist nicht nötig.",
      "ru": "Найти спектр оператора умножения (для непрерывной $m$ на $[a,b]$ $\\sigma(M_m)$ – образ $m([a,b])$); спектр матрицы; показать, что $\\lambda$ не в спектре, предъявив обратный оператор и доказав его ограниченность. Ловушки: «спектр = собственные значения» верно только в конечной размерности. Для $\\lambda\\in\\sigma$ достаточно приближённого собственного вектора, настоящий не нужен."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$A=A^*$ – selbstadjungierter (bei Matrizen: hermitescher) Operator.</li><li>$U$ – unitärer Operator, der die „richtige Basis“ herstellt.</li><li>$M_m$ – Multiplikation mit einer reellen Funktion $m$.</li><li>$f(A)$ – Funktion eines Operators, z. B. $A^2$, $e^{A}$, $e^{-itA}$.</li><li><b>kompakt</b> – bildet beschränkte Mengen auf Mengen mit kompaktem Abschluss ab; hat Eigenwerte $\\lambda_k\\to0$.</li></ul>",
      "ru": "<ul><li>$A=A^*$ – самосопряжённый (для матриц – эрмитов) оператор.</li><li>$U$ – унитарный оператор, переводящий в «правильный базис».</li><li>$M_m$ – умножение на вещественную функцию $m$.</li><li>$f(A)$ – функция от оператора, например $A^2$, $e^{A}$, $e^{-itA}$.</li><li><b>компактный</b> – переводит ограниченные множества в множества с компактным замыканием; собственные значения $\\lambda_k\\to0$.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Für eine hermitesche Matrix gibt es eine ONB aus Eigenvektoren. In ihr ist $A$ diagonal, und $f(A)$ heißt: $f$ auf jeden Eigenwert anwenden. Für kompakte selbstadjungierte Operatoren gilt dasselbe mit einer Folge $\\lambda_k\\to0$. Allgemeine selbstadjungierte Operatoren haben oft zu wenige Eigenvektoren. Dann übernimmt eine unitäre Abbildung $U$ die Rolle des Basiswechsels, und $A$ wird zur Multiplikation mit einer reellen Funktion. Beispiel: Fourier macht aus $P=-i\\frac d{dx}$ die Multiplikation mit $y$. Damit definiert man $f(A)$, zum Beispiel die Zeitentwicklung $e^{-itH}$, und es gilt $\\sigma(f(A))=f(\\sigma(A))$ für stetiges $f$.",
      "ru": "У эрмитовой матрицы есть ОНБ из собственных векторов. В нём $A$ диагональна, и $f(A)$ значит: применить $f$ к каждому собственному значению. Для компактных самосопряжённых операторов то же самое с последовательностью $\\lambda_k\\to0$. У общих самосопряжённых операторов собственных векторов часто не хватает. Тогда роль смены базиса играет унитарное отображение $U$, и $A$ становится умножением на вещественную функцию. Пример: Фурье превращает $P=-i\\frac d{dx}$ в умножение на $y$. Так определяют $f(A)$, например эволюцию $e^{-itH}$, и $\\sigma(f(A))=f(\\sigma(A))$ для непрерывной $f$."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$</b> (symmetrisch):<ol><li>Eigenvektoren: $(1,1)$ mit $A(1,1)=(3,3)$ → Eigenwert $3$; $(1,-1)$ mit $A(1,-1)=(1,-1)$ → Eigenwert $1$.</li><li>Also $\\sigma(A)=\\{1,3\\}$. Die zwei Eigenvektoren stehen senkrecht: $(1,1)\\cdot(1,-1)=0$ ✓.</li><li>$A^2$: Eigenwerte $1^2=1$ und $3^2=9$. Direkt: $A^2=\\begin{pmatrix}5&4\\\\4&5\\end{pmatrix}$, Eigenwerte $5\\pm4=9,1$ ✓.</li></ol>Genau das ist $\\sigma(f(A))=f(\\sigma(A))$ für $f(x)=x^2$.",
      "ru": "<b>$A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$</b> (симметричная):<ol><li>Собственные векторы: $(1,1)$, так как $A(1,1)=(3,3)$ → собственное значение $3$; $(1,-1)$, так как $A(1,-1)=(1,-1)$ → собственное значение $1$.</li><li>Значит, $\\sigma(A)=\\{1,3\\}$. Два собственных вектора перпендикулярны: $(1,1)\\cdot(1,-1)=0$ ✓.</li><li>$A^2$: собственные значения $1^2=1$ и $3^2=9$. Напрямую: $A^2=\\begin{pmatrix}5&4\\\\4&5\\end{pmatrix}$, собственные значения $5\\pm4=9,1$ ✓.</li></ol>Это и есть $\\sigma(f(A))=f(\\sigma(A))$ для $f(x)=x^2$."
     }
    },
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Eine $2\\times2$-Matrix diagonalisieren und $f(A)$ ausrechnen (z. B. $e^{tA}$ oder $A^{10}$); das Spektrum von $f(A)$ angeben; Eigenwerte und Eigenfunktionen eines kompakten Integraloperators. Checks: $\\operatorname{tr}A=\\sum\\lambda_k$, $\\det A=\\prod\\lambda_k$; Eigenvektoren zu verschiedenen Eigenwerten stehen senkrecht. Falle: Eigenvektoren nicht normieren, dann ist die Basiswechselmatrix nicht unitär.",
      "ru": "Диагонализовать матрицу $2\\times2$ и посчитать $f(A)$ (например $e^{tA}$ или $A^{10}$); указать спектр $f(A)$; собственные значения и функции компактного интегрального оператора. Проверки: $\\operatorname{tr}A=\\sum\\lambda_k$, $\\det A=\\prod\\lambda_k$; собственные векторы к разным собственным значениям перпендикулярны. Ловушка: не нормировать собственные векторы – тогда матрица перехода не унитарна."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$\\psi$ – Zustand, Einheitsvektor $\\|\\psi\\|=1$.</li><li>$A$ – Observable, selbstadjungierter Operator.</li><li>$E_\\psi(A)$ – Erwartungswert, $V_\\psi(A)$ – Varianz (mittlere quadratische Abweichung).</li><li>$[A,B]=AB-BA$ – Kommutator.</li><li>$\\rho$ – Dichtematrix: $\\rho\\ge0$ (positiv semidefinit), $\\operatorname{tr}\\rho=1$; $\\operatorname{tr}$ – Spur.</li><li>$Q$ – Ort, $P$ – Impuls, $H$ – Hamiltonoperator (Energie), $\\hbar$ – reduziertes Plancksches Wirkungsquantum.</li></ul>",
      "ru": "<ul><li>$\\psi$ – состояние, единичный вектор $\\|\\psi\\|=1$.</li><li>$A$ – наблюдаемая, самосопряжённый оператор.</li><li>$E_\\psi(A)$ – среднее значение, $V_\\psi(A)$ – дисперсия (средний квадрат отклонения).</li><li>$[A,B]=AB-BA$ – коммутатор.</li><li>$\\rho$ – матрица плотности: $\\rho\\ge0$ (положительно полуопределена), $\\operatorname{tr}\\rho=1$; $\\operatorname{tr}$ – след.</li><li>$Q$ – координата, $P$ – импульс, $H$ – гамильтониан (энергия), $\\hbar$ – приведённая постоянная Планка.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Mögliche Messwerte sind Punkte des Spektrums von $A$. Hat $A$ eine ONB aus Eigenvektoren $e_k$, misst man $\\lambda_k$ mit Wahrscheinlichkeit $|\\langle e_k,\\psi\\rangle|^2$, und der Mittelwert vieler Messungen ist $\\langle\\psi,A\\psi\\rangle$. Die Varianz misst die Streuung um diesen Mittelwert. Nach Robertson ist $V(A)V(B)\\ge\\frac14|\\langle[A,B]\\rangle|^2$: Nicht vertauschende Observablen können nicht gleichzeitig scharf sein. Mit $[Q,P]=i\\hbar$ folgt Heisenberg. Ein statistisches Gemisch beschreibt $\\rho$; es ist genau dann ein reiner Zustand, wenn $\\operatorname{tr}\\rho^2=1$. Die Zeitentwicklung $e^{-itH/\\hbar}$ ist unitär, also bleibt $\\|\\psi\\|=1$.",
      "ru": "Возможные результаты измерения – точки спектра $A$. Если у $A$ есть ОНБ из собственных векторов $e_k$, то $\\lambda_k$ получается с вероятностью $|\\langle e_k,\\psi\\rangle|^2$, а среднее многих измерений равно $\\langle\\psi,A\\psi\\rangle$. Дисперсия измеряет разброс вокруг этого среднего. По Робертсону $V(A)V(B)\\ge\\frac14|\\langle[A,B]\\rangle|^2$: некоммутирующие наблюдаемые не могут быть одновременно точными. Из $[Q,P]=i\\hbar$ следует Гейзенберг. Статистическую смесь описывает $\\rho$; она – чистое состояние ровно тогда, когда $\\operatorname{tr}\\rho^2=1$. Эволюция $e^{-itH/\\hbar}$ унитарна, поэтому $\\|\\psi\\|=1$ сохраняется."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>Spin: $A=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$, Zustand $\\psi=\\frac1{\\sqrt2}(1,1)$.</b><ol><li>Mögliche Ergebnisse: Eigenwerte $+1$ und $-1$, je mit Wahrscheinlichkeit $\\big(\\frac1{\\sqrt2}\\big)^2=\\frac12$.</li><li>Erwartungswert: $\\langle\\psi,A\\psi\\rangle=\\frac12(1-1)=0$.</li><li>Streuung: $\\|(A-0)\\psi\\|^2=\\big\\|\\tfrac1{\\sqrt2}(1,-1)\\big\\|^2=1$. Passt: Ergebnisse $\\pm1$ um den Mittelwert 0.</li><li>Dichtematrix $\\rho=\\begin{pmatrix}\\frac12&\\frac12\\\\\\frac12&\\frac12\\end{pmatrix}$: $\\rho^2=\\rho$, $\\operatorname{tr}\\rho^2=1$ → reiner Zustand ✓. Das Gemisch $\\begin{pmatrix}\\frac12&0\\\\0&\\frac12\\end{pmatrix}$ hat $\\operatorname{tr}\\rho^2=\\frac12\\lt1$.</li></ol>",
      "ru": "<b>Спин: $A=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$, состояние $\\psi=\\frac1{\\sqrt2}(1,1)$.</b><ol><li>Возможные результаты: собственные значения $+1$ и $-1$, каждое с вероятностью $\\big(\\frac1{\\sqrt2}\\big)^2=\\frac12$.</li><li>Среднее: $\\langle\\psi,A\\psi\\rangle=\\frac12(1-1)=0$.</li><li>Разброс: $\\|(A-0)\\psi\\|^2=\\big\\|\\tfrac1{\\sqrt2}(1,-1)\\big\\|^2=1$. Сходится: результаты $\\pm1$ вокруг среднего 0.</li><li>Матрица плотности $\\rho=\\begin{pmatrix}\\frac12&\\frac12\\\\\\frac12&\\frac12\\end{pmatrix}$: $\\rho^2=\\rho$, $\\operatorname{tr}\\rho^2=1$ → чистое состояние ✓. Смесь $\\begin{pmatrix}\\frac12&0\\\\0&\\frac12\\end{pmatrix}$ имеет $\\operatorname{tr}\\rho^2=\\frac12\\lt1$.</li></ol>"
     }
    },
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Für eine $2\\times2$-Observable in einem gegebenen Zustand Messwerte, Wahrscheinlichkeiten, Erwartungswert und Varianz ausrechnen; Kommutatoren berechnen; prüfen, ob $\\rho$ eine Dichtematrix und ob sie rein ist. Fallen: Zustand nicht normiert; Wahrscheinlichkeit als $\\langle e_k,\\psi\\rangle$ statt $|\\langle e_k,\\psi\\rangle|^2$; Varianz als $E(A^2)$ statt $E(A^2)-E(A)^2$.",
      "ru": "Для наблюдаемой $2\\times2$ в данном состоянии найти результаты, вероятности, среднее и дисперсию; посчитать коммутаторы; проверить, является ли $\\rho$ матрицей плотности и чистое ли это состояние. Ловушки: ненормированное состояние; вероятность как $\\langle e_k,\\psi\\rangle$ вместо $|\\langle e_k,\\psi\\rangle|^2$; дисперсия как $E(A^2)$ вместо $E(A^2)-E(A)^2$."
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
     "type": "zeichen",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<ul><li>$D(A)$ – Definitionsbereich: die Vektoren, auf die $A$ angewendet werden darf; meist dicht in $\\mathcal H$.</li><li><b>symmetrisch</b> – $\\langle Au,v\\rangle=\\langle u,Av\\rangle$ für alle $u,v\\in D(A)$.</li><li>$A^*$, $D(A^*)$ – adjungierter Operator und sein Definitionsbereich.</li><li><b>selbstadjungiert</b> – symmetrisch und $D(A^*)=D(A)$.</li><li>$P=-i\\frac{d}{dx}$ – Impuls (mit $\\hbar=1$), $Q=M_x$ – Ort.</li></ul>",
      "ru": "<ul><li>$D(A)$ – область определения: векторы, к которым можно применять $A$; обычно плотна в $\\mathcal H$.</li><li><b>симметричный</b> – $\\langle Au,v\\rangle=\\langle u,Av\\rangle$ для всех $u,v\\in D(A)$.</li><li>$A^*$, $D(A^*)$ – сопряжённый оператор и его область определения.</li><li><b>самосопряжённый</b> – симметричный и $D(A^*)=D(A)$.</li><li>$P=-i\\frac{d}{dx}$ – импульс (при $\\hbar=1$), $Q=M_x$ – координата.</li></ul>"
     }
    },
    {
     "type": "heisst",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Ableiten kann die Norm beliebig vergrößern: $\\frac{\\|(\\sin kx)'\\|}{\\|\\sin kx\\|}=k$. Unbeschränkte Operatoren sind deshalb nur auf einem dichten Teilraum $D(A)$ definiert. Symmetrie prüft man mit partieller Integration: Die Randterme müssen für alle $u,v\\in D(A)$ verschwinden. Selbstadjungiert verlangt zusätzlich $D(A^*)=D(A)$. Erst dann ist das Spektrum reell, und der Spektralsatz gilt. Darüber entscheiden die Randbedingungen. Auf $[0,1]$ ist $P$ mit $u(0)=u(1)=0$ symmetrisch, aber nicht selbstadjungiert ($D(A^*)$ hat keine Randbedingung). Mit periodischer Bedingung $u(0)=u(1)$ ist $P$ selbstadjungiert.",
      "ru": "Дифференцирование может сколь угодно увеличить норму: $\\frac{\\|(\\sin kx)'\\|}{\\|\\sin kx\\|}=k$. Поэтому неограниченные операторы определены только на плотном подпространстве $D(A)$. Симметричность проверяют интегрированием по частям: граничные члены должны исчезать для всех $u,v\\in D(A)$. Самосопряжённость требует ещё $D(A^*)=D(A)$. Только тогда спектр вещественный и работает спектральная теорема. Это решают граничные условия. На $[0,1]$ оператор $P$ с $u(0)=u(1)=0$ симметричен, но не самосопряжён ($D(A^*)$ без граничного условия). С периодическим условием $u(0)=u(1)$ $P$ самосопряжён."
     }
    },
    {
     "type": "beispiel",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "<b>$u_k=\\sin(kx)$ auf $[0,\\pi]$:</b><ol><li>Länge: $\\|u_k\\|^2=\\int_0^\\pi\\sin^2(kx)\\,dx=\\frac\\pi2$ – für jedes $k$ gleich.</li><li>Ableitung: $u_k'=k\\cos(kx)$, $\\|u_k'\\|^2=k^2\\cdot\\frac\\pi2$.</li><li>Verstärkung: $\\frac{\\|u_k'\\|}{\\|u_k\\|}=k$. Für $k=10$: Faktor 10, für $k=1000$: Faktor 1000 → kein Höchstfaktor → unbeschränkt.</li></ol>",
      "ru": "<b>$u_k=\\sin(kx)$ на $[0,\\pi]$:</b><ol><li>Длина: $\\|u_k\\|^2=\\int_0^\\pi\\sin^2(kx)\\,dx=\\frac\\pi2$ — одинаковая для всех $k$.</li><li>Производная: $u_k'=k\\cos(kx)$, $\\|u_k'\\|^2=k^2\\cdot\\frac\\pi2$.</li><li>Усиление: $\\frac{\\|u_k'\\|}{\\|u_k\\|}=k$. При $k=10$ множитель 10, при $k=1000$ — 1000 → максимального множителя нет → неограничен.</li></ol>"
     }
    },
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
    },
    {
     "type": "pruefung",
     "label": {
      "de": "",
      "ru": ""
     },
     "html": {
      "de": "Symmetrie von $-i\\frac d{dx}$ oder $-\\frac{d^2}{dx^2}$ mit gegebenen Randbedingungen prüfen – partiell integrieren und die Randterme ausschreiben; zeigen, dass $\\frac d{dx}$ unbeschränkt ist (Folge $\\sin kx$). Fallen: „symmetrisch“ und „selbstadjungiert“ gleichsetzen; Randterme weglassen; beim Konjugieren von $-i$ das Vorzeichen vergessen.",
      "ru": "Проверить симметричность $-i\\frac d{dx}$ или $-\\frac{d^2}{dx^2}$ с заданными граничными условиями – проинтегрировать по частям и выписать граничные члены; показать, что $\\frac d{dx}$ неограничен (последовательность $\\sin kx$). Ловушки: отождествить «симметричный» и «самосопряжённый»; потерять граничные члены; забыть знак при сопряжении $-i$."
     }
    }
   ]
  }
 }
};
