<script setup>
import { inject } from 'vue';
import bernardoPhoto from '@assets/photos/bernardo.png';
import marcioPhoto from '@assets/photos/marcio-ximenes.jpeg';
import joaoPhoto from '@assets/photos/joao-andre.jpeg';

defineProps({ active: Boolean });
const t = inject('t');

const results = [
  {
    photo: bernardoPhoto,
    name: 'Bernardo Meine',
    role: 'QA Engineer — Júnior',
    quote: 'Cara, eu achava que por ser júnior ia levar meses. Nem faz um mês e já estou em 3 processos seletivos para receber em dólar.',
    stat: '3 entrevistas',
    detail: 'com budget em dólar',
    time: 'Em menos de 1 mês',
    color: 'cyan',
  },
  {
    photo: marcioPhoto,
    name: 'Marcio Ximenes',
    role: 'QA Automation — Sênior (+15 anos)',
    quote: '15 anos de QA e eu tava estagnado no mesmo salário. Refiz meu currículo, ajustei o LinkedIn e em pouco tempo já chegou proposta de quase 20 mil.',
    stat: '≈ R$ 20 mil',
    detail: 'proposta recebida',
    time: 'Em 1 semana',
    color: 'purple',
  },
  {
    photo: joaoPhoto,
    name: 'João André',
    role: 'QA Analyst — Sênior (+15 anos)',
    quote: 'Duas semanas e já tenho 2 entrevistas agendadas pra fora. Conhecimento eu já tinha, só não sabia como mostrar isso pro mercado.',
    stat: '2 entrevistas',
    detail: 'com budget em dólar',
    time: 'Em 2 semanas',
    color: 'pink',
  },
];
</script>

<template>
  <section class="proof" :class="{ active }">
    <div class="proof__glow proof__glow--cyan" />
    <div class="proof__glow proof__glow--purple" />

    <div class="proof__content">
      <span class="tag animate-in" :class="{ visible: active }">Resultados Reais</span>

      <h2 class="proof__title animate-in delay-1" :class="{ visible: active }">
        O Que Nossos Mentorados Estão Conquistando
      </h2>

      <div class="proof__divider animate-in delay-1" :class="{ visible: active }" />

      <div class="proof__cards">
        <div
          v-for="(person, i) in results"
          :key="i"
          class="proof__card animate-in"
          :class="[`delay-${i + 2}`, { visible: active }, `proof__card--${person.color}`]"
        >
          <div class="proof__header">
            <div class="proof__avatar">
              <img :src="person.photo" :alt="person.name" />
            </div>
            <div class="proof__info">
              <span class="proof__name">{{ person.name }}</span>
              <span class="proof__role">{{ person.role }}</span>
            </div>
          </div>

          <blockquote class="proof__quote">"{{ person.quote }}"</blockquote>

          <div class="proof__result">
            <span class="proof__time">{{ person.time }}</span>
            <span class="proof__number">{{ person.stat }}</span>
            <span class="proof__label">{{ person.detail }}</span>
          </div>
        </div>
      </div>

      <p class="proof__closing animate-in delay-5" :class="{ visible: active }">
        Resultados em semanas, não em anos. Acesso a oportunidades em dólar com aplicação prática.
      </p>
    </div>
  </section>
</template>

<style scoped>
.proof {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--pure-black);
  overflow: hidden;
}

.proof__glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.proof__glow--cyan {
  top: -15%;
  left: 20%;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(125, 220, 240, 0.07) 0%, transparent 70%);
}

.proof__glow--purple {
  bottom: -10%;
  right: 15%;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(98, 69, 188, 0.06) 0%, transparent 70%);
}

.proof__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 1050px;
  padding: 1.25rem 3rem;
  z-index: 1;
  text-align: center;
}

.proof__title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--pure-white);
  line-height: 1.2;
}

.proof__divider {
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, var(--cyan), var(--neon-purple));
}

.proof__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.proof__card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  background: var(--dark-surface);
  border: 1px solid var(--white-08);
  border-radius: var(--radius-md);
  position: relative;
  overflow: hidden;
  text-align: left;
}

.proof__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.proof__card--cyan::before { background: linear-gradient(90deg, var(--cyan), var(--cyan-dim)); }
.proof__card--purple::before { background: linear-gradient(90deg, var(--neon-purple), var(--neon-purple-glow)); }
.proof__card--pink::before { background: linear-gradient(90deg, var(--neon-pink), var(--neon-purple)); }

.proof__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.proof__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--white-08);
  flex-shrink: 0;
}

.proof__card--cyan .proof__avatar { border-color: rgba(125, 220, 240, 0.3); }
.proof__card--purple .proof__avatar { border-color: rgba(98, 69, 188, 0.3); }
.proof__card--pink .proof__avatar { border-color: rgba(206, 75, 229, 0.3); }

.proof__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.proof__info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.proof__name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--white-90);
}

.proof__role {
  font-size: 0.68rem;
  color: var(--white-50);
}

.proof__quote {
  font-size: 0.75rem;
  color: var(--white-70);
  line-height: 1.55;
  font-style: italic;
  flex: 1;
}

.proof__result {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--white-08);
}

.proof__time {
  font-size: 0.68rem;
  font-weight: 600;
  padding: 0.2rem 0.65rem;
  border-radius: 100px;
}

.proof__card--cyan .proof__time {
  color: var(--cyan);
  background: rgba(125, 220, 240, 0.1);
  border: 1px solid rgba(125, 220, 240, 0.2);
}

.proof__card--purple .proof__time {
  color: var(--neon-purple-glow);
  background: rgba(98, 69, 188, 0.1);
  border: 1px solid rgba(98, 69, 188, 0.2);
}

.proof__card--pink .proof__time {
  color: var(--neon-pink);
  background: rgba(206, 75, 229, 0.1);
  border: 1px solid rgba(206, 75, 229, 0.2);
}

.proof__number {
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 1;
}

.proof__card--cyan .proof__number { color: var(--cyan); }
.proof__card--purple .proof__number { color: var(--neon-purple-glow); }
.proof__card--pink .proof__number { color: var(--neon-pink); }

.proof__label {
  font-size: 0.72rem;
  color: var(--white-50);
  line-height: 1.3;
}

.proof__closing {
  font-size: 0.85rem;
  color: var(--white-50);
  max-width: 600px;
  line-height: 1.6;
  font-style: italic;
}
</style>
