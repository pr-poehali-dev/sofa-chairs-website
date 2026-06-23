import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';

const SOFA = 'https://cdn.poehali.dev/projects/c5c732d3-d689-4d2d-a7d0-6d405164e41c/files/ef24f3c4-137e-4165-8b16-5b1e261367a8.jpg';
const CHAIR = 'https://cdn.poehali.dev/projects/c5c732d3-d689-4d2d-a7d0-6d405164e41c/files/58850478-0abe-409b-932c-e73dc08de0b6.jpg';
const TABLE = 'https://cdn.poehali.dev/projects/c5c732d3-d689-4d2d-a7d0-6d405164e41c/files/c08aae80-a234-4bb8-93bf-8ac7bdb1a82c.jpg';

const nav = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
];

const categories = [
  { id: '01', name: 'Диваны', desc: 'Мягкие формы, благородный текстиль, каркас из массива.', img: SOFA, price: 'от 78 000 ₽' },
  { id: '02', name: 'Стулья', desc: 'Точёное дерево, лёгкость линий, идеальная посадка.', img: CHAIR, price: 'от 9 400 ₽' },
  { id: '03', name: 'Банкетки', desc: 'Минимализм у изголовья кровати или в прихожей.', img: SOFA, price: 'от 14 200 ₽' },
  { id: '04', name: 'Столы', desc: 'Цельный массив дуба, спокойная геометрия.', img: TABLE, price: 'от 42 000 ₽' },
];

const gallery = [
  { img: SOFA, title: 'Диван «Лён»', size: 'large' },
  { img: CHAIR, title: 'Стул «Осина»', size: 'small' },
  { img: TABLE, title: 'Стол «Поле»', size: 'small' },
  { img: CHAIR, title: 'Стул «Колос»', size: 'small' },
  { img: SOFA, title: 'Диван «Туман»', size: 'small' },
  { img: TABLE, title: 'Стол «Меридиан»', size: 'large' },
];

