import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quests = [
    {
      title: 'Тайна старого особняка',
      difficulty: 'Средний',
      duration: '60 минут',
      players: '2-6 человек',
      price: '2500₽',
      image: '🏚️',
      rating: 4.9
    },
    {
      title: 'Ограбление века',
      difficulty: 'Сложный',
      duration: '90 минут',
      players: '3-8 человек',
      price: '3500₽',
      image: '💎',
      rating: 5.0
    },
    {
      title: 'Секретная лаборатория',
      difficulty: 'Лёгкий',
      duration: '60 минут',
      players: '2-5 человек',
      price: '2200₽',
      image: '🧪',
      rating: 4.8
    }
  ];

  const benefits = [
    { icon: 'Sparkles', title: 'Премиум интерьеры', desc: 'Авторские декорации' },
    { icon: 'Users', title: 'До 8 человек', desc: 'Идеально для компаний' },
    { icon: 'Clock', title: 'Гибкое время', desc: 'Работаем 10:00 - 23:00' },
    { icon: 'Trophy', title: 'Топ-1 в городе', desc: 'По отзывам игроков' }
  ];

  const stats = [
    { value: '5000+', label: 'Довольных игроков' },
    { value: '15', label: 'Уникальных квестов' },
    { value: '4.9', label: 'Средний рейтинг' },
    { value: '98%', label: 'Успешных побегов' }
  ];

  const steps = [
    { number: '01', title: 'Выберите квест', desc: 'Из 15 уникальных сценариев' },
    { number: '02', title: 'Забронируйте время', desc: 'Онлайн за 30 секунд' },
    { number: '03', title: 'Приходите и играйте', desc: 'Адреналин гарантирован' }
  ];

  const reviews = [
    { name: 'Анна М.', text: 'Невероятные эмоции! Декорации на высшем уровне', rating: 5 },
    { name: 'Дмитрий К.', text: 'Лучший квест из всех, что проходили. Рекомендую!', rating: 5 },
    { name: 'Елена П.', text: 'Отпраздновали день рождения — все в восторге!', rating: 5 }
  ];

  const prices = [
    { name: 'Будний день', price: 'от 2000₽', features: ['Пн-Чт 10:00-18:00', 'До 4 человек', 'Фотозона'] },
    { name: 'Выходные', price: 'от 2500₽', popular: true, features: ['Пт-Вс любое время', 'До 6 человек', 'Фотозона + видео'] },
    { name: 'VIP формат', price: 'от 5000₽', features: ['Любой день', 'До 8 человек', 'Личный ведущий', 'Кейтеринг'] }
  ];

  const faqs = [
    { q: 'Можно ли играть детям?', a: 'Да, у нас есть квесты для детей от 8 лет. Детям до 14 лет нужно присутствие взрослого.' },
    { q: 'Что если не выберемся вовремя?', a: 'Не волнуйтесь! Администратор всегда на связи и поможет в нужный момент.' },
    { q: 'Можно ли отменить бронь?', a: 'Да, бесплатная отмена за 24 часа до игры. Позже — возврат 50%.' },
    { q: 'Есть ли парковка?', a: 'Да, бесплатная парковка для гостей прямо у входа.' }
  ];

  return (
    <div className="min-h-screen bg-[rgb(10,10,10)] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgb(212,175,55) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 text-sm px-4 py-2">
            🏆 Топ-1 квесты в вашем городе
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Откройте дверь в мир
            <br />
            <span className="text-gradient">незабываемых приключений</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Премиальные квест-комнаты с авторскими декорациями. 
            Погрузитесь в реальность, где каждая деталь имеет значение
          </p>
          
          <div className="mb-10 max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl gold-glow">
            <img 
              src="https://cdn.poehali.dev/projects/0a926438-b1ca-4da6-b80a-e94eddefac22/files/34ceed54-612e-4e09-923e-45ce0dfa73e2.jpg"
              alt="Атмосферная квест-комната"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-8 py-6 text-lg gold-glow">
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать квест
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <Card key={i} className="bg-card border-border p-6 hover-lift cursor-pointer">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quests Section */}
      <section className="py-20 px-4 bg-[rgb(13,13,13)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Популярные <span className="text-gradient">квесты</span>
            </h2>
            <p className="text-gray-400 text-lg">Выберите свое приключение</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quests.map((quest, i) => (
              <Card key={i} className="bg-card border-border overflow-hidden hover-lift cursor-pointer group">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 h-48 flex items-center justify-center text-8xl">
                  {quest.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {quest.difficulty}
                    </Badge>
                    <div className="flex items-center text-primary">
                      <Icon name="Star" size={16} className="fill-current mr-1" />
                      <span className="font-semibold">{quest.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {quest.title}
                  </h3>
                  
                  <div className="space-y-2 text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2" />
                      <span>{quest.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Users" size={16} className="mr-2" />
                      <span>{quest.players}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-gradient">{quest.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-black">
                      Забронировать
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10">
              Смотреть все квесты
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Как это <span className="text-gradient">работает</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
                    <Icon name="ArrowRight" className="text-primary/30" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-[rgb(13,13,13)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Отзывы <span className="text-gradient">игроков</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <Card key={i} className="bg-card border-border p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Icon key={j} name="Star" size={20} className="text-primary fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <p className="text-primary font-semibold">— {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Тарифы и <span className="text-gradient">цены</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {prices.map((price, i) => (
              <Card 
                key={i} 
                className={`bg-card border-border p-8 hover-lift cursor-pointer ${
                  price.popular ? 'ring-2 ring-primary gold-glow' : ''
                }`}
              >
                {price.popular && (
                  <Badge className="bg-primary text-black mb-4">Популярный</Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{price.name}</h3>
                <div className="text-4xl font-bold text-gradient mb-6">{price.price}</div>
                <ul className="space-y-3 mb-8">
                  {price.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <Icon name="Check" className="text-primary mr-2 mt-1" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    price.popular 
                      ? 'bg-primary hover:bg-primary/90 text-black' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  Выбрать тариф
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[rgb(13,13,13)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Частые <span className="text-gradient">вопросы</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-12 border border-primary/30">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Готовы к <span className="text-gradient">приключению</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Забронируйте квест прямо сейчас и получите скидку 15% на первое посещение
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-semibold px-10 py-6 text-lg gold-glow">
              <Icon name="Sparkles" className="mr-2" size={20} />
              Забронировать со скидкой
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">QuestPro</h3>
              <p className="text-gray-400">Премиальные квест-комнаты для незабываемых впечатлений</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Квесты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Все квесты</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Для новичков</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Для компаний</li>
                <li className="hover:text-primary cursor-pointer transition-colors">VIP квесты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Контакты</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Сертификаты</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center hover:text-primary cursor-pointer transition-colors">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center hover:text-primary cursor-pointer transition-colors">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@questpro.ru
                </li>
                <li className="flex items-center hover:text-primary cursor-pointer transition-colors">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  ул. Центральная, 1
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 QuestPro. Все права защищены
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <Icon name="Instagram" size={20} className="text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <Icon name="Facebook" size={20} className="text-primary" />
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <Icon name="Youtube" size={20} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}