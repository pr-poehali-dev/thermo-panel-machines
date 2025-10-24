import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const machines = [
    {
      id: 1,
      title: "ЧПУ Станок для нарезки пенопласта",
      subtitle: "работает без компьютера с карты памяти",
      image: "https://cdn.poehali.dev/projects/b72ccffc-1ade-458f-8ea6-813f2d544224/files/ed19c604-14fe-451b-9e26-7a6db7efa4e3.jpg",
      specs: [
        "2 оси X Y",
        "Рабочая зона: 1500×1500×1500 мм",
        "Работа без компьютера с карты памяти",
        "ПО для управления и создания файлов",
        "Видео-обучение в комплекте",
        "Срок изготовления: 30 дней"
      ],
      price: "По запросу"
    },
    {
      id: 2,
      title: "Станок для протяжки термопанелей",
      subtitle: "нанесение составов по трафарету",
      image: "https://cdn.poehali.dev/projects/b72ccffc-1ade-458f-8ea6-813f2d544224/files/b506319b-831f-40ce-9561-2feda2e079e4.jpg",
      specs: [
        "1 трафарет под ваш чертёж в комплекте",
        "Регулируемый подъём стола под любую толщину",
        "Упоры для точного положения панели",
        "Скорость работы: 1 панель/минуту",
        "Достаточно 1 оператора"
      ],
      price: "По запросу"
    },
    {
      id: 3,
      title: "Станок для протяжки 2-го слоя",
      subtitle: "финишное декоративное покрытие",
      image: "https://cdn.poehali.dev/projects/b72ccffc-1ade-458f-8ea6-813f2d544224/files/d7546efe-7ef9-4916-aeb8-1217e62d7aaf.jpg",
      specs: [
        "Производительность: до 400 м²/смену",
        "Текстурирование поверхности",
        "Точность нанесения: ±0.3 мм",
        "Система контроля качества"
      ],
      price: "от 2 100 000 ₽"
    }
  ];

  const technologies = [
    {
      step: 1,
      icon: "Scissors",
      title: "Нарезка пенопласта",
      description: "ЧПУ станок выполняет точную нарезку пенопласта с четвертями по заданным параметрам"
    },
    {
      step: 2,
      icon: "Layers",
      title: "Протяжка 1-го слоя",
      description: "Нанесение базового армирующего слоя на подготовленные заготовки из пенопласта"
    },
    {
      step: 3,
      icon: "Paintbrush",
      title: "Протяжка 2-го слоя",
      description: "Финишное декоративное покрытие с текстурированием и колеровкой"
    },
    {
      step: 4,
      icon: "CheckCircle",
      title: "Контроль качества",
      description: "Автоматический контроль геометрии, адгезии и внешнего вида готовых панелей"
    }
  ];

  const advantages = [
    {
      icon: "Zap",
      title: "Высокая производительность",
      description: "До 1000 м² термопанелей за смену"
    },
    {
      icon: "Target",
      title: "Точность изготовления",
      description: "Погрешность не более ±0.5 мм"
    },
    {
      icon: "Settings",
      title: "Автоматизация процесса",
      description: "Минимальное участие оператора"
    },
    {
      icon: "TrendingDown",
      title: "Низкий процент брака",
      description: "Менее 2% отходов производства"
    },
    {
      icon: "Wrench",
      title: "Простое обслуживание",
      description: "Модульная конструкция оборудования"
    },
    {
      icon: "Shield",
      title: "Гарантия 3 года",
      description: "Полное сервисное обслуживание"
    }
  ];

  const cases = [
    {
      title: "Завод «СтройТехПром»",
      result: "Производство 15 000 м²/месяц",
      description: "Запуск полного цикла производства фасадных термопанелей с нуля",
      metrics: [
        { label: "Окупаемость", value: "18 месяцев" },
        { label: "Персонал", value: "4 оператора" }
      ]
    },
    {
      title: "ООО «ТермоФасад»",
      result: "Модернизация линии",
      description: "Замена устаревшего оборудования на современные ЧПУ станки",
      metrics: [
        { label: "Рост производства", value: "+340%" },
        { label: "Снижение брака", value: "с 12% до 1.8%" }
      ]
    },
    {
      title: "ИП Михайлов",
      result: "Малый бизнес",
      description: "Запуск производства с одним станком ЧПУ для нарезки пенопласта",
      metrics: [
        { label: "Стартовая мощность", value: "3 000 м²/мес" },
        { label: "ROI", value: "24 месяца" }
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Factory" size={32} className="text-primary" />
              <span className="text-xl font-bold text-foreground">ТехноМаш</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('catalog')} className="text-sm font-medium hover:text-primary transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('technologies')} className="text-sm font-medium hover:text-primary transition-colors">
                Технологии
              </button>
              <button onClick={() => scrollToSection('advantages')} className="text-sm font-medium hover:text-primary transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-primary transition-colors">
                Кейсы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')}>
              Получить КП
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4" variant="secondary">
              Производственное оборудование премиум-класса
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Станки для производства
              <span className="block text-primary mt-2">фасадных термопанелей</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл оборудования: от ЧПУ нарезки пенопласта до финишного покрытия. 
              Автоматизация, точность, надёжность.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => scrollToSection('catalog')} className="gap-2">
                <Icon name="ShoppingCart" size={20} />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="gap-2">
                <Icon name="MessageSquare" size={20} />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Каталог оборудования</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для производства термопанелей любого масштаба
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machines.map((machine) => (
              <Card key={machine.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-destructive/10">
                  <img 
                    src={machine.image} 
                    alt={machine.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{machine.title}</h3>
                    <p className="text-sm text-muted-foreground">{machine.subtitle}</p>
                  </div>
                  <div className="space-y-2">
                    {machine.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{machine.price}</span>
                    <Button variant="outline" onClick={() => scrollToSection('contacts')}>
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="technologies" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Технология производства</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Современный автоматизированный процесс изготовления термопанелей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div key={tech.step} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={tech.icon} size={32} className="text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-lg font-bold">
                        {tech.step}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{tech.title}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </CardContent>
                </Card>
                {tech.step < technologies.length && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={24} className="text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Преимущества оборудования</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему более 150 производств выбрали наши станки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name={advantage.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Успешные проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Building2" size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{caseItem.title}</h3>
                  </div>
                  <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <p className="text-xl font-bold text-primary">{caseItem.result}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    {caseItem.metrics.map((metric, midx) => (
                      <div key={midx}>
                        <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                        <p className="text-lg font-bold text-foreground">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Получить коммерческое предложение</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Ваше имя *</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Телефон *</label>
                      <Input placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Комментарий</label>
                    <Textarea 
                      placeholder="Укажите интересующее оборудование и объём производства..."
                      rows={4}
                    />
                  </div>
                  <Button size="lg" className="w-full gap-2">
                    <Icon name="Send" size={20} />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardContent className="p-6 text-center space-y-2">
                  <Icon name="Phone" size={32} className="text-primary mx-auto" />
                  <h3 className="font-bold text-foreground">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-2">
                  <Icon name="Mail" size={32} className="text-primary mx-auto" />
                  <h3 className="font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground">info@technomash.ru</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-2">
                  <Icon name="MapPin" size={32} className="text-primary mx-auto" />
                  <h3 className="font-bold text-foreground">Адрес</h3>
                  <p className="text-muted-foreground">г. Москва, ул. Промышленная, 15</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Factory" size={24} />
              <span className="font-bold">ТехноМаш</span>
            </div>
            <p className="text-sm text-background/70">
              © 2024 ТехноМаш. Оборудование для производства термопанелей
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;