const Index = () => {
  const [active, setActive] = useState<{ img: string; title: string } | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <a href="#top" className="font-display text-2xl tracking-[0.3em] font-medium">ВЕРСТА</a>
          <nav className="hidden md:flex items-center gap-10">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <Button asChild className="rounded-none bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors">
            <a href="#contacts">Заказать</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative pt-20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-16">
          <div className="animate-fade-in">
            <p className="text-sm tracking-[0.35em] text-accent mb-8 uppercase">Мебельное производство</p>
            <h1 className="font-display text-6xl md:text-7xl xl:text-8xl leading-[0.95] font-medium text-balance">
              Мебель,<br />собранная<br /><span className="italic text-accent">из тишины</span>
            </h1>
            <p className="mt-8 max-w-md text-lg text-muted-foreground leading-relaxed">
              Диваны, стулья, банкетки и столы на заказ. Чистые линии,
              благородные материалы и точный размер под ваше пространство.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none h-13 px-8 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors">
                <a href="#catalog">Смотреть каталог</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none h-13 px-8 border-foreground/30 hover:bg-foreground hover:text-background transition-colors">
                <a href="#gallery">Галерея работ</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={SOFA} alt="Диван" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border border-border p-6 w-48">
              <p className="font-display text-4xl text-accent">12</p>
              <p className="text-sm text-muted-foreground mt-1">лет ручной работы в мастерской</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border py-5 overflow-hidden">
        <div className="container flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm tracking-[0.25em] uppercase text-muted-foreground">
          <span>Массив дуба</span><span className="text-accent">·</span>
          <span>Натуральный текстиль</span><span className="text-accent">·</span>
          <span>Индивидуальный размер</span><span className="text-accent">·</span>
          <span>3D-просмотр модели</span>
        </div>
      </div>

      {/* Catalog */}
      <section id="catalog" className="container py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Каталог</p>
            <h2 className="font-display text-5xl md:text-6xl font-medium">Четыре направления</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Каждое изделие создаётся в мастерской вручную — от чертежа до финишного масла.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16">
          {categories.map((c) => (
            <article key={c.id} className="group cursor-pointer" onClick={() => setActive({ img: c.img, title: c.name })}>
              <div className="relative aspect-[5/4] overflow-hidden bg-secondary">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 text-xs tracking-widest bg-background/90 px-3 py-1.5 flex items-center gap-1.5">
                  <Icon name="Box" size={13} /> 3D-просмотр
                </span>
                <span className="absolute bottom-4 right-4 font-display text-5xl text-background/80">{c.id}</span>
              </div>
              <div className="flex items-baseline justify-between mt-5">
                <h3 className="font-display text-3xl font-medium">{c.name}</h3>
                <span className="text-sm text-accent">{c.price}</span>
              </div>
              <p className="text-muted-foreground mt-2 max-w-md">{c.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-secondary py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Галерея</p>
            <h2 className="font-display text-5xl md:text-6xl font-medium">Высокого качества</h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              Нажмите на изделие, чтобы рассмотреть детали и открыть 3D-просмотр.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[280px]">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(g)}
                className={`group relative overflow-hidden bg-background ${g.size === 'large' ? 'col-span-2 row-span-2' : ''}`}
              >
                <img src={g.img} alt={g.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end p-5">
                  <span className="text-background font-display text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <Icon name="Maximize2" size={18} /> {g.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="container py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Доставка</p>
            <h2 className="font-display text-5xl md:text-6xl font-medium mb-6">Бережно до двери</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Доставляем по всей России. Каждое изделие упаковано вручную,
              крупная мебель — со сборкой на месте.
            </p>
          </div>
          <div className="divide-y divide-border border-t border-border">
            {[
              { icon: 'Truck', t: 'По городу', d: 'Бесплатно при заказе от 50 000 ₽, в течение 1–2 дней.' },
              { icon: 'Map', t: 'По России', d: 'Транспортной компанией, расчёт по весу и габаритам.' },
              { icon: 'Wrench', t: 'Сборка', d: 'Мастер соберёт и установит мебель в день доставки.' },
              { icon: 'ShieldCheck', t: 'Гарантия', d: '24 месяца на каркас и фурнитуру всех изделий.' },
            ].map((d) => (
              <div key={d.t} className="flex gap-5 py-6">
                <Icon name={d.icon} size={26} className="text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-2xl font-medium">{d.t}</h4>
                  <p className="text-muted-foreground mt-1">{d.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="bg-foreground text-background py-28">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm tracking-[0.3em] text-accent uppercase mb-4">Контакты</p>
            <h2 className="font-display text-5xl md:text-7xl font-medium leading-tight">
              Обсудим<br />ваш проект
            </h2>
            <div className="mt-12 space-y-5">
              <a href="tel:+70000000000" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                <Icon name="Phone" size={20} /> +7 000 000-00-00
              </a>
              <a href="mailto:hello@versta.ru" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                <Icon name="Mail" size={20} /> hello@versta.ru
              </a>
              <p className="flex items-center gap-4 text-xl text-background/70">
                <Icon name="MapPin" size={20} /> Москва, цех №7
              </p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Ваше имя" className="w-full bg-transparent border-b border-background/30 py-4 text-lg placeholder:text-background/40 focus:border-accent outline-none transition-colors" />
            <input placeholder="Телефон или e-mail" className="w-full bg-transparent border-b border-background/30 py-4 text-lg placeholder:text-background/40 focus:border-accent outline-none transition-colors" />
            <textarea placeholder="Что хотите заказать?" rows={3} className="w-full bg-transparent border-b border-background/30 py-4 text-lg placeholder:text-background/40 focus:border-accent outline-none transition-colors resize-none" />
            <Button type="submit" size="lg" className="rounded-none w-full h-14 bg-accent text-accent-foreground hover:bg-background hover:text-foreground transition-colors">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-foreground text-background/50 border-t border-background/10">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span className="font-display tracking-[0.3em] text-background/80">ВЕРСТА</span>
          <span>© {new Date().getFullYear()} Производство мебели на заказ</span>
        </div>
      </footer>

      {/* Lightbox */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 border-none rounded-none bg-background overflow-hidden">
          {active && (
            <div>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <div className="aspect-[4/3] bg-secondary">
                <img src={active.img} alt={active.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-between p-6">
                <h3 className="font-display text-3xl font-medium">{active.title}</h3>
                <Button variant="outline" className="rounded-none border-foreground/30 gap-2">
                  <Icon name="Rotate3d" size={18} /> 3D-просмотр
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